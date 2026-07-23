let buttons_pressed = 0;

const button = document.querySelector(".Dark-Mode");
button.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
    buttons_pressed += 1;
    if(buttons_pressed === 15){
        alert('Keep switching and you might trigger epilepsy');
        buttons_pressed = 0;
    }
});

