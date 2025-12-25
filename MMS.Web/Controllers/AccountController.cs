using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MMS.Core.Entities;
using MMS.Core.Interfaces;
using MMS.Web.ViewModels;

namespace MMS.Web.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IEmailService _emailService;

        public AccountController(UserManager<AppUser> userManager,
                                 SignInManager<AppUser> signInManager,
                                 IEmailService emailService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _emailService = emailService;
        }

        // ============================================================
        // 1. QEYDİYYAT (REGISTER)
        // ============================================================
        [HttpGet]
        public IActionResult Register()
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "Home");
            }
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            // Yeni istifadəçi yaradılır
            var user = new AppUser
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                UserName = model.Email, // Username kimi Email istifadə edirik
                Email = model.Email,
                // Digər sahələr (Universitet, Fakültə və s.) ehtiyac varsa bura əlavə olunur
                // Məsələn: University = model.University
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                // Qeydiyyat uğurludursa, dərhal giriş etdir
                await _signInManager.SignInAsync(user, isPersistent: false);
                return RedirectToAction("Index", "Home");
            }

            // Xətalar varsa (məsələn: şifrə zəifdir, email artıq var)
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError("", error.Description);
            }

            return View(model);
        }

        // ============================================================
        // 2. GİRİŞ (LOGIN)
        // ============================================================
        [HttpGet]
        public IActionResult Login()
        {
            if (User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "Home");
            }
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            // İstifadəçini emailə görə tapırıq
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                ModelState.AddModelError("", "Email və ya şifrə yanlışdır.");
                return View(model);
            }

            // Şifrəni yoxlayırıq
            var result = await _signInManager.PasswordSignInAsync(user, model.Password, model.RememberMe, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                return RedirectToAction("Index", "Home");
            }

            ModelState.AddModelError("", "Email və ya şifrə yanlışdır.");
            return View(model);
        }

        // ============================================================
        // 3. ÇIXIŞ (LOGOUT)
        // ============================================================
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Login");
        }

        // ============================================================
        // 4. ŞİFRƏNİ UNUTDUM (FORGOT PASSWORD)
        // ============================================================
        [HttpGet]
        public IActionResult ForgotPassword()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> ForgotPassword(ForgotPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(model.Email);

                // Təhlükəsizlik: İstifadəçi tapılmasa belə "Göndərildi" deyirik ki, hakerlər emailin bazada olub-olmadığını bilməsin.
                if (user == null)
                {
                    return RedirectToAction("ForgotPasswordConfirmation");
                }

                // Token yaradılır (bu token linkdə istifadə olunacaq)
                var token = await _userManager.GeneratePasswordResetTokenAsync(user);

                // Link formalaşdırılır: /Account/ResetPassword?token=...&email=...
                var link = Url.Action("ResetPassword", "Account", new { token, email = user.Email }, Request.Scheme);

                // Email göndərilir
                string subject = "Şifrə Yeniləmə Tələbi - MMS";
                string body = $@"
                    <div style='font-family:Arial, sans-serif; padding:20px; border:1px solid #e0e0e0; border-radius:10px;'>
                        <h2 style='color:#667eea;'>Salam, {user.FirstName}!</h2>
                        <p>Hesabınızın şifrəsini yeniləmək üçün aşağıdakı düyməyə klikləyin:</p>
                        <a href='{link}' style='background-color:#667eea; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; display:inline-block;'>Şifrəni Yenilə</a>
                        <p style='color:#999; margin-top:20px; font-size:12px;'>Əgər bu sorğunu siz göndərməmisinizsə, bu mesajı sadəcə silin.</p>
                    </div>";

                await _emailService.SendEmailAsync(user.Email, subject, body);

                return RedirectToAction("ForgotPasswordConfirmation");
            }
            return View(model);
        }

        [HttpGet]
        public IActionResult ForgotPasswordConfirmation()
        {
            return View();
        }

        // ============================================================
        // 5. ŞİFRƏNİ YENİLƏ (RESET PASSWORD - Linkə klikləyəndə)
        // ============================================================
        [HttpGet]
        public IActionResult ResetPassword(string token, string email)
        {
            // Linkdən gələn token və ya email boşdursa, səhv var
            if (token == null || email == null)
            {
                ModelState.AddModelError("", "Keçərsiz şifrə yeniləmə linki.");
                return RedirectToAction("Login");
            }

            // View-a məlumatları ötürürük ki, istifadəçi sadəcə yeni şifrəni yazsın
            var model = new ResetPasswordViewModel { Token = token, Email = email };
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> ResetPassword(ResetPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(model.Email);
                if (user == null)
                {
                    // User yoxdursa, yenə də uğurlu səhifəyə yönləndir (Təhlükəsizlik)
                    return RedirectToAction("ResetPasswordConfirmation");
                }

                // Şifrə dəyişmə əməliyyatı
                var result = await _userManager.ResetPasswordAsync(user, model.Token, model.Password);

                if (result.Succeeded)
                {
                    return RedirectToAction("ResetPasswordConfirmation");
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }
            }
            return View(model);
        }

        [HttpGet]
        public IActionResult ResetPasswordConfirmation()
        {
            return View();
        }

        // ============================================================
        // 6. PROFİL (Əgər istifadə olunursa)
        // ============================================================
        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Profile()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return RedirectToAction("Login");

            var model = new ProfileViewModel
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                // About = user.About, // Əgər AppUser-da bu sahələr varsa açın
                // ProfileImageUrl = user.ProfileImageUrl
            };

            return View(model);
        }
    }
}