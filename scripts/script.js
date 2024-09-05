const projects = document.querySelector(".projects");
const projects2 = document.querySelector(".projects-2");

const services = document.querySelector(".services");
const services2 = document.querySelector(".services-2");

const contact = document.querySelector(".contact");
const contact2 = document.querySelector(".contact-2");

const about = document.querySelector(".about");
const about2 = document.querySelector(".about-2");

const sectionP = document.querySelector(".section-1");
const sectionS = document.querySelector(".section-2");
const sectionC = document.querySelector(".section-3");
const sectionA = document.querySelector(".section-4");

projects.addEventListener("click", () => {
    sectionP.scrollIntoView({ behavior: 'smooth' });
});
projects2.addEventListener("click", () => {
    sectionP.scrollIntoView({ behavior: 'smooth' });
});

services.addEventListener("click", () => {
    sectionS.scrollIntoView({ behavior: 'smooth' });
});
services2.addEventListener("click", () => {
    sectionS.scrollIntoView({ behavior: 'smooth' });
});

contact.addEventListener("click", () => {
    sectionC.scrollIntoView({ behavior: 'smooth' });
});
contact2.addEventListener("click", () => {
    sectionC.scrollIntoView({ behavior: 'smooth' });
});

about.addEventListener("click", () => {
    sectionA.scrollIntoView({ behavior: 'smooth' });
});
about2.addEventListener("click", () => {
    sectionA.scrollIntoView({ behavior: 'smooth' });
});
