const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");
setInterval(() => {
    const presentDate = new Date();
    const lastDate = new Date("December 29, 2021 11:30:00 GMT+00:00");

    let milli = lastDate - presentDate - 5.5 * 60 * 60 * 1000;
    const milliToDay = 1000 * 60 * 60 * 24;
    const milliToHours = 1000 * 60 * 60;
    const milliToMin = 1000 * 60;
    const milliToSec = 1000;
    const day = ("day ", milli / milliToDay);
    milli = milli % milliToDay;
    const hour = ("hour ", milli / milliToHours);
    milli = milli % milliToHours;
    const min = ("min ", milli / milliToMin);
    milli = milli % milliToMin;
    const sec = ("sec ", milli / milliToSec);
    days.innerText = Math.floor(day);
    hours.innerText = Math.floor(hour);
    mins.innerText = Math.floor(min);
    secs.innerText = Math.floor(sec);
}, 1000);