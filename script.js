
// INTRO SCREEN

const playBtn = document.getElementById("playBtn");

const introScreen = document.getElementById("introScreen");

const mainPortfolio = document.getElementById("mainPortfolio");


// PLAY BUTTON

playBtn.addEventListener("click", function () {

    introScreen.style.display = "none";

    mainPortfolio.style.display = "block";

    showPage("home");

    window.scrollTo(0, 0);

});


// PAGE NAVIGATION

const navLinks = document.querySelectorAll("nav a");

const pages = document.querySelectorAll(".page-section");


function showPage(pageId) {

    // Hide all pages

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    // Remove active navigation style

    navLinks.forEach(function(link) {

        link.classList.remove("active");

    });


    // Show selected page

    const selectedPage = document.getElementById(pageId);

    if (!selectedPage) return;

    selectedPage.classList.add("active");


    // Highlight selected navigation link

    const selectedLink = document.querySelector(
        'nav a[href="#' + pageId + '"]'
    );

    if (selectedLink) {

        selectedLink.classList.add("active");

    }

    window.scrollTo(0, 0);

}


// Handle navigation clicks

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const pageId = this.getAttribute("href").substring(1);

        showPage(pageId);

        history.replaceState(null, "", "#" + pageId);

    });

});


// TYPING ANIMATION

const typingText = document.getElementById("typingText");

const roles = [
    "Aspiring Developer.",
    "Web Developer.",
    "Tech Enthusiast.",
    "Programming Learner."
];

let roleIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

    }

    let speed = deleting ? 60 : 110;

    if (!deleting && charIndex === currentRole.length) {

        deleting = true;

        speed = 1500;

    } else if (deleting && charIndex === 0) {

        deleting = false;

        roleIndex = (roleIndex + 1) % roles.length;

        speed = 400;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();

// CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        const email = document.getElementById("email").value;

        const subject = document.getElementById("subject").value;

        const message = document.getElementById("message").value;

        const mailBody =
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage: " + message;

        const mailLink =
            "mailto:your-email@gmail.com" +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(mailBody);

        window.location.href = mailLink;

    });

}

// BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {

    if (window.scrollY > 200) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
