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
    if (random < 0) random = 0;
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

/*
                                            Event Delegation
there are two phases of event delegation
    1 Bubbling (default)
    2 Capturing
Bubbling means event is moved from lowest level element to highest level and the event is fired if it 
associated with respective elements

Capturing means event is moved from highest level element to lowest level element and the event is fired if it 
associated with respective elements

<ul>
    <li><button class="delete"></button></li>
    <li><button class="delete"></button></li>
    <li><button class="delete"></button></li>
    <li><button class="delete"></button></li>
    <li><button class="delete"></button></li>
</ul>

Not the acutal code just for reference

    1) add event listenr to ul
        ul.addevent("click",fun)
        function fun(e){
            const child = e.target  --> #1
        }
    2) now when we click on the button element, the click event will move to top parent element and if
        parent has a click event,then it is executed
    3) now parent ul has a click event. So it fire that function fun.
    4) the event is moved from button (child) to ul (parent)
    5) now the e.target will always return the acutal element that trigger that event
    6) now child will be delete 
    7) so from this we can understand that
        we have clicked on button
        but we dont have any event on that button
        so the default event delegation is bubbling
        so if any event is associated with immediate parent (li) will fire
        since li does not have any click event, nothing fires
        and the click event associated with immediate parent of li which is ul
        is fired
        now ul click event will fire
        this is an example of bubbling
    8) we can add cpaturing phase also
         for that use true as arugment in the addeventlistner
            addEvent(event-type,function-to-be-triggered,useCaputre) --> to use capture use true 
                                                                         if not then false (defualt)

*/