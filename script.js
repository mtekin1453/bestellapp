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
    storedMenus = load('menus');
    storedBasket = load('currentBasket');


    if (storedCategorieNames.length > 0) {
        categorieNames = storedCategorieNames;
    } else {
        save('categorieNames', categorieNames); // optional: Startdaten einmal speichern
    }


    if (storedMenus == []) {
        storedMenus = databaseRestaurants[restaurantID].menus;
    }

    if (storedMenus.length > 0) {
        databaseRestaurants[restaurantID].menus = storedMenus;
    } else {
        save('menus', databaseRestaurants[restaurantID].menus); // optional: Startdaten einmal speichern
    }


    if (storedBasket.length > 0) {
        currentBasket = storedBasket;
    } else {
        save('currentBasket', currentBasket); // optional: Startdaten einmal speichern
    }



    renderCategories(restaurantID);

    renderMenus(restaurantID);

    renderBasket();

}

function renderBasket() {
    let basketContent = document.getElementById('basket-content');
    if (!basketContent) return; // verhindert Crash


    storedBasket = load('currentBasket');

    basketContent.innerHTML = '<div><h2>Your Basket</h2></div><div id="basket-items" class="basket-items"></div>';

    let basketItems = document.getElementById('basket-items');
    if (!basketItems) return; // verhindert Crash


    // if (storedBasket == []) {
    //     removeClassToElement(`addToBasket${menuID}`, 'hidden');
    //     addClassToElement(`addedBasketIcon${menuID}`, 'hidden');
    // }

    if (storedBasket.length > 0) {
        currentBasket = storedBasket;
    }
    else {

        basketContent.innerHTML = renderBasketEmptyHTML();
    }


    for (let index = 0; index < storedBasket.length; index++) {

        const element = storedBasket[index];

        const amount = element.amount;
        const menuName = element.menu;
        const menuPrice = element.price;

        basketItems.innerHTML += renderBasketHTML(index, amount, menuName, menuPrice);
    }



}

function renderMenus(restaurantID) {
    let menusContent = document.getElementById('menus-section');
    if (!menusContent) return; // verhindert Crash
    menusContent.innerHTML = '';

    document.getElementById('basket-section').innerHTML += `<div id="basket-content" class="basket-content"></div>`

    for (let i = 0; i < categorieNames.length; i++) {

        const categoryName = categorieNames[i].name;
        const categoryImage = categorieNames[i].img;

        menusContent.innerHTML += renderCategoriesHTML(i, categoryImage, categoryName);

        let currentCategory = document.getElementById(`${categoryName.toLowerCase()}`);
        if (!currentCategory) continue;


        for (let j = 0; j < storedMenus.length; j++) {

            const element = storedMenus[j];

            const menuCategoryName =
                typeof element.categories === 'string'
                    ? element.categories
                    : element.categories.name;

            // Menü überspringen, wenn Kategorie nicht passt
            if (menuCategoryName !== categoryName) continue;

            // NUR passende Menüs werden gerendert
            const menuName = element.menu;
            const menuIngredient = element.ingredient;
            const menuPrice = element.price;
            const menuImage = element.menuImg;


            currentCategory.innerHTML += renderMenusHTML(restaurantID, j, menuName, menuIngredient, menuPrice, menuImage);

        }
    }



}

function addToBasketAmount(index) {
    storedBasket = load('currentBasket');
    let currentAmount = storedBasket[index].amount;
    currentAmount++;
    storedBasket[index].amount = currentAmount;
    save('currentBasket', storedBasket);

    renderBasket();
}

function reduceBasketAmount(index) {

    storedBasket = load('currentBasket');
    let currentAmount = storedBasket[index].amount;

    if (currentAmount > 1) {
        currentAmount--;
        storedBasket[index].amount = currentAmount;
    }
    else {
        deleteBasketItem(index);
    }

    save('currentBasket', storedBasket);
    renderBasket();


}

function deleteBasketItem(index) {
    storedBasket = load('currentBasket');
    storedBasket.splice(index, 1);
    save('currentBasket', storedBasket);
    renderBasket();

}

function addToBasket(restaurantID, menuID) {

    storedBasket = load('currentBasket');

    currentMenu = databaseRestaurants[restaurantID].menus[menuID];
    storedBasket.push(currentMenu);
    save('currentBasket', storedBasket);

    addClassToElement(`addToBasket${menuID}`, 'hidden');
    removeClassToElement(`addedBasketIcon${menuID}`, 'hidden');
    renderBasket();
}

function addClassToElement(elementID, className) {
    let element = document.getElementById(elementID);

    element.classList.add(className);
    
}

function removeClassToElement(elementID, className) {
    let element = document.getElementById(elementID);

    element.classList.remove(className);
    
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











window.addEventListener('DOMContentLoaded', () => init(1));