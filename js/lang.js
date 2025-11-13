const translations = {
  fr: {
    "title": "HolisticView",
    "header.logo": "HolisticView",
    "nav.home": "Accueil",
    "nav.about": "Société",
    "nav.solutions": "Solutions ▾",
    "nav.clients": "Clients",
    "nav.news": "Actualités",
    "nav.contact": "Contact",
    "btn.demo": "Demander une démo",

    // Solutions
    "solutions.dataConnexion": "Data connexion",
    "solutions.dataContext": "Data contextualisation",
    "solutions.rootCause": "Analyse des causes racine",
    "solutions.dataConnexionText": "Découvrez notre solution de data connexion pour intégrer vos machines et vos systèmes MES afin de collecter et centraliser vos données en temps réel.",
    "solutions.dataContextText": "Notre solution permet de contextualiser vos données industrielles pour faciliter l’analyse et la prise de décision.",
    "solutions.rootCauseText": "Cette solution vous aide à identifier les causes principales des incidents pour améliorer vos processus et réduire les pertes.",

    // Contact
    "contact.title": "Contactez-nous et boostez votre productivité !",
    "contact.text1": "Prêt à franchir le cap de la digitalisation industrielle ? <strong>Contactez notre équipe</strong> et découvrez comment <strong>Holistic View MES</strong> peut améliorer votre <strong>TRS</strong>, votre consommation énergétique et votre suivi qualité.",
    "contact.text2": "Parlez-nous de votre projet et obtenez une démonstration personnalisée !",
    "form.nom": "Nom :",
    "form.prenom": "Prénom :",
    "form.societe": "Société :",
    "form.email": "E-mail :",
    "form.source": "Comment avez-vous entendu parler de nous ?",
    "form.source1": "Réseaux sociaux",
    "form.source2": "Recommandation",
    "form.source3": "Salon professionnel",
    "form.source4": "Recherche Internet",
    "form.source5": "Autre",
    "form.objet": "Objet :",
    "form.message": "Votre message :",
    "form.submit": "Envoyer",

    // Footer
    "footer.company": "HOLISTIC VIEW",
    "footer.address": "1, rue Henri Spriet, 14120 Mondeville",
    "footer.phone": "09 71 12 01 73",
    "footer.email": "contact[@]holisticview.com",
    "footer.newsTitle": "Dernières actus",
    "footer.news1": "Salon SEPEM Angers 2025",
    "footer.news2": "Salon Prod&Pack Lyon 2025",
    "footer.news3": "Article thématique : Le Management visuel",
    "footer.news4": "Partenariat Sofrastock",
    "footer.info": "Informations utiles",
    "footer.about": "Société Holistic View",
    "footer.contact": "Contactez-nous",
    "footer.demo": "Demander une démonstration",
    "footer.legal": "Mentions légales",
    "footer.sitemap": "Plan du site",
    "social.text": "Retrouvez-nous sur <strong>LinkedIn</strong>"
  },
  en: {
    "title": "HolisticView",
    "header.logo": "HolisticView",
    "nav.home": "Home",
    "nav.about": "Company",
    "nav.solutions": "Solutions ▾",
    "nav.clients": "Clients",
    "nav.news": "News",
    "nav.contact": "Contact",
    "btn.demo": "Request a demo",

    // Solutions
    "solutions.dataConnexion": "Data connection",
    "solutions.dataContext": "Data contextualization",
    "solutions.rootCause": "Root cause analysis",
    "solutions.dataConnexionText": "Discover our data connection solution to integrate your machines and MES systems, collecting and centralizing your data in real time.",
    "solutions.dataContextText": "Our solution contextualizes your industrial data to facilitate analysis and decision-making.",
    "solutions.rootCauseText": "This solution helps identify the root causes of incidents to improve processes and reduce losses.",

    // Contact
    "contact.title": "Contact us and boost your productivity!",
    "contact.text1": "Ready to take the leap into industrial digitalization? <strong>Contact our team</strong> and discover how <strong>Holistic View MES</strong> can improve your <strong>OEE</strong>, energy consumption, and quality tracking.",
    "contact.text2": "Tell us about your project and get a personalized demo!",
    "form.nom": "Last name:",
    "form.prenom": "First name:",
    "form.societe": "Company:",
    "form.email": "Email:",
    "form.source": "How did you hear about us?",
    "form.source1": "Social media",
    "form.source2": "Recommendation",
    "form.source3": "Trade fair",
    "form.source4": "Web search",
    "form.source5": "Other",
    "form.objet": "Subject:",
    "form.message": "Your message:",
    "form.submit": "Send",

    // Footer
    "footer.company": "HOLISTIC VIEW",
    "footer.address": "1, rue Henri Spriet, 14120 Mondeville, France",
    "footer.phone": "+33 9 71 12 01 73",
    "footer.email": "contact[@]holisticview.com",
    "footer.newsTitle": "Latest news",
    "footer.news1": "SEPEM Angers 2025",
    "footer.news2": "Prod&Pack Lyon 2025",
    "footer.news3": "Thematic article: Visual Management",
    "footer.news4": "Sofrastock Partnership",
    "footer.info": "Useful information",
    "footer.about": "About Holistic View",
    "footer.contact": "Contact us",
    "footer.demo": "Request a demo",
    "footer.legal": "Legal notice",
    "footer.sitemap": "Site map",
    "social.text": "Follow us on <strong>LinkedIn</strong>"
  }
};

// Fonction pour appliquer la langue sur tous les éléments
function setLanguage(lang) {
  localStorage.setItem("lang", lang); // mémorise la langue
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}
