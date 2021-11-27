// var isClicked = false;
// const elements = [];

// const cardContainer = document.getElementsByClassName("card-container")[0];

// function createCard(card, parent) {
//     const cardElement = document.createElement("div");
//     cardElement.className = "card";
//     if (card.detail) {
//         const cardDetail = document.createElement("div");
//         cardDetail.className = "card-detail";
//         let cardP = document.createElement("p");
//         cardP.innerHTML = card.detail;
//         cardDetail.appendChild(cardP);
//         let cardImg = document.createElement("img");
//         cardImg.src = "../../assets/akar-icons_chevron-down.png";
//         cardDetail.appendChild(cardImg);
//         cardElement.appendChild(cardDetail);
//     }
//     if (card.description) {
//         const cardDesc = document.createElement("div");
//         cardDesc.className = "card-desc";
//         card.description.text.forEach((text) => {
//             let cardP = document.createElement("p");
//             cardP.innerHTML = text;
//             cardDesc.appendChild(cardP);
//         });
//         cardElement.appendChild(cardDesc);
//     }
//     if (card.childrens) {
//         card.childrens.forEach((child) => createCard(child, cardElement));
//     }
//     if (parent) {
//         if (cardElement.querySelector("* > .card-desc")) {
//             cardElement.querySelector("* > .card-desc").style.display = "none";
//         }
//         cardElement.style.display = "none";
//         parent.appendChild(cardElement);
//     } else elements.push(cardElement);

//     let button = cardElement.querySelector("* > img");
//     button.addEventListener("click", (e) => {
//         cardElement.querySelectorAll("* > .card").forEach((child) => {
//             child.style.display = button.style.transform != "" ? "none" : "block";
//         });
//         if (parent) {
//             cardElement.querySelector("* > .card-desc").style.display =
//                 button.style.transform != "" ? "none" : "block";
//         }
//         button.style.transform =
//             button.style.transform != "" ? "" : "rotate(180deg)";
//     });
// }

// cards.forEach((card) => createCard(card));

// for (let index = 0; index < elements.length; index++) {
//     let card = elements[index];
//     if (index > 5) {
//         card.style.display = "none";
//     }
//     cardContainer.appendChild(card);
// }

// document
//     .getElementsByClassName("read-more-button")[0]
//     .addEventListener("click", (e) => {
//         for (let index = 6; index < elements.length; index++) {
//             elements[index].style.display = isClicked ? "none" : "block";
//         }
//         e.target.style.transform = isClicked ? "rotate(0deg)" : "rotate(180deg)";
//         isClicked = !isClicked;
//     });

document.querySelectorAll(".card").forEach((element) => {
    let button = element.querySelector("* > img");
    button.addEventListener("click", (e) => {
        element.querySelectorAll("* > .card").forEach((child) => {
            child.style.display = button.style.transform != "" ? "none" : "block";
        });
        if (parent) {
            element.querySelector("* > .card-desc").style.display =
                button.style.transform != "" ? "none" : "block";
        }
        button.style.transform =
            button.style.transform != "" ? "" : "rotate(180deg)";
    });
});