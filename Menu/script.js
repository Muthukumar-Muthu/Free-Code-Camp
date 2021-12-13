const menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

window.addEventListener("DOMContentLoaded", showAll);

const buttons = document.querySelector(".filter-buttons");
const contentContainer = document.querySelector(".content-container");
buttons.addEventListener("click", function(e) {
    if (e.target.classList.contains("btn")) {
        show(e.target.innerText);
    }
});

function show(string) {
    const content = document.querySelectorAll(".content");
    if (string == "All") {
        content.forEach(function(value) {
            value.style.display = "inline";
        });
    } else {
        content.forEach(function(value) {
            const datasetCategory = value.firstElementChild.dataset.category;
            if (datasetCategory.toLowerCase() === string.toLowerCase()) {
                console.log(value.firstElementChild.dataset.category);
                value.style.display = "inline";
            } else {
                value.style.display = "none";
            }
        });
    }
}

let i = 0;

function inc() {
    return i++;
}

function showAll(e) {
    menu.forEach((value) => {
        const div = document.createElement("div");
        div.className = "content";
        div.innerHTML = `<div class="single-content" data-category =  ${
      value.category
    } id = a${inc()}  >
                    <div class="img">
                        <img src="${value.img}" alt="pancakes">
                    </div>
                    <div class="price-name-details">
                        <div class="price-name">
                            <h4 class="name">${value.title}</h4>
                            <div class="price">$ ${value.price}</div>
                        </div>
                        <div class="details">
                           ${value.desc}
                        </div>
                    </div>
                </div>
            `;
        contentContainer.appendChild(div);
    });
}