async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        let file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    };

}


async function init(restaurantID) {
    await includeHTML();

    renderCompanyData(restaurantID);
}


function renderCompanyData(restaurantID) {
    let companyContent = document.getElementById('company-section');
    if (!companyContent) return; // verhindert Crash

    // Prüfen ob Variable existiert UND ein Array ist
    if (typeof databaseRestaurants === 'undefined' || !Array.isArray(databaseRestaurants)) {
        companyContent.innerHTML = 'Keine Firmendaten verfügbar';
        return;
    }

    // Prüfen ob Array leer ist
    if (databaseRestaurants.length === 0) {
        companyContent.innerHTML = 'Keine Firmendaten vorhanden';
        return;
    }

    const element = databaseRestaurants[restaurantID];
    if (!element) { 
        companyContent.innerHTML = 'Restaurant nicht gefunden';
        return; // verhindert Crash
    }

    const name1 = element.name1;
    const name2 = element.name2;
    const rating = element.rating;
    const reviews = element.reviews;
    const logo = element.logo;
    const image = element.image;
    const slogan = element.slogan;

    companyContent.innerHTML = renderCompanyHTML(name1, name2, rating, reviews, logo, image, slogan);

}












window.addEventListener('DOMContentLoaded', () => init(0));