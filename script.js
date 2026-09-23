/* =========================================================
   WILLIAMS ART
   PREMIUM ARTIST PORTFOLIO
   ========================================================= */


/* ================= VARIABLES ================= */

:root {

    --black: #080706;
    --black-soft: #100e0c;
    --black-card: #151210;

    --cream: #f3eadb;
    --cream-soft: #cfc3b2;

    --gold: #d7a84e;
    --gold-light: #f0c96b;
    --gold-dark: #8e6424;

    --burgundy: #6d2738;

    --line: rgba(243, 234, 219, .14);

    --white: #ffffff;

    --sans: "DM Sans", sans-serif;
    --serif: "Playfair Display", serif;

    --container: 1240px;

    --ease: cubic-bezier(.22, 1, .36, 1);

}


/* ================= RESET ================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {

    background:
        radial-gradient(
            circle at 10% 20%,
            rgba(215,168,78,.07),
            transparent 25%
        ),
        radial-gradient(
            circle at 90% 70%,
            rgba(109,39,56,.08),
            transparent 25%
        ),
        var(--black);

    color: var(--cream);

    font-family: var(--sans);

    overflow-x: hidden;

}


body::selection {
    background: var(--gold);
    color: var(--black);
}


img {
    display: block;
    width: 100%;
}


a {
    color: inherit;
    text-decoration: none;
}


button,
input,
textarea,
select {
    font: inherit;
}


button {
    border: 0;
}


.container {

    width: min(
        calc(100% - 80px),
        var(--container)
    );

    margin: auto;

}


.section {
    position: relative;
    padding: 140px 0;
}


/* ================= BACKGROUND EFFECTS ================= */

.background-effects {

    position: fixed;

    inset: 0;

    pointer-events: none;

    z-index: -2;

    overflow: hidden;

}


.gradient-orb {

    position: absolute;

    width: 500px;
    height: 500px;

    border-radius: 50%;

    filter: blur(120px);

    opacity: .12;

    animation: floatingOrb 15s ease-in-out infinite alternate;

}


.orb-one {

    background: var(--gold);

    top: -200px;
    left: -200px;

}


.orb-two {

    background: var(--burgundy);

    right: -200px;
    top: 35%;

    animation-delay: -4s;

}


.orb-three {

    background: #b77b27;

    bottom: -250px;
    left: 35%;

    animation-delay: -8s;

}


@keyframes floatingOrb {

    from {
        transform: translate(0,0) scale(1);
    }

    to {
        transform: translate(100px,80px) scale(1.25);
    }

}


/* ================= PARTICLES ================= */

.particles span {

    position: absolute;

    width: 3px;
    height: 3px;

    background: var(--gold);

    border-radius: 50%;

    opacity: .35;

    animation: particleFloat 12s linear infinite;

}


.particles span:nth-child(1) {
    left: 10%;
    top: 80%;
    animation-delay: 1s;
}


.particles span:nth-child(2) {
    left: 20%;
    top: 40%;
    animation-delay: 3s;
}


.particles span:nth-child(3) {
    left: 30%;
    top: 70%;
    animation-delay: 5s;
}


.particles span:nth-child(4) {
    left: 40%;
    top: 20%;
    animation-delay: 2s;
}


.particles span:nth-child(5) {
    left: 50%;
    top: 90%;
    animation-delay: 4s;
}


.particles span:nth-child(6) {
    left: 60%;
    top: 30%;
    animation-delay: 6s;
}


.particles span:nth-child(7) {
    left: 70%;
    top: 60%;
    animation-delay: 1s;
}


.particles span:nth-child(8) {
    left: 80%;
    top: 15%;
    animation-delay: 7s;
}


.particles span:nth-child(9) {
    left: 90%;
    top: 80%;
    animation-delay: 3s;
}


.particles span:nth-child(10) {
    left: 55%;
    top: 55%;
    animation-delay: 8s;
}


