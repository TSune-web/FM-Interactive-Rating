const form = document.getElementsByTagName("form")[0];
const rate = document.getElementById("rate");
const ratingState = document.getElementById("ratingState");
const thankyouState = document.getElementById("thankyouState");
let selected = "";

const selectRateHandler = form.querySelectorAll("span").forEach((span) => {
  span.addEventListener("click", function (e) {
    removeAllSelectedClasses();

    e.target.classList.add("selected");
    form.classList.remove("error");

    rate.innerText = e.target.getAttribute("data-id");
    selected = rate.innerText;
  });
});

function removeAllSelectedClasses() {
  form.querySelectorAll("span").forEach((span) => {
    span.classList.remove("selected");
  });
}

const submitFormHandler = form.addEventListener("submit", function (e) {
  if (selected === "") {
    form.classList.add("error");
  } else {
    ratingState.classList.add("submitted");
    thankyouState.classList.add("submitted");
  }
});
