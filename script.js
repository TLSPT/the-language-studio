// Ano no footer
const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

// (Opcional) fechar outros FAQs quando abre um (fica mais limpo)
document.querySelectorAll(".faq details").forEach((d) => {
  d.addEventListener("toggle", () => {
    if (!d.open) return;
    document.querySelectorAll(".faq details").forEach((other) => {
      if (other !== d) other.open = false;
    });
  });
});