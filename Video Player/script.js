const videoContainer = document.querySelector("video");

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const volume = document.querySelector(".volume");
const switchSide = document.querySelector(".switch");
play.addEventListener("click", function() {
    videoContainer.play();
    console.log("playing");
    switchSide.style.left = "50%";
    switchSide.style.right = "0";
});
pause.addEventListener("click", function() {
    videoContainer.pause();
    console.log("pause");
    switchSide.style.right = "50%";
    switchSide.style.left = "0%";
});