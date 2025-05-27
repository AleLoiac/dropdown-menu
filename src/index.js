import "./modern-normalize.css";
import "./styles.css";

const dropdownElement = document.querySelector(".dropdown-element");

dropdownElement.addEventListener("click", () => {
  const entries = document.querySelectorAll(".drop-entry");
  for (const entry of entries) {
    entry.classList.toggle("invisible");
  }
});
