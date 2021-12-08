const question = document.querySelector(".content-container");

question.addEventListener("click", function(e) {
    console.log(e.type);
    const element = e.target;
    const child = e.target.parentElement.parentElement;
    const ans = child.children[1];
    if (e.target.classList.contains("fa-expand-arrows-alt")) {
        ans.classList.toggle("hide");
        console.log(ans.classList);
        if (ans.classList.contains("hide")) {
            console.log("hiding");
            ans.style.maxHeight = "0";
        } else ans.style.maxHeight = "200px";
    }
});

/*
const question = document.querySelector(".content-container");

question.addEventListener("click", function(e) {
    console.log(e.type);
    const element = e.target;
    const child = e.target.parentElement.parentElement;
    const ans = child.children[1];
    if (e.target.classList.contains("fa-expand-arrows-alt")) {
        ans.style.maxHeight = "200px";
    }
});
question.addEventListener("dblclick", function(e) {
    console.log(e.type);
    const element = e.target;
    const child = e.target.parentElement.parentElement;
    const ans = child.children[1];
    if (e.target.classList.contains("fa-expand-arrows-alt")) {
        ans.style.maxHeight = "0";
    }
});
*/