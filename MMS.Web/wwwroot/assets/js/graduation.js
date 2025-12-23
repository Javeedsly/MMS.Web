const graduates = [
  {
    məzun: "Səfərova Mehriban",
    ata_adı: "Qazi",
    dogum_tarix: "16 yanvar 2004",
    uni: "Azərbaycan Texniki Universiteti",
    fakultə: "Sabah qrupları",
    ixtisas: "Informasiya texnologiyaları",
    Qəbul_ili: "2021",
    Bitirme_ili: "2025",
    status: "Bitirib",
    tehsil_esasları: "Dövlət sifarişli",
    teshil_seviyyesi: "Bakalavr",
    tesil_alma_formasi: "Əyani",
    GPA: "85",
    attestat_id: "AB12345",
    is_yeri_1: "AzTU",
    vezifesi: "Front End developer",
    email: "mehriban.seferova@gmail.com",
    unvan: "Bakı, Mərdəkan",
    telefon: "+994771453888",
    linkedin: "mehribanseferova",
    github: "mehribanseferova",
  },
  {
    məzun: "Əliyev Rəşad",
    ata_adı: "Həsən",
    dogum_tarix: "05 fevral 2003",
    uni: "Bakı Dövlət Universiteti",
    fakultə: "İqtisadiyyat fakültəsi",
    ixtisas: "Maliyyə",
    Qəbul_ili: "2020",
    Bitirme_ili: "2024",
    status: "Bitirib",
    tehsil_esasları: "Öz hesabına",
    teshil_seviyyesi: "Bakalavr",
    tesil_alma_formasi: "Əyani",
    GPA: "88",
    attestat_id: "CD67890",
    is_yeri_1: "PAŞA Bank",
    vezifesi: "Maliyyə Analitiki",
    email: "rashad.aliyev@gmail.com",
    unvan: "Bakı, Nərimanov",
    telefon: "+994555123456",
    linkedin: "rashadaliyev",
    github: "rashadaliyev",
  },
  {
    məzun: "Məmmədova Aysel",
    ata_adı: "Rauf",
    dogum_tarix: "12 mart 2002",
    uni: "ADA Universiteti",
    fakultə: "Kompüter elmləri",
    ixtisas: "Süni intellekt",
    Qəbul_ili: "2019",
    Bitirme_ili: "2023",
    status: "Bitirib",
    tehsil_esasları: "Dövlət sifarişli",
    teshil_seviyyesi: "Bakalavr",
    tesil_alma_formasi: "Kəsərli",
    GPA: "92",
    attestat_id: "EF24680",
    is_yeri_1: "Google",
    vezifesi: "Data Scientist",
    email: "aysel.mammadova@gmail.com",
    unvan: "Bakı, Yasamal",
    telefon: "+994707654321",
    linkedin: "ayselmammadova",
    github: "ayselmammadova",
  },
  {
    məzun: "Hüseynov Elşən",
    ata_adı: "Murad",
    dogum_tarix: "30 noyabr 2001",
    uni: "Azərbaycan Dövlət Neft və Sənaye Universiteti",
    fakultə: "Mühəndislik fakültəsi",
    ixtisas: "Kimya mühəndisliyi",
    Qəbul_ili: "2018",
    Bitirme_ili: "2022",
    status: "Bitirib",
    tehsil_esasları: "Öz hesabına",
    teshil_seviyyesi: "Bakalavr",
    tesil_alma_formasi: "Əyani",
    GPA: "80",
    attestat_id: "GH13579",
    is_yeri_1: "SOCAR",
    vezifesi: "Mühəndis",
    email: "elshen.huseynov@gmail.com",
    unvan: "Bakı, Xətai",
    telefon: "+994501112233",
    linkedin: "elshenhuseynov",
    github: "elshenhuseynov",
  },
  {
    məzun: "Rzayeva Günay",
    ata_adı: "İsa",
    dogum_tarix: "19 iyun 2003",
    uni: "Azərbaycan Dövlət İqtisad Universiteti",
    fakultə: "İqtisadiyyat fakültəsi",
    ixtisas: "Beynəlxalq iqtisadiyyat",
    Qəbul_ili: "2021",
    Bitirme_ili: "2025",
    status: "Təhsil alır",
    tehsil_esasları: "Dövlət sifarişli",
    teshil_seviyyesi: "Bakalavr",
    tesil_alma_formasi: "Kəsərli",
    GPA: "87",
    attestat_id: "IJ11223",
    is_yeri_1: "",
    vezifesi: "",
    email: "gunay.rzayeva@gmail.com",
    unvan: "Bakı, Səbail",
    telefon: "+994559887766",
    linkedin: "gunayrzayeva",
    github: "gunayrzayeva",
  },
  {
    məzun: "Əhmədov Orxan",
    ata_adı: "Vahid",
    dogum_tarix: "25 sentyabr 2002",
    uni: "Azərbaycan Texniki Universiteti",
    fakultə: "Elektronika fakültəsi",
    ixtisas: "Telekommunikasiya mühəndisliyi",
    Qəbul_ili: "2019",
    Bitirme_ili: "2023",
    status: "Bitirib",
    tehsil_esasları: "Öz hesabına",
    teshil_seviyyesi: "Bakalavr",
    tesil_alma_formasi: "Əyani",
    GPA: "83",
    attestat_id: "KL44556",
    is_yeri_1: "Bakcell",
    vezifesi: "Şəbəkə mühəndisi",
    email: "orxan.ahmedov@gmail.com",
    unvan: "Bakı, Nizami",
    telefon: "+994555667788",
    linkedin: "orxanahmedov",
    github: "orxanahmedov",
  },
  {
    məzun: "Qasımova Leyla",
    ata_adı: "Rəşad",
    dogum_tarix: "07 avqust 2004",
    uni: "Azərbaycan Dövlət Pedaqoji Universiteti",
    fakultə: "Filologiya fakültəsi",
    ixtisas: "Azərbaycan dili və ədəbiyyatı",
    Qəbul_ili: "2022",
    Bitirme_ili: "2026",
    status: "Təhsil alır",
    tehsil_esasları: "Dövlət sifarişli",
    teshil_seviyyesi: "Bakalavr",
    tesil_alma_formasi: "Kəsərli",
    GPA: "90",
    attestat_id: "MN77889",
    is_yeri_1: "",
    vezifesi: "",
    email: "leyla.qasimova@gmail.com",
    unvan: "Bakı, Yasamal",
    telefon: "+994507889900",
    linkedin: "leylagasimova",
    github: "leylagasimova",
  },
  {
    məzun: "İsmayılov Elvin",
    ata_adı: "Rauf",
    dogum_tarix: "11 may 2003",
    uni: "Azərbaycan Dövlət Neft və Sənaye Universiteti",
    fakultə: "Energetika fakültəsi",
    ixtisas: "Elektrik mühəndisliyi",
    Qəbul_ili: "2020",
    Bitirme_ili: "2024",
    status: "Təhsil alır",
    tehsil_esasları: "Öz hesabına",
    teshil_seviyyesi: "Bakalavr",
    tesil_alma_formasi: "Əyani",
    GPA: "78",
    attestat_id: "OP33445",
    is_yeri_1: "",
    vezifesi: "",
    email: "elvin.ismayilov@gmail.com",
    unvan: "Bakı, Binəqədi",
    telefon: "+994507654321",
    linkedin: "elvinismayilov",
    github: "elvinismayilov",
  },
  {
    məzun: "Nəsirova Aylin",
    ata_adı: "Vüsal",
    dogum_tarix: "23 noyabr 2002",
    uni: "Bakı Mühəndislik Universiteti",
    fakultə: "Kompüter mühəndisliyi fakültəsi",
    ixtisas: "Proqram mühəndisliyi",
    Qəbul_ili: "2019",
    Bitirme_ili: "2023",
    status: "Bitirib",
    tehsil_esasları: "Dövlət sifarişli",
    teshil_seviyyesi: "Bakalavr",
    tesil_alma_formasi: "Əyani",
    GPA: "89",
    attestat_id: "QR55667",
    is_yeri_1: "Microsoft",
    vezifesi: "Backend Developer",
    email: "aylin.nesirova@gmail.com",
    unvan: "Bakı, Yasamal",
    telefon: "+994555998877",
    linkedin: "aylinnesirova",
    github: "aylinnesirova",
  },
  {
    məzun: "Həsənov Tunar",
    ata_adı: "Samir",
    dogum_tarix: "02 aprel 2003",
    uni: "Azərbaycan Dövlət İqtisad Universiteti",
    fakultə: "Biznes fakültəsi",
    ixtisas: "Menecment",
    Qəbul_ili: "2020",
    Bitirme_ili: "2024",
    status: "Təhsil alır",
    tehsil_esasları: "Öz hesabına",
    teshil_seviyyesi: "Bakalavr",
    tesil_alma_formasi: "Kəsərli",
    GPA: "82",
    attestat_id: "ST88990",
    is_yeri_1: "",
    vezifesi: "",
    email: "tunar.hasanov@gmail.com",
    unvan: "Bakı, Yasamal",
    telefon: "+994507778899",
    linkedin: "tunarhasanov",
    github: "tunarhasanov",
  }
];


