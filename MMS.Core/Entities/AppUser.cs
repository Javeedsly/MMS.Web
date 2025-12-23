using Microsoft.AspNetCore.Identity;

namespace MMS.Core.Entities
{
    // IdentityUser bizə hazır username, password, email sahələrini verir
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? ProfileImageUrl { get; set; } // Profil şəkli üçün

        // Tələbə haqqında əlavə məlumatlar (Education, Job və s.)
        public string? About { get; set; }
        public string? University { get; set; }
        public string? Degree { get; set; }
        public int GraduationYear { get; set; }
        public string? Profession { get; set; } // İş
    }
}