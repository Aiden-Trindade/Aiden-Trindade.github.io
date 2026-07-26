let buttons_pressed = 0;

let mode = localStorage.getItem("theme");
if(mode === "dark"){                                          //Checks if light or dark mode was last one//
    document.body.classList.add("dark-mode");
}

const button1 = document.querySelector(".Dark-Mode");
button1.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");

    const IsDark = document.body.classList.contains("dark-mode");
    if(IsDark){
        localStorage.setItem("theme","dark");                         //Self explanatory, boolean valuse to switch from light to dark//
        button1.innerHTML = "Enable Light Mode";
    }else{
        localStorage.setItem("theme","light");
        button1.innerHTML = "Enable Dark Mode";
    }

    

    buttons_pressed += 1;
    if(buttons_pressed === 15){
        alert('Keep switching and you might trigger epilepsy');
        buttons_pressed = 0;
    }
});

