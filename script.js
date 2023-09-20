let currentSlide = 0;

// Função para mostrar o slide atual
function showSlide(slideIndex) {
    const slides = document.querySelectorAll(".conteiner");
    if (slideIndex >= slides.length) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

// Evento de clique no botão "Anterior"
document.getElementById("prev").addEventListener("click", () => {
    currentSlide--;
    showSlide(currentSlide);
});

// Evento de clique no botão "Próximo"
document.getElementById("next").addEventListener("click", () => {
    currentSlide++;
    showSlide(currentSlide);
});

// Inicialize o carrossel mostrando o primeiro slide
showSlide(currentSlide);