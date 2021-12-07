const array = [{
        src: "https://picsum.photos/200",
        name: "Muthukumar",
        job: "free-lancher",
        writing: "Freelancers often must handle contracts, legal issues, accounting, marketing, and other business functions by themselves. ",
    },
    {
        src: "https://picsum.photos/200",
        name: "Lokesh",
        job: "driver",
        writing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis iusto eaque ",
    },
    {
        src: "https://picsum.photos/200",
        name: "Aaksh",
        job: "Ias",
        writing: "Most of the resources are wasted in corruption, mismanagement, and other unfair practices.  ",
    },
    {
        src: "https://picsum.photos/200",
        name: "Haresh",
        job: "Enginner",
        writing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis iusto ",
    },
    {
        src: "https://picsum.photos/200",
        name: "Haresh",
        job: "Enginner",
        writing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis iusto ",
    },
    {
        src: "https://picsum.photos/200",
        name: "Haresh",
        job: "Enginner",
        writing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis iusto ",
    },
    {
        src: "https://picsum.photos/200",
        name: "Haresh",
        job: "Enginner",
        writing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis iusto ",
    },
    {
        src: "https://picsum.photos/200",
        name: "Haresh",
        job: "Enginner",
        writing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis iusto ",
    },
    {
        src: "https://picsum.photos/200",
        name: "Haresh",
        job: "Enginner",
        writing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis iusto ",
    },
    {
        src: "https://picsum.photos/200",
        name: "Haresh",
        job: "Enginner",
        writing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis iusto ",
    },
    {
        src: "https://picsum.photos/200",
        name: "Haresh",
        job: "Enginner",
        writing: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis iusto ",
    },
];

// array.forEach(function(object) {
//     for (let key in object) {
//         // console.log(key, "-", object[key]);
//     }
// });

let position = 0;
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const showImg = document.querySelector("img");
const showName = document.querySelector("#name");
const showJob = document.querySelector("#job");
const showWriting = document.querySelector(".writing");

const parentMap = document.querySelector("#map");
const suprise = document.querySelector(".suprise");

createSpan();
display(position);

leftButton.addEventListener("click", leftButtonClicked);
rightButton.addEventListener("click", rightButtonClicked);
suprise.addEventListener("click", supriseButtonClicked);

function createSpan() {
    for (let i = 0; i < array.length; i++) {
        parentMap.append(document.createElement("span"));
    }
}

function supriseButtonClicked() {
    let random = array.length - 1;
    if (random < 0 || random == -0) random = 0;
    position = Math.round(Math.random() * random);
    console.log(position);
    display(position);
}

function leftButtonClicked() {
    // console.log("left Clicked");
    display(getNext("left"));
}

function rightButtonClicked() {
    display(getNext("right"));
}

function getNext(button) {
    if (button == "left") position--;
    else if (button == "right") position++;
    if (position < 0) position = array.length - 1;
    else if (position > array.length - 1) position = 0;
}

function display() {
    showName.innerText = array[position].name;
    showImg.src = array[position].src;
    showJob.innerText = array[position].job;
    showWriting.innerText = array[position].writing;
    mapChange(position);
}

function mapChange(position) {
    const map = document.querySelectorAll("#map>span");
    for (let i = 0; i < map.length; i++) {
        let color = "";
        if (position == i) {
            color = "#056dff";
        } else if (position != i) {
            color = "grey";
        }
        map[i].style.backgroundColor = color;
    }
}