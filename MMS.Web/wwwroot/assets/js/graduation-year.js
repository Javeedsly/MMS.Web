const currentYear = new Date().getFullYear();
          const startYear = 2000; // Lazım olan qədər geri gedə bilərsiniz

          const entrySelect = document.getElementById("entryYear");
          const gradSelect = document.getElementById("graduationYear");

          for (let year = currentYear; year >= startYear; year--) {
            const option1 = document.createElement("option");
            option1.value = year;
            option1.textContent = year;
            entrySelect.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = year;
            option2.textContent = year;
            gradSelect.appendChild(option2);
          }