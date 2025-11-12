// main.js

// Appliquer les traductions
function applyLanguage(lang) {
  for (const id in translations[lang]) {
    const el = document.getElementById(id);
    if (el) el.textContent = translations[lang][id];
  }
  document.title = translations[lang].title;
}

// Changer la langue
function setLanguage(lang) {
  localStorage.setItem('lang', lang); // Sauvegarde la langue
  applyLanguage(lang);                 // Applique la langue
}

// Appliquer la langue au chargement de chaque page
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'fr';
  setLanguage(savedLang);
});
