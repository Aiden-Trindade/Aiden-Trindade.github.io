

const button1 = document.querySelector(".Dark-Mode");  
const Another_One = document.querySelector(".Another-One");
const Taglines = document.querySelector(".Taglines");   
const Remove = document.querySelector(".Remove"); 
const One_Liners = document.querySelector(".One-Liners");          //So the button can be accessed before the next if/else//


let mode = localStorage.getItem("theme");
if(mode === "dark"){                                          //Checks if light or dark mode was last one//
    document.body.classList.add("dark-mode");
    button1.innerHTML = "Enable Light Mode";
}else{
    document.body.classList.remove("dark-mode");
    button1.innerHTML = "Enable Dark Mode";
}

let buttons_pressed = 0;
button1.addEventListener("click",function(){
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



const arr1 = [
     "You've seen 4 taglines now. Statistically, you've spent more time here than on my actual projects.",
     "I appreciate the dedication but there's an About section down there too.",
     "At this point you know more of my jokes than my actual skills. Concerning.",
     "Bro just scroll down, there's an entire portfolio under here.",
     "Do it again and imma remove it off for you",
]

let buttons_pressed1 = 0;
let buttons_pressed2 = 0;



const arr = [
    "State-level debate champion. Will argue with you about literally anything, including this website.",
    "2nd place at a hackathon. 1st place at being funny.",
    "Fluent in English, French, Hindi, and mild sarcasm.",
    "Peaked at chess. Working on peaking at everything else.",
    "Currently deciding if this website counts as a real project.",
]

Taglines.textContent = arr[0];

Another_One.addEventListener("click",function(){
  if (buttons_pressed2 === 4) {
        buttons_pressed2 = 0;
        
        alert(arr1[buttons_pressed1]);

        if (buttons_pressed1 === 4) {
            buttons_pressed1 = 0;        
        } else {
            buttons_pressed1++;
        }
    } else {
        buttons_pressed2++;
    }

    Taglines.textContent = arr[buttons_pressed2];
});

Remove.addEventListener("click",function(){
    Taglines.textContent = "";
    document.body.classList.remove("Taglines");
    One_Liners.classList.add("Hide");
})