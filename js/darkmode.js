const settings = document.querySelector(".gear");
const back = document.querySelector(".back");
const circle = document.querySelector(".circle");

let darkMode = document.createElement("darkMode");

function enableDarkMode() {
  document.body.classList.add("darkmode");
  darkMode = "enabled";
}

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  darkMode = "disabled";
};

settings.addEventListener("click", () => {
  settings.classList.add("gear-active");
});

circle.addEventListener("click", () => {
  circle.classList.toggle("darkmode-toggle-active-circle");
  back.classList.toggle("darkmode-toggle-active-back");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    settings.classList.remove("gear-active");
  }
});

circle.addEventListener("click", () => {
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
