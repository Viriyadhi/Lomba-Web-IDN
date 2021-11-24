var isClicked = false;
const elements = [];

const cardContainer = document.getElementsByClassName('card-container')[0];

function createCard(card, parent) {
    const cardElement = document.createElement('div');
    cardElement.className = "card";
    if (card.detail) {
        const cardDetail = document.createElement('div');
        cardDetail.className = "card-detail";
        if (card.detail.p) {
            let cardP = document.createElement('p');
            cardP.innerHTML = card.detail.p;
            cardDetail.appendChild(cardP);
        }
        if (card.detail.img != null || card.detail.img != undefined) {
            let cardImg = document.createElement('img');
            cardImg.src = '../../assets/akar-icons_chevron-down.png';
            cardDetail.appendChild(cardImg);
        }
        cardElement.appendChild(cardDetail);
    }
    if (card.description) {
        const cardDesc = document.createElement('div');
        cardDesc.className = "card-desc";
        card.description.text.forEach(text => {
            let cardP = document.createElement('p');
            cardP.innerHTML = text;
            cardDesc.appendChild(cardP);
        });
        cardElement.appendChild(cardDesc);
    }
    if (card.childrens) {
        card.childrens.forEach(child => createCard(child, cardElement));
    }
    if (parent) {
        if (cardElement.querySelector('* > .card-desc')) {
            cardElement.querySelector('* > .card-desc').style.display = 'none';
        }
        cardElement.style.display = 'none';
        parent.appendChild(cardElement);
    }
    else elements.push(cardElement);
}

cards.forEach(card => createCard(card));

for (let index = 0; index < elements.length; index++) {
    let card = elements[index];
    let clicked = cards[index].detail.img;
    if (index > 5) {
        card.style.display = 'none';
    }

    let button = card.querySelector('* > img');
    button.addEventListener('click', e => {
        clicked = !clicked;
        card.querySelectorAll('* > .card').forEach(child => {
            child.style.display = (!clicked) ? 'block' : 'none';
        });
        button.style.transform = (!clicked) ? 'rotate(180deg)' : '';
    });
    cardContainer.appendChild(card);
}

document.getElementsByClassName('read-more-button')[0].addEventListener('click', e => {
    for (let index = 6; index < elements.length; index++) {
        elements[index].style.display = (isClicked) ? 'none' : 'block';
    }
    e.target.style.transform = (isClicked) ? 'rotate(0deg)' : 'rotate(180deg)';
    isClicked = !isClicked;
});