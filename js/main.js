document.addEventListener("DOMContentLoaded", () => {
  // Appliquer la langue sauvegardée
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);

  // Boutons langue
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", e => {
      const lang = e.target.closest("[data-lang]").dataset.lang;
      setLanguage(lang);
    });
  });

  // Menu déroulant Solutions
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

  // Fermer menu si clic en dehors
  document.addEventListener("click", () => {
    dropdowns.forEach(d => d.classList.remove("show"));
  });
});
