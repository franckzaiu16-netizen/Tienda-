// ==========================
// MODO CLARO / OSCURO
// ==========================
const toggle = document.getElementById("themeToggle");
const body = document.body;

// cargar modo guardado
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.className = savedTheme;
  toggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

toggle.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.className = "light";
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌙";
  } else {
    body.className = "dark";
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀️";
  }
});

// ==========================
// WHATSAPP AUTOMÁTICO
// ==========================
function buyWhatsApp(product) {
  const phone = "51923483741"; // CAMBIA A TU NÚMERO REAL
  const message = `Hola, quiero comprar:\n\nProducto: ${product}\n\n¿Me indicas tallas disponibles y tiempo de envío?`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

