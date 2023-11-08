/*
const red = document.body.querySelector(".red");
const blue = document.body.querySelector(".blue");

const win = window.addEventListener("keydown", (ev) => {
    if(ev.keyCode === 37){
       red.classList.add("blue");
    } else if (ev.keyCode === 39){
        blue.classList.remove("blue");
        blue.classList.add("red");
    }
});
*/
const boy = document.getElementById('boy');
const getDistance = () => {return window.parseInt(boy.style.transform.replace('translateX(', ''), 10) || 0;};

const moveRight = () =>{
    window.addEventListener("keydown", (ev) => {
        if(ev.key === 'ArrowUp'){
            boy.classList.add("jump");

        }
        else if(ev.key === 'ArrowRight'){
            const distX = getDistance() + 30;
            boy.style.transform = `translateX(${distX}px) rotateY(0deg)` 
            boy.classList.add("jump");
        } 
        else if(ev.key === 'ArrowLeft'){
            const distY = getDistance() + -30;
            boy.style.transform = `translateX(${distY}px) rotateY(180deg)` 
            boy.classList.add("jump");
        }
    });

    boy.addEventListener("animationend", () => {
        boy.classList.remove("jump");
    });

    console.log(getDistance());
}

moveRight();



const moving = () => { 
    window.addEventListener("keydown", (ev) => {
        if(ev.key === 'ArrowLeft'){
            boy.classList.toggle("jump");
        } 
    });

    boy.addEventListener("animationend", () => {
        boy.classList.remove("jump");
    });
}