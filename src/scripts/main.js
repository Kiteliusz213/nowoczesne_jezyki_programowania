// main.js
function main() {
    renderHeader("header-placeholder", "./assets/logo.png", "Logo kliniki");
    renderJumbotron("jumbotron-placeholder", "./assets/jumbotron.png", "Grafika w stylu 'jumbotron'");
    renderFooter("footer-placeholder");

    setInterval(updateTimer, 1000);
}

function updateTimer() {
    const item = document.getElementById("timer");
    if (item) {
        item.textContent = getCurrentTime();
    }
}

function getCurrentTime() {
    const date = new Date();
    const months = [
        'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca',
        'sierpnia', 'września', 'października', 'listopada', 'grudnia'
    ];
    const day = String(date.getDate()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day} ${month} ${year}, ${hours}:${minutes}:${seconds}`;
}
