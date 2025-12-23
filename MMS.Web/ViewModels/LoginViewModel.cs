using System.ComponentModel.DataAnnotations;

namespace MMS.Web.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Email daxil edilməlidir")]
        [EmailAddress]
        public string Email { get; set; }

        [Required(ErrorMessage = "Şifrə daxil edilməlidir")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Məni xatırla")]
        public bool RememberMe { get; set; }
    }
}