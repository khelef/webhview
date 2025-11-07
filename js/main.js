function setLanguage(lang) {
  loadLanguage(lang);
}

function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => {
      if (!res.ok) throw new Error(`Erreur de chargement du fichier : ${lang}.json`);
      return res.json();
    })
    .then(data => {
      document.getElementById("title-page").textContent = data.titlePage;
      document.getElementById("title").textContent = data.title;
      document.getElementById("description").textContent = data.description;

      document.getElementById("nav-home").textContent = data.nav.home;
      document.getElementById("nav-about").textContent = data.nav.about;
      document.getElementById("nav-services").textContent = data.nav.services;
      document.getElementById("nav-contact").textContent = data.nav.contact;

      document.getElementById("services-title").textContent = data.services.title;
      document.getElementById("services-text").textContent = data.services.text;

      document.getElementById("footer-text").textContent = data.footer.text;
    })
    .catch(err => console.error(err));
}
function setLanguage(lang) {
  // Sauvegarde la langue choisie
  localStorage.setItem("lang", lang);

  // Traductions simples
  const translations = {
    fr: {
      "nav-home": "Accueil",
      "nav-about": "Société",
      "contact-title": "Contactez-nous et boostez votre productivité !",
      title: "Mon site",
    },
    en: {
      "nav-home": "Home",
      "nav-about": "Company",
      "contact-title": "Contact us and boost your productivity!",
      title: "My Website",
    },
  };

  // Applique les traductions aux éléments
  for (const id in translations[lang]) {
    const el = document.getElementById(id);
    if (el) el.textContent = translations[lang][id];
  }

  // Met aussi à jour le titre de la page
  document.title = translations[lang].title;
}

// Charge automatiquement la langue choisie au dernier chargement
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);
});





