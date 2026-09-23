/* =========================================================
   WILLIAMS ART
   LIGHT LUXURY ART GALLERY
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   01. DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});


/* =========================================================
   02. MAIN INITIALIZER
========================================================= */

function initializeWebsite() {

    setupLoader();

    setupYear();

    setupParticles();

    setupScrollProgress();

    setupHeader();

    setupMobileMenu();

    setupSmoothScrolling();

    setupRevealAnimations();

    setupGalleryFilters();

    setupLightbox();

    setupImageErrors();

    setupHeroParallax();

    setupActiveNavigation();

    setupArtworkHover();

    setupContactForm();

    setupCardTilt();

    setupHeroMovement();

    setupCursor();

    setupFormFocus();

    setupKeyboardNavigation();

    consoleBranding();

}


/* =========================================================
   03. PAGE LOADER
========================================================= */

function setupLoader() {

    const loader =
        document.getElementById("pageLoader");

    if (!loader) {
        return;
    }


    const hideLoader = () => {

        setTimeout(() => {

            loader.classList.add("hidden");

            document.body.classList.remove(
                "no-scroll"
            );

        }, 900);

    };


    document.body.classList.add(
        "no-scroll"
    );


    if (document.readyState === "complete") {

        hideLoader();

    } else {

        window.addEventListener(
            "load",
            hideLoader,
            {
                once: true
            }
        );

    }

}


/* =========================================================
   04. CURRENT YEAR
========================================================= */

function setupYear() {

    const yearElement =
        document.getElementById("currentYear");

    if (!yearElement) {
        return;
    }


    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   05. PARTICLE SYSTEM
========================================================= */

function setupParticles() {

    const particleContainer =
        document.getElementById("particles");

    if (!particleContainer) {
        return;
    }


    const screenWidth =
        window.innerWidth;


    let particleCount = 18;


    if (screenWidth < 800) {

        particleCount = 10;

    }


    if (screenWidth < 500) {

        particleCount = 6;

    }


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.classList.add(
            "particle"
        );


        const size =
            Math.random() * 4 + 2;


        const left =
            Math.random() * 100;


        const delay =
            Math.random() * 12;


        const duration =
            Math.random() * 10 + 10;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        particle.style.left =
            `${left}%`;


        particle.style.animationDelay =
            `${delay}s`;


        particle.style.animationDuration =
            `${duration}s`;


        particleContainer.appendChild(
            particle
        );

    }

}


/* =========================================================
   06. SCROLL PROGRESS
========================================================= */

function setupScrollProgress() {

    const progress =
        document.getElementById(
            "scrollProgress"
        );


    if (!progress) {
        return;
    }


    const updateProgress = () => {

        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement
                .scrollHeight;


        const viewportHeight =
            window.innerHeight;


        const scrollable =
            documentHeight -
            viewportHeight;


        if (scrollable <= 0) {

            progress.style.width = "0%";

            return;

        }


        const percentage =
            (scrollTop / scrollable) *
            100;


        progress.style.width =
            `${percentage}%`;

    };


    window.addEventListener(
        "scroll",
        updateProgress,
        {
            passive: true
        }
    );


    updateProgress();

}


/* =========================================================
   07. HEADER SCROLL EFFECT
========================================================= */

function setupHeader() {

    const header =
        document.getElementById(
            "siteHeader"
        );


    if (!header) {
        return;
    }


    const updateHeader = () => {

        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    };


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();

}


/* =========================================================
   08. MOBILE NAVIGATION
========================================================= */

function setupMobileMenu() {

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );


    const navigation =
        document.getElementById(
            "mainNavigation"
        );


    if (!menuToggle || !navigation) {
        return;
    }


    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                navigation.classList.toggle(
                    "open"
                );


            menuToggle.classList.toggle(
                "active",
                isOpen
            );


            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            document.body.classList.toggle(
                "no-scroll",
                isOpen
            );

        }
    );


    const links =
        navigation.querySelectorAll(
            "a"
        );


    links.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                navigation.classList.remove(
                    "open"
                );


                menuToggle.classList.remove(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                document.body.classList.remove(
                    "no-scroll"
                );

            }
        );

    });


    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 800
            ) {

                navigation.classList.remove(
                    "open"
                );


                menuToggle.classList.remove(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                document.body.classList.remove(
                    "no-scroll"
                );

            }

        }
    );

}


