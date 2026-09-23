/* =========================================================
   WILLIAMS ART
   INTERACTIVE PORTFOLIO
   ========================================================= */


/* ================= DOM ================= */

const pageLoader =
    document.getElementById("pageLoader");

const siteHeader =
    document.getElementById("siteHeader");

const menuToggle =
    document.getElementById("menuToggle");

const mainNavigation =
    document.getElementById("mainNavigation");

const cursorDot =
    document.getElementById("cursorDot");

const cursorRing =
    document.getElementById("cursorRing");

const scrollProgress =
    document.getElementById("scrollProgress");

const currentYear =
    document.getElementById("currentYear");

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxMedium =
    document.getElementById("lightboxMedium");

const lightboxClose =
    document.getElementById("lightboxClose");


/* ================= LOADER ================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        pageLoader.classList.add("hidden");

    }, 1200);

});


/* ================= YEAR ================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ================= HEADER ================= */

function updateHeader() {

    if (window.scrollY > 50) {

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


/* ================= SCROLL PROGRESS ================= */

function updateScrollProgress() {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    scrollProgress.style.width =
        `${progress}%`;

}


window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
);


/* ================= CUSTOM CURSOR ================= */

if (
    window.matchMedia(
        "(pointer: fine)"
    ).matches
) {

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    document.addEventListener(
        "mousemove",
        (event) => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            cursorDot.style.left =
                `${mouseX}px`;

            cursorDot.style.top =
                `${mouseY}px`;

        }
    );


    function animateCursor() {

        ringX +=
            (mouseX - ringX) * .12;

        ringY +=
            (mouseY - ringY) * .12;


        cursorRing.style.left =
            `${ringX}px`;

        cursorRing.style.top =
            `${ringY}px`;


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    const interactiveElements =
        document.querySelectorAll(
            "a, button, .art-card, input, textarea, select"
        );


    interactiveElements.forEach(
        element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    cursorRing.classList.add(
                        "active"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    cursorRing.classList.remove(
                        "active"
                    );

                }
            );

        }
    );

}


/* ================= MOBILE MENU ================= */

menuToggle.addEventListener(
    "click",
    () => {

        mainNavigation.classList.toggle(
            "open"
        );

    }
);


document.querySelectorAll(
    ".nav-link"
).forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                mainNavigation.classList.remove(
                    "open"
                );

            }
        );

    }
);


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

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

    }
);


/* ================= REVEAL ANIMATION ================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* ================= GALLERY FILTER ================= */

const filters =
    document.querySelectorAll(
        ".filter"
    );

const artworks =
    document.querySelectorAll(
        ".art-card"
    );


filters.forEach(
    filter => {

        filter.addEventListener(
            "click",
            () => {

                filters.forEach(
                    item =>
                        item.classList.remove(
                            "active"
                        )
                );


                filter.classList.add(
                    "active"
                );


                const selectedFilter =
                    filter.dataset.filter;


                artworks.forEach(
                    artwork => {

                        const category =
                            artwork.dataset.category;


                        if (
                            selectedFilter ===
                            "all" ||
                            category ===
                            selectedFilter
                        ) {

                            artwork.classList.remove(
                                "hidden"
                            );

                            artwork.animate(
                                [
                                    {
                                        opacity: 0,
                                        transform:
                                            "translateY(25px)"
                                    },
                                    {
                                        opacity: 1,
                                        transform:
                                            "translateY(0)"
                                    }
                                ],
                                {
                                    duration: 500,
                                    easing:
                                        "cubic-bezier(.22,1,.36,1)"
                                }
                            );

                        } else {

                            artwork.classList.add(
                                "hidden"
                            );

                        }

                    }
                );

            }
        );

    }
);


/* ================= LIGHTBOX ================= */

