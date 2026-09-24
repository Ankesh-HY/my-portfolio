const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");


// Open / close mobile menu

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu when a link is clicked

const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});

// Highlight active navigation link

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");

        }

    });

    links.forEach(function (link) {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active-link");
        }

    });

});

// Scroll to top button

const scrollTopButton = document.getElementById("scroll-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }

});

scrollTopButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});