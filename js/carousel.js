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
        }, 5000);
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
  