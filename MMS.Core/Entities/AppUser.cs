using Microsoft.AspNetCore.Identity;

namespace MMS.Core.Entities
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? FatherName { get; set; }
        public string? ProfileImageUrl { get; set; }

        // String etdik ki, həm "2024", həm də "2020-2024" yazıla bilsin
        public string? GraduationYear { get; set; }

        public string? University { get; set; }
        public string? Degree { get; set; }
        public string? Profession { get; set; }
        public string? About { get; set; }
        public string? Languages { get; set; }
        public string? EducationInfo { get; set; }
        public string? JobInfo { get; set; }
    }
}