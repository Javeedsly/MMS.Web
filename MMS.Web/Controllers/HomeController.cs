using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MMS.Core.Entities; // AppUser-in yerləşdiyi yer
using System.Linq;

namespace MMS.Web.Controllers
{
    public class HomeController : Controller
    {
        // 1. _userManager obyektini elan edin
        private readonly UserManager<AppUser> _userManager;

        // 2. Constructor vasitəsilə obyektin mənimsədilməsini (Dependency Injection) təmin edin
        public HomeController(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public IActionResult Graduates()
        {
            // Bütün istifadəçiləri bazadan çəkirik
            var users = _userManager.Users.ToList();

            // Verilənləri View-a göndəririk
            return View(users);
        }
    }
}