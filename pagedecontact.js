
let modal = document.querySelector("#myModal");

let form = document.querySelector("form");

let span = document.querySelector(".close");

// quand l'utilisateur clique sur le bouton, le pop up s'ouvre 

form.addEventListener("submit", function (evt){
  evt.preventDefault()
  modal.style.display = "block";
})

//preventDefault annule la fonction de base d'un élement

// quand l'utilisation clique sur la croix, la fenetre se ferme
span.addEventListener("click",function(){
  modal.style.display = "none";
})
