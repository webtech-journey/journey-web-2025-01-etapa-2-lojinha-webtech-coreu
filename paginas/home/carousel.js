const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

let currentSlide = 0;

function goToSlide(index) {
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
  currentSlide = index;
}

function nextSlide() {
  goToSlide((currentSlide + 1) % carouselItems.length);
}

function prevSlide() {
  goToSlide((currentSlide - 1 + carouselItems.length) % carouselItems.length);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);


// Automatizar a troca de slides
setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos