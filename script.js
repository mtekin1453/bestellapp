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


async function init() {
    await includeHTML();

    renderCompanyData();
}


// function renderCompanyData() {
//     let content = document.getElementById('company-section');
//     if (!content) return; // verhindert Crash

//     // Prüfen ob Variable existiert UND ein Array ist
//     if (typeof companyInformation === 'undefined' || !Array.isArray(companyInformation)) {
//         content.innerHTML = 'Keine Firmendaten verfügbar';
//         return;
//     }

//     // Prüfen ob Array leer ist
//     if (companyInformation.length === 0) {
//         content.innerHTML = 'Keine Firmendaten vorhanden';
//         return;
//     }

//     const element = companyInformation[0];

//     const name1 = element.name1;
//     const name2 = element.name2;
//     const rating = element.rating;
//     const reviews = element.reviews;
//     const logo = element.logo;
//     const image = element.image;
//     const slogan = element.slogan;

//     content.innerHTML = renderCompanyHTML(name1, name2, rating, reviews, logo, image, slogan);

// }

function renderCompanyData() {
    let content = document.getElementById('company-section');
    if (!content) return; // verhindert Crash

    // Prüfen ob Variable existiert UND ein Array ist
    if (typeof databaseRestaurants === 'undefined' || !Array.isArray(databaseRestaurants)) {
        content.innerHTML = 'Keine Firmendaten verfügbar';
        return;
    }

    // Prüfen ob Array leer ist
    if (databaseRestaurants.length === 0) {
        content.innerHTML = 'Keine Firmendaten vorhanden';
        return;
    }

    const element = databaseRestaurants[0];

    const name1 = element.name1;
    const name2 = element.name2;
    const rating = element.rating;
    const reviews = element.reviews;
    const logo = element.logo;
    const image = element.image;
    const slogan = element.slogan;

    content.innerHTML = renderCompanyHTML(name1, name2, rating, reviews, logo, image, slogan);

}












window.addEventListener('DOMContentLoaded', init);