
const imgContainers = document.querySelectorAll('.img-ctn');
let currentIndex = 0;
let intervalId;


function cycleImages() {

  imgContainers.forEach((img) => img.classList.remove('active'));
  imgContainers[currentIndex].classList.add('active');
  currentIndex = (currentIndex + 1) % imgContainers.length; 
}


function startImageCycleIfNeeded() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 870) {
    if (!intervalId) {
      imgContainers[currentIndex].classList.add('active');
      intervalId = setInterval(cycleImages, 3000); 
    }
  } else {

    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null; 
    }
  }
}

startImageCycleIfNeeded();

window.addEventListener('resize', startImageCycleIfNeeded);