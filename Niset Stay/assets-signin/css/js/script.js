'use strict';


/**
 * navbar toggle in mobile
 */
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeText = document.getElementById("welcomeText");

loginTab.addEventListener("click", () => {

    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    loginForm.classList.add("active-form");
    registerForm.classList.remove("active-form");

    welcomeTitle.textContent = "Welcome Back!";

    welcomeText.textContent =
    "Find your perfect student room with Niset Stay. Log in to manage bookings, save favorite rooms, and connect with trusted landlords.";

});

registerTab.addEventListener("click", () => {

    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    registerForm.classList.add("active-form");
    loginForm.classList.remove("active-form");

    welcomeTitle.textContent = "Welcome!";

    welcomeText.textContent =
    "Join our community and discover safe, comfortable, and affordable rooms near your university. Create an account and start exploring today.";

});

loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Login Successful!");
});

registerForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Account Created Successfully!");
});

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
});