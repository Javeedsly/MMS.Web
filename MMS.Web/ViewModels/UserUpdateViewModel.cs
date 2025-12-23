using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace MMS.Web.ViewModels
{
    public class UserUpdateViewModel
    {
        [Required(ErrorMessage = "Ad daxil edilməlidir")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Soyad daxil edilməlidir")]
        public string LastName { get; set; }

        public string? FatherName { get; set; }
        public string? Email { get; set; }
        public IFormFile? ProfilePhoto { get; set; }
        public string? ExistingImage { get; set; }

        public string? About { get; set; }
        public string? University { get; set; }
        public string? Degree { get; set; }
        public string? Profession { get; set; }

        // Mütləq string olmalıdır
        public string? GraduationYear { get; set; }

        public string? Languages { get; set; }
        public string? EducationInfo { get; set; }
        public string? JobInfo { get; set; }
    }
}