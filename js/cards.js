



const hoverElements = document.querySelectorAll('.card');

hoverElements.forEach(element => {
  element.addEventListener('mouseover', (event) => {
    const popupId = element.getAttribute('data-popup');
    const popupCard = document.getElementById(popupId);
    const mainContainer = document.querySelector('.review-home-section'); // Get the main container

    if (popupCard && mainContainer) {
      const rect = element.getBoundingClientRect();
      const mainRect = mainContainer.getBoundingClientRect(); // Get the boundaries of the main container

      // Set default popup position to the right of the hovered element
      popupCard.style.top = `${rect.top + window.scrollY}px`;
      popupCard.style.left = `${rect.right + 10}px`;

      // Display the popup card

      popupCard.style.display = 'block';
      const popupRect = popupCard.getBoundingClientRect();
      popupCard.style.display = 'none';

      // Check if the popup goes outside the main container's right edge
      const isOutOfMainRight = popupRect.right > mainRect.right;

      if (isOutOfMainRight) {
        // If the popup goes out of bounds, move it to the left of the hovered element
        popupCard.style.left = `${rect.left - popupRect.width - 10}px`; // Position to the left

      }
      popupCard.style.display = 'block';
    }
  });

  element.addEventListener('mouseout', () => {
    const popupId = element.getAttribute('data-popup');
    const popupCard = document.getElementById(popupId);

    if (popupCard) {
      // Hide the popup card
      popupCard.style.display = 'none';
    }
  });
});

//for playing video when hovered
const container = document.querySelectorAll(".container");

container.forEach((container) => {
  const video = container.querySelector("video");



  container.addEventListener("mouseenter", () => {
    video.currentTime = 0; // Start video from the beginning
    video.play();
  });

  container.addEventListener("mouseleave", () => {
    video.pause();
  });  
  
  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.play();
  });
});
