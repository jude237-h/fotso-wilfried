const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");


galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

    });

});


lightboxClose.addEventListener("click", function () {

    lightbox.classList.remove("active");

});


lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your message has been received.";

        contactForm.reset();

    });

}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}

/* =================================
   ACTIVE NAVIGATION
================================= */

const currentPage =
    window.location.pathname.split("/").pop().toLowerCase() || "index.html";

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href").split("/").pop().toLowerCase();

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});

/* =================================
   MOBILE MENU
================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("active");

    });


    const links =
        mainNav.querySelectorAll(".nav-link");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

        });

    });

}