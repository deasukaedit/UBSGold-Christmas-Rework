document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burgerMenu");
  const menu = document.getElementById("menu");
  const bars = burgerMenu.getElementsByClassName("bar");
  const headerText = document.querySelector(".header-text");

  burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("active");

    bars[0].classList.toggle("rotate1");
    bars[1].classList.toggle("fade");
    bars[2].classList.toggle("rotate2");

    headerText.classList.toggle("hidden");
  });
});

const targetElement = document.querySelector(".header-text");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-up");
        entry.target.classList.remove("hidden");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(targetElement);

let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const carousel = document.querySelector(".carousel");
  carousel.style.transition = "transform 1s ease-in-out";
  carousel.style.transform = `translateX(-${currentIndex * 50}%)`;
}

setInterval(() => moveSlide(1), 3000);

document.addEventListener("DOMContentLoaded", function () {
  const rowTop = document.querySelector(".row-top");
  const rowBottom = document.querySelector(".row-bottom");

  gsap.to(rowTop, {
    xPercent: 100,
    duration: 10,
    repeat: -1,
    ease: "linear",
  });

  gsap.to(rowBottom, {
    xPercent: -100, // Geser ke kanan hingga seluruh elemen hilang
    duration: 10, // Durasi animasi
    repeat: -1, // Looping
    ease: "linear", // Gerakan linear
  });
});

// Ambil elemen slider
const smallPhotos = document.querySelector(".small-photos");
const container = document.querySelector(".small-photos-container");

// Set kecepatan gerakan
const speed = 2; // px per frame
let position = container.offsetWidth; // Mulai dari luar layar sebelah kanan

// Fungsi untuk menggerakkan foto kecil
function movePhotos() {
  // Geser elemen ke kiri
  position -= speed;

  // Jika elemen sudah keluar dari layar sebelah kiri, reset ke kanan
  if (position <= -smallPhotos.offsetWidth) {
    position = container.offsetWidth;
  }

  // Terapkan transformasi posisi
  smallPhotos.style.transform = `translateX(${position}px)`;

  // Ulangi animasi
  requestAnimationFrame(movePhotos);
}

// Mulai animasi
movePhotos();
