const buttons = document.querySelector(".buttons");
const writings = document.querySelectorAll(".single-writings");
const spans = document.querySelectorAll(".buttons > span");
window.addEventListener("load", function() {
    writings.forEach(function(value) {
        if (value.dataset.category === "history") {
            value.style.display = "block";
        } else {
            value.style.display = "none";
        }
    });
    spans.forEach(function(value) {
        if (value.classList.contains("history")) {
            value.style.backgroundColor = "white";
        } else value.style.backgroundColor = "";
    });
});
buttons.addEventListener("click", function(e) {
    show(e.target.className, e);
});

function show(string, e) {
    console.log(string, e);
    changeButton(e);
    writings.forEach(function(value) {
        if (value.dataset.category === string) {
            value.style.display = "block";
        } else {
            value.style.display = "none";
        }
    });
}

function changeButton(e) {
    spans.forEach(function(value) {
        if (value.classList.contains(e.target.className)) {
            value.style.backgroundColor = "white";
        } else value.style.backgroundColor = "";
    });
}