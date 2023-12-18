/* friend-model */
const friendImg = document.querySelector(".friend-img");
const friendModal = document.querySelector("#friend");

friendImg.addEventListener("click", function () {
  friendModal.style.display = "block";
});

const friendCloseBtn = document.querySelector(".friend-close");
friendCloseBtn.addEventListener("click", function () {
  friendModal.style.display = "none";
});

/* christmas-model */
const christmasImg = document.querySelector(".christmas-img");
const christmasModal = document.querySelector("#christmas");

christmasImg.addEventListener("click", function () {
  christmasModal.style.display = "block";
});

const christmasCloseBtn = document.querySelector(".christmas-close");
christmasCloseBtn.addEventListener("click", function () {
  christmasModal.style.display = "none";
});

/* rabbit-model */
const rabbitImg = document.querySelector(".rabbit-img");
const rabbitModal = document.querySelector("#rabbit");

rabbitImg.addEventListener("click", function () {
  rabbitModal.style.display = "block";
});

const rabbitCloseBtn = document.querySelector(".rabbit-close");
rabbitCloseBtn.addEventListener("click", function () {
  rabbitModal.style.display = "none";
});

/* raccoon-model */
const raccoonImg = document.querySelector(".raccoon-img");
const raccoonModal = document.querySelector("#raccoon");

raccoonImg.addEventListener("click", function () {
  raccoonModal.style.display = "block";
});

const raccoonCloseBtn = document.querySelector(".raccoon-close");
raccoonCloseBtn.addEventListener("click", function () {
  raccoonModal.style.display = "none";
});
