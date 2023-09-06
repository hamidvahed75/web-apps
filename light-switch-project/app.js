// Hole mir Referenz zum Button und speichere in Variablen
const dark_mode_btn = document.querySelector("#dark_mode_btn");
const btn = document.querySelector(".btn");

// Den aktuellen Zustand des Textes zu speichern
let changedText = false;

dark_mode_btn.addEventListener("click", () => {

    // Mit ternären Operator den Zustand und den Text umkehren
    btn.innerHTML = changedText ? "Good Morning" : "Good Night";
    changedText = !changedText;
    
    btn.classList.toggle("box_shadow");
    
    document.body.classList.toggle("dark_mode");
})

