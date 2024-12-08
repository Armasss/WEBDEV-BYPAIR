/* Main JS */
document.addEventListener("DOMContentLoaded", () => {
    const games = document.querySelectorAll(".game-carousel");
    const gameTitleElement = document.querySelector("#game-title");
    const leftBtn = document.querySelector("#left-btn");
    const rightBtn = document.querySelector("#right-btn");
    const words = document.querySelectorAll(".word");
  
    let currentGameIndex = 0;
    let currentImageIndex = 0;
    let currentWordIndex = 0;
    let imageInterval;
  
    // Update game title dynamically
    function updateGameTitle() {
        const currentGame = games[currentGameIndex];
        const gameTitle = currentGame.getAttribute("data-title");
        gameTitleElement.textContent = gameTitle;
        gameTitleElement.style.fontWeight = "900";
  
        // Trigger slide-in animation
        gameTitleElement.style.animation = "none";
        setTimeout(() => {
            gameTitleElement.style.animation = "title-slide-in 0.8s ease forwards";
        }, 10);
    }
  
    // Show a specific image within a game
    function showImage(gameIndex, imageIndex) {
        const images = games[gameIndex].querySelectorAll("img");
        images.forEach((img, i) => img.classList.toggle("active", i === imageIndex));
    }
  
    // Start cycling images for the active game
    function startImageCycle() {
        clearInterval(imageInterval);
        const images = games[currentGameIndex].querySelectorAll("img");
        currentImageIndex = 0;
        showImage(currentGameIndex, currentImageIndex);
  
        imageInterval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentGameIndex, currentImageIndex);
        }, 1800);
    }
  
    // Start cycling words for cinematic text
    function startCinematicText() {
        setInterval(() => {
            words.forEach((word, i) => {
                word.classList.toggle("yellow", i === currentWordIndex);
            });
            currentWordIndex = (currentWordIndex + 1) % words.length;
        }, 2000);
    }
  
    // Show a specific game
    function showGame(index) {
        games.forEach((game, i) => game.classList.toggle("active", i === index));
        updateGameTitle();
        startImageCycle();
    }
  
    // Event listeners for navigation
    rightBtn.addEventListener("click", () => {
        currentGameIndex = (currentGameIndex + 1) % games.length;
        showGame(currentGameIndex);
    });
  
    leftBtn.addEventListener("click", () => {
        currentGameIndex = (currentGameIndex - 1 + games.length) % games.length;
        showGame(currentGameIndex);
    });
  
    // Initialize
    showGame(currentGameIndex);
    startCinematicText();
});
