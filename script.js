// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Hover effect for project cards
const projects = document.querySelectorAll(".project");
projects.forEach((project) => {
  project.addEventListener("mouseenter", () => {
    project.style.transform = "scale(1.03)";
    project.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
  });
  project.addEventListener("mouseleave", () => {
    project.style.transform = "scale(1)";
    project.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
  });
});

// Hover effect for skills icons
const skillIcons = document.querySelectorAll(".skills-icons i");
skillIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "translateY(-5px)";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "translateY(0)";
  });
});

// Form validation for contact form
const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = contactForm.querySelector("#name").value;
  const email = contactForm.querySelector("#email").value;
  const message = contactForm.querySelector("#message").value;

  if (name && email && message) {
    alert("Thank you for your message!");
    contactForm.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

// Initialize tooltips for social media icons
const socialIcons = document.querySelectorAll(".social-icons i");
socialIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    window.location.href = icon.getAttribute("data-href");
  });
  icon.addEventListener("mouseenter", () => {
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.textContent = icon.getAttribute("data-tooltip");
    icon.appendChild(tooltip);
  });
  icon.addEventListener("mouseleave", () => {
    const tooltip = icon.querySelector(".tooltip");
    if (tooltip) {
      tooltip.remove();
    }
  });
});

// Initialize AOS (Animate On Scroll) library
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});

// Initialize lightbox for project images
const lightbox = GLightbox({
  selector: ".project-image",
  loop: true,
  zoomable: true,
  draggable: true,
  autoplayVideos: true,
});

// Initialize Swiper for testimonials slider
const swiper = new Swiper(".testimonials-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
});

// Initialize countdown timer for upcoming events
const countdown = document.querySelector("#countdown");
function updateCountdown() {
  const eventDate = new Date("2025-12-31T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    countdown.textContent = "Event has passed!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Initialize Google Maps for contact section
function initMap() {
  const mapOptions = {
    center: { lat: 40.7282, lng: -73.7949 }, // Queens, New York coordinates
    zoom: 12,
  };
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  const marker = new google.maps.Marker({
    position: mapOptions.center,
    map: map,
    title: "Queens, New York",
  });
}
