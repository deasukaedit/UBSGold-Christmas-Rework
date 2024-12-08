document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("e2aMytQct3Q7g7B-p");

  const form = document.getElementById("emailForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("email").value;

    if (!emailInput.endsWith("@gmail.com")) {
      alert("Harap menggunakan alamat email dengan domain @gmail.com!");
      return;
    }

    emailjs.sendForm("Do Not Reply", "template_vc2hwop", form).then(
      () => {
        alert("Email berhasil dikirim!");
      },
      (error) => {
        alert("Gagal mengirim email: " + error.text);
      }
    );
  });
});

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

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burgerMenu");
  const menu = document.getElementById("menu");
  const bars = burgerMenu.querySelectorAll(".bar");
  const headerText = document.querySelector(".header-text");

  if (burgerMenu && menu) {
    burgerMenu.addEventListener("click", () => {
      menu.classList.toggle("active");

      bars[0].classList.toggle("rotate1");
      bars[1].classList.toggle("fade");
      bars[2].classList.toggle("rotate2");
    });
  }

  if (headerText) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(headerText);
  }
});
