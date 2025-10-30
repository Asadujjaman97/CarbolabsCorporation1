document.addEventListener("DOMContentLoaded", function () {
    const enquiryBtn = document.getElementById("enquiryBtn");
    const enquiryModal = new bootstrap.Modal(document.getElementById("enquiryModal"));

    if (enquiryBtn) {
        enquiryBtn.addEventListener("click", function () {
            enquiryModal.show();
        });
    }
});
