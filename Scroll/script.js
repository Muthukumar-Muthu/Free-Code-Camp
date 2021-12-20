const ham = document.querySelector(".ham-lines");
const linksContainer = document.querySelector(".links-container");
const ul = document.querySelector("ul");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const a = document.querySelectorAll("a");
const id = document.querySelectorAll(".scroll-links");

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
});
a.forEach((value) => {
    value.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("href");
        const elementId = document.querySelector(id);
        let height = elementId.offsetTop;
        const navHeight = nav.getBoundingClientRect().height;
        height = height - navHeight;
        if (window.screen.width < 700) {
            height = height + linksContainer.getBoundingClientRect().height;
        }
        window.scrollTo({
            left: 0,
            top: height,
        });
        linksContainer.style.height = 0;
        // close
    });
});