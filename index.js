const abilCard = document.querySelectorAll('.abilityCard');

abilCard.forEach((card)=>{

function cardGrow (){
    if(card.classList.contains("passive")){
    card.classList.remove("passive");
    card.classList.add("active");
    card.style.transform = "scale(1.2)";
    card.style.zIndex = "10";
    }
    else if(card.classList.contains("active")){
    card.classList.remove("active");
    card.classList.add("passive");
        card.style.transform = "scale(1)";
        card.style.zIndex = "5";
    }
}


    card.addEventListener("click", cardGrow)
});