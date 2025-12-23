let educationCount = 1;
let currentLang = 'az'; // Lazım olsa dil dəstəyi üçün

function getSuffix(number) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return '-ci';
  }

  switch (lastDigit) {
    case 1: return '-ci';
    case 2: return '-ci';
    case 3: return '-cü';
    case 4: return '-cü';
    case 5: return '-ci';
    case 6: return '-cı';
    case 7: return '-ci';
    case 8: return '-ci';
    case 9: return '-cu';
    case 0: return '-cu';
    default: return '-ci'; // ehtiyat üçün default
  }
}


function populateYearDropdown(selectId, startYear = 2000, endYear = 2025) {
  const select = document.getElementById(selectId);
  if (!select) return;

  // İlləri əlavə edirik
  for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    select.appendChild(option);
  }
}

function createEducationSection(count) {
  return `
    <div class="education-title">${count}${getSuffix(count)} Təhsil</div>
    <div class="columns-3">
      <div class="input-box">
        <label for="university_${count}">Təhsil müəssisəsi</label>
        <select name="university_${count}" id="university_${count}" required>
          <option disabled selected>Seçin</option>
          <option value="aztu">Azərbaycan Texniki Universiteti</option>
          <option value="bdu">Bakı Dövlət Universiteti</option>
          <option value="adu">Azərbaycan Dövlət Universiteti</option>
          <option value="qafqaz">Qafqaz Universiteti</option>
          <option value="ada">ADA Universiteti</option>
          <option value="bdum">Bakı Mühəndislik Universiteti</option>
          <option value="gdu">Gəncə Dövlət Universiteti</option>
          <option value="sdu">Sumqayıt Dövlət Universiteti</option>
          <option value="ktu">Xəzər Universiteti</option>
          <option value="kdu">Azərbaycan Kooperasiya Universiteti</option>
          <option value="imt">İqtisad Universiteti</option>
          <option value="mdu">Mingəçevir Dövlət Universiteti</option>
          <option value="asu">Azərbaycan Dövlət Neft və Sənaye Universiteti</option>
          <option value="bmu">Bakı Mühəndislik Universiteti</option>
          <option value="adu">Azərbaycan Dillər Universiteti</option>
          <option value="lpu">Lənkəran Dövlət Universiteti</option>
          <option value="ndu">Naxçıvan Dövlət Universiteti</option>
          <option value="qdu">Quba Dövlət Universiteti</option>
          <option value="sdu">Şəki Dövlət Universiteti</option>
          <option value="adu">Azərbaycan Dövlət Pedaqoji Universiteti</option>
        </select>
      </div>
      <div class="input-box">
        <span>Fakültə</span>
        <select name="faculty_${count}" required>
          <option value="" disabled selected>Seçin</option>
          <option value="informasika">İnformasiya texnologiyaları və mühəndislik fakültəsi</option>
          <option value="iqtisadiyyat">İqtisadiyyat və idarəetmə fakültəsi</option>
        </select>
      </div>
      <div class="input-box">
        <span>İxtisas</span>
        <select name="major_${count}" required>
          <option value="" disabled selected>Seçin</option>
          <option value="komp-muh">Kompüter mühəndisliyi</option>
          <option value="informas-texn">İnformasiya texnologiyaları</option>
          <option value="informas-tehluk">İnformasiya təhlükəsizliyi</option>
          <option value="biznesin-idare">Biznesin idarə edilməsi</option>
          <option value="iqtisadiyyat">İqtisadiyyat</option>
          <option value="maliyyə">Maliyyə</option>
          <option value="huquq">Hüquq</option>
          <option value="tibb">Tibb</option>
          <option value="muhendis-elektrik">Elektrik mühəndisliyi</option>
          <option value="muhendis-mex">Mexanika mühəndisliyi</option>
          <option value="neft-qaz-muh">Neft-qaz mühəndisliyi</option>
          <option value="arxitektura">Memarlıq</option>
          <option value="psixologiya">Psixologiya</option>
        </select>
      </div>
    </div>

    <div class="columns-3">
      <div class="input-box">
        <label for="entryYear_${count}">Qəbul olduğu il</label>
        <select name="entryYear_${count}" id="entryYear_${count}" required></select>
      </div>
      <div class="input-box">
        <label for="graduationYear_${count}">Bitirdiyi il</label>
        <select name="graduationYear_${count}" id="graduationYear_${count}" required></select>
      </div>
      <div class="input-box">
        <span>Status</span>
        <select name="status_${count}" required>
          <option value="" disabled selected>Seçin</option>
          <option value="aktiv">Təhsil alır</option>
          <option value="bitirib">Bitirib</option>
        </select>
      </div>
    </div>

    <div class="columns-3">
      <div class="input-box">
        <span>Təhsil əsasları</span>
        <select name="educationType_${count}" required>
          <option value="" disabled selected>Seçin</option>
          <option value="dovlet">Dövlət sifarişli</option>
          <option value="odenisli">Ödənişli əsaslarla</option>
        </select>
      </div>
      <div class="input-box">
        <span>Təhsil səviyyəsi</span>
        <select name="educationLevel_${count}" required>
          <option value="" disabled selected>Seçin</option>
          <option value="bakalavr">Bakalavr</option>
          <option value="magistr">Magistr</option>
          <option value="doktorantura">Doktorantura</option>
        </select>
      </div>
      <div class="input-box">
        <span>Təhsilalma forması</span>
        <select name="educationForm_${count}" required>
          <option value="" disabled selected>Seçin</option>
          <option value="eyani">Əyani</option>
          <option value="qiyabi">Qiyabi</option>
        </select>
      </div>
    </div>

    <div class="columns-3">
      <div class="input-box">
        <span>Tələbə ID-si</span>
        <input type="text" name="studentID_${count}" placeholder="Məsələn: 202106458" required />
      </div>
      <div class="input-box">
        <span>GPA - Orta bal</span>
        <select name="gpa_${count}" required>
          <option value="" disabled selected>Seçin</option>
          <option value="A">A 91-100</option>
          <option value="B">B 81-90</option>
          <option value="C">C 71-80</option>
          <option value="D">D 61-70</option>
          <option value="E">E 51-60</option>
          <option value="F">F 0-50</option>
        </select>
      </div>
      <div class="input-box">
        <span>Attestat İD -si</span>
        <input type="text" name="certificateID_${count}" placeholder="Məsələn: AB123456" required />
      </div>
    </div>
  `;
}

document.getElementById('addEducationBtn').addEventListener('click', function () {
  educationCount++;
  const container = document.getElementById('educationFields');

  const newSection = document.createElement('div');
  newSection.classList.add('education-section');
  newSection.innerHTML = createEducationSection(educationCount);

  container.appendChild(newSection);

  populateYearDropdown(`entryYear_${educationCount}`);
  populateYearDropdown(`graduationYear_${educationCount}`);
});

// Səhifə yüklənəndə ilkin bölmə varsa illər dropdownlarını doldurmaq üçün
document.addEventListener('DOMContentLoaded', () => {
  // Əgər ilkin 1 bölmə varsa:
  populateYearDropdown(`entryYear_1`);
  populateYearDropdown(`graduationYear_1`);
});
