const ham = document.querySelector(".fas");
const showElement = document.querySelector("main nav");

ham.addEventListener("click", hambugerClicked);
window.addEventListener("resize", check);

function check() {
    if (screen.width > 500) showElement.className = "none";
}

function hambugerClicked() {
    showElement.classList.toggle("none");
    console.log(screen.width, screen.height);
}