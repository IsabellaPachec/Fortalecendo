document.addEventListener('DOMContentLoaded', function () {
    // Selecione elementos do carrossel
    const testimonialContainer = document.querySelector('.testimonial-carousel-container');
    const testimonials = testimonialContainer.querySelectorAll('.carousel-testimonial');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    let currentIndex = 0;
  
    // Função para mostrar o depoimento atual
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        if (i === index) {
          testimonial.classList.add('active');
        } else {
          testimonial.classList.remove('active');
        }
      });
    }
  
    // Evento de clique no botão "Anterior"
    testimonialContainer.querySelector('.prev').addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    });
  
    // Evento de clique no botão "Próximo"
    testimonialContainer.querySelector('.next').addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    });
  
    // Adicione event listeners aos dots (pontos) para navegação direta
    testimonialDots.forEach((dot, index) => {
      dot.addEventListener('click', function () {
        currentIndex = index;
        showTestimonial(currentIndex);
      });
    });
  
    // Inicialize o carrossel mostrando o primeiro depoimento
    showTestimonial(currentIndex);
  });