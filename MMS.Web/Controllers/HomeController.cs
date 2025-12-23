using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MMS.Core.Entities;
using System.Linq;

namespace MMS.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly UserManager<AppUser> _userManager;

        public HomeController(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        // --- BU HİSSƏ ÇATIŞMIRDI (SƏHVİN SƏBƏBİ) ---
        public IActionResult Index()
        {
            return View();
        }
        // -------------------------------------------

        public IActionResult Graduates()
        {
            var users = _userManager.Users.ToList();
            return View(users);
        }
    }
}