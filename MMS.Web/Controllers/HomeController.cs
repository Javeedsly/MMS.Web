using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

public IActionResult Graduates()
{
    // Bütün istifadəçiləri bazadan çəkib View-a göndəririk
    var users = _userManager.Users.ToList();
    return View(users);
}