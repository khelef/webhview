// =============================================
// GESTION DU MENU MOBILE
// =============================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('Site Holistic View chargé');
  
  // Crée le bouton hamburger
  const menuToggle = document.createElement('button');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '☰';
  menuToggle.setAttribute('aria-label', 'Menu principal');
  menuToggle.style.display = 'none';
  
  // Ajoute le bouton au header
  const header = document.querySelector('.header');
  if (header) {
    header.appendChild(menuToggle);
    
    // Gère l'affichage du menu sur mobile
    function updateMenuForMobile() {
      const navItems = document.querySelector('.nav-items');
      if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        if (!navItems.classList.contains('active')) {
          navItems.style.display = 'none';
        }
      } else {
        menuToggle.style.display = 'none';
        navItems.style.display = 'flex';
        navItems.classList.remove('active');
      }
    }
    
    // Initialise
    updateMenuForMobile();
    
    // Met à jour au redimensionnement
    window.addEventListener('resize', updateMenuForMobile);
    
    // Gère le clic sur le bouton hamburger
    menuToggle.addEventListener('click', function() {
      const navItems = document.querySelector('.nav-items');
      navItems.classList.toggle('active');
      if (navItems.classList.contains('active')) {
        navItems.style.display = 'flex';
        menuToggle.innerHTML = '✕';
        menuToggle.setAttribute('aria-label', 'Fermer le menu');
      } else {
        navItems.style.display = 'none';
        menuToggle.innerHTML = '☰';
        menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
      }
    });
    
    // Ferme le menu en cliquant sur un lien (mobile)
    document.querySelectorAll('.nav-items a').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          const navItems = document.querySelector('.nav-items');
          navItems.classList.remove('active');
          navItems.style.display = 'none';
          menuToggle.innerHTML = '☰';
          menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
        }
      });
    });
  }
  
  // =============================================
  // GESTION DE LA NAVIGATION (Solution 3)
  // =============================================
  
  const sitePages = [
    'index.html',
    'societe.html',
    'data_connexion.html',
    'data_contextualisation.html',
    'analyse_des_causes_racine.html',
    'actualites.html',
    'contact.html',
    'legal.html',
    'demo.html'
  ];
  
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    
    // Vérifie si c'est un lien interne
    const isInternalPage = sitePages.some(page => href && href.includes(page));
    
    if (isInternalPage && href !== '#form-demo') {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Ferme la modal si ouverte
        const modal = document.getElementById('form-demo');
        if (modal && modal.style.display === 'flex') {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
        
        // Ferme le menu mobile si ouvert
        if (window.innerWidth <= 768) {
          const navItems = document.querySelector('.nav-items');
          if (navItems.classList.contains('active')) {
            navItems.classList.remove('active');
            navItems.style.display = 'none';
            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) {
              menuToggle.innerHTML = '☰';
              menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
            }
          }
        }
        
        // Navigue vers la page
        setTimeout(() => {
          window.location.href = href;
        }, 100);
      });
    }
  });
  
  // =============================================
  // CAPTCHA DYNAMIQUE
  // =============================================
  
  function generateCaptcha() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let captcha = '';
    for (let i = 0; i < 5; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }
  
  const captchaText = document.getElementById('captcha-text');
  const refreshCaptcha = document.getElementById('refresh-captcha');
  
  if (captchaText && refreshCaptcha) {
    captchaText.textContent = generateCaptcha();
    
    refreshCaptcha.addEventListener('click', function() {
      captchaText.textContent = generateCaptcha();
    });
  }
  
  // =============================================
  // GESTION DE LA MODAL
  // =============================================
  
  // Fermer la modal avec Échap
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const modal = document.getElementById('form-demo');
      if (modal && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }
  });
  
  // Fermer en cliquant en dehors
  const modal = document.getElementById('form-demo');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }
  
  // =============================================
  // FORMULAIRE DE CONTACT
  // =============================================
  
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validation simple du captcha
      const captchaInput = this.querySelector('input[placeholder*="captcha"]');
      const captchaDisplay = document.getElementById('captcha-text');
      
      if (captchaInput && captchaDisplay) {
        if (captchaInput.value.toUpperCase() !== captchaDisplay.textContent) {
          alert('Code captcha incorrect. Veuillez réessayer.');
          captchaInput.value = '';
          captchaInput.focus();
          return false;
        }
      }
      
      // Simulation d'envoi (remplacer par votre code réel)
      alert('Formulaire soumis avec succès ! (simulation)');
      this.reset();
      if (captchaDisplay) {
        captchaDisplay.textContent = generateCaptcha();
      }
      
      return false;
    });
  }
  
  // =============================================
  // AMÉLIORATIONS UX
  // =============================================
  
  // Smooth scroll pour les ancres
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#form-demo') {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1) {
          e.preventDefault();
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    });
  });
  
  // Animation au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe les éléments à animer
  document.querySelectorAll('.contact-section, .contact-intro').forEach(el => {
    observer.observe(el);
  });
});

// =============================================
// FONCTIONS GLOBALES
// =============================================

// Fonction pour ouvrir la modal (optionnel)
function openModal() {
  const modal = document.getElementById('form-demo');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    window.location.hash = '#form-demo';
  }
}

// Fonction pour fermer la modal (optionnel)
function closeModal() {
  const modal = document.getElementById('form-demo');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    if (window.location.hash === '#form-demo') {
      history.replaceState(null, null, ' ');
    }
  }
}

// Initialisation au chargement
window.addEventListener('load', function() {
  console.log('Page complètement chargée');
});