/* =========================================================
   09. SMOOTH SCROLLING
========================================================= */

function setupSmoothScrolling() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });

}


/* =========================================================
   10. SCROLL REVEAL
========================================================= */

function setupRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (!elements.length) {
        return;
    }


    const observer =
        new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observerInstance.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    elements.forEach((element) => {

        observer.observe(element);

    });

}


/* =========================================================
   11. GALLERY FILTERS
========================================================= */

function setupGalleryFilters() {

    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );


    const cards =
        document.querySelectorAll(
            ".art-card"
        );


    if (
        !filterButtons.length ||
        !cards.length
    ) {

        return;

    }


    filterButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const filter =
                        button.dataset.filter;


                    filterButtons.forEach(
                        (item) => {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    cards.forEach(
                        (card, index) => {

                            const category =
                                card.dataset.category;


                            const shouldShow =
                                filter === "all" ||
                                category === filter;


                            if (shouldShow) {

                                card.style.display =
                                    "block";


                                requestAnimationFrame(
                                    () => {

                                        card.style.opacity =
                                            "0";


                                        card.style.transform =
                                            "translateY(20px)";


                                        requestAnimationFrame(
                                            () => {

                                                card.style.transition =
                                                    "opacity .5s ease, transform .5s ease";


                                                card.style.opacity =
                                                    "1";


                                                card.style.transform =
                                                    "translateY(0)";

                                            }
                                        );

                                    }
                                );

                            } else {

                                card.style.opacity =
                                    "0";


                                card.style.transform =
                                    "translateY(20px)";


                                setTimeout(
                                    () => {

                                        card.style.display =
                                            "none";

                                    },
                                    350
                                );

                            }

                        }
                    );

                }
            );

        }
    );

}


/* =========================================================
   12. LIGHTBOX
========================================================= */

function setupLightbox() {

    const lightbox =
        document.getElementById(
            "lightbox"
        );


    const closeButton =
        document.getElementById(
            "lightboxClose"
        );


    const image =
        document.getElementById(
            "lightboxImage"
        );


    const title =
        document.getElementById(
            "lightboxTitle"
        );


    const medium =
        document.getElementById(
            "lightboxMedium"
        );


    const cards =
        document.querySelectorAll(
            ".art-card"
        );


    if (
        !lightbox ||
        !closeButton ||
        !image ||
        !title ||
        !medium
    ) {

        return;

    }


    const openLightbox =
        (card) => {

            const imageSource =
                card.dataset.image;


            const artworkTitle =
                card.dataset.title ||
                "Artwork";


            const artworkMedium =
                card.dataset.medium ||
                "Original Artwork";


            if (!imageSource) {

                return;

            }


            image.src =
                imageSource;


            image.alt =
                artworkTitle;


            title.textContent =
                artworkTitle;


            medium.textContent =
                artworkMedium;


            lightbox.classList.add(
                "active"
            );


            lightbox.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.classList.add(
                "no-scroll"
            );

        };


    const closeLightbox =
        () => {

            lightbox.classList.remove(
                "active"
            );


            lightbox.setAttribute(
                "aria-hidden",
                "true"
            );


            document.body.classList.remove(
                "no-scroll"
            );


            setTimeout(
                () => {

                    image.src = "";

                },
                300
            );

        };


    cards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                openLightbox(card);

            }
        );

    });


    closeButton.addEventListener(
        "click",
        closeLightbox
    );


    lightbox.addEventListener(
        "click",
        (event) => {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                lightbox.classList.contains(
                    "active"
                )
            ) {

                closeLightbox();

            }

        }
    );

}


/* =========================================================
   13. IMAGE ERROR HANDLING
========================================================= */

function setupImageErrors() {

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-error"
                );


                image.alt =
                    "Artwork image unavailable";


                image.style.objectFit =
                    "contain";

            }
        );

    });

}


/* =========================================================
   14. HERO PARALLAX
========================================================= */

