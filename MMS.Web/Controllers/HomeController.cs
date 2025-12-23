using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MMS.Core.Entities;

public class HomeController : Controller
{
    private readonly UserManager<AppUser> _userManager;

    public HomeController(UserManager<AppUser> userManager)
    {
        _userManager = userManager;
    }

    // --- BU METOD MÜTLƏQ OLMALIDIR ---
    public IActionResult Index()
    {
        return View();
    }
    // ---------------------------------

    public IActionResult Graduates()
    {
        var users = _userManager.Users.ToList();
        return View(users);
    }
}