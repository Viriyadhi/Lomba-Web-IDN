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
        let cardP = document.createElement('p');
        cardP.innerHTML = card.detail.p;
        cardDesc.appendChild(cardP);
        cardElement.appendChild(cardDesc);
    }
    if (card.childrens) {
        card.childrens.forEach(child => createCard(child, cardElement));
    }
    if (parent) {
        cardElement.style.display = 'none';
        parent.appendChild(cardElement);
    }
    else elements.push(cardElement);
}

cards.forEach(card => createCard(card));

for (let index = 0; index < elements.length; index++) {
    let card = elements[index];
    if (index > 5) {
        card.style.display = 'none';
    }

    card.addEventListener('click', e => {
        let button = card.querySelector('* > img');
        card.querySelectorAll('* > .card').forEach(child => {
            child.style.display = (button.style.transform == '') ? 'block' : 'none';
        });
        button.style.transform = (button.style.transform == '') ? 'rotate(180deg)' : null;
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