function addLanguageField() {
  const languageFieldsContainer = document.getElementById('languageFieldsContainer');
  
  const newLanguageField = document.createElement('div');
  newLanguageField.classList.add('columns-3');
  
newLanguageField.innerHTML = `
    <div class="input-box">
      <label data-i18n="labelLanguageName" for="languageName">Dil</label>
      <select name="languageName" required>
        <option value="" disabled selected data-i18n="optionSelect">Seçin</option>
        <option value="azerbaijan" data-i18n="languageOptions.azerbaijan">Azərbaycan dili</option>
        <option value="english" data-i18n="languageOptions.english">İngilis dili</option>
        <option value="russian" data-i18n="languageOptions.russian">Rus dili</option>
        <option value="german" data-i18n="languageOptions.german">Alman dili</option>
        <option value="french" data-i18n="languageOptions.french">Fransız dili</option>
        <option value="spanish" data-i18n="languageOptions.spanish">İspan dili</option>
        <option value="turkish" data-i18n="languageOptions.turkish">Türk dili</option>
        <option value="arabic" data-i18n="languageOptions.arabic">Ərəb dili</option>
        <option value="chinese" data-i18n="languageOptions.chinese">Çin dili</option>
        <option value="italian" data-i18n="languageOptions.italian">İtalyan dili</option>
        <option value="korean" data-i18n="languageOptions.korean">Koreya dili</option>
      </select>
    </div>
    <div class="input-box">
      <label data-i18n="labelLanguageLevel" for="languageLevel">Səviyyə</label>
      <select name="languageLevel" required>
        <option value="high" data-i18n="languageLevelOptions.high">Yüksək</option>
        <option value="medium" data-i18n="languageLevelOptions.medium">Orta</option>
        <option value="low" data-i18n="languageLevelOptions.low">Zəif</option>
      </select>
    </div>
  `;
  
  languageFieldsContainer.appendChild(newLanguageField);
}
