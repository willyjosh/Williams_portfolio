/* =========================================================
   WILLIAMS ART — PORTFOLIO WEBSITE
   SCRIPT.JS
   Interactive Website Functionality
   ========================================================= */


/* =========================================================
   01. DOM ELEMENTS
   ========================================================= */

const body = document.body;

const pageLoader = document.getElementById("pageLoader");

const cursorGlow = document.getElementById("cursorGlow");

const siteHeader = document.getElementById("siteHeader");

const menuToggle = document.getElementById("menuToggle");

const mainNavigation = document.getElementById("mainNavigation");

const gallery = document.getElementById("gallery");

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

const currentYear = document.getElementById("currentYear");

const lightbox = document.getElementById("lightbox");

const lightboxClose = document.getElementById("lightboxClose");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxMedium = document.getElementById("lightboxMedium");

const lightboxTitle = document.getElementById("lightboxTitle");


/* =========================================================
   02. PAGE LOADER
   ========================================================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        if (pageLoader) {
            pageLoader.classList.add("loaded");
        }

        document.body.classList.remove("no-scroll");

    }, 600);

});


/* =========================================================
   03. FALLBACK LOADER
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {

        if (pageLoader) {
            pageLoader.classList.add("loaded");
        }

        document.body.classList.remove("no-scroll");

    }, 2500);

});


/* =========================================================
   04. CURRENT YEAR
   ========================================================= */

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* =========================================================
   05. HEADER SCROLL EFFECT
   ========================================================= */

function updateHeader() {

    if (!siteHeader) {
        return;
    }

    if (window.scrollY > 60) {

        siteHeader.classList.add("scrolled");

    } else {

        siteHeader.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();


/* =========================================================
   06. CUSTOM CURSOR GLOW
   ========================================================= */

const supportsHover =
    window.matchMedia("(hover: hover)").matches;

if (cursorGlow && supportsHover) {

    document.addEventListener(
        "mousemove",
        function (event) {

            cursorGlow.style.opacity = "1";

            cursorGlow.style.left =
                event.clientX + "px";

            cursorGlow.style.top =
                event.clientY + "px";

        }
    );

    document.addEventListener(
        "mouseleave",
        function () {

            cursorGlow.style.opacity = "0";

        }
    );

}


/* =========================================================
   07. MOBILE MENU
   ========================================================= */

function closeMobileMenu() {

    if (!menuToggle || !mainNavigation) {
        return;
    }

    menuToggle.classList.remove("active");

    mainNavigation.classList.remove("active");

    document.body.classList.remove("no-scroll");

}


if (menuToggle && mainNavigation) {

    menuToggle.addEventListener(
        "click",
        function () {

            const isOpen =
                mainNavigation.classList.contains("active");

            if (isOpen) {

                closeMobileMenu();

            } else {

                menuToggle.classList.add("active");

                mainNavigation.classList.add("active");

                document.body.classList.add("no-scroll");

            }

        }
    );

}


/* =========================================================
   08. CLOSE MENU WHEN NAV LINK IS CLICKED
   ========================================================= */

if (mainNavigation) {

    const navigationLinks =
        mainNavigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMobileMenu();

            }
        );

    });

}


/* =========================================================
   09. CLOSE MENU WITH ESCAPE
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeMobileMenu();

            closeLightbox();

        }

    }
);


/* =========================================================
   10. SMOOTH SCROLL
   ========================================================= */

const smoothLinks =
    document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const headerHeight =
                siteHeader
                    ? siteHeader.offsetHeight
                    : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        }
    );

});


/* =========================================================
   11. SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("visible");

    });

}


/* =========================================================
   12. GALLERY FILTER SYSTEM
   ========================================================= */

const filterButtons =
    document.querySelectorAll(".filter");

const artworkCards =
    document.querySelectorAll(".art-card");


function filterGallery(category) {

    artworkCards.forEach(function (card) {

        const cardCategory =
            card.getAttribute("data-category");

        const shouldShow =
            category === "all" ||
            cardCategory === category;

        if (shouldShow) {

            card.classList.remove("hidden");

            requestAnimationFrame(function () {

                card.style.opacity = "1";
                card.style.transform =
                    "translateY(0)";

            });

        } else {

            card.style.opacity = "0";
            card.style.transform =
                "translateY(20px)";

            setTimeout(function () {

                card.classList.add("hidden");

            }, 300);

        }

    });

}


filterButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            filterButtons.forEach(function (item) {

                item.classList.remove("active");

            });

            this.classList.add("active");

            const category =
                this.getAttribute("data-filter");

            filterGallery(category);

        }
    );

});


/* =========================================================
   13. ARTWORK CARDS
   ========================================================= */

const artworkButtons =
    document.querySelectorAll(
        ".art-card"
    );


/* =========================================================
   14. LIGHTBOX OPEN
   ========================================================= */

function openLightbox(image, title, medium) {

    if (!lightbox) {
        return;
    }

    if (lightboxImage) {

        lightboxImage.src = image;

        lightboxImage.alt = title || "Artwork";

    }

    if (lightboxTitle) {

        lightboxTitle.textContent =
            title || "Artwork";

    }

    if (lightboxMedium) {

        lightboxMedium.textContent =
            medium || "Artwork";

    }

    lightbox.classList.add("active");

    document.body.classList.add("no-scroll");

}


/* =========================================================
   15. LIGHTBOX CLOSE
   ========================================================= */

function closeLightbox() {

    if (!lightbox) {
        return;
    }

    lightbox.classList.remove("active");

    document.body.classList.remove("no-scroll");

    setTimeout(function () {

        if (lightboxImage) {

            lightboxImage.src = "";

        }

    }, 400);

}


/* =========================================================
   16. ATTACH LIGHTBOX TO ARTWORKS
   ========================================================= */

artworkButtons.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            const image =
                card.getAttribute("data-image");

            const title =
                card.getAttribute("data-title");

            const medium =
                card.getAttribute("data-medium");

            if (!image) {
                return;
            }

            openLightbox(
                image,
                title,
                medium
            );

        }
    );

});


/* =========================================================
   17. LIGHTBOX CLOSE BUTTON
   ========================================================= */

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        function () {

            closeLightbox();

        }
    );

}


/* =========================================================
   18. CLICK OUTSIDE LIGHTBOX
   ========================================================= */

if (lightbox) {

    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


/* =========================================================
   19. PREVENT IMAGE CLICK FROM CLOSING
   ========================================================= */

const lightboxInner =
    document.querySelector(".lightbox-inner");

if (lightboxInner) {

    lightboxInner.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );

}


/* =========================================================
   20. IMAGE ERROR HANDLING
   ========================================================= */

const allImages =
    document.querySelectorAll("img");


allImages.forEach(function (image) {

    image.addEventListener(
        "error",
        function () {

            this.classList.add(
                "image-error"
            );

            this.alt =
                "Artwork image unavailable";

        }
    );

});


/* =========================================================
   21. IMAGE LOAD ANIMATION
   ========================================================= */

allImages.forEach(function (image) {

    if (image.complete) {

        image.classList.add("loaded");

    } else {

        image.addEventListener(
            "load",
            function () {

                this.classList.add("loaded");

            }
        );

    }

});


/* =========================================================
   22. CONTACT FORM
   ========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const formData =
                new FormData(contactForm);

            const name =
                formData.get("name") || "";

            const email =
                formData.get("email") || "";

            const service =
                formData.get("service") || "";

            const message =
                formData.get("message") || "";


            if (
                !name.trim() ||
                !email.trim() ||
                !message.trim()
            ) {

                showFormMessage(
                    "Please fill in all required fields."
                );

                return;

            }


            if (!validateEmail(email)) {

                showFormMessage(
                    "Please enter a valid email address."
                );

                return;

            }


            const artistEmail =
                "your@email.com";


            const subject =
                encodeURIComponent(
                    "New Williams Art Enquiry"
                );


            const emailBody =
                encodeURIComponent(
                    "Name: " +
                    name +
                    "\n\n" +

                    "Email: " +
                    email +
                    "\n\n" +

                    "Service: " +
                    service +
                    "\n\n" +

                    "Message:\n" +
                    message
                );


            const mailtoLink =
                "mailto:" +
                artistEmail +
                "?subject=" +
                subject +
                "&body=" +
                emailBody;


            showFormMessage(
                "Opening your email app..."
            );


            setTimeout(function () {

                window.location.href =
                    mailtoLink;

            }, 500);

        }
    );

}


/* =========================================================
   23. EMAIL VALIDATION
   ========================================================= */

function validateEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


/* =========================================================
   24. FORM MESSAGE
   ========================================================= */

function showFormMessage(message) {

    if (!formMessage) {
        return;
    }

    formMessage.textContent =
        message;

}


/* =========================================================
   25. RESET FORM MESSAGE
   ========================================================= */

if (contactForm) {

    const formInputs =
        contactForm.querySelectorAll(
            "input, textarea, select"
        );

    formInputs.forEach(function (input) {

        input.addEventListener(
            "input",
            function () {

                if (formMessage) {

                    formMessage.textContent =
                        "";

                }

            }
        );

    });

}


/* =========================================================
   26. PARALLAX HERO IMAGE
   ========================================================= */

const heroImage =
    document.querySelector(".hero-image");

if (
    heroImage &&
    window.matchMedia("(min-width: 701px)").matches
) {

    window.addEventListener(
        "scroll",
        function () {

            const scrollPosition =
                window.scrollY;

            if (scrollPosition > 100) {

                const movement =
                    scrollPosition * 0.05;

                heroImage.style.transform =
                    "scale(1.04) translateY(" +
                    movement +
                    "px)";

            } else {

                heroImage.style.transform =
                    "scale(1.02)";

            }

        },
        { passive: true }
    );

}


/* =========================================================
   27. ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".main-navigation a"
    );


function updateActiveNavigation() {

    let currentSection = "";

    const scrollPosition =
        window.scrollY + 180;


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        const href =
            link.getAttribute("href");

        link.classList.remove("active");

        if (
            href === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);

updateActiveNavigation();


/* =========================================================
   28. HOVER EFFECT FOR ART CARDS
   ========================================================= */

if (supportsHover) {

    artworkButtons.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                artworkButtons.forEach(
                    function (otherCard) {

                        if (
                            otherCard !== card
                        ) {

                            otherCard.style.opacity =
                                "0.55";

                        }

                    }
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                artworkButtons.forEach(
                    function (otherCard) {

                        otherCard.style.opacity =
                            "1";

                    }
                );

            }
        );

    });

}


/* =========================================================
   29. BUTTON RIPPLE EFFECT
   ========================================================= */

const buttons =
    document.querySelectorAll(
        ".button"
    );


buttons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            button.classList.remove(
                "clicked"
            );

            void button.offsetWidth;

            button.classList.add(
                "clicked"
            );

        }
    );

});


/* =========================================================
   30. KEYBOARD LIGHTBOX SUPPORT
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !lightbox ||
            !lightbox.classList.contains("active")
        ) {

            return;

        }


        if (event.key === "Escape") {

            closeLightbox();

        }

    }
);


/* =========================================================
   31. RESIZE HANDLER
   ========================================================= */

let resizeTimer;


window.addEventListener(
    "resize",
    function () {

        clearTimeout(resizeTimer);


        resizeTimer =
            setTimeout(
                function () {

                    if (
                        window.innerWidth > 900
                    ) {

                        closeMobileMenu();

                    }

                },
                200
            );

    }
);


/* =========================================================
   32. PREVENT BROKEN HASH LINKS
   ========================================================= */

window.addEventListener(
    "load",
    function () {

        if (
            window.location.hash &&
            document.querySelector(
                window.location.hash
            )
        ) {

            setTimeout(
                function () {

                    const target =
                        document.querySelector(
                            window.location.hash
                        );

                    if (target) {

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                },
                500
            );

        }

    }
);


/* =========================================================
   33. CONSOLE BRANDING
   ========================================================= */

console.log(
    "%cWILLIAMS ART",
    "font-size: 28px; font-weight: bold;"
);

console.log(
    "%cPortfolio website loaded successfully.",
    "font-size: 13px;"
);


/* =========================================================
   34. FINAL INITIALIZATION
   ========================================================= */

function initializePortfolio() {

    updateHeader();

    updateActiveNavigation();

    artworkButtons.forEach(function (card) {

        card.style.willChange =
            "transform, opacity";

    });

}


initializePortfolio();


/* =========================================================
   END OF SCRIPT.JS
   ========================================================= */
