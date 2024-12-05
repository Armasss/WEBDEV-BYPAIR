


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