// Plik: reservation.js
document.addEventListener("DOMContentLoaded", function() {
    var reservationForm = document.getElementById("reservationForm");

    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Wizyta została pomyślnie zarezerwowana!");
        reservationForm.reset();
    });
});
