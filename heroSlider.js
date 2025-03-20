let currentIndex = 0;
const slides = document.querySelectorAll('.slide-header');
const totalSlides = slides.length;

function showNextSlide() {
    // Hide the current slide
    slides[currentIndex].classList.remove('active-header');
    
    // Move to the next slide
    currentIndex = (currentIndex + 1) % totalSlides;

    // Show the next slide
    slides[currentIndex].classList.add('active-header');
}

// Change slide every 5 seconds
setInterval(showNextSlide, 5000);