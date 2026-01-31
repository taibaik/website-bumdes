// ===============================
// Scroll Reveal Animation
// ===============================

const reveals = document.querySelectorAll(".reveal, .fade-in");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const elementVisible = 120;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active", "show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
