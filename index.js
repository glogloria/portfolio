// Project filtering
filterSelection("all") // initial filter set to all
function filterSelection(c) {
    let x = document.getElementsByClassName("filterDiv");
    
    if (c === "all") {
        for (let i = 0; i < x.length; i++) {
            addClass(x[i], "show");
        }
    } else {
        for (let i = 0; i < x.length; i++) { // adds or removes the show class based on if the element's class name contains category c
            removeClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) addClass(x[i], "show"); 
        }
    }
     makeBold(c)
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

// Bold applied filters
function makeBold(c) {
    const buttons = document.getElementsByClassName('filterBtn');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
        if (buttons[i].getAttribute('data-filter') === c) {
            buttons[i].classList.add('active');
        }
    }
}




// Nav-bar background while scrolling
const header = document.getElementsByClassName('header')[0];

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
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
    })

    card.addEventListener('mouseout', () => {
        card.classList.remove('box-shadow');
    });
}

