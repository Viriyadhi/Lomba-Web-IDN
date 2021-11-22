const cards = [
    {
        "detail": {
            "p": "Jakarta Utara",
            "img": false
        },
        "childrens": [

        ]
    },
    {
        "detail": {
            "p": "Jakarta Selatan",
            "img": false
        },
        "childrens": [

        ]
    },
    {
        "detail": {
            "p": "Jakarta Timur",
            "img": false
        },
        "childrens": [

        ]
    },
    {
        "detail": {
            "p": "Jakarta Barat",
            "img": false
        },
        "childrens": [

        ]
    },
    {
        "detail": {
            "p": "Tangerang",
            "img": false
        },
        "childrens": [

        ]
    },
    {
        "detail": {
            "p": "Bogor",
            "img": false
        },
        "childrens": [

        ]
    },
    {
        "detail": {
            "p": "Bekasi",
            "img": false
        },
        "childrens": [

        ]
    },
    {
        "detail": {
            "p": "Bandung",
            "img": false
        },
        "childrens": [

        ]
    },
    {
        "detail": {
            "p": "Semarang",
            "img": false
        },
        "childrens": [

        ]
    },
    {
        "detail": {
            "p": "Yogyakarta",
            "img": false
        },
        "childrens": [

        ]
    },
    {
        "detail": {
            "p": "Surabaya",
            "img": false
        },
        "childrens": [

        ]
    },
    {
        "detail": {
            "p": "Malang",
            "img": false
        },
        "childrens": [

        ]
    },
];

const elements = [];

const cardContainer = document.getElementsByClassName('card-container')[0];

cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = "card";
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
    elements.push(cardElement);
});

let moreThan6 = false;

for (let index = 0; index < elements.length; index++) {
    cardContainer.appendChild(elements[index]);
    if (index > 5) {
        elements[index].style.display = 'none';
        moreThan6 = true;
    }
}

if (moreThan6) {
}