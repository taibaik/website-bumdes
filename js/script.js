// =======================================
// BUMDES WEBSITE SCRIPT
// Scroll Reveal Animation
// =======================================

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(".fade-in");

    // If browser does not support IntersectionObserver
    if (!("IntersectionObserver" in window)) {
        elements.forEach(el => el.classList.add("show"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(el => observer.observe(el));

});
