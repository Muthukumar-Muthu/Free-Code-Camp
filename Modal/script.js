const open = document.querySelector(".button");
const overlay = document.querySelector(".modal-overlay");
const close = document.querySelector(".close");

open.addEventListener("click", function() {
    overlay.classList.toggle("toggle");
    if (overlay.classList.contains("toggle")) {
        document.querySelector("body").style.backgroundColor = "#98c4ed";
    }
});
close.addEventListener("click", function() {
    overlay.classList.toggle("toggle");
    if (!overlay.classList.contains("toggle")) {
        document.querySelector("body").style.backgroundColor = "white";
    }
});