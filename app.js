const menuButton = document.querySelector(".open-menu");
const menuGroup = document.querySelector(".menu-group");
const closeButton = document.querySelector(".close-menu");

menuButton.addEventListener("click", openMeu);
closeButton.addEventListener("click", closeMenu);

let lock = false;

function openMeu(){
    if( !lock){
        lock = true;
        menuGroup.style.display = "block";
        lock = false
    }
}

function closeMenu(){
    if(!lock){
        lock = true;
        menuGroup.style.display = "none";
        lock = false;
    }
}

// card active state


// const skillCards = document.querySelectorAll(".card");

// function addActiveClass(card){
//     if(!card.classList.contains("active")){
//         card.classList.add("active");
//     }
    
// }

// function removeActiveClass(card){
//     if(!card.classList.contains("active")){
//         card.classList.remove("active")
//     }
    
// }

// skillCards.forEach((card, index) => {
//     card.addEventListener("click", () =>{
//         if(index > 0){
//             removeActiveClass(card[index - 1]);
//         }
//         addActiveClass(card);

//     })


// })
