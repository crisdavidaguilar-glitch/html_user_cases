
const contactForm = document.querySelector("#contact-form");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const status = document.querySelector("#form-status");
  status.textContent = "El formulario aún no está conectado. Escríbenos directamente al correo indicado.";
});
