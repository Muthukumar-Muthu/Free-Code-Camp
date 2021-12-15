const clearAll = document.querySelector(".clear-all");
const form = document.querySelector("form");
const notification = document.querySelector("#notification");
const input = document.querySelector("#input");
const items = document.querySelector(".items");
const itemsWithButtons = document.querySelector(".items-with-button");
const submit = document.querySelector("#submit");
var remeber;

input.addEventListener("change", function() {
    checkInput();
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let returnValue = checkInput();
    if (!returnValue) {
        showNotification("Please enter the value", "red");
        return false;
    } else {
        showNotification("Item added to list", "green");

        if (e.target.lastElementChild.innerText.includes("Submit")) {
            add(input.value);

            clearInput();
        }
    }
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let returnValue = checkInput();
    if (!returnValue) return false;
    if (e.target.lastElementChild.innerText.includes("edit")) {
        remeber.firstElementChild.innerHTML = input.value;
        submit.innerText = "Submit";

        showNotification("Value changed", "green");
        clearInput();
    }
});

items.addEventListener("click", function(e) {
    editOrDelete(e);
});

clearAll.addEventListener("click", function() {
    items.innerText = "";
    showNotification("Empty list", "red");
});

function checkInput() {
    if (input.value) {
        return true;
    } else {
        return false;
    }
}

function clearInput() {
    input.value = "";
}

function add(string) {
    const span = createSpan("content");
    span.innerText = string;
    const div = document.createElement("div");
    div.className = "single-content";
    div.append(span, addButtons());
    items.appendChild(div);
}

function createSpan(string) {
    const span = document.createElement("span");
    span.className = string;
    return span;
}

function addButtons() {
    const edit = createSpan("edit");
    edit.innerHTML = '<i class="fas fa-edit"></i>';
    const deleteButton = createSpan("delete");
    deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    const buttons = createSpan("buttons");
    buttons.append(edit, deleteButton);
    return buttons;
}

function editOrDelete(e) {
    const list = e.target.classList;
    list.forEach(function(value) {
        if (value.includes("trash")) {
            const singleContent = e.target.parentElement.parentElement.parentElement;
            singleContent.remove();
            showNotification("Item removed", "red");
        } else if (value.includes("edit")) {
            const valueToInput =
                e.target.parentElement.parentElement.parentElement.innerText;
            remeber = e.target.parentElement.parentElement.parentElement;
            input.value = valueToInput;
            submit.innerText = "edit";
        }
    });
    // delete buttons
}

function showNotification(string, color) {
    notification.innerText = string;
    if (color == "red") {
        notification.classList.remove("green");
        notification.className = "red";
    } else {
        notification.classList.remove("red");
        notification.className = "green";
    }

    setTimeout(() => {
        notification.innerText = "";
        notification.classList.remove("red");
        notification.classList.remove("green");
    }, 1000);
}