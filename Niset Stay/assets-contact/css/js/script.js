'use strict';


/**
 * navbar toggle in mobile
 */

const /** {NodeElement} */ $navbar = document.querySelector("[data-navbar]");
const /** {NodeElement} */ $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));



/**
 * Header scroll state
 */

const /** {NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
  $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});



/**
 * Add to favorite button toggle
 */

const /** {NodeList} */ $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn => {
  $toggleBtn.addEventListener("click", () => {
    $toggleBtn.classList.toggle("active");
  });

  /**
 * CONTACT FORM INTERACTION CONTROLLER
 */
const contactForm = document.getElementById('ns-contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents page reload

    // Fetch and bind DOM inputs data strings
    const userData = {
      name: document.getElementById('ns-name').value.trim(),
      email: document.getElementById('ns-email').value.trim(),
      subject: document.getElementById('ns-subject').value.trim(),
      phone: document.getElementById('ns-phone').value.trim(),
      message: document.getElementById('ns-message').value.trim()
    };

    // Client Console handling print loop
    console.log("Contact submission payload received: ", userData);

    // Simple confirmation processing callback alert
    alert(`Thank you, ${userData.name}! Your submission has been captured successfully.`);
    
    // Clear out input fields value metrics data
    contactForm.reset();
  });
}
});