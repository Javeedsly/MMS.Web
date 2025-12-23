using System.ComponentModel.DataAnnotations;

namespace MMS.Web.ViewModels
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage = "Ad daxil edilməlidir")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Soyad daxil edilməlidir")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Email daxil edilməlidir")]
        [EmailAddress]
        public string Email { get; set; }

        [Required(ErrorMessage = "Şifrə daxil edilməlidir")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Şifrələr uyğun gəlmir")]
        public string ConfirmPassword { get; set; }

        // Əvvəl int idisə, indi string olmalıdır
        public string? GraduationYear { get; set; }
        public string? University { get; set; }
        public string? Faculty { get; set; }
        public string? Specialty { get; set; }
    }
}