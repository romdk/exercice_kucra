const navigation = document.querySelector(".top");
const fleche = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navigation.classList.add("anim-top");
  } else {
    navigation.classList.remove("anim-top");
  }

  if (window.scrollY > 1000) {
    fleche.classList.add("anim-fleche");
  } else {
    fleche.classList.remove("anim-fleche");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
