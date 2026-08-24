// ========================================
// EDUCATION HUB - MAIN JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------
  // DARK MODE
  // -------------------------------

  const themeBtn = document.getElementById("themeBtn");

  const savedTheme =
    localStorage.getItem("educationHubTheme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");

    if (themeBtn) {
      themeBtn.textContent = "☀️";
    }
  }

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


  // -------------------------------
  // SUBJECT BUTTONS
  // -------------------------------

  const subjectButtons =
    document.querySelectorAll(".subject-card button");

  subjectButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const subject =
        button.parentElement.querySelector("h3");

      const subjectName =
        subject ? subject.textContent.trim() : "Subject";

      if (subjectName === "Mathematics") {

        window.location.href = "maths.html";

      } else {

        alert(
          `📚 ${subjectName} section जल्द उपलब्ध होगा!`
        );

      }

    });

  });


  // -------------------------------
  // CLASS BUTTONS
  // -------------------------------

  const classButtons =
    document.querySelectorAll(".class-card");

  classButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const className =
        button.textContent.trim();

      alert(
        `🎓 ${className} section जल्द उपलब्ध होगा!`
      );

    });

  });


  // -------------------------------
  // SMOOTH NAVIGATION
  // -------------------------------

  const navLinks =
    document.querySelectorAll(
      '.navbar nav a[href^="#"]'
    );

  navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const target =
        document.querySelector(
          link.getAttribute("href")
        );

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });

      }

    });

  });

});
