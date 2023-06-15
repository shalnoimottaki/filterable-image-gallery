// Select all filter buttons and filtrable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filtrable_cards .card");
// console.log(filterButtons,filterableCards);

//Define the filterCards function
const filterCards = (e)=>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
// console.log(e.target);
    // iterate over each filterCards card
    filterableCards.forEach(card=>{
        // Add "hide" class to hide the card initially
        card.classList.add("hide");
        // Check if the cards matches the selector filter or "all" is selected
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name ==="all"){
            card.classList.remove("hide");
        }
    })
}
// Add click event listener to each filter button
filterButtons.forEach(button=>button.addEventListener("click", filterCards))