artworks.forEach(
    artwork => {

        artwork.addEventListener(
            "click",
            () => {

                const image =
                    artwork.dataset.image;

                const title =
                    artwork.dataset.title;

                const medium =
                    artwork.dataset.medium;


                lightboxImage.src =
                    image;

                lightboxImage.alt =
                    title;

                lightboxTitle.textContent =
                    title;

                lightboxMedium.textContent =
                    medium;


                lightbox.classList.add(
                    "active"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    }
);


function closeLightbox() {

    lightbox.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener(
    "click",
    event => {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeLightbox();

        }

    }
);


/* ================= IMAGE ERROR HANDLING ================= */

document.querySelectorAll(
    "img"
).forEach(
    image => {

        image.addEventListener(
            "error",
            () => {

                image.style.background =
                    "linear-gradient(135deg,#211a13,#110d0b)";

                image.style.minHeight =
                    "300px";

                image.alt =
                    "Artwork image unavailable";

            }
        );

    }
);


/* ================= HERO PARALLAX ================= */

const heroImage =
    document.querySelector(
        ".hero-image"
    );


if (heroImage) {

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.innerWidth > 800
            ) {

                const movement =
                    window.scrollY * .08;

                heroImage.style.transform =
                    `scale(1.03) translateY(${movement}px)`;

            }

        },
        { passive: true }
    );

}


/* ================= ACTIVE NAV ================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        const id =
                            entry.target.id;


                        navLinks.forEach(
                            link => {

                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${id}`
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }

                }
            );

        },
        {
            rootMargin:
                "-35% 0px -55% 0px"
        }
    );


sections.forEach(
    section => {

        sectionObserver.observe(
            section
        );

    }
);


/* ================= ARTWORK HOVER ================= */

artworks.forEach(
    artwork => {

        artwork.addEventListener(
            "mouseenter",
            () => {

                artworks.forEach(
                    other => {

                        if (
                            other !== artwork
                        ) {

                            other.style.opacity =
                                ".55";

                        }

                    }
                );

            }
        );


        artwork.addEventListener(
            "mouseleave",
            () => {

                artworks.forEach(
                    other => {

                        other.style.opacity =
                            "";

                    }
                );

            }
        );

    }
);


/* ================= CONTACT FORM ================= */

contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const service =
            document.getElementById(
                "service"
            ).value;


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (
            !name ||
            !email ||
            !message
        ) {

            formMessage.textContent =
                "Please fill in all required fields.";

            return;

        }


        /*
          CHANGE THIS EMAIL
          TO YOUR REAL EMAIL.
        */

        const artistEmail =
            "your@email.com";


        const subject =
            encodeURIComponent(
                `Art Commission — ${service || "General Inquiry"}`
            );


        const body =
            encodeURIComponent(
                `Hello Williams,

My name is ${name}.

I'm interested in:
${service || "Artwork / Collaboration"}

My message:
${message}

You can reply to me at:
${email}`
            );


        window.location.href =
            `mailto:${artistEmail}?subject=${subject}&body=${body}`;


        formMessage.textContent =
            "Opening your email app...";

    }
);


/* ================= TILT EFFECT ================= */

const tiltCards =
    document.querySelectorAll(
        ".art-card, .process-card"
    );


tiltCards.forEach(
    card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth < 900
                ) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -2;


                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    2;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-3px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    }
);


/* ================= HERO MOUSE MOVEMENT ================= */

const heroArt =
    document.querySelector(
        ".hero-art"
    );


if (heroArt) {

    heroArt.addEventListener(
        "mousemove",
        event => {

            if (
                window.innerWidth < 900
            ) {
                return;
            }


            const rect =
                heroArt.getBoundingClientRect();


            const x =
                (event.clientX -
                    rect.left) /
                rect.width -
                .5;


            const y =
                (event.clientY -
                    rect.top) /
                rect.height -
                .5;


            heroArt.style.transform =
                `translate(
                    ${x * 10}px,
                    ${y * 10}px
                )`;

        }
    );


    heroArt.addEventListener(
        "mouseleave",
        () => {

            heroArt.style.transform =
                "";

        }
    );

}


/* ================= FORM INPUT EFFECT ================= */

document.querySelectorAll(
    "input, textarea, select"
).forEach(
    input => {

        input.addEventListener(
            "focus",
            () => {

                input.parentElement
                    .classList.add(
                        "focused"
                    );

            }
        );


        input.addEventListener(
            "blur",
            () => {

                input.parentElement
                    .classList.remove(
                        "focused"
                    );

            }
        );

    }
);


/* ================= CONSOLE ================= */

console.log(
    "%cWILLIAMS ART",
    "font-size:25px;color:#d7a84e;font-family:serif;"
);


console.log(
    "%cCreating visual stories.",
    "font-size:12px;color:#f3eadb;"
);


/* ================= FINAL INIT ================= */

updateHeader();
updateScrollProgress();
