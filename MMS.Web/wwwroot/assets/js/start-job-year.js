// JavaScript kodu ilə Dropdown-u doldurmaq
  function populateStartYearDropdown(selectId, startYear = 2000, endYear = 2099) {
    const select = document.getElementById(selectId);
    if (!select) return;

    select.innerHTML = '<option value="" disabled selected>İl seçin</option>';
    for (let year = startYear; year <= endYear; year++) {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      select.appendChild(option);
    }
  }

  // Səhifə yükləndikdən sonra illəri dropdown-da göstərmək
  window.addEventListener('DOMContentLoaded', () => {
    populateStartYearDropdown('jobStartYear');
  });

  // Yeni iş yeri sahəsi əlavə etmə funksiyası
  function addJobField() {
    const container = document.getElementById('jobFieldsContainer');

    const newJobField = document.createElement('div');
    newJobField.classList.add('input-box');

    newJobField.innerHTML = `
      <label for="jobName">İş yeri</label>
      <input type="text" name="jobName" placeholder="İş yerinin adı" required />
    `;

    container.appendChild(newJobField);
  }