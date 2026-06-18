'use strict';

/**
 * navbar toggle in mobile
 */
'use strict';

// Elements Selectors - Safely wrapped to ensure they don't break execution on this page
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeText = document.getElementById("welcomeText");

// Only execute tab switching listeners if elements exist on the current page DOM
if (loginTab && registerTab && loginForm && registerForm) {
  // Toggle to Login Form State
  loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    loginForm.classList.add("active-form");
    registerForm.classList.remove("active-form");

    if(welcomeTitle) welcomeTitle.textContent = "Welcome Back!";
    if(welcomeText) welcomeText.textContent = "Find your perfect student room with Niset Stay. Log in to manage bookings, save favourite rooms, and connect with trusted landlords.";
  });

  // Toggle to Registration Form State
  registerTab.addEventListener("click", () => {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    registerForm.classList.add("active-form");
    loginForm.classList.remove("active-form");

    if(welcomeTitle) welcomeTitle.textContent = "Welcome to Niset Stay!";
    if(welcomeText) welcomeText.textContent = "Join thousands of students searching for safe, comfortable, and affordable accommodation near their campus.";
  });
}

const /** {NodeElement} */ $navbar = document.querySelector("[data-navbar]");
const /** {NodeElement} */ $navToggler = document.querySelector("[data-nav-toggler]");

if($navToggler) {
  $navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));
}

/**
 * Header scroll state
 */
const /** {NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
  if($header) {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
  }
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

document.addEventListener("DOMContentLoaded", function () {
    // 1. Room Data Object
    const rooms = {
        1: {
            title: "Room For Rent Near Toul Kork",
            price: "$75 / Month",
            description: "Clean room with wifi, parking and security.",
            images: [
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200",
                "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",
                "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
            ]
        },
        2: {
            title: "Apartment For Rent",
            price: "$120 / Month",
            description: "Modern apartment with air conditioner and balcony.",
            images: [
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200",
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
                "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",
                "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200"
            ]
        }
    };

    // 2. Parse URL Params to see if a specific room ID is active
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    // If an ID parameter is present, update the elements dynamically
    if (id) {
        if (!rooms[id]) {
            alert("Room not found");
            return;
        }
        const room = rooms[id];
        document.getElementById("title").innerText = room.title;
        document.getElementById("price").innerText = room.price;
        document.getElementById("description").innerText = room.description;

        if(room.images[0]) document.getElementById("mainImg").src = room.images[0];
        if(room.images[1]) document.getElementById("img1").src = room.images[1];
        if(room.images[2]) document.getElementById("img2").src = room.images[2];
        if(room.images[3]) document.getElementById("img3").src = room.images[3];
        if(room.images[4] && document.getElementById("img4")) {
            document.getElementById("img4").src = room.images[4];
        }
    }

    // 3. Lightbox Functionality
    const images = document.querySelectorAll(".main-image img, .small-images img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    let currentIndex = 0;

    // Open Lightbox when any gallery image is clicked
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            lightbox.style.display = "block";
            lightboxImg.src = img.src;
        });
    });

    // Close Button Action
    const closeBtn = document.querySelector(".lightbox .close");
    if(closeBtn) {
        closeBtn.onclick = () => {
            lightbox.style.display = "none";
        };
    }

    // Next Image Action
    const nextImage = () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        lightboxImg.src = images[currentIndex].src;
    };

    // Previous Image Action
    const prevImage = () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        lightboxImg.src = images[currentIndex].src;
    };

    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    
    if(nextBtn) nextBtn.onclick = nextImage;
    if(prevBtn) prevBtn.onclick = prevImage;

    // Close when clicking outside the image container boundary
    if(lightbox) {
        lightbox.onclick = (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        };
    }

    // Keyboard Shortcuts (Arrows & Escape)
    document.addEventListener("keydown", (e) => {
        if (lightbox && lightbox.style.display === "block") {
            if (e.key === "ArrowRight") {
                nextImage();
            }
            if (e.key === "ArrowLeft") {
                prevImage();
            }
            if (e.key === "Escape") {
                lightbox.style.display = "none";
            }
        }
    });
});