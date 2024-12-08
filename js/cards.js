



const hoverElements = document.querySelectorAll('.card');

// Define named event handler functions
function handleMouseOver(event) {
  const element = event.currentTarget;
  const popupId = element.getAttribute('data-popup');
  const popupCard = document.getElementById(popupId);
  const mainContainer = document.querySelector('.review-home-section');

  if (popupCard && mainContainer) {
    const rect = element.getBoundingClientRect();
    const mainRect = mainContainer.getBoundingClientRect();


    popupCard.style.top = `${rect.top + window.scrollY}px`;
    popupCard.style.left = `${rect.right + 10}px`;

 
    popupCard.style.display = 'block';
    const popupRect = popupCard.getBoundingClientRect();
    popupCard.style.display = 'none';

    const isOutOfMainRight = popupRect.right > mainRect.right;
    if (isOutOfMainRight) {
      popupCard.style.left = `${rect.left - popupRect.width - 10}px`;
    }

    popupCard.style.display = 'block';
  }
}

function handleMouseOut(event) {
  const element = event.currentTarget;
  const popupId = element.getAttribute('data-popup');
  const popupCard = document.getElementById(popupId);

  if (popupCard) {

    popupCard.style.display = 'none';
  }
}

hoverElements.forEach(element => {
  element.addEventListener('mouseover', handleMouseOver);
  element.addEventListener('mouseout', handleMouseOut);
});

function removeAllHoverListeners() {
  hoverElements.forEach(element => {
    element.removeEventListener('mouseover', handleMouseOver);
    element.removeEventListener('mouseout', handleMouseOut);
  });
}

//for playing video when hovered
const containers = document.querySelectorAll(".container");

function handlePlay() {
  const container = this;
  const video = container.querySelector("video");
  const rating = container.querySelector(".rating");
  const img = container.querySelector("img");
  container.style.transform = "scale(1.1)";
  video.style.opacity = "1";
  rating.style.opacity = "0";
  img.style.opacity = "0";
  video.play();
}

function handlePause() {
  const container = this;
  const video = container.querySelector("video");
  const rating = container.querySelector(".rating");
  const img = container.querySelector("img");
  container.style.transform = "scale(1)";
  video.style.opacity = "0";
  rating.style.opacity = "1";
  img.style.opacity = "1";
  video.pause();
}


function checkInView() {
  const viewportHeight = window.innerHeight;
  const viewportCenter = viewportHeight / 2;
  let closestContainer = null;
  let closestDistance = Infinity;

  containers.forEach((container) => {
    const rect = container.getBoundingClientRect();
    const containerCenter = rect.top + rect.height / 2;
    const distanceFromCenter = Math.abs(containerCenter - viewportCenter);

    // Find the container closest to the center
    if (distanceFromCenter < closestDistance) {
      closestDistance = distanceFromCenter;
      closestContainer = container;
    }
  });


  containers.forEach((container) => {
    if (container === closestContainer) {
      handlePlay.call(container);
    } else {
      handlePause.call(container);
    }
  });
}


function addmouseevent(){
  containers.forEach((container) => {
    const video = container.querySelector("video");
    const rating = container.querySelector(".rating");
    const img = container.querySelector("img");
    container.style.transform = "scale(1)";
    video.style.opacity = "0";
    rating.style.opacity = "1";
    img.style.opacity = "1";
    video.pause();
  window.removeEventListener("scroll", checkInView);
  container.addEventListener("mouseenter", handlePlay);
  container.addEventListener("mouseleave", handlePause);
  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.play();
  });
});
}

if (window.innerWidth < 1020) {
  window.addEventListener("scroll", checkInView);
  removeAllHoverListeners()
}else{
  addmouseevent();
  hoverElements.forEach(element => {
    element.addEventListener('mouseover', handleMouseOver);
    element.addEventListener('mouseout', handleMouseOut);
  });
}

window.addEventListener("resize", () => {
    if (window.innerWidth < 1020) {
      containers.forEach((container) => {
        container.removeEventListener("mouseenter", handlePlay);
        container.removeEventListener("mouseleave", handlePause);
        
    });
    window.addEventListener("scroll", checkInView);
    removeAllHoverListeners();
    }else{
      addmouseevent();
      hoverElements.forEach(element => {
        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseout', handleMouseOut);
      });
      window.removeEventListener("scroll", checkInView);
    }
  
});
