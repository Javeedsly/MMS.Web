using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using MMS.Core.Entities;
using MMS.Data.Context;
using System;

var builder = WebApplication.CreateBuilder(args);

// 1. SQL Bağlantısı
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// 2. Identity (Giriş/Çıxış sistemi)
builder.Services.AddIdentity<AppUser, IdentityRole>()
    .AddEntityFrameworkStores<AppDbContext>()
    .AddDefaultTokenProviders();

builder.Services.AddControllersWithViews();

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