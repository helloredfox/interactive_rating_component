let form = document.querySelector(".my-form");
let ratingSpan = document.querySelector('.selected-rating');
let ratingSection = document.querySelector('.rating-section');
let thankYouSection = document.querySelector('.thank-you-section');
form.addEventListener("submit", 
    e => {
    //this prevents the form from submitting, but also the page from refreshing
    e.preventDefault();
    //handle form submission here
    ratingSection.classList.add('hidden');
    thankYouSection.classList.remove('hidden');
    console.log("i submitted");
    let checkedButtonValue= document.querySelector('input[type="radio"]:checked').value;
    if(checkedButtonValue !== null) {
        ratingSpan.innerHTML = checkedButtonValue;
    }
}
, false);