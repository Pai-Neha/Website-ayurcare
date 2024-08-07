let currentSlide = 1; // Initialize the current slide index

// Function to show a specific slide
function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex > slides.length) {
        currentSlide = 1;
    }
    if (slideIndex < 1) {
        currentSlide = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentSlide - 1].style.display = 'block';
}

// Function to show the previous slide
function prevSlide() {
    showSlide(currentSlide -= 1);
}

// Function to show the next slide
function nextSlide() {
    showSlide(currentSlide += 1);
}

// Show the initial slide
showSlide(currentSlide);

