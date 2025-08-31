// ====== Navbar Mobile Toggle ======
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ====== Smooth Scrolling ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ====== Booking Form Validation ======
const bookingForm = document.querySelector("#booking-form");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.querySelector("#name").value.trim();
  let email = document.querySelector("#email").value.trim();
  let destination = document.querySelector("#destination").value;
  let message = document.querySelector("#message").value.trim();

  if (name === "" || email === "" || destination === "" || message === "") {
    alert("⚠️ Please fill out all fields.");
    return;
  }

  // Simple email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  alert("✅ Booking submitted successfully! We will contact you soon.");
  bookingForm.reset();
});
