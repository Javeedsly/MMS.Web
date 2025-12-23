function handleCredentialResponse(response) {
    console.log("Google JWT Token:", response.credential);

    // Burada serverə token göndərmək lazımdır
    alert("Google ilə uğurla daxil oldunuz!");
}

// Google Sign-In düyməsini JS vasitəsilə də yükləmək olar (əlavə metod)
// Amma artıq HTML-də data atributları ilə düymə göstərilir

function handleCredentialResponse(response) {
    console.log("Google JWT Token:", response.credential);
    // Backend-ə göndər və login prosesi apar
    alert("Google ilə uğurla daxil oldunuz!");
}

const studentInfo = {
  name: "Səfərova Mehriban",
  phone: "+994 55 123 45 67",
  email: "mehriban.s@example.com"
};

// Səhifə yükləndikdə məlumatları uyğun hissələrə yerləşdir
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("student-name").textContent = studentInfo.name;
  document.getElementById("student-phone").textContent = studentInfo.phone;
  document.getElementById("student-email").textContent = studentInfo.email;
});