const container = document.querySelector(".container");
const imgs = document.querySelectorAll(".imgs");
const main = document.querySelector("#current");

imgs.forEach((img) => {
  img.addEventListener("click", (ev) => {
    main.src = ev.target.src;
  });
});
