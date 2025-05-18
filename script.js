// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate email format
        const emailInput = contactForm.querySelector('input[type="email"]');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(emailInput.value)) {
          alert('Please enter a valid email address');
          emailInput.focus();
          return false;
        }
        
        // If validation passes, you can submit the form
        alert('Form submitted successfully!');
        contactForm.reset();
        return true;
      });
    }
  
    // Dark Mode Toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌓';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.zIndex = '1000';
    darkModeToggle.style.background = '#ff6600';
    darkModeToggle.style.color = 'white';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.borderRadius = '50%';
    darkModeToggle.style.width = '50px';
    darkModeToggle.style.height = '50px';
    darkModeToggle.style.fontSize = '20px';
    darkModeToggle.style.cursor = 'pointer';
    
    document.body.appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      // Save preference to localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = '☀️';
      } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent = '🌓';
      }
    });
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      darkModeToggle.textContent = '☀️';
    }
  
    // Make "Get in touch" button responsive
    const contactButton = document.querySelector('.contact-form .btn');
    if (contactButton) {
      contactButton.style.width = '100%';
      contactButton.style.padding = '15px';
      contactButton.style.fontSize = '1rem';
      
      // Media query in JS for extra small screens
      if (window.matchMedia('(max-width: 480px)').matches) {
        contactButton.style.padding = '12px';
        contactButton.style.fontSize = '0.9rem';
      }
    }
  });
  
  // Add dark mode styles dynamically
  const style = document.createElement('style');
  style.textContent = `
    .dark-mode {
      background-color: #1a1a1a;
      color: #f0f0f0;
    }
    
    .dark-mode .portfolio,
    .dark-mode .about,
    .dark-mode .contact {
      background-color: #2c2c2c;
      color: #f0f0f0;
    }
    
    .dark-mode .project-card {
      background-color: #333;
      color: #f0f0f0;
    }
    
    .dark-mode .project-card h3,
    .dark-mode .project-card p,
    .dark-mode .featured-content h3,
    .dark-mode .featured-content p {
      color: #f0f0f0;
    }
    
    .dark-mode .tag {
      background-color: #444;
      color: #f0f0f0;
    }
    
    .dark-mode .contact-form input,
    .dark-mode .contact-form textarea {
      background-color: #333;
      color: #f0f0f0;
      border-color: #555;
    }
  `;
  document.head.appendChild(style);