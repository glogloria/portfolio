// Project filtering
filterSelection("all") // initial filter set to all
function filterSelection(c) {
    let x = document.getElementsByClassName("filterDiv");
    
    if (c == "all") c = ""; // Sets c = to an empty string so all items match

    for (let i = 0; i < x.length; i++) { // adds or removes the show class based on if the element's class name contains category c
        removeClass(x[i], "show");
        removeClass(x[i], "active")
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show"); 
    }
}

// Show filtered elements
function addClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function removeClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while(arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

let btnContainer = document.querySelector(".btnContainer");
let buttons = btnContainer.getElementsByClassName("filterBtn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        let current = btnContainer.querySelector(".active");
        if (current) {
            current.classList.remove("active");
        }
        buttons[i].className.add("active");
    });
}

function makeBold() {

}

// Nav-bar background while scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});




// function makeBold(c) {
//     let buttons = document.getElementsByClassName("filterDiv");

//     for (let i = 0; i < buttons.length; i++) {
//         removeClass(buttons[i], "active")
//     }
//     addClass(document.activeElement, "active");
// }

// // Hoempage snowflakes
// const snowContainer = document.getElementById("snowflake-container");
// const numSnowflakes = 250;
// const snowFlakes = [];


// Turn project-card bold when hovered

const cards = document.getElementsByClassName("project-card");

for (let card of cards) {
    card.addEventListener('mouseover', () => {
        card.classList.add('box-shadow');
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('box-shadow');
    });
}