@keyframes particleFloat {

    0% {
        transform: translateY(0);
        opacity: 0;
    }

    20% {
        opacity: .4;
    }

    80% {
        opacity: .2;
    }

    100% {
        transform: translateY(-300px);
        opacity: 0;
    }

}


/* ================= LOADER ================= */

.page-loader {

    position: fixed;

    inset: 0;

    z-index: 9999;

    display: flex;

    align-items: center;
    justify-content: center;

    background: var(--black);

    transition:
        opacity .8s ease,
        visibility .8s ease;

}


.page-loader.hidden {

    opacity: 0;
    visibility: hidden;

}


.loader-content {

    text-align: center;

}


.loader-logo {

    width: 70px;
    height: 70px;

    display: grid;
    place-items: center;

    margin: auto auto 20px;

    border: 1px solid var(--gold);

    color: var(--gold);

    font-family: var(--serif);

    font-size: 36px;

    animation:
        loaderPulse 1.5s infinite alternate;

}


.loader-name {

    letter-spacing: 7px;

    font-size: 11px;

}


.loader-line {

    width: 180px;

    height: 1px;

    background: #302b25;

    margin: 20px auto;

    overflow: hidden;

}


.loader-line span {

    display: block;

    width: 100%;
    height: 100%;

    background: var(--gold);

    transform: translateX(-100%);

    animation: loadingLine 1.8s forwards;

}


.loader-content p {

    color: #766c5f;

    font-size: 9px;

    letter-spacing: 3px;

}


@keyframes loadingLine {

    to {
        transform: translateX(0);
    }

}


@keyframes loaderPulse {

    from {
        transform: scale(.9);
        box-shadow: 0 0 0 transparent;
    }

    to {
        transform: scale(1);
        box-shadow: 0 0 35px rgba(215,168,78,.25);
    }

}


/* ================= SCROLL PROGRESS ================= */

.scroll-progress {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    height: 3px;

    z-index: 1000;

    background: transparent;

}


.scroll-progress span {

    display: block;

    width: 0;
    height: 100%;

    background:
        linear-gradient(
            90deg,
            var(--gold),
            var(--gold-light),
            var(--burgundy)
        );

}


/* ================= CURSOR ================= */

.cursor-dot,
.cursor-ring {

    position: fixed;

    pointer-events: none;

    z-index: 9998;

    transform: translate(-50%, -50%);

}


.cursor-dot {

    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: var(--gold);

}


.cursor-ring {

    width: 34px;
    height: 34px;

    border: 1px solid rgba(215,168,78,.55);

    border-radius: 50%;

    transition:
        width .3s,
        height .3s,
        border-color .3s;

}


.cursor-ring.active {

    width: 60px;
    height: 60px;

    border-color: var(--gold);

}


/* ================= HEADER ================= */

.site-header {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 100;

    padding: 25px 0;

    transition:
        padding .4s var(--ease),
        background .4s;

}


.site-header.scrolled {

    padding: 14px 0;

    background: rgba(8,7,6,.82);

    backdrop-filter: blur(18px);

    border-bottom: 1px solid var(--line);

}


.header-container {

    display: flex;

    align-items: center;

    justify-content: space-between;

}


/* ================= BRAND ================= */

.brand {

    display: flex;

    align-items: center;

    gap: 12px;

}


.brand-symbol {

    width: 42px;
    height: 42px;

    display: grid;
    place-items: center;

    border: 1px solid var(--gold);

    color: var(--gold);

    font-family: var(--serif);

    font-size: 22px;

    transition: .4s var(--ease);

}


.brand:hover .brand-symbol {

    background: var(--gold);

    color: var(--black);

    transform: rotate(8deg);

}


.brand-text {

    display: flex;

    flex-direction: column;

    line-height: 1;

}


.brand-text strong {

    font-size: 12px;

    letter-spacing: 3px;

}


.brand-text small {

    color: var(--gold);

    font-size: 8px;

    letter-spacing: 5px;

    margin-top: 4px;

}


/* ================= NAV ================= */

.main-navigation {

    display: flex;

    gap: 38px;

}