const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("graduateResults");
const modalContent = document.getElementById("modalContent");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase().trim();
  resultsContainer.innerHTML = "";

  if (query === "") return;

  const filtered = graduates.filter(g => g.məzun.toLowerCase().includes(query));

  if (filtered.length === 0) {
    resultsContainer.innerHTML = "<p class='text-center' data-i18n='no_results'>Nəticə tapılmadı.</p>";
    return;
  }

  filtered.forEach(g => {
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 mb-3";

    col.innerHTML = `
      <div class="card shadow-sm h-100 graduate-card" style="cursor: pointer;" data-name="${g.məzun}">
        <div class="card-body">
          <h5 class="card-title">${g.məzun}</h5>
          <p class="card-text"><strong>Təhsil müəssisə:</strong> ${g.uni}</p>
          <p class="card-text"><strong>Fakültə:</strong> ${g.fakultə}</p>
          <p class="card-text"><strong>Bitirmə ili:</strong> ${g.Bitirme_ili}</p>
        </div>
      </div>
    `;

    col.querySelector('.graduate-card').addEventListener('click', function () {
modalContent.innerHTML = `
  <div class="graduate-details row gx-4 gy-3">
    <!-- Şəxsi məlumatlar -->
    <div class="col-md-4">
      <h6>Şəxsi Məlumatlar</h6>
      <hr>
      <p><strong>Məzun:</strong> ${g.məzun}</p>
      <p><strong>Ata adı:</strong> ${g.ata_adı}</p>
      <p><strong>Doğum tarixi:</strong> ${g.dogum_tarix}</p>
      <p><strong>Email:</strong><a href="maqusaf@gmail.com${g.email}" target="_blank">${g.email}</a></p>
      <p><strong>Telefon:</strong> ${g.telefon}</p>
      <p><strong>Ünvan:</strong> ${g.unvan}</p>
    </div>

    <!-- Təhsil məlumatları -->
    <div class="col-md-4">
      <h6>Təhsil Məlumatları</h6>
      <hr>
      <p><strong>Universitet:</strong> ${g.uni}</p>
      <p><strong>Fakültə:</strong> ${g.fakultə}</p>
      <p><strong>İxtisas:</strong> ${g.ixtisas}</p>
      <p><strong>Qəbul ili:</strong> ${g.Qəbul_ili}</p>
      <p><strong>Bitirmə ili:</strong> ${g.Bitirme_ili}</p>
      <p><strong>Status:</strong> ${g.status}</p>
      <p><strong>Təhsil əsasları:</strong> ${g.tehsil_esasları}</p>
      <p><strong>Təhsil səviyyəsi:</strong> ${g.teshil_seviyyesi}</p>
      <p><strong>Təhsil forması:</strong> ${g.tesil_alma_formasi}</p>
      <p><strong>GPA:</strong> ${g.GPA}</p>
      <p><strong>Attestat ID:</strong> ${g.attestat_id}</p>
    </div>

    <!-- İş və sosial -->
    <div class="col-md-4">
      <h6>İş və Sosial</h6>
      <hr>
      <p><strong>İş yeri:</strong> ${g.is_yeri_1}</p>
      <p><strong>Vəzifə:</strong> ${g.vezifesi}</p>
      <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/${g.linkedin}" target="_blank">${g.linkedin}</a></p>
      <p><strong>GitHub:</strong> <a href="https://github.com/${g.github}" target="_blank">${g.github}</a></p>
    </div>
  </div>
`;


      const modal = new bootstrap.Modal(document.getElementById('graduateModal'));
      modal.show();
    });

    resultsContainer.appendChild(col);
  });
});