function setupHeroParallax() {

    const heroImage =
        document.querySelector(
            ".hero-image"
        );


    if (!heroImage) {
        return;
    }


    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reduceMotion) {
        return;
    }


    let ticking = false;


    const updateParallax =
        () => {

            const scroll =
                window.scrollY;


            if (scroll < window.innerHeight) {

                const movement =
                    scroll * 0.08;


                heroImage.style.transform =
                    `translateY(${movement}px) scale(1.03)`;

            }


            ticking = false;

        };


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(
                    updateParallax
                );


                ticking = true;

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   15. ACTIVE NAVIGATION
========================================================= */

function setupActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    if (
        !sections.length ||
        !navLinks.length
    ) {

        return;

    }


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        const id =
                            entry.target.id;


                        navLinks.forEach(
                            (link) => {

                                link.classList.remove(
                                    "active"
                                );


                                const href =
                                    link.getAttribute(
                                        "href"
                                    );


                                if (
                                    href ===
                                    `#${id}`
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }
                );

            },
            {
                rootMargin:
                    "-30% 0px -60% 0px"
            }
        );


    sections.forEach(
        (section) => {

            observer.observe(section);

        }
    );

}


/* =========================================================
   16. ARTWORK HOVER EFFECT
========================================================= */

function setupArtworkHover() {

    const gallery =
        document.getElementById(
            "artGallery"
        );


    const cards =
        document.querySelectorAll(
            ".art-card"
        );


    if (
        !gallery ||
        !cards.length
    ) {

        return;

    }


    cards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                cards.forEach(
                    (otherCard) => {

                        if (
                            otherCard !== card
                        ) {

                            otherCard.style.opacity =
                                "0.72";

                        }

                    }
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                cards.forEach(
                    (otherCard) => {

                        otherCard.style.opacity =
                            "1";

                    }
                );

            }
        );

    });

}


/* =========================================================
   17. CONTACT FORM
========================================================= */

function setupContactForm() {

    const form =
        document.getElementById(
            "contactForm"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                )?.value.trim();


            const email =
                document.getElementById(
                    "email"
                )?.value.trim();


            const service =
                document.getElementById(
                    "service"
                )?.value;


            const message =
                document.getElementById(
                    "message"
                )?.value.trim();


            if (
                !name ||
                !email ||
                !service ||
                !message
            ) {

                showFormMessage(
                    "Please complete all fields.",
                    "error"
                );


                return;

            }


            if (!isValidEmail(email)) {

                showFormMessage(
                    "Please enter a valid email address.",
                    "error"
                );


                return;

            }


            const artistEmail =
                "your@email.com";


            const subject =
                encodeURIComponent(
                    `Artwork Enquiry — ${service}`
                );


            const body =
                encodeURIComponent(
                    `Hello Williams,

My name is ${name}.

I'm interested in:
${service}

Message:
${message}

My email:
${email}

Thank you.`
                );


            const mailto =
                `mailto:${artistEmail}?subject=${subject}&body=${body}`;


            showFormMessage(
                "Opening your email app...",
                "success"
            );


            window.location.href =
                mailto;

        }
    );

}


/* =========================================================
   18. EMAIL VALIDATION
========================================================= */

function isValidEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    return pattern.test(email);

}


/* =========================================================
   19. FORM MESSAGE
========================================================= */

function showFormMessage(
    message,
    type
) {

    let messageElement =
        document.querySelector(
            ".form-message"
        );


    if (!messageElement) {

        messageElement =
            document.createElement(
                "p"
            );


        messageElement.className =
            "form-message";


        const form =
            document.getElementById(
                "contactForm"
            );


        if (form) {

            form.appendChild(
                messageElement
            );

        }

    }


    messageElement.textContent =
        message;


    messageElement.style.marginTop =
        "10px";


    messageElement.style.fontSize =
        "11px";


    messageElement.style.color =
        type === "error"
            ? "#702c3a"
            : "#806b55";


    messageElement.style.opacity =
        "1";


    setTimeout(
        () => {

            messageElement.style.opacity =
                "0";

        },
        5000
    );

}


/* =========================================================
   20. CARD TILT
========================================================= */

