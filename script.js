// Education Hub JavaScript

const themeBtn = document.getElementById("themeBtn");

// Dark Mode
if (themeBtn) {
  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
      document.body.classList.contains("dark");

    themeBtn.textContent =
      isDark ? "☀️" : "🌙";

    localStorage.setItem(
      "educationHubTheme",
      isDark ? "dark" : "light"
    );

  });
}


// Load saved theme
const savedTheme =
  localStorage.getItem("educationHubTheme");

if (savedTheme === "dark") {

  document.body.classList.add("dark");

  if (themeBtn) {
    themeBtn.textContent = "☀️";
  }

}


// Subject buttons
const subjectButtons =
  document.querySelectorAll(".subject-card button");

subjectButtons.forEach((button) => {

  button.addEventListener("click", () => {

    alert(
      "📚 यह subject section जल्द ही उपलब्ध होगा!"
    );

  });

});


// Class buttons
const classButtons =
  document.querySelectorAll(".class-card");

classButtons.forEach((button) => {

  button.addEventListener("click", () => {

    alert(
      "🎓 यह class section जल्द ही उपलब्ध होगा!"
    );

  });

});
