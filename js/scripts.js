


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



