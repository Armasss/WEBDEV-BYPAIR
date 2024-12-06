


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
});


function toggleMenu() {
  const sidebar = document.querySelector('.burger_links');
  sidebar.classList.add('show');
}

function hideMenu() {
  const sidebar = document.querySelector('.burger_links');
  sidebar.classList.remove('show');
}

function closeMenuOnClickOutside(event) {
  const sidebar = document.querySelector('.burger_links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  
  if (!sidebar.contains(event.target) && !hamburgerIcon.contains(event.target)) {
      sidebar.classList.remove('show'); 
  }
}

const menuLinks = document.querySelectorAll(".burger_links a");
const sidebar = document.querySelector('.burger_links');

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });
});

document.addEventListener('click', closeMenuOnClickOutside);



const hoverElements = document.querySelectorAll('.card');

hoverElements.forEach(element => {
  element.addEventListener('mouseover', (event) => {
    const popupId = element.getAttribute('data-popup');
    const popupCard = document.getElementById(popupId);
    const mainContainer = document.querySelector('.main'); // Get the main container

    if (popupCard && mainContainer) {
      const rect = element.getBoundingClientRect();
      const mainRect = mainContainer.getBoundingClientRect(); // Get the boundaries of the main container

      // Set default popup position to the right of the hovered element
      popupCard.style.top = `${rect.top + window.scrollY}px`;
      popupCard.style.left = `${rect.right + 10}px`;

      // Display the popup card
      popupCard.style.display = 'block';

      const popupRect = popupCard.getBoundingClientRect();

      // Check if the popup goes outside the main container's right edge
      const isOutOfMainRight = popupRect.right > mainRect.right;

      if (isOutOfMainRight) {
        // If the popup goes out of bounds, move it to the left of the hovered element
        popupCard.style.left = `${rect.left - popupRect.width - 10}px`; // Position to the left

      }
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

/* Index JS */
document.addEventListener("DOMContentLoaded", () => {
  const indexGames = document.querySelectorAll(".index-game-carousel");
  const gameTitleElement = document.querySelector("#index-game-title");
  const leftBtn = document.querySelector("#index-left-btn");
  const rightBtn = document.querySelector("#index-right-btn");
  const indexWords = document.querySelectorAll(".index-word");

  let currentGameIndex = 0;
  let currentImageIndex = 0;
  let currentWordIndex = 0;
  let imageInterval;

  // Update game title dynamically
  function updateGameTitle() {
      const currentGame = indexGames[currentGameIndex];
      const gameTitle = currentGame.getAttribute("data-title");
      gameTitleElement.textContent = gameTitle;

      // Trigger slide-in animation
      gameTitleElement.style.animation = "none";
      setTimeout(() => {
          gameTitleElement.style.animation = "title-slide-in 0.8s ease forwards";
      }, 10);
  }

  // Show a specific image within a game
  function showImage(gameIndex, imageIndex) {
      const images = indexGames[gameIndex].querySelectorAll("img");
      images.forEach((img, i) => img.classList.toggle("active", i === imageIndex));
  }

  // Start cycling images for the active game
  function startImageCycle() {
      clearInterval(imageInterval);
      const images = indexGames[currentGameIndex].querySelectorAll("img");
      currentImageIndex = 0;
      showImage(currentGameIndex, currentImageIndex);

      imageInterval = setInterval(() => {
          currentImageIndex = (currentImageIndex + 1) % images.length;
          showImage(currentGameIndex, currentImageIndex);
      }, 3000);
  }

  // Start cycling words for cinematic text
  function startCinematicText() {
      setInterval(() => {
          indexWords.forEach((word, i) => {
              word.classList.toggle("index-yellow", i === currentWordIndex);
          });
          currentWordIndex = (currentWordIndex + 1) % indexWords.length;
      }, 2000);
  }

  // Show a specific game
  function showGame(index) {
      indexGames.forEach((game, i) => game.classList.toggle("active", i === index));
      updateGameTitle();
      startImageCycle();
  }

  // Event listeners for navigation
  rightBtn.addEventListener("click", () => {
      currentGameIndex = (currentGameIndex + 1) % indexGames.length;
      showGame(currentGameIndex);
  });

  leftBtn.addEventListener("click", () => {
      currentGameIndex = (currentGameIndex - 1 + indexGames.length) % indexGames.length;
      showGame(currentGameIndex);
  });

  // Initialize
  showGame(currentGameIndex);
  startCinematicText();
});
