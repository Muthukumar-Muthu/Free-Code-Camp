const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slideItems = document.querySelectorAll(".slide-items");
let translateX = 0;
window.addEventListener("load", () => {
    let left = 0;
    slideItems.forEach((value) => {
        value.style.left = `${left}%`;
        left = left + 100;
    });
    buttonShow(0);
});

left.addEventListener("click", () => {
    show(-1);
});
right.addEventListener("click", () => {
    show(+1);
});

function buttonShow(translateX) {
    if (translateX == (slideItems.length - 1) * 100) {
        right.style.visibility = "hidden";
    } else if (translateX == 0) {
        left.style.visibility = "hidden";
    } else {
        left.style.visibility = "";
        right.style.visibility = "";
    }
}

function show(value) {
    if (value == -1) {
        translateX = translateX - 100;
    } else {
        translateX = translateX + 100;
    }
    if (translateX > (slideItems.length - 1) * 100) {
        translateX = 0;
    } else if (translateX < 0) {
        translateX = (slideItems.length - 1) * 100;
    }
    buttonShow(translateX);
    slideItems.forEach((value) => {
        value.style.transform = `translateX(-${translateX}%)`;
    });
}

// const show = () => {
//     if (showCount % 2 != 0) {
//         console.log("showing");
//         let translateX = 0;
//         setInterval(() => {
//             slideItems.forEach((value) => {
//                 value.style.transform = `translateX(-${translateX}%)`;
//             });
//             translateX = translateX + 100;
//             if (translateX === (slideItems.length - 1) * 100) translateX = 0;
//         }, 2000);
//     }
//     showCount++;
// };