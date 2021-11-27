let isClicked = false;

document.getElementsByClassName("read-more-button")[0].addEventListener("click", (e) => {
    let array = document.querySelectorAll('.card-container > .card');     
    for (let index = 6; index < array.length; index++) {
        array[index].style.display = isClicked ? "none" : "block";
        }
        e.target.style.transform = isClicked ? "rotate(0deg)" : "rotate(180deg)";
        isClicked = !isClicked;
    });

document.querySelectorAll(".card").forEach((element) => {
    let button = element.querySelector("img");
    button.addEventListener("click", (e) => {
        element.querySelectorAll("* > .card").forEach((child) => {
            child.style.display = button.style.transform != "" ? "none" : "block";
        });
        if (parent) {
            element.querySelector(".card-desc").style.display =
                button.style.transform != "" ? "none" : "block";
        }
        button.style.transform =
            button.style.transform != "" ? "" : "rotate(180deg)";
    });
});