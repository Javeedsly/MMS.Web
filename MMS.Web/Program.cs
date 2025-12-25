using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MMS.Core.Entities;
using MMS.Core.Interfaces;
using MMS.Data.Context;
using MMS.Service.Services;
using System;

var builder = WebApplication.CreateBuilder(args);

// 1. SQL Bağlantısı
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// 2. Identity (Giriş/Çıxış sistemi)
builder.Services.AddIdentity<AppUser, IdentityRole>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders();
builder.Services.AddScoped<IEmailService, LocalFileEmailService>();
builder.Services.AddControllersWithViews();
// Local fayl servisini qoşuruq
var app = builder.Build();

// ... (digər middleware-lər: HttpsRedirection, StaticFiles və s.)
app.UseStaticFiles(); // wwwroot papkası üçün vacibdir!

app.UseRouting();

app.UseAuthentication(); // Giriş yoxlanışı
app.UseAuthorization();  // Səlahiyyət yoxlanışı

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();