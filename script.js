let form = document.querySelector(".my-form");
let ratingSpan = document.querySelector('.selected-rating');
let ratingSection = document.querySelector('.rating-section');
let thankYouSection = document.querySelector('.thank-you-section');
form.addEventListener("submit", 
(e) => {
    //get rating value
    e.preventDefault();
    ratingSection.classList.add('hidden');
    thankYouSection.classList.remove('hidden');
    console.log("i submitted");
    let checkedButtonValue= document.querySelector('input[type="radio"]:checked').value;
    if(checkedButtonValue !== null) {
        ratingSpan.innerHTML = checkedButtonValue;
    }
}
, false);