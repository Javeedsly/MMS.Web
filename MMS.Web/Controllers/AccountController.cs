using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MMS.Core.Entities;
using MMS.Web.ViewModels;

namespace MMS.Web.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;

        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        // --- QEYDİYYAT (REGISTER) ---
        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = new AppUser
                {
                    UserName = model.Email,
                    Email = model.Email,
                    FirstName = model.FirstName,
                    LastName = model.LastName,

                    // Yeni sahələr (Hamısı string olduğu üçün xəta verməyəcək)
                    GraduationYear = model.GraduationYear,
                    University = model.University,

                    // Digər sahələr default boş ola bilər, onları Profil səhifəsində dolduracaq
                };

                var result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, isPersistent: false);
                    return RedirectToAction("Index", "User"); // Qeydiyyatdan sonra birbaşa profilə gedir
                }

                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError("", error.Description);
                }
            }
            return View(model);
        }

        // --- GİRİŞ (LOGIN) ---
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Email ilə istifadəçini tapırıq
                var user = await _userManager.FindByEmailAsync(model.Email);
                if (user != null)
                {
                    // Şifrəni yoxlayırıq (UserName əvəzinə Email istifadə edirik)
                    var result = await _signInManager.PasswordSignInAsync(user, model.Password, model.RememberMe, false);

                    if (result.Succeeded)
                    {
                        return RedirectToAction("Index", "User");
                    }
                }

                ModelState.AddModelError("", "Email və ya şifrə yanlışdır.");
            }
            return View(model);
        }

        // --- ÇIXIŞ (LOGOUT) ---
        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }

        // --- PROFİL (ReadOnly - Başqasının baxması üçün) ---
        // Bu metod əgər siz "Account/Profile" linkinə klikləsəniz işləyəcək
        public async Task<IActionResult> Profile()
        {
            // Əgər istifadəçi öz profilinə baxırsa, onu User/Index-ə yönəldirik
            if (_signInManager.IsSignedIn(User))
            {
                return RedirectToAction("Index", "User");
            }
            return RedirectToAction("Login");
        }
    }
}