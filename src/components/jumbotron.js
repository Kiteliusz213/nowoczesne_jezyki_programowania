// jumbotron.js
function renderJumbotron(id, imgSrc, imgAlt) {
    const content = `
        <img src="${imgSrc}" alt="${imgAlt}">
        <div class="jumbotron-content">
            <div id="timer"> <!-- Timer placeholder -->
                <!-- Tutaj będzie wyświetlany zegar -->
            </div>
        </div>
    `;
    renderElement({
        placeholderId: id,
        tagName: "div",
        elementClassName: "jumbotron",
        content: content
    });

    updateTimer();
}
