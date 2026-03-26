// Global utility functions and initialization

// Toast Notification System
const Toast = {
  show: function(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'slideIn 0.3s ease reverse';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },
  
  success: function(message) {
    this.show(message, 'success');
  },
  
  error: function(message) {
    this.show(message, 'error');
  }
};

// Cookie Consent Manager
const CookieConsent = {
  init: function() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      this.show();
    }
  },
  
  show: function() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
      banner.classList.add('show');
    }
  },
  
  accept: function() {
    localStorage.setItem('cookieConsent', 'accepted');
    const banner = document.getElementById('cookieBanner');
    if (banner) {
      banner.classList.remove('show');
    }
  },
  
  manage: function() {
    window.location.href = '/cookie-policy.html';
  }
};

// Lead Form Modal Manager
const LeadFormModal = {
  open: function() {
    const modal = document.getElementById('leadFormModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  },
  
  close: function() {
    const modal = document.getElementById('leadFormModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  },
  
  handleSubmit: function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    if (!data.consent) {
      Toast.error('Please agree to the Privacy Policy and Terms & Conditions');
      return;
    }
    
    // In a real application, this would submit to a backend
    console.log('Lead form submitted:', data);
    Toast.success("Thank you! We'll contact you soon.");
    form.reset();
    this.close();
  }
};

// Mobile Menu Manager
const MobileMenu = {
  toggle: function() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
      menu.classList.toggle('active');
    }
  },
  
  close: function() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
      menu.classList.remove('active');
    }
  }
};

// Accordion Manager
const Accordion = {
  toggle: function(element) {
    const content = element.nextElementSibling;
    const isActive = content.classList.contains('active');
    
    // Close all accordions in the same group
    const parent = element.closest('.accordion');
    if (parent) {
      parent.querySelectorAll('.accordion-content').forEach(item => {
        item.classList.remove('active');
      });
    }
    
    // Toggle current accordion
    if (!isActive) {
      content.classList.add('active');
    }
  }
};

// Set Active Navigation Link
function setActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (href === '/index.html' && currentPath === '/')) {
      link.classList.add('active');
    } else if (currentPath.includes(href) && href !== '/index.html') {
      link.classList.add('active');
    }
  });
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle Contact Form Submission
function handleContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  if (!data.consent) {
    Toast.error('Please agree to the Privacy Policy and Terms & Conditions');
    return;
  }
  
  // In a real application, this would submit to a backend
  console.log('Contact form submitted:', data);
  Toast.success("Thank you! We'll contact you within 24 hours.");
  form.reset();
}

// Image Fallback Handler
function handleImageError(img) {
  img.style.display = 'none';
  const fallback = document.createElement('div');
  fallback.className = 'image-fallback';
  fallback.style.width = img.width || '100%';
  fallback.style.height = img.height || '200px';
  fallback.textContent = 'Image';
  img.parentNode.insertBefore(fallback, img);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Initialize cookie consent
  CookieConsent.init();
  
  // Set active navigation
  setActiveNav();
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu && menuBtn && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      MobileMenu.close();
    }
  });
  
  // Close modal when clicking overlay
  const modalOverlay = document.getElementById('leadFormModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        LeadFormModal.close();
      }
    });
  }
  
  // Add smooth scroll to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // Add image error handlers
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      handleImageError(this);
    });
  });
});

// Export for use in HTML
window.Toast = Toast;
window.CookieConsent = CookieConsent;
window.LeadFormModal = LeadFormModal;
window.MobileMenu = MobileMenu;
window.Accordion = Accordion;
window.handleContactForm = handleContactForm;
