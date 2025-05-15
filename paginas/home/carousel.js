const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const markerSliders = document.querySelector(".sliders-markers");
const markers = markerSliders.querySelectorAll("div");
const colorMarker = "#FEC00A";
const colorWhite = "#ffffff";
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
function setMarkers(markers) {
    markers.forEach((element,index) => {
        element.addEventListener("click",()=>{
            goToSlide(index)
            element.style.backgroundColor=colorMarker;
            markers.forEach(e => {
                if (e!= element) {
                    e.style.backgroundColor=colorWhite;
                }
                
            });
        })
    });
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
setInterval(nextSlide, 10000); 
setMarkers(markers);