function setupCardTilt() {

    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reduceMotion) {
        return;
    }


    if (window.innerWidth <= 800) {
        return;
    }


    const cards =
        document.querySelectorAll(
            ".art-card, .process-card"
        );


    cards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();


                const centerX =
                    rect.left +
                    rect.width / 2;


                const centerY =
                    rect.top +
                    rect.height / 2;


                const rotateX =
                    (
                        event.clientY -
                        centerY
                    ) /
                    35;


                const rotateY =
                    (
                        centerX -
                        event.clientX
                    ) /
                    35;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-4px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });

}


/* =========================================================
   21. HERO MOUSE MOVEMENT
========================================================= */

function setupHeroMovement() {

    const hero =
        document.querySelector(
            ".hero"
        );


    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    if (
        !hero ||
        !heroVisual
    ) {

        return;

    }


    const reduceMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reduceMotion) {
        return;
    }


    if (window.innerWidth <= 800) {
        return;
    }


    hero.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                hero.getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width;


            const y =
                (
                    event.clientY -
                    rect.top
                ) /
                rect.height;


            const moveX =
                (x - 0.5) * 12;


            const moveY =
                (y - 0.5) * 12;


            heroVisual.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    hero.addEventListener(
        "mouseleave",
        () => {

            heroVisual.style.transform =
                "";

        }
    );

}


/* =========================================================
   22. CUSTOM CURSOR
========================================================= */

function setupCursor() {

    const dot =
        document.getElementById(
            "cursorDot"
        );


    const ring =
        document.getElementById(
            "cursorRing"
        );


    if (
        !dot ||
        !ring
    ) {

        return;

    }


    const finePointer =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;


    if (!finePointer) {
        return;
    }


    let mouseX = 0;

    let mouseY = 0;

    let ringX = 0;

    let ringY = 0;


    window.addEventListener(
        "mousemove",
        (event) => {

            mouseX =
                event.clientX;


            mouseY =
                event.clientY;


            dot.style.left =
                `${mouseX}px`;


            dot.style.top =
                `${mouseY}px`;

        }
    );


    const animateRing =
        () => {

            ringX +=
                (mouseX - ringX) *
                0.16;


            ringY +=
                (mouseY - ringY) *
                0.16;


            ring.style.left =
                `${ringX}px`;


            ring.style.top =
                `${ringY}px`;


            requestAnimationFrame(
                animateRing
            );

        };


    animateRing();


    const interactiveElements =
        document.querySelectorAll(
            "a, button, .art-card, input, textarea, select"
        );


    interactiveElements.forEach(
        (element) => {

            element.addEventListener(
                "mouseenter",
                () => {

                    ring.classList.add(
                        "hover"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    ring.classList.remove(
                        "hover"
                    );

                }
            );

        }
    );

}


/* =========================================================
   23. FORM FOCUS EFFECTS
========================================================= */

function setupFormFocus() {

    const fields =
        document.querySelectorAll(
            ".form-group input, .form-group textarea, .form-group select"
        );


    fields.forEach((field) => {

        field.addEventListener(
            "focus",
            () => {

                const parent =
                    field.closest(
                        ".form-group"
                    );


                if (parent) {

                    parent.classList.add(
                        "focused"
                    );

                }

            }
        );


        field.addEventListener(
            "blur",
            () => {

                const parent =
                    field.closest(
                        ".form-group"
                    );


                if (parent) {

                    parent.classList.remove(
                        "focused"
                    );

                }

            }
        );

    });

}


/* =========================================================
   24. KEYBOARD NAVIGATION
========================================================= */

function setupKeyboardNavigation() {

    document.addEventListener(
        "keydown",
        (event) => {

            const lightbox =
                document.getElementById(
                    "lightbox"
                );


            if (
                event.key === "Escape" &&
                lightbox &&
                lightbox.classList.contains(
                    "active"
                )
            ) {

                lightbox.classList.remove(
                    "active"
                );


                lightbox.setAttribute(
                    "aria-hidden",
                    "true"
                );


                document.body.classList.remove(
                    "no-scroll"
                );

            }

        }
    );

}


/* =========================================================
   25. SERVICE ITEM INTERACTION
========================================================= */

function setupServiceInteractions() {

    const services =
        document.querySelectorAll(
            ".service-item"
        );


    services.forEach(
        (service) => {

            service.addEventListener(
                "mouseenter",
                () => {

                    service.style.zIndex =
                        "2";

                }
            );


            service.addEventListener(
                "mouseleave",
                () => {

                    service.style.zIndex =
                        "";

                }
            );

        }
    );

}


setupServiceInteractions();


/* =========================================================
   26. IMAGE LAZY LOAD ENHANCEMENT
========================================================= */

function setupLazyImages() {

    const images =
        document.querySelectorAll(
            'img[loading="lazy"]'
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        return;

    }


    const observer =
        new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            const image =
                                entry.target;


                            image.classList.add(
                                "image-ready"
                            );


                            observerInstance.unobserve(
                                image
                            );

                        }

                    }
                );

            },
            {
                rootMargin:
                    "100px"
            }
        );


    images.forEach(
        (image) => {

            observer.observe(image);

        }
    );

}


