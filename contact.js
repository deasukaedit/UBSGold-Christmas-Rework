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
  