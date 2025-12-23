function loadLanguage(lang) {
  fetch(`assets/lang/${lang}.json`)
    .then(response => response.json())
    .then(translations => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
          if (el.hasAttribute('placeholder')) {
            el.setAttribute('placeholder', translations[key]);
          } else if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
            el.value = translations[key]; // Əgər input value dəyişmək istəyirsənsə
          } else {
            el.textContent = translations[key];
          }
        }
      });
    });
}

// Səhifə yüklənəndə əvvəlcədən saxlanan və ya default dili yüklə
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'az';
  loadLanguage(savedLang);
  const langSelect = document.getElementById('languageSwitcher');
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener('change', function () {
      const selectedLang = this.value;
      localStorage.setItem('preferredLang', selectedLang);
      loadLanguage(selectedLang);
    });
  }
});
