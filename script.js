const sections = document.querySelectorAll(".fade-section");

function revealSections() {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#mobile-menu");
toggle.addEventListener("click", ()=>{
    menu.classList.toggle("active");
});