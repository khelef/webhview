const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "Société",
    "nav.solutions": "Solutions ▾",
    "nav.clients": "Clients",
    "nav.news": "Actualités",
    "nav.contact": "Contact",
    "solutions.dataConnexion": "Data connexion",
    "solutions.dataContext": "Data contextualisation",
    "solutions.rootCause": "Analyse des causes racine",
    "btn.demo": "Demander une démo",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "Company",
    "nav.solutions": "Solutions ▾",
    "nav.clients": "Clients",
    "nav.news": "News",
    "nav.contact": "Contact",
    "solutions.dataConnexion": "Data connection",
    "solutions.dataContext": "Data contextualization",
    "solutions.rootCause": "Root cause analysis",
    "btn.demo": "Request a demo",
  },
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];
    if (translation) el.innerHTML = translation;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);
});
