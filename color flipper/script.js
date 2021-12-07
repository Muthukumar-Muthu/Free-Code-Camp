const button = document.querySelector("button");
const body = document.querySelector("body");
const all = document.querySelector("*");
const span = document.querySelector("span");

button.addEventListener("click", changeColor);
body.addEventListener("mousemove", changeColor2);

function changeColor() {
    const color =
        "#" + Math.round(Math.random() * parseInt(0xffffff)).toString(16);
    body.style.backgroundColor = color;
    updateSpan(color);
}

function changeColor2(e) {
    let x = e.screenX,
        y = e.screenY;
    console.log(x, y);
    if (x > 255) {
        x = Math.round(Math.random() * 255);
    }
    if (y > 255) {
        y = Math.round(Math.random() * 255);
    }
    let color = `rgb(${x},${y},${Math.round(Math.random() * 255)})`;
    body.style.backgroundColor = color;
    updateSpan(color);
}

function updateSpan(color) {
    span.innerText = color;
}