.nav-link {

    position: relative;

    color: #9d9488;

    font-size: 11px;

    text-transform: uppercase;

    letter-spacing: 2px;

    transition: .3s;

}


.nav-link::after {

    content: "";

    position: absolute;

    left: 0;
    bottom: -8px;

    width: 0;
    height: 1px;

    background: var(--gold);

    transition: width .3s;

}


.nav-link:hover,
.nav-link.active {

    color: var(--cream);

}


.nav-link:hover::after,
.nav-link.active::after {

    width: 100%;

}


/* ================= HEADER BUTTON ================= */

.header-button {

    display: flex;

    align-items: center;

    gap: 12px;

    color: var(--gold);

    font-size: 10px;

    letter-spacing: 2px;

    text-transform: uppercase;

}


.header-button span {

    font-size: 18px;

    transition: transform .3s;

}


.header-button:hover span {

    transform: translate(4px,-4px);

}


/* ================= MOBILE MENU ================= */

.menu-toggle {

    display: none;

    background: transparent;

    width: 35px;

}


.menu-toggle span {

    display: block;

    height: 1px;

    background: var(--cream);

    margin: 6px 0;

}


/* ================= HERO ================= */

.hero {

    min-height: 100vh;

    display: flex;

    align-items: center;

    padding-top: 160px;
    padding-bottom: 70px;

}


.hero-grid {

    width: min(
        calc(100% - 80px),
        1350px
    );

    margin: auto;

    display: grid;

    grid-template-columns: 1fr .85fr;

    gap: 90px;

    align-items: center;

}


.hero-eyebrow {

    display: flex;

    align-items: center;

    gap: 12px;

    color: var(--gold);

    font-size: 10px;

    letter-spacing: 4px;

    margin-bottom: 28px;

}


.hero-eyebrow span {

    width: 35px;
    height: 1px;

    background: var(--gold);

}


.hero h1 {

    max-width: 720px;

    font-family: var(--serif);

    font-size: clamp(
        70px,
        9vw,
        140px
    );

    font-weight: 400;

    line-height: .87;

    letter-spacing: -6px;

}


.outline-text {

    color: transparent;

    -webkit-text-stroke: 1px var(--cream);

}


.gold-text {

    color: var(--gold);

    font-style: italic;

}


.hero-description {

    max-width: 480px;

    margin: 40px 0;

    color: #a79c8e;

    font-size: 15px;

    line-height: 1.9;

}


/* ================= BUTTONS ================= */

.hero-buttons {

    display: flex;

    gap: 15px;

}


.button {

    position: relative;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 20px;

    padding: 17px 25px;

    font-size: 10px;

    letter-spacing: 2px;

    text-transform: uppercase;

    overflow: hidden;

    transition: .4s var(--ease);

}


.button span {

    font-size: 17px;

    transition: transform .4s var(--ease);

}


.button:hover span {

    transform: translate(5px,-5px);

}


.button-primary {

    color: var(--black);

    background: var(--gold);

}


.button-primary::before {

    content: "";

    position: absolute;

    inset: 0;

    background: var(--gold-light);

    transform: translateX(-100%);

    transition: .5s var(--ease);

    z-index: 0;

}


.button-primary:hover::before {

    transform: translateX(0);

}


.button-primary > * {

    position: relative;
    z-index: 1;

}


.button-outline {

    border: 1px solid #4a4339;

    color: var(--cream);

}


.button-outline:hover {

    border-color: var(--gold);

    color: var(--gold);

}


/* ================= SIGNATURE ================= */

.hero-signature {

    display: flex;

    align-items: center;

    gap: 15px;

    margin-top: 55px;

}


.hero-signature > span {

    font-family: var(--serif);

    font-size: 34px;

    color: var(--gold);

}


.hero-signature strong {

    display: block;

    font-size: 11px;

    letter-spacing: 2px;

}


.hero-signature small {

    color: #71695f;

    font-size: 9px;

    letter-spacing: 1px;

}


/* ================= HERO ART ================= */

.hero-art {

    position: relative;

}


