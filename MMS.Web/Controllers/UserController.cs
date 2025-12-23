using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MMS.Core.Entities;
using MMS.Web.ViewModels;
using System.IO;

namespace MMS.Web.Controllers
{
    [Authorize] // Yalnız giriş etmiş istifadəçilər
    public class UserController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IWebHostEnvironment _env;

        public UserController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IWebHostEnvironment env)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _env = env;
        }

        // 1. Profil Səhifəsini Göstər (GET)
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return RedirectToAction("Login", "Account");

            // User məlumatlarını ViewModel-ə doldururuq
            var model = new UserUpdateViewModel
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                FatherName = user.FatherName,
                Email = user.Email,
                ExistingImage = user.ProfileImageUrl,

                // Bütün yeni sahələr (Tiplər uyğunlaşdırılıb)
                Languages = user.Languages,
                About = user.About,
                University = user.University,
                Degree = user.Degree,
                Profession = user.Profession,
                GraduationYear = user.GraduationYear,

                EducationInfo = user.EducationInfo,
                JobInfo = user.JobInfo
            };

            return View(model);
        }

        // 2. Məlumatları Yenilə (POST)
        [HttpPost]
        public async Task<IActionResult> Update(UserUpdateViewModel model)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return RedirectToAction("Login", "Account");

            if (!ModelState.IsValid)
            {
                // Xəta olarsa şəkli itirməmək üçün
                model.ExistingImage = user.ProfileImageUrl;
                return View("Index", model);
            }

            // --- Şəkil Yükləmə Prosesi ---
            if (model.ProfilePhoto != null)
            {
                // Unikal fayl adı yaradırıq
                string uniqueFileName = Guid.NewGuid().ToString() + "_" + model.ProfilePhoto.FileName;
                string uploadsFolder = Path.Combine(_env.WebRootPath, "uploads");

                // Qovluq yoxdursa yaradırıq
                if (!Directory.Exists(uploadsFolder)) Directory.CreateDirectory(uploadsFolder);

                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                // Faylı yazırıq
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await model.ProfilePhoto.CopyToAsync(fileStream);
                }

                // Köhnə şəkli silirik (əgər varsa)
                if (!string.IsNullOrEmpty(user.ProfileImageUrl))
                {
                    string oldPath = Path.Combine(uploadsFolder, user.ProfileImageUrl);
                    if (System.IO.File.Exists(oldPath)) System.IO.File.Delete(oldPath);
                }

                // Bazaya yeni adı yazırıq
                user.ProfileImageUrl = uniqueFileName;
            }

            // --- Digər Məlumatların Yenilənməsi ---
            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            user.FatherName = model.FatherName;

            // Yeni sahələr
            user.Languages = model.Languages;
            user.About = model.About;
            user.University = model.University;
            user.Degree = model.Degree;
            user.Profession = model.Profession;
            user.GraduationYear = model.GraduationYear; // String -> String (Xətasız)

            user.EducationInfo = model.EducationInfo;
            user.JobInfo = model.JobInfo;

            // Bazada yadda saxlayırıq
            var result = await _userManager.UpdateAsync(user);

            if (result.Succeeded)
            {
                TempData["Message"] = "Məlumatlarınız uğurla yeniləndi!";
                return RedirectToAction("Index");
            }

            foreach (var error in result.Errors)
            {
                ModelState.AddModelError("", error.Description);
            }

            return View("Index", model);
        }

        // 3. Hesabı Sil (POST)
        [HttpPost]
        public async Task<IActionResult> Delete()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user != null)
            {
                // Əgər şəkli varsa, qovluqdan da silirik
                if (!string.IsNullOrEmpty(user.ProfileImageUrl))
                {
                    string path = Path.Combine(_env.WebRootPath, "uploads", user.ProfileImageUrl);
                    if (System.IO.File.Exists(path)) System.IO.File.Delete(path);
                }

                // İstifadəçini silirik
                await _userManager.DeleteAsync(user);

                // Sistemdən çıxarırıq
                await _signInManager.SignOutAsync();
            }
            return RedirectToAction("Index", "Home");
        }
    }
}