setupLazyImages();


/* =========================================================
   27. GALLERY IMAGE ZOOM
========================================================= */

function setupGalleryZoom() {

    const images =
        document.querySelectorAll(
            ".art-card .art-image"
        );


    images.forEach(
        (image) => {

            image.addEventListener(
                "mouseenter",
                () => {

                    image.style.willChange =
                        "transform";

                }
            );


            image.addEventListener(
                "mouseleave",
                () => {

                    image.style.willChange =
                        "auto";

                }
            );

        }
    );

}


setupGalleryZoom();


/* =========================================================
   28. RANDOM ART DETAILS
========================================================= */

function setupArtworkNumbers() {

    const cards =
        document.querySelectorAll(
            ".art-card"
        );


    cards.forEach(
        (card, index) => {

            const number =
                card.querySelector(
                    ".art-number"
                );


            if (!number) {
                return;
            }


            const formatted =
                String(index + 1)
                    .padStart(3, "0");


            number.textContent =
                formatted;

        }
    );

}


setupArtworkNumbers();


/* =========================================================
   29. HERO IMAGE MOUSE ZOOM
========================================================= */

function setupHeroImageInteraction() {

    const wrapper =
        document.querySelector(
            ".hero-image-wrapper"
        );


    const image =
        document.querySelector(
            ".hero-image"
        );


    if (
        !wrapper ||
        !image
    ) {

        return;

    }


    if (window.innerWidth <= 800) {
        return;
    }


    wrapper.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                wrapper.getBoundingClientRect();


            const x =
                (
                    event.clientX -
                    rect.left
                ) /
                rect.width;


            const y =
                (
                    event.clientY -
                    rect.top
                ) /
                rect.height;


            const moveX =
                (x - 0.5) * 8;


            const moveY =
                (y - 0.5) * 8;


            image.style.transform =
                `scale(1.05)
                 translate(${moveX}px, ${moveY}px)`;

        }
    );


    wrapper.addEventListener(
        "mouseleave",
        () => {

            image.style.transform =
                "";

        }
    );

}


setupHeroImageInteraction();


/* =========================================================
   30. RANDOM PARTICLE REFRESH
========================================================= */

function refreshParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    if (!container) {
        return;
    }


    if (
        container.children.length >
        40
    ) {

        container.innerHTML = "";

        setupParticles();

    }

}


setInterval(
    refreshParticles,
    30000
);


/* =========================================================
   31. WINDOW RESIZE HANDLER
========================================================= */

let resizeTimer;


window.addEventListener(
    "resize",
    () => {

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(
                () => {

                    handleResize();

                },
                250
            );

    }
);


/* =========================================================
   32. HANDLE RESIZE
========================================================= */

function handleResize() {

    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    if (
        heroVisual &&
        window.innerWidth <= 800
    ) {

        heroVisual.style.transform =
            "";

    }


    const cards =
        document.querySelectorAll(
            ".art-card, .process-card"
        );


    if (window.innerWidth <= 800) {

        cards.forEach(
            (card) => {

                card.style.transform =
                    "";

            }
        );

    }

}


/* =========================================================
   33. PREVENT BROKEN HASH LINKS
========================================================= */