.hero-frame {

    position: relative;

    padding: 18px;

    border: 1px solid rgba(215,168,78,.3);

}


.hero-frame::before {

    content: "";

    position: absolute;

    inset: 7px;

    border: 1px solid rgba(215,168,78,.12);

}


.hero-image-wrapper {

    position: relative;

    overflow: hidden;

    aspect-ratio: .82;

}


.hero-image {

    height: 100%;

    object-fit: cover;

    filter: saturate(.7) contrast(1.05);

    transition:
        transform 1s var(--ease),
        filter 1s;

}


.hero-art:hover .hero-image {

    transform: scale(1.06);

    filter: saturate(1) contrast(1.05);

}


.hero-image-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            135deg,
            rgba(215,168,78,.15),
            transparent 50%,
            rgba(109,39,56,.15)
        );

}


.hero-image-number {

    position: absolute;

    right: 25px;
    bottom: 20px;

    font-family: var(--serif);

    font-size: 70px;

    color: rgba(255,255,255,.1);

}


.frame-decoration {

    position: absolute;

    width: 70px;
    height: 70px;

    border-color: var(--gold);

}


.top-left {

    top: -10px;
    left: -10px;

    border-top: 1px solid;
    border-left: 1px solid;

}


.bottom-right {

    right: -10px;
    bottom: -10px;

    border-right: 1px solid;
    border-bottom: 1px solid;

}


.hero-floating-card {

    position: absolute;

    right: -35px;
    top: 18%;

    background: rgba(16,14,12,.9);

    border: 1px solid var(--line);

    padding: 18px 20px;

    backdrop-filter: blur(10px);

    box-shadow:
        0 20px 50px rgba(0,0,0,.4);

}


.hero-floating-card span {

    display: block;

    color: var(--gold);

    font-size: 8px;

    letter-spacing: 3px;

    margin-bottom: 6px;

}


.hero-floating-card strong {

    font-size: 10px;

    letter-spacing: 1px;

}


.status-dot {

    position: absolute;

    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #6fcf75;

    right: 12px;
    top: 12px;

    box-shadow:
        0 0 0 5px rgba(111,207,117,.08);

}


.hero-caption {

    display: flex;

    justify-content: space-between;

    margin-top: 15px;

    color: #746b60;

    font-size: 9px;

    letter-spacing: 2px;

}


/* ================= HERO BOTTOM ================= */

.hero-bottom {

    position: absolute;

    left: 40px;
    right: 40px;
    bottom: 30px;

    display: flex;

    justify-content: space-between;

}


.scroll-indicator {

    display: flex;

    align-items: center;

    gap: 15px;

    color: #70685e;

    font-size: 8px;

    letter-spacing: 3px;

}


.scroll-line {

    width: 60px;
    height: 1px;

    background: #3d3831;

}


.scroll-line span {

    display: block;

    width: 30px;
    height: 1px;

    background: var(--gold);

    animation: scrollMove 2s infinite;

}


@keyframes scrollMove {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(30px);
    }

}


.hero-social {

    display: flex;

    align-items: center;

    gap: 20px;

    color: #6f675c;

    font-size: 9px;

    letter-spacing: 2px;

}


.hero-social a:hover {

    color: var(--gold);

}


/* ================= LABELS ================= */

.small-label {

    display: inline-block;

    color: var(--gold);

    font-size: 9px;

    letter-spacing: 4px;

    text-transform: uppercase;

    margin-bottom: 25px;

}


/* ================= STATEMENT ================= */

.statement {

    background:
        linear-gradient(
            120deg,
            rgba(215,168,78,.04),
            transparent 40%
        );

    border-top: 1px solid var(--line);

    border-bottom: 1px solid var(--line);

}


.statement-grid {

    display: grid;

    grid-template-columns: 100px 1fr;

    gap: 50px;

}


.section-number {

    color: var(--gold);

    font-family: var(--serif);

    font-size: 16px;

}


.statement-content {

    max-width: 900px;

}


