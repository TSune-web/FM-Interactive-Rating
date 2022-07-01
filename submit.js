const form = document.getElementsByTagName("form")[0];
const inputs = document.querySelectorAll("input");
const rate = document.getElementById("rate");
const ratingState = document.getElementById("ratingState");
const thankyouState = document.getElementById("thankyouState");
let selected = "";

/***
 *
 * code below is used with radio buttons
 *
 ***/

// When selected, access radio buttons by:
// let selectedRating = form.rating.value

// function selectRateHandler() {
//   const selected = form.rating.value;
// };

window.addEventListener("load", (e) => {
  const selectRateHandler = inputs.forEach((input) => {
    input.addEventListener("click", function (e) {
      form.classList.remove("error");

      rate.innerText = form.rating.value;
      selected = form.rating.value;
    });
  });

  const submitFormHandler = form.addEventListener("submit", function (e) {
    if (selected === "") {
      form.classList.add("error");
    } else {
      ratingState.classList.add("submitted");
      thankyouState.classList.add("submitted");
    }
    e.preventDefault();
    e.stopPropagation();
  });
});

/***
 *
 * code below is used with span tags in HTML
 *
 ***/

// const selectRateHandler = form.querySelectorAll("span").forEach((span) => {
//   span.addEventListener("click", function (e) {
//     removeAllSelectedClasses();

//     e.target.classList.add("selected");
//     form.classList.remove("error");

//     rate.innerText = e.target.getAttribute("data-id");
//     selected = rate.innerText;
//   });
// });

// function removeAllSelectedClasses() {
//   form.querySelectorAll("span").forEach((span) => {
//     span.classList.remove("selected");
//   });
// }

// const submitFormHandler = form.addEventListener("submit", function (e) {
//   if (selected === "") {
//     form.classList.add("error");
//   } else {
//     ratingState.classList.add("submitted");
//     thankyouState.classList.add("submitted");
//   }
//   e.preventDefault();
//   e.stopPropagation();
// });
