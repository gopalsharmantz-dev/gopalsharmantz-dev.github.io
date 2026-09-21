const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.querySelector(".theme-icon");

    if (!themeToggle) return;


    /* =========================================
       GET SAVED THEME
    ========================================= */

    const savedTheme = localStorage.getItem("theme");


    /* =========================================
       SYSTEM THEME
    ========================================= */

    const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;


    /* =========================================
       INITIAL THEME
    ========================================= */

    if (savedTheme) {

        document.documentElement.setAttribute(
            "data-theme",
            savedTheme
        );

    } else if (systemDark) {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

    } else {

        document.documentElement.setAttribute(
            "data-theme",
            "light"
        );
    }


    updateThemeIcon();


    /* =========================================
       TOGGLE THEME
    ========================================= */

    themeToggle.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute(
                "data-theme"
            );

        const newTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";


        document.documentElement.setAttribute(
            "data-theme",
            newTheme
        );


        localStorage.setItem(
            "theme",
            newTheme
        );


        updateThemeIcon();
    });


    /* =========================================
       ICON
    ========================================= */

    function updateThemeIcon() {

        const currentTheme =
            document.documentElement.getAttribute(
                "data-theme"
            );


        if (currentTheme === "dark") {

            themeIcon.textContent = "☀";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

        } else {

            themeIcon.textContent = "☾";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );
        }
    }

});