.statement h2 {

    font-family: var(--serif);

    font-size: clamp(
        40px,
        5vw,
        72px
    );

    font-weight: 400;

    line-height: 1.15;

}


.statement h2 em {

    color: var(--gold);

}


.statement h2 span {

    color: #8b8175;

}


.statement p {

    max-width: 600px;

    margin-top: 35px;

    color: #92887c;

    line-height: 1.9;

}


/* ================= SECTION HEADING ================= */

.section-heading {

    display: flex;

    align-items: flex-end;

    justify-content: space-between;

    margin-bottom: 60px;

}


.section-heading h2 {

    font-family: var(--serif);

    font-size: clamp(
        48px,
        6vw,
        80px
    );

    font-weight: 400;

}


.section-heading h2 em {

    color: var(--gold);

}


.section-heading > p {

    max-width: 300px;

    color: #81776b;

    font-size: 13px;

    line-height: 1.8;

}


/* ================= FILTER ================= */

.filter-bar {

    display: flex;

    gap: 10px;

    margin-bottom: 40px;

    flex-wrap: wrap;

}


.filter {

    padding: 10px 17px;

    background: transparent;

    border: 1px solid #342f29;

    color: #756d62;

    cursor: pointer;

    font-size: 9px;

    letter-spacing: 2px;

    text-transform: uppercase;

    transition: .3s;

}


.filter:hover,
.filter.active {

    border-color: var(--gold);

    color: var(--gold);

    background: rgba(215,168,78,.05);

}


/* ================= GALLERY ================= */

.gallery {

    display: grid;

    grid-template-columns: repeat(12,1fr);

    gap: 55px 25px;

}


.art-card {

    grid-column: span 4;

    cursor: pointer;

}


.art-tall {

    grid-row: span 2;

}


.art-wide {

    grid-column: span 8;

}


.art-image {

    position: relative;

    overflow: hidden;

    background: #151210;

}


.art-image img {

    aspect-ratio: 1 / 1.15;

    object-fit: cover;

    transition:
        transform 1s var(--ease),
        filter .7s;

}


.art-wide .art-image img {

    aspect-ratio: 1.55 / 1;

}


.art-card:hover img {

    transform: scale(1.07);

    filter:
        saturate(1.15)
        contrast(1.05);

}


.art-overlay {

    position: absolute;

    inset: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 20px;

    background: rgba(8,7,6,.65);

    opacity: 0;

    transition: .5s;

}


.art-card:hover .art-overlay {

    opacity: 1;

}


.art-overlay span {

    font-size: 9px;

    letter-spacing: 3px;

    color: var(--cream);

}


.view-icon {

    width: 45px;
    height: 45px;

    display: grid;
    place-items: center;

    border: 1px solid var(--gold);

    color: var(--gold);

    transition: .4s;

}


.art-card:hover .view-icon {

    transform: rotate(45deg);

}


.art-information {

    display: flex;

    justify-content: space-between;

    padding: 18px 0;

    border-bottom: 1px solid var(--line);

}


.art-information h3 {

    font-family: var(--serif);

    font-size: 21px;

    font-weight: 400;

    margin-top: 5px;

}


.art-information > span {

    color: #6e665b;

    font-size: 9px;

    letter-spacing: 1px;

}


.art-number {

    color: var(--gold);

    font-size: 8px;

    letter-spacing: 2px;

}


/* ================= WORK FOOTER ================= */

.work-footer {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-top: 70px;

    padding-top: 25px;

    border-top: 1px solid var(--line);

}


.work-footer p {

    color: #6d655a;

    font-size: 11px;

}


.work-footer a {

    color: var(--gold);

    font-size: 10px;

    letter-spacing: 2px;

}


.work-footer a span {

    margin-left: 10px;

}


/* ================= ABOUT ================= */

.about {

    background:
        linear-gradient(
            90deg,
            rgba(109,39,56,.05),
            transparent 60%
        );

}


.about-grid {

    display: grid;

    grid-template-columns: .9fr 1fr;

    gap: 110px;

    align-items: center;

}


.about-image {

    position: relative;

}


