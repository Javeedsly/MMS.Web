using System.ComponentModel.DataAnnotations;

namespace MMS.Web.ViewModels
{
    public class ForgotPasswordViewModel
    {
        [Required(ErrorMessage = "Zəhmət olmasa emailinizi yazın.")]
        [EmailAddress(ErrorMessage = "Düzgün email formatı deyil.")]
        public string Email { get; set; }
    }
}