/* 
const increase = document.querySelector("#inc");
const decrease = document.querySelector("#dec");
const res = document.querySelector("#res");
const count = document.querySelector("#count");
let value = 0;
setValue(value);

increase.addEventListener("click", incValue);
decrease.addEventListener("click", decValue);
res.addEventListener("click", resValue);

function setValue(value) {
    // const textNode = document.createTextNode(value);
    // count.append(textNode);
    if (value > 0) {
        count.setAttribute("style", "color:green");
    } else if (value < 0) {
        count.setAttribute("style", "color:red");
    }
    count.innerText = value;
}

function incValue() {
    setValue(++value);
}

function decValue() {
    setValue(--value);
}

function resValue() {
    value = 0;
    setValue(value);
}
*/
let value = 0;

const buttons = document.querySelectorAll("button");
const count = document.querySelector("#count");
count.innerText = value;
buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        let string = e.target.id;
        if (string == "dec") --value;
        else if (string == "inc") ++value;
        else value = 0;
        if (value > 0) count.style.color = "green";
        else count.style.color = "red";
        count.innerText = value;
    });
});