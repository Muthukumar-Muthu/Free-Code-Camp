const ham = document.querySelector(".ham-lines");
const linksContainer = document.querySelector(".links-container");
const ul = document.querySelector("ul");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const a = document.querySelectorAll("a");
const id = document.querySelectorAll(".scroll-links");
const upArrow = document.querySelector("#up");

window.addEventListener("load", () => {
    linksContainer.style.height = 0;
});

ham.addEventListener("click", () => {
    const height = ul.offsetHeight;
    if (linksContainer.getBoundingClientRect().height == 0)
        linksContainer.style.height = `${height}px`;
    else linksContainer.style.height = 0;
});

window.addEventListener("scroll", () => {
    const navHeight = nav.getBoundingClientRect().height;
    if (window.pageYOffset > navHeight) {
        nav.classList.add("fixed");
    } else nav.classList.remove("fixed");
    if (window.pageYOffset > 100) {
        upArrow.style.visibility = "visible";
    } else upArrow.style.visibility = "hidden";
});

upArrow.addEventListener("click", () => {
    const title1 = document.querySelector("#title1");
    let position = title1.offsetTop;
    position = position - header.getBoundingClientRect().height;
    window.scrollTo({
        left: 0,
        top: position,
    });
});

a.forEach((value) => {
    value.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("href");
        const elementId = document.querySelector(id);
        let position = elementId.offsetTop;
        position = position - header.getBoundingClientRect().height;
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
        // close
    });
});