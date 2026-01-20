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

    collectCategorieNames(restaurantID);
    storedCategorieNames = load('categorieNames');


    if (storedCategorieNames.length > 0) {
        categorieNames = storedCategorieNames;
    } else {
        save('categorieNames', categorieNames); // optional: Startdaten einmal speichern
    }

    renderCategories(restaurantID);

}

function renderCategories(restaurantID) {

    let categoriesContent = document.getElementById('categories-section');
    if (!categoriesContent) return; // verhindert Crash

        // Prüfen ob Array leer ist
    if (categorieNames.length === 0) {
        categoriesContent.innerHTML = 'Keine Kategorien vorhanden';
        return;
    }

    categoriesContent.innerHTML = '';
    for (let i = 0; i < categorieNames.length; i++) {
        const categoryName = categorieNames[i].name;
        categoriesContent.innerHTML += listCategoriesHTML(restaurantID, i, categoryName);
    }


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


function collectCategorieNames(restaurantID = 0) {
    categorieNames = []; // reset

    const menus = databaseRestaurants[restaurantID].menus;

    for (let i = 0; i < menus.length; i++) {
        const categoryObj = menus[i].categories; 
        // { name, img }

        // prüfen ob Kategorie mit diesem Namen schon existiert
        const exists = categorieNames.some(
            c => c.name === categoryObj.name
        );

        if (!exists) {
            categorieNames.push({
                name: categoryObj.name,
                img: categoryObj.img
            });
        }
    }

    categorieNames = save('categorieNames', categorieNames);

}


function load(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
}


function save(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}











window.addEventListener('DOMContentLoaded', () => init(0));