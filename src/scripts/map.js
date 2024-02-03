// map.js

function initMap() {
    const myLatLng = { lat: 51.1079, lng: 17.0385 };

    const map = new google.maps.Map(document.getElementById("mapa"), {
        center: myLatLng,
        zoom: 15,
    });

    new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Klinika Weterynaryjna 'Zdrowy Pupil'",
    });
}
