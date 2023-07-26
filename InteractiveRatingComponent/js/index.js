const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thankYou");
const submit = document.querySelector(".submit");
const choice = document.querySelectorAll(".choice");
const selectedRating = document.getElementById("selectedRating");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    thanks.classList.remove("hidden");
    rating.classList.add("hidden");
})

choice.forEach(theChosenOne => {
    theChosenOne.addEventListener("click", (event) => {
        event.preventDefault();
        selectedRating.innerHTML = theChosenOne.innerHTML;
    })
});
