using MMS.Core.Interfaces;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using System.Threading.Tasks;
using System;

namespace MMS.Service.Services
{
    public class LocalFileEmailService : IEmailService
    {
        private readonly IWebHostEnvironment _env;

        public LocalFileEmailService(IWebHostEnvironment env)
        {
            _env = env;
        }

        public async Task SendEmailAsync(string toEmail, string subject, string message)
        {
            // 1. Emaillərin düşəcəyi qovluq (MMS.Web/wwwroot/sent_emails)
            var folderPath = Path.Combine(_env.WebRootPath, "sent_emails");

            // Qovluq yoxdursa yarat
            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            // 2. Fayl adı (tarix və email ilə)
            var fileName = $"Email_{DateTime.Now:yyyy-MM-dd_HH-mm-ss}_{toEmail}.html";
            var filePath = Path.Combine(folderPath, fileName);

            // 3. Email məzmununu formalaşdırıb fayla yazırıq
            var emailContent = $@"
                <html>
                <head>
                    <style>
                        body {{ font-family: Arial; padding: 20px; border: 1px solid #ddd; }}
                        .header {{ background: #f4f4f4; padding: 10px; margin-bottom: 20px; }}
                    </style>
                </head>
                <body>
                    <div class='header'>
                        <h2>LOCAL EMAIL TEST</h2>
                        <p><strong>Kimə:</strong> {toEmail}</p>
                        <p><strong>Mövzu:</strong> {subject}</p>
                        <p><strong>Tarix:</strong> {DateTime.Now}</p>
                    </div>
                    <div class='content'>
                        {message}
                    </div>
                </body>
                </html>";

            await File.WriteAllTextAsync(filePath, emailContent);
        }
    }
}