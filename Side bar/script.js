const hamLine = document.querySelector(".ham-lines");
const cross = document.querySelector(".cross");
const sideBar = document.querySelector(".side-bar");
hamLine.addEventListener("click", toggle);
cross.addEventListener("click", toggle);

function toggle() {
    sideBar.classList.toggle("toggle");
}