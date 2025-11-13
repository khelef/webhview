// Appliquer la langue enregistrée au chargement
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);

  // Gestion des boutons langue
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", e => {
      const lang = e.target.closest("[data-lang]").getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Menu déroulant
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector(".dropbtn");
    button.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle("show");
      dropdowns.forEach(d => {
        if (d !== dropdown) d.classList.remove("show");
      });
    });
  });
  document.addEventListener("click", () => {
    dropdowns.forEach(d => d.classList.remove("show"));
  });
});
