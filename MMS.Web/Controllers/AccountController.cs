using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MMS.Core.Entities; // AppUser burdadır
using MMS.Web.ViewModels;

namespace MMS.Web.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IWebHostEnvironment _env; // Şəkil yükləmək üçün lazımdır

        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IWebHostEnvironment env)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _env = env;
        }

        // QEYDİYYAT
        [HttpGet]
        public IActionResult Register() => View();

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (!ModelState.IsValid) return View(model);

            var user = new AppUser
            {
                UserName = model.Email,
                Email = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, isPersistent: false);
                return RedirectToAction("Profile");
            }

            foreach (var error in result.Errors)
                ModelState.AddModelError("", error.Description);

            return View(model);
        }

        // GİRİŞ (LOGIN)
        [HttpGet]
        public IActionResult Login() => View();

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (!ModelState.IsValid) return View(model);

            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);

            if (result.Succeeded)
                return RedirectToAction("Index", "Home");

            ModelState.AddModelError("", "Email və ya şifrə yanlışdır.");
            return View(model);
        }

        // ÇIXIŞ (LOGOUT)
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }

        // PROFİL GÖSTƏR
        public async Task<IActionResult> Profile()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return RedirectToAction("Login");

            var model = new ProfileViewModel
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                About = user.About,
                University = user.University,
                Degree = user.Degree,
                GraduationYear = user.GraduationYear,
                Profession = user.Profession,
                CurrentImage = user.ProfileImageUrl
            };
            return View(model);
        }

        // PROFİL YENİLƏ (ŞƏKİL İLƏ)
        [HttpPost]
        public async Task<IActionResult> Profile(ProfileViewModel model)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return RedirectToAction("Login");

            // Məlumatları yeniləyirik
            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            user.About = model.About;
            user.University = model.University;
            user.Degree = model.Degree;
            user.GraduationYear = model.GraduationYear;
            user.Profession = model.Profession;

            // Şəkil yükləmə məntiqi
            if (model.Photo != null)
            {
                string uploadsFolder = Path.Combine(_env.WebRootPath, "uploads");
                // Qovluq yoxdursa yarat
                if (!Directory.Exists(uploadsFolder)) Directory.CreateDirectory(uploadsFolder);

                string uniqueFileName = Guid.NewGuid().ToString() + "_" + model.Photo.FileName;
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await model.Photo.CopyToAsync(fileStream);
                }

                user.ProfileImageUrl = uniqueFileName;
            }

            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded) ModelState.AddModelError("", "Yenilənmə zamanı xəta baş verdi.");

            // Modeli yeniləyirik ki, view-da düzgün görünsün
            model.CurrentImage = user.ProfileImageUrl;

            return View(model); // Eyni səhifədə qalırıq ki, dəyişikliyi görsün
        }
    }
}