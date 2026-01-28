function renderCompanyHTML(name1, name2, rating, reviews, logo, image, slogan) {
    return `
    <div class="company-image-section"><img class="header-company-image" src=${image}></div>
        <div class="company-logo-section"><img src=${logo}></div>

        <div class="company-details-section">
            <div class="company-name-reviews-container">
                <div><span id="name1" class="name1">${name1}</span><span id="name2" class="name2">${name2}</span></div>
                <div class="reviews-container">
                    <img src="./assets/icons/star.png">
                    <span class="rating">${rating}</span>
                    <span class="reviews">(${reviews})</span>
                </div>
            </div>

            <div>
                <span id="slogan">${slogan}</span>
            </div>
    </div>
    `;
}

function listCategoriesHTML(restaurantID, categoryID, categoryName) {
    return `
            <div id="restaurant-cat-${restaurantID}" class="category-icon-container">
                <div>
                        <img src="./assets/icons/right.png" class="category-icon">
                </div>
            <div class="category-card">
                <div>
                    <span id="categoriesName${categoryID}" class="categoriesName">${categoryName}</span>
                </div>
            </div>
        </div>
    `;
}

function renderBasketHTML(index,amount, menuName, menuPrice) {
    return /*html*/`
        <div id="basket-container${index}" class="basket-container">
            <!-- <div><h2>Your Basket</h2></div> -->
            <div id="basket-item${index}" class="basket-item">
                <div><span>${amount} x </span><span>${menuName}</span></div>
                <div class="basket-item-detail-container">
                    <div class="basket-item-amount-container">
                        <img src="./assets/icons/trash-black.png" onclick="reduceBasketAmount(${index})">
                        <span>1</span>
                        <img src="./assets/icons/plus-black.png" onclick="addToBasketAmount(${index})">
                    </div>

                    <div>${(menuPrice*amount).toFixed(2)} €</div>
                </div>
            </div>
        </div>
    `;
}

function renderBasketEmptyHTML(){
    return /*html*/`
        <div class="basket-empty-container">
            <div><h2>Your Basket</h2></div>
            <div><p>Nothing here yet.<br> Go ahead and choose something delicious!</p></div>
            <div><img src="./assets/icons/shopping_cart.png"></div>
        </div>
    `;
}


function renderCategoriesHTML(categoryID, categoryImage, categoryName) {
    return /*html*/ `
        <div id="${categoryName.toLowerCase()}" class="menus-content">

            <div id="menus-list${categoryID}" class="menus-list">

                <div id="menus-list-categories-${categoryID}" class="menus-list-categories">
                    <div id="menus-list-cat-container" class="menus-list-cat-container">
                        <img src=${categoryImage}>
                        <h2>${categoryName}</h2>
                    </div>
                </div>

            </div>
     
        </div>
    
    `;
}


function renderMenusHTML(restaurantID, menuID, menuName, menuIngredient, menuPrice, menuImage) {
    return /*html*/`
                <div id="menu${menuID}" class="menu">
                        <div class="menu-detail-container">
                            <div><img src=${menuImage}></div>
                                <div class="menu-name-container">
                                            <div class="menu-name-detail-container">
                                                    <h3>${menuName}</h3>
                                                    <span>${menuPrice.toFixed(2)} €</span>
                                            </div>
                                            <div>
                                                <p>${menuIngredient}</p>
                                            </div>

                                            <div class="add-to-basket-container">
                                                <button id="addToBasket${menuID}" class="addToBasket" onclick="addToBasket(${restaurantID}, ${menuID})">Add to Basket</button>
                                            </div>
                                            <div id="addedBasketIcon${menuID}" class="add-to-basket-container hidden">
                                                <button class="addedBasket">Added</button>
                                                <img src="./assets/icons/plus.png">
                                            </div>
                                </div>

                        </div>

                </div> 
    `;
}