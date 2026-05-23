const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll(".nav-link");
const yearEl = document.getElementById("year");
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
const revealItems = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("main section[id]");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mainNav) {
      mainNav.classList.remove("show");
    }
  });
});

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting && id) {
        navLinks.forEach((l) => l.classList.remove("active"));
        const active = document.querySelector(`.nav-link[href="#${id}"]`);
        if (active) active.classList.add("active");
      }
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => sectionObserver.observe(section));

if (form && formMsg) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      formMsg.textContent = "";
      return;
    }

    formMsg.textContent =
      "Solicitud registrada. Te contactaremos para diseñar tu experiencia SENSORIUM5.";
    form.reset();
  });
}
