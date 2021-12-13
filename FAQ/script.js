/*
const question = document.querySelector(".content-container");

question.addEventListener("click", function(e) {
    // console.log(e.type);
    const element = e.target;
    const child = e.target.parentElement.parentElement;
    const ans = child.children[1];
    if (e.target.classList.contains("fa-expand-arrows-alt")) {
        ans.classList.toggle("hide");
        // console.log(ans.classList);
        if (ans.classList.contains("hide")) {
            // console.log("hiding");
            ans.style.maxHeight = "0";
        } else ans.style.maxHeight = "200px";
    }
});
 */

const singleQuestion = document.querySelectorAll(".single-question");
singleQuestion.forEach(function(value, index) {
    const expand = value.firstElementChild.lastElementChild;

    expand.addEventListener("click", function(e) {
        check();
        const ans = e.target.parentElement.parentElement.lastElementChild;

        ans.classList.toggle("toggle");
    });
});

function check() {
    const ans = document.querySelectorAll(".answer-container");
    ans.forEach(function(value, index) {
        if (value.classList.contains("toggle")) {
            value.classList.remove("toggle");
        }
    });
}