// Hole mir Referenz zum Button und speichere in Variablen
const dark_mode_btn = document.querySelector("#dark_mode_btn");
const btn = document.querySelector(".btn");

// Erstelle mir eine neue Variable um den aktuellen Zustand des Textes zu speichern
let textToggled = false;

dark_mode_btn.addEventListener("click", () => {

    // if (textToggled) {
    //     // Ist der Text bereits geändert, ändern ihn zurück
    //     btn.innerHTML = "Good Morning"
    // } else {
    //     // Ist der Text noch nict geändert, ändern ihn zurück
    //     btn.innerHTML = "Good Night"
    // }
    // // Den Zustand umkehren
    // textToggled = !textToggled;

    // Mit ternären Operator den Zustand und den Text umkehren
    btn.innerHTML = textToggled ? "Good Morning" : "Good Night";
    // Den Zustand umkehren
    textToggled = !textToggled;
    
    btn.classList.toggle("box_shadow");
    
    document.body.classList.toggle("dark_mode");
})

