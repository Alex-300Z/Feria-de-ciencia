
const slides = document.querySelector(".slides");
const tarjetas = document.querySelectorAll(".slide");
let indice = 0;

function moverCarrusel() {
    indice++;

    slides.style.transition = "transform 1.5s ease";
    slides.style.transform = `translateX(-${indice * 100}%)`;

    if (indice === tarjetas.length - 1) {
        setTimeout(() => {
            slides.style.transition = "none"; 
            indice = 0;                     
            slides.style.transform = "translateX(0%)"; 
        }, 2000); 
    }
}


setInterval(moverCarrusel, 5000);