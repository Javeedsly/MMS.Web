using System.ComponentModel.DataAnnotations;

namespace MMS.Web.ViewModels
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage = "Ad vacibdir")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Soyad vacibdir")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Email vacibdir")]
        [EmailAddress]
        public string Email { get; set; }

        [Required(ErrorMessage = "Şifrə vacibdir")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Compare("Password", ErrorMessage = "Şifrələr uyğun gəlmir")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }
    }
}