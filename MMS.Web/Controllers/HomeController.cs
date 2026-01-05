using MMS.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MMS.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly UserManager<AppUser> _userManager;

        public HomeController(ILogger<HomeController> logger, UserManager<AppUser> userManager)
        {
            _logger = logger;
            _userManager = userManager;
        }

        public IActionResult Index()
        {
            return View();
        }

        // Məzunlar Səhifəsi - Dataları Bazadan Çəkirik
        public async Task<IActionResult> Graduates()
        {
            // Bütün istifadəçiləri siyahı olaraq götürürük
            var graduates = await _userManager.Users.ToListAsync();
            return View(graduates);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        // ErrorViewModel layihədə olmadığı üçün bu hissəni kommentə alırıq
        /*
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        */
    }
}