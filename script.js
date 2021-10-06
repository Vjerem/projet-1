const burger = document.querySelector("div.burger");
const menu = document.querySelector("div.menuBurger");
burger.addEventListener("click",function(){
    menu.style.display = "block";
})
const crossIcon = document.querySelector("svg.crossIcon");
crossIcon.addEventListener("click",function(){
    menu.style.display = "none";
    burger.style.display = ""
})