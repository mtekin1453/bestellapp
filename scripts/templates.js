function renderCompanyHTML(name1,name2,rating,reviews,logo,image,slogan){
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