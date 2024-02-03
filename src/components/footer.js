// footer.js
function renderFooter(id) {
    return renderElement({
        placeholderId: id,
        tagName: "footer",
        content: `
            <p>Dane kontaktowe: ul. Przykładowa 12, 60-101 Poznań, tel. 123 456 789, email: kontakt@zdrowypupil.pl</p>
            <p>Godziny otwarcia: Poniedziałek - Piątek: 8:00 - 18:00, Sobota: 9:00 - 14:00</p>
        `
    });
}