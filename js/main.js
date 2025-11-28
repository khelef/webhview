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
function applyTranslations(lang = 'fr') {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// Exemple : charger le français
applyTranslations('fr');

// Exemple : changer la langue au clic
// applyTranslations('en');
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
  item.addEventListener("click", function(e) {
    e.preventDefault();           // empêche le reload si href="#"

    // retire la classe active de tous les items
    navItems.forEach(i => i.classList.remove("active"));

    // ajoute la classe active à l’élément cliqué
    this.classList.add("active");
  });
});