.about-image-frame {

    padding: 12px;

    border: 1px solid rgba(215,168,78,.3);

}


.about-image-frame img {

    aspect-ratio: .85;

    object-fit: cover;

    filter: saturate(.7);

}


.about-badge {

    position: absolute;

    right: -35px;
    bottom: 35px;

    width: 100px;
    height: 100px;

    border-radius: 50%;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    background: var(--gold);

    color: var(--black);

    transform: rotate(-10deg);

}


.about-badge strong {

    font-family: var(--serif);

    font-size: 32px;

}


.about-badge span {

    font-size: 7px;

    letter-spacing: 2px;

}


.about-content h2 {

    font-family: var(--serif);

    font-size: clamp(
        48px,
        6vw,
        80px
    );

    font-weight: 400;

    line-height: 1;

}


.about-content h2 em {

    color: var(--gold);

}


.about-content p {

    max-width: 580px;

    color: #90867a;

    line-height: 1.9;

    margin-top: 25px;

}


.about-content .lead {

    color: var(--cream-soft);

    font-size: 18px;

}


.about-stats {

    display: flex;

    gap: 55px;

    margin-top: 50px;

    padding-top: 30px;

    border-top: 1px solid var(--line);

}


.about-stats strong {

    display: block;

    font-family: var(--serif);

    color: var(--gold);

    font-size: 38px;

}


.about-stats span {

    color: #71695f;

    font-size: 9px;

    letter-spacing: 2px;

}


/* ================= PROCESS ================= */

.process-grid {

    display: grid;

    grid-template-columns: repeat(4,1fr);

    border-top: 1px solid var(--line);

    border-left: 1px solid var(--line);

}


.process-card {

    padding: 35px;

    min-height: 280px;

    border-right: 1px solid var(--line);

    border-bottom: 1px solid var(--line);

    transition:
        background .5s,
        transform .5s var(--ease);

}


.process-card:hover {

    background:
        linear-gradient(
            135deg,
            rgba(215,168,78,.08),
            rgba(109,39,56,.05)
        );

    transform: translateY(-8px);

}


.process-card > span {

    color: var(--gold);

    font-family: var(--serif);

}


.process-card h3 {

    font-family: var(--serif);

    font-size: 28px;

    font-weight: 400;

    margin-top: 60px;

}


.process-card p {

    margin-top: 15px;

    color: #777066;

    font-size: 12px;

    line-height: 1.8;

}


/* ================= SERVICES ================= */

.service-list {

    border-top: 1px solid var(--line);

}


.service-row {

    display: grid;

    grid-template-columns: 100px 1fr 50px;

    align-items: center;

    gap: 30px;

    padding: 35px 10px;

    border-bottom: 1px solid var(--line);

    transition:
        padding .5s var(--ease),
        background .5s;

}


.service-row:hover {

    padding-left: 25px;

    background:
        linear-gradient(
            90deg,
            rgba(215,168,78,.06),
            transparent
        );

}


.service-number {

    color: var(--gold);

    font-family: var(--serif);

}


.service-row h3 {

    font-family: var(--serif);

    font-size: 31px;

    font-weight: 400;

}


.service-row p {

    color: #756d62;

    margin-top: 6px;

    font-size: 12px;

}


.service-arrow {

    font-size: 25px;

    color: var(--gold);

    transition: transform .4s;

}


.service-row:hover .service-arrow {

    transform: translate(5px,-5px);

}


/* ================= COMMISSION ================= */

.commission {

    overflow: hidden;

    text-align: center;

    background:
        linear-gradient(
            135deg,
            #21150d,
            #0c0907 60%,
            #1b0d12
        );

    border-top: 1px solid rgba(215,168,78,.15);

    border-bottom: 1px solid rgba(215,168,78,.15);

}


.commission-glow {

    position: absolute;

    width: 400px;
    height: 400px;

    background: var(--gold);

    filter: blur(150px);

    opacity: .08;

    left: 50%;
    top: 50%;

    transform: translate(-50%,-50%);

}


