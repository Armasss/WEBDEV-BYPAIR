document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".left-column div p");

    // Toggle visibility for FAQ answers on click
    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            if (item.style.maxHeight) {
                item.style.maxHeight = null;
                item.style.color = "white";
            } else {
                item.style.maxHeight = "200px";
                item.style.color = "#ffd700";
            }
        });
    });


    // Carousel Logic
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    let currentSlideIndex = 0;
    const visibleCards = 5; // Number of visible cards
    const slideWidth = slides[0].getBoundingClientRect().width;

    const updateCarousel = () => {
        const maxSlideIndex = slides.length - visibleCards; // Index to stop at the last fully visible set
        const extraSpace = 1; // Allow space for the 11th card buffer
        const adjustedMaxSlideIndex = slides.length - visibleCards + extraSpace;

        track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;

        // Disable prev button if at the first slide
        if (currentSlideIndex === 0) {
            prevButton.disabled = true;
            prevButton.style.opacity = "0.5";
        } else {
            prevButton.disabled = false;
            prevButton.style.opacity = "1";
        }

        // Disable next button if at the last fully visible set
        if (currentSlideIndex >= adjustedMaxSlideIndex) {
            nextButton.disabled = true;
            nextButton.style.opacity = "0.5";
        } else {
            nextButton.disabled = false;
            nextButton.style.opacity = "1";
        }
    };

    nextButton.addEventListener('click', () => {
        const maxSlideIndex = slides.length - visibleCards + 1; // Stop at the last fully visible set with buffer
        if (currentSlideIndex < maxSlideIndex) {
            currentSlideIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateCarousel();
        }
    });

    // Initialize carousel
    updateCarousel();
});
