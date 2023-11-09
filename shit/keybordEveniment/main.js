const boy = document.getElementById('boy');
const getDistance = () => {return window.parseInt(boy.style.transform.replace('translateX(', ''), 10) || 0;};
let distX = getDistance() + 30;
let distY = getDistance() + -30;
const screenWidth = window.innerWidth;


const moving = () =>{
    window.addEventListener("keydown", (ev) => {
        if(ev.key === 'ArrowUp'){
            boy.classList.add("jump");

        }
        else if(ev.key === 'ArrowRight'){
            distX = getDistance() + 30;
            if (distX > screenWidth) {
                distX = screenWidth;
            }
            boy.style.transform = `translateX(${distX}px) rotateY(0deg)` 
            boy.classList.add("jump");
        } 
        else if(ev.key === 'ArrowLeft'){
            distY = getDistance() + -30;
            if (distY < 0) {
                distY = 0;
            }
            boy.style.transform = `translateX(${distY}px) rotateY(180deg)` 
            boy.classList.add("jump");
        }
        checkBorders();
    });

    boy.addEventListener("animationend", () => {
        boy.classList.remove("jump");
    });

    const checkBorders = () => {
        const playerX = boy.getBoundingClientRect().left;

        if (playerX < 0) {
            distY = 0;
        } else if (playerX > screenWidth) {
            distX = screenWidth;
        } else {
            distX = 0;
        }
    };
}
moving();