function setupHashLinks() {

    const links =
        document.querySelectorAll(
            'a[href="#"]'
        );


    links.forEach(
        (link) => {

            link.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();

                }
            );

        }
    );

}


setupHashLinks();


/* =========================================================
   34. PAGE VISIBILITY
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden
        ) {

            document.title =
                "Williams Art | Come Back Soon";

        } else {

            document.title =
                "Williams Art | Contemporary Artist";

        }

    }
);


/* =========================================================
   35. NAVIGATION HOVER SOUNDLESS FEEDBACK
========================================================= */

function setupNavigationFeedback() {

    const links =
        document.querySelectorAll(
            ".nav-link"
        );


    links.forEach(
        (link) => {

            link.addEventListener(
                "mouseenter",
                () => {

                    link.style.transform =
                        "translateY(-1px)";

                }
            );


            link.addEventListener(
                "mouseleave",
                () => {

                    link.style.transform =
                        "";

                }
            );

        }
    );

}


setupNavigationFeedback();


/* =========================================================
   36. SERVICE ARROW ANIMATION
========================================================= */

function setupServiceArrows() {

    const items =
        document.querySelectorAll(
            ".service-item"
        );


    items.forEach(
        (item) => {

            const arrow =
                item.querySelector(
                    ".service-arrow"
                );


            if (!arrow) {
                return;
            }


            item.addEventListener(
                "mouseenter",
                () => {

                    arrow.style.transform =
                        "rotate(45deg) scale(1.08)";

                }
            );


            item.addEventListener(
                "mouseleave",
                () => {

                    arrow.style.transform =
                        "";

                }
            );

        }
    );

}


setupServiceArrows();


/* =========================================================
   37. PROCESS CARD STAGGER
========================================================= */

function setupProcessStagger() {

    const cards =
        document.querySelectorAll(
            ".process-card"
        );


    cards.forEach(
        (card, index) => {

            card.style.transitionDelay =
                `${index * 0.08}s`;

        }
    );

}


setupProcessStagger();


/* =========================================================
   38. ARTWORK CARD ACCESSIBILITY
========================================================= */

function setupArtworkAccessibility() {

    const cards =
        document.querySelectorAll(
            ".art-card"
        );


    cards.forEach(
        (card) => {

            card.setAttribute(
                "tabindex",
                "0"
            );


            card.setAttribute(
                "role",
                "button"
            );


            card.addEventListener(
                "keydown",
                (event) => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        card.click();

                    }

                }
            );

        }
    );

}


setupArtworkAccessibility();


/* =========================================================
   39. CONTACT EMAIL CONFIGURATION
========================================================= */

/*
    IMPORTANT:

    Replace:

        your@email.com

    with your real email address.

    Example:

        williamsart@gmail.com

*/

const WILLIAMS_ART_EMAIL =
    "your@email.com";


/* =========================================================
   40. UPDATE CONTACT FORM EMAIL
========================================================= */

function updateContactEmail() {

    const form =
        document.getElementById(
            "contactForm"
        );


    if (!form) {
        return;
    }


    form.dataset.artistEmail =
        WILLIAMS_ART_EMAIL;

}


updateContactEmail();


/* =========================================================
   41. SOCIAL LINK CONFIGURATION
========================================================= */

/*
    You can replace the "#" links
    in index.html with your actual
    social media links.

    Example:

    Instagram:
    https://instagram.com/yourusername

    TikTok:
    https://tiktok.com/@yourusername

    YouTube:
    https://youtube.com/@yourusername

*/


/* =========================================================
   42. CONSOLE BRANDING
========================================================= */

function consoleBranding() {

    console.log(
        "%c WILLIAMS ART ",
        `
        background: #702c3a;
        color: #f7f3ea;
        font-size: 18px;
        padding: 10px 18px;
        border-radius: 5px;
        `
    );


    console.log(
        "%c Creating emotion through art.",
        `
        color: #b88732;
        font-size: 13px;
        font-style: italic;
        `
    );

}


/* =========================================================
   43. FINAL INITIALIZATION MESSAGE
========================================================= */

console.log(
    "Williams Art portfolio initialized."
);


/* =========================================================
   END OF WILLIAMS ART JAVASCRIPT
========================================================= */
