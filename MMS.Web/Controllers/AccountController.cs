using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

public class AccountController : Controller
{
    private readonly UserManager<AppUser> _userManager;
    private readonly SignInManager<AppUser> _signInManager;

    public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }

    // Register (Qeydiyyat) - GET
    public IActionResult Register()
    {
        return View();
    }

    // Register (Qeydiyyat) - POST
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
                LastName = model.LastName
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, isPersistent: false);
                // Qeydiyyatdan dərhal sonra profil redaktə səhifəsinə yönləndiririk
                return RedirectToAction("Profile");
            }
        }
        return View(model);
    }

    // Login - POST
    [HttpPost]
    public async Task<IActionResult> Login(LoginViewModel model)
    {
        // Login kodları...
    }

    // Profil Səhifəsi (Məlumatları göstər və redaktə et)
    public async Task<IActionResult> Profile()
    {
        var user = await _userManager.GetUserAsync(User);
        if (user == null) return RedirectToAction("Login");

        // Modeli doldurub View-a göndəririk (sizin user.html burda istifadə olunacaq)
        return View(user);
    }

    [HttpPost]
    public async Task<IActionResult> UpdateProfile(AppUser model, IFormFile photo)
    {
        var user = await _userManager.GetUserAsync(User);

        // Məlumatları yenilə (University, Degree, etc.)
        user.University = model.University;
        user.Degree = model.Degree;
        user.About = model.About;

        // Şəkil yükləmə məntiqi
        if (photo != null)
        {
            // Şəkli wwwroot/uploads qovluğuna yadda saxla və adını user.ProfileImageUrl-ə yaz
        }

        await _userManager.UpdateAsync(user);
        return RedirectToAction("Profile");
    }
}