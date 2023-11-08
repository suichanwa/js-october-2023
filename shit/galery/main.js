const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach((panel) => {
    console.log(panel);
    panel.addEventListener("click", (ev) => {
        console.log(ev.target);
        panel.classList.toggle("open");
        panel.classList.toggle("open-active");
    });
})