.commission h2 {

    position: relative;

    font-family: var(--serif);

    font-weight: 400;

    font-size: clamp(
        60px,
        9vw,
        120px
    );

    line-height: .9;

}


.commission h2 em {

    color: var(--gold);

}


.commission p {

    position: relative;

    max-width: 500px;

    margin: 35px auto;

    color: #92877a;

    line-height: 1.8;

}


/* ================= CONTACT ================= */

.contact-grid {

    display: grid;

    grid-template-columns: .8fr 1.2fr;

    gap: 100px;

}


.contact-content h2 {

    font-family: var(--serif);

    font-size: clamp(
        50px,
        6vw,
        80px
    );

    font-weight: 400;

    line-height: 1;

}


.contact-content h2 em {

    color: var(--gold);

}


.contact-content > p {

    max-width: 450px;

    margin-top: 30px;

    color: #877e72;

    line-height: 1.8;

}


.contact-details {

    margin-top: 50px;

}


.contact-details > div {

    padding: 20px 0;

    border-top: 1px solid var(--line);

}


.contact-details span {

    display: block;

    color: var(--gold);

    font-size: 8px;

    letter-spacing: 3px;

    margin-bottom: 8px;

}


.contact-details a,
.contact-details p {

    color: var(--cream);

    font-size: 13px;

}


/* ================= FORM ================= */

.contact-form {

    padding: 45px;

    border: 1px solid var(--line);

    background: rgba(255,255,255,.015);

}


.form-row {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 20px;

}


.form-group {

    margin-bottom: 25px;

}


.form-group label {

    display: block;

    color: #82796d;

    font-size: 9px;

    letter-spacing: 2px;

    text-transform: uppercase;

    margin-bottom: 10px;

}


.form-group input,
.form-group textarea,
.form-group select {

    width: 100%;

    border: 1px solid #332e28;

    background: #0d0b09;

    color: var(--cream);

    padding: 15px;

    outline: none;

    transition: .3s;

}


.form-group textarea {

    resize: vertical;

}


.form-group select option {

    background: var(--black);

}


.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {

    border-color: var(--gold);

    box-shadow:
        0 0 0 3px rgba(215,168,78,.06);

}


.form-button {

    width: 100%;

    cursor: pointer;

}


.form-message {

    margin-top: 15px;

    color: var(--gold);

    font-size: 11px;

}


/* ================= FOOTER ================= */

.footer {

    border-top: 1px solid var(--line);

    padding: 55px 0 25px;

}


.footer-main {

    display: flex;

    justify-content: space-between;

    align-items: center;

}


.footer-brand {

    font-family: var(--serif);

    font-size: 25px;

}


.footer-brand span {

    color: var(--gold);

}


.footer-main p {

    color: #6d655b;

    font-size: 10px;

    margin-top: 8px;

}


.footer-social {

    display: flex;

    gap: 25px;

}


.footer-social a {

    color: #80776b;

    font-size: 10px;

    letter-spacing: 1px;

}


.footer-social a:hover {

    color: var(--gold);

}


.footer-bottom {

    display: flex;

    justify-content: space-between;

    margin-top: 60px;

    padding-top: 20px;

    border-top: 1px solid var(--line);

    color: #514b44;

    font-size: 9px;

}


/* ================= LIGHTBOX ================= */

.lightbox {

    position: fixed;

    inset: 0;

    z-index: 9999;

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 40px;

    background: rgba(5,4,3,.96);

    opacity: 0;

    visibility: hidden;

    transition: .5s;

}


.lightbox.active {

    opacity: 1;

    visibility: visible;

}


.lightbox-close {

    position: absolute;

    top: 30px;
    right: 35px;

    width: 45px;
    height: 45px;

    background: transparent;

    border: 1px solid #423b32;

    color: var(--cream);

    font-size: 25px;

    cursor: pointer;

}


.lightbox-close:hover {

    border-color: var(--gold);

    color: var(--gold);

}


.lightbox-content {

    max-width: 900px;

    max-height: 90vh;

}


