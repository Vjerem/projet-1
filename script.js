const burger = document.querySelector("div.burger");
const menu = document.querySelector("div.menuBurger");
burger.addEventListener("click",function(){
    menu.style.display = "block";
})
const crossIcon = document.querySelector("svg.crossIcon");
crossIcon.addEventListener("click",function(){
    menu.style.display = "none";
    burger.style.display = "";
})

let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");

let interval = window.setInterval(slide,1000);
//slide
function slide(){
    
    let imgSize = slides[0].width;
    slider.style.transform = 'translateX($imgSize + "px")';
    slider.appendChild(slides[0]);
    slides = document.querySelectorAll(".slide");
}