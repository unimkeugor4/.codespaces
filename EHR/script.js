// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Form submission feedback
const form = document.getElementById("pilotForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function(e) {
  formMsg.textContent = "Submitting...";
  formMsg.style.color = "#2563eb";

  // Simulate short delay for user feedback
  setTimeout(() => {
    formMsg.textContent = "Thank you! We’ll contact you shortly.";
    formMsg.style.color = "green";
    form.reset();
  }, 1500);
});
