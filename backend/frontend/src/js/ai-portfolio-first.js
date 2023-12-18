/* cat-model */
const catImg = document.querySelector(".cat-img");
const catModal = document.querySelector("#cat");

catImg.addEventListener("click", function () {
  catModal.style.display = "block";
});

const catCloseBtn = document.querySelector(".cat-close");
catCloseBtn.addEventListener("click", function () {
  catModal.style.display = "none";
});

/* dolphin-model */
const dolphinImg = document.querySelector(".dolphin-img");
const dolphinModal = document.querySelector("#dolphin");

dolphinImg.addEventListener("click", function () {
  dolphinModal.style.display = "block";
});

const dolphinCloseBtn = document.querySelector(".dolphin-close");
dolphinCloseBtn.addEventListener("click", function () {
  dolphinModal.style.display = "none";
});

/* travel-model */
const travelImg = document.querySelector(".travel-img");
const travelModal = document.querySelector("#travel");

travelImg.addEventListener("click", function () {
  travelModal.style.display = "block";
});

const travelCloseBtn = document.querySelector(".travel-close");
travelCloseBtn.addEventListener("click", function () {
  travelModal.style.display = "none";
});

/* winter-model */
const winterImg = document.querySelector(".winter-img");
const winterModal = document.querySelector("#winter");

winterImg.addEventListener("click", function () {
  winterModal.style.display = "block";
});

const winterCloseBtn = document.querySelector(".winter-close");
winterCloseBtn.addEventListener("click", function () {
  winterModal.style.display = "none";
});
