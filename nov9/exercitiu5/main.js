const main = document.querySelectorAll(".slide");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  if(current.nextElementSibling){
    current.nextElementSibling.classList.add("current");
  }else{
    main[0].classList.add("current");
  }
};

const previousSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");

  if(current.previousElementSibling){
    current.previousElementSibling.classList.add("current");
  }else{
    main[main.length - 1].classList.add("current");
  }
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", previousSlide);

setInterval(nextSlide, 3000);

