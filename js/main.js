const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const yearEl = document.getElementById("year");
const contactBtn = document.getElementById("contactBtn");
const formMsg = document.getElementById("formMsg");

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (contactBtn && formMsg) {
  contactBtn.addEventListener("click", () => {
    formMsg.textContent = "Mensaje preparado. Conecta este formulario a tu email o backend favorito.";
  });
}