.lightbox-image-wrap img {

    max-height: 75vh;

    width: auto;

    max-width: 100%;

    margin: auto;

    object-fit: contain;

}


.lightbox-info {

    text-align: center;

    margin-top: 20px;

}


.lightbox-info span {

    color: var(--gold);

    font-size: 9px;

    letter-spacing: 3px;

}


.lightbox-info h2 {

    font-family: var(--serif);

    font-weight: 400;

    margin-top: 6px;

}


/* ================= REVEAL ================= */

.reveal {

    opacity: 0;

    transform: translateY(50px);

    transition:
        opacity 1s var(--ease),
        transform 1s var(--ease);

}


.reveal.visible {

    opacity: 1;

    transform: translateY(0);

}


/* ================= HIDDEN FILTER ================= */

.art-card.hidden {

    display: none;

}


/* ================= RESPONSIVE ================= */

@media (max-width: 1000px) {

    .container,
    .hero-grid {

        width: min(
            calc(100% - 40px),
            var(--container)
        );

    }


    .main-navigation {

        gap: 20px;

    }


    .hero-grid {

        gap: 50px;

    }


    .process-grid {

        grid-template-columns: repeat(2,1fr);

    }


    .about-grid,
    .contact-grid {

        gap: 60px;

    }

}


@media (max-width: 800px) {

    .section {

        padding: 100px 0;

    }


    .main-navigation {

        position: fixed;

        top: 0;
        right: 0;

        width: 280px;
        height: 100vh;

        padding: 120px 35px;

        flex-direction: column;

        background: #0d0b09;

        border-left: 1px solid var(--line);

        transform: translateX(100%);

        transition: transform .5s var(--ease);

    }


    .main-navigation.open {

        transform: translateX(0);

    }


    .menu-toggle {

        display: block;

        z-index: 2;

    }


    .header-button {

        display: none;

    }


    .hero-grid {

        grid-template-columns: 1fr;

    }


    .hero-art {

        max-width: 600px;

        margin: auto;

    }


    .hero-bottom {

        display: none;

    }


    .statement-grid {

        grid-template-columns: 1fr;

        gap: 20px;

    }


    .about-grid,
    .contact-grid {

        grid-template-columns: 1fr;

    }


    .about-image {

        max-width: 600px;

    }


    .gallery {

        grid-template-columns: repeat(2,1fr);

    }


    .art-card,
    .art-wide {

        grid-column: span 1;

    }


    .art-wide .art-image img {

        aspect-ratio: 1 / 1.15;

    }

}


@media (max-width: 600px) {

    .container,
    .hero-grid {

        width: calc(100% - 30px);

    }


    .hero h1 {

        font-size: clamp(
            60px,
            17vw,
            100px
        );

        letter-spacing: -4px;

    }


    .hero-description {

        font-size: 13px;

    }


    .hero-buttons {

        flex-direction: column;

        align-items: stretch;

    }


    .hero-floating-card {

        right: -10px;

    }


    .section-heading {

        display: block;

    }


    .section-heading > p {

        margin-top: 20px;

    }


    .gallery {

        grid-template-columns: 1fr;

    }


    .art-card,
    .art-wide {

        grid-column: span 1;

    }


    .process-grid {

        grid-template-columns: 1fr;

    }


    .service-row {

        grid-template-columns: 45px 1fr 25px;

        gap: 10px;

    }


    .service-row h3 {

        font-size: 23px;

    }


    .contact-form {

        padding: 25px;

    }


    .form-row {

        grid-template-columns: 1fr;

    }


    .footer-main,
    .footer-bottom {

        flex-direction: column;

        align-items: flex-start;

        gap: 25px;

    }


    .footer-bottom {

        margin-top: 35px;

    }


    .cursor-dot,
    .cursor-ring {

        display: none;

    }

}


@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {

        animation-duration: .01ms !important;

        animation-iteration-count: 1 !important;

        scroll-behavior: auto !important;

        transition-duration: .01ms !important;

    }

}


/* ================= END ================= */
