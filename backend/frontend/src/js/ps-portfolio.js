/* bread-model */
const breadImg = document.querySelector(".bread-img");
const breadModal = document.querySelector("#bread");

breadImg.addEventListener("click", function () {
  breadModal.style.display = "block";
});

const breadCloseBtn = document.querySelector(".bread-close");
breadCloseBtn.addEventListener("click", function () {
  breadModal.style.display = "none";
});

/* ratatouille-model */
const ratatouilleImg = document.querySelector(".ratatouille-img");
const ratatouilleModal = document.querySelector("#ratatouille");

ratatouilleImg.addEventListener("click", function () {
  ratatouilleModal.style.display = "block";
});

const ratatouilleCloseBtn = document.querySelector(".ratatouille-close");
ratatouilleCloseBtn.addEventListener("click", function () {
  ratatouilleModal.style.display = "none";
});

/* ret's_cafe-model */
const rets_cafeImg = document.querySelector(".rets_cafe-img");
const rets_cafeModal = document.querySelector("#rets_cafe");

rets_cafeImg.addEventListener("click", function () {
  rets_cafeModal.style.display = "block";
});

const rets_cafeCloseBtn = document.querySelector(".rets_cafe-close");
rets_cafeCloseBtn.addEventListener("click", function () {
  rets_cafeModal.style.display = "none";
});
