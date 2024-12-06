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

    // Highlight the right column if the game title matches
    const details = document.querySelector(".right-column");
    const header = document.querySelector(".left-column h1");

    if (header.textContent === "Red Dead Redemption 2") {
        details.style.boxShadow = "0 4px 15px rgba(255, 215, 0, 0.7)";
    }
});

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentSlideIndex = 0;

const updateCarousel = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
};

nextButton.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
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
