using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace MMS.Web.ViewModels
{
    public class ProfileViewModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public string? About { get; set; }
        public string? University { get; set; }
        public string? Degree { get; set; }
        public int GraduationYear { get; set; }
        public string? Profession { get; set; }

        public string? CurrentImage { get; set; } // Mövcud şəkil
        public IFormFile? Photo { get; set; }     // Yeni yüklənən şəkil
    }
}