terval(moverCarrusel, 7000);
const slides = document.querySelector(".slides");

const totalSlides = document.querySelectorAll(".slide").length;

let indice = 0;

function moverCarrusel(){

    indice++;

    slides.style.transition = "transform 1.5s ease";

    slides.style.transform = `translateX(-${indice * 100}%)`;

    if(indice === totalSlides - 1){

        setTimeout(() => {

            slides.style.transition = "none";

            indice = 0;

            slides.style.transform = `translateX(0%)`;

        }, 500);

    }

}

setInterval(moverCarrusel, 7000)