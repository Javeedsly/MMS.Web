using System.ComponentModel.DataAnnotations;

namespace MMS.Web.ViewModels
{
    public class ResetPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required(ErrorMessage = "Yeni şifrə daxil edilməlidir.")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Şifrələr eyni deyil.")]
        public string ConfirmPassword { get; set; }

        public string Token { get; set; }
    }
}