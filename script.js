const cardsContainerElement = document.getElementById("cards-container"); 

let cardsListMap = new Map();

function fillCardsListMap() {
    for(let i = 0;i < json_ar.length;i++) {
        cardsListMap.set(json_ar[i].name,json_ar[i]);
    }
}

function showAllCardsRandomaly() {
    let randomIndexArray = [];
    let randomNumber;

    for(let i=0;i < json_ar.length;i++) {
        do {
            randomNumber = Math.floor(Math.random() * json_ar.length)
        } while(randomIndexArray.includes(randomNumber));

        randomIndexArray[i] = randomNumber;
    }

    clearAllCards();
    for(let i = 0;i < randomIndexArray.length;i++) {
        displayPersonCard(randomIndexArray[i]);
    }
}

function showAllCards() {
    clearAllCards();

    for(let i = 0;i < json_ar.length;i++) {
        displayPersonCard(i);
    }
}

function removeRichCard(colCardId) {
    document.getElementById(colCardId).remove();
}

function clearAllCards() {
    let collomCardElement;
    // Removing all 'col-cards-x' elements
    for(let i = 0;i < json_ar.length;i++) {
        if(document.getElementById(`col-card-${i}`)) {
            collomCardElement = document.getElementById(`col-card-${i}`);
            collomCardElement.remove();
        }
    }
}

function displayPersonCard(index) {
    cardsContainerElement.innerHTML += 
                `<div id="col-card-${index}" class="col" onclick="removeRichCard('col-card-${index}')">`+
                    `<div class="card rich-person-card" style="width: 15rem;">`+
                        `<img src="${json_ar[index].image}" class="card-img-top img-thumbnail" alt="${json_ar[index].name}">`+
                        `<div class="card-body">`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">Name:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${json_ar[index].name}</span>`+
                                `</div>`+
                            `</div>`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">Worth:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${json_ar[index].worth}</span>`+
                                `</div>`+
                            `</div>`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">Birth Year:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${json_ar[index].birth_year}</span>`+
                                `</div>`+
                            `</div>`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">Source:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${json_ar[index].source}</span>`+
                                `</div>`+
                            `</div>`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">Country:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${json_ar[index].country}</span>`+
                                `</div>`+
                            `</div>`+
                        `</div>`+
                    `</div>`+
                `</div>`;
}

function togleDisplayDarkLightMode() {
    let bodyElement = document.body;
    let headerElement = document.getElementById('header-dark-mode');
    let DarkSvgiconElement = document.getElementById('icon-dark-mode');
    
    // Body Element update Dark/Light mode
    bodyElement.classList.toggle("bg-dark");

    // Header Element update Dark/Light mode
    headerElement.classList.toggle("bg-dark");
    headerElement.classList.toggle("text-white");
    
    // Display mode icon Element update Dark/Light mode
    DarkSvgiconElement.classList.toggle("icon-dark");
}

// Init Page
fillCardsListMap();
showAllCardsRandomaly();
