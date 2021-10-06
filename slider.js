let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");

let interval = window.setInterval(slide,1750);

function slide(){
    
    let imgSize = slides[0].width;
    slider.style.transform = 'translateX($imgSize + "px")';
    slider.appendChild(slides[0]);
    slides = document.querySelectorAll(".slide");
}