document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("search");
    const input = document.getElementById("question");
    const responseMessage = document.getElementById("response-message");

    // Form submit hadisəsi
    form.addEventListener("submit", function (e) {
        e.preventDefault();  // Formun səhifəni yeniləməsinin qarşısını alırıq

       const input = document.getElementById("question"); // ID ilə input elementini seçirik


        if (question.trim() === "") {
            responseMessage.textContent = "Sualınızı yazın!";
            responseMessage.style.color = "red";
        } else {
            responseMessage.textContent = `Sualınız: ${question}`;
            responseMessage.style.color = "green";

            // Sual göndərildikdən sonra input sahəsini təmizləyirik
            input.value = "";  // Input sahəsini boşaldırıq

            // AJAX ilə məlumat göndəririk
            $.ajax({
                url: 'server-endpoint.php',  // Burada serverə müraciət edirik
                type: 'POST',
                data: { question: question },
                success: function (response) {
                    // Serverdən müsbət cavab gələndə
                    responseMessage.textContent = 'Sualınız göndərildi!';
                    responseMessage.style.color = 'green';
                },
                error: function () {
                    // Əgər serverə göndərilərkən xəta baş verərsə
                    responseMessage.textContent = 'Xəta baş verdi. Xahiş edirik yenidən cəhd edin.';
                    responseMessage.style.color = 'red';
                }
            });
        }
    });
});
