document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Qeydiyyat uğurla tamamlandı!');
});

let jobCount = 1;

function addJobField() {
  jobCount++;
  const container = document.getElementById('jobFieldsContainer');

  const jobDiv = document.createElement('div');
  jobDiv.classList.add('job-row');
  jobDiv.innerHTML = `
    <div class="input-box">
      <label>İş yeri ${jobCount}</label>
      <input type="text" name="job_place_${jobCount}" placeholder="İş yerinin adı" required />
    </div>
    <div class="input-box">
      <label for="jobStartYear_${jobCount}">Başlama ili</label>
      <select name="job_start_${jobCount}" id="jobStartYear_${jobCount}" required>
        <option value="" disabled selected></option>
      </select>
    </div>
    <div class="input-box">
      <label>Vəzifə</label>
      <input type="text" name="job_position_${jobCount}" placeholder="Vəzifəsi" required />
    </div>
  `;

  container.appendChild(jobDiv);

  // Başlama ili dropdown-unun illərlə doldurulması
  populateJobStartYearDropdown(`jobStartYear_${jobCount}`);
}

function populateJobStartYearDropdown(selectId, startYear = 2000, endYear = 2099) {
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