using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MMS.Core.Entities;

namespace MMS.Data.Context
{
    public class AppDbContext : IdentityDbContext<AppUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // Əgər əlavə cədvəllər olarsa, bura DbSet kimi əlavə olunacaq
    }
}