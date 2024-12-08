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

    const slideWidth = slides[0].getBoundingClientRect().width;

    // Determine visible cards and max cards based on screen size
    const isPhone = window.matchMedia("(max-width: 767px)").matches;
    const visibleCards = isPhone ? 1 : 5; // Phones: 1 card, Others: 5 cards
    const maxCards = isPhone ? 10 : 11; // Phones: 10 cards, Others: 11 cards

    const updateCarousel = () => {
        const maxSlideIndex = maxCards - visibleCards; // Limit scrolling to max cards

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
        if (currentSlideIndex >= maxSlideIndex) {
            nextButton.disabled = true;
            nextButton.style.opacity = "0.5";
        } else {
            nextButton.disabled = false;
            nextButton.style.opacity = "1";
        }
    };

    nextButton.addEventListener('click', () => {
        const maxSlideIndex = maxCards - visibleCards; // Stop at the last valid slide
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
