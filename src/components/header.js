function renderHeader(id, logoSrc, logoAlt) {
    return renderElement({
        placeholderId: id,
        tagName: "header",
        class: "sticky",
        content: `
            <div>
                <img class="logo" id="logo" src="${logoSrc}" alt="${logoAlt}"/>
            </div>
            <nav>
                <a href="index.html" id="homeLink">Strona główna</a>
                <a href="services.html" id="servicesLink">Usługi i cennik</a>
                <a href="schedule.html" id="scheduleLink">Harmonogram pracowników</a>
                <a href="reservation.html" id="reservationLink">Zarezerwuj wizytę</a>
            </nav>
        `
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var homeLink = document.getElementById("homeLink");
    var servicesLink = document.getElementById("servicesLink");
    var scheduleLink = document.getElementById("scheduleLink");
    var reservationLink = document.getElementById("reservationLink");

    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "index.html";
    });

    servicesLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "services.html";
    });

    scheduleLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "schedule.html";
    });

    reservationLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "reservation.html";
    });
});
