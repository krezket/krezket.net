const logo = document.querySelector(".logo");

const services = document.querySelector(".services");
const services2 = document.querySelector(".services-2");

const projects = document.querySelector(".projects");
const projects2 = document.querySelector(".projects-2");

const contact = document.querySelector(".contact");
const contact2 = document.querySelector(".contact-2");

const about = document.querySelector(".about");
const about2 = document.querySelector(".about-2");

const sectionS = document.getElementById("section-1"); 
const sectionP = document.getElementById("section-2"); 
const sectionC = document.getElementById("section-3"); 
const sectionA = document.getElementById("section-4");

logo.addEventListener("click", () => {
    scrollTo(0,0)
});

services.addEventListener("click", () => {
    sectionS.scrollIntoView({ behavior: 'smooth' });
});
services2.addEventListener("click", () => {
    sectionS.scrollIntoView({ behavior: 'smooth' });
});

projects.addEventListener("click", () => {
    sectionP.scrollIntoView({ behavior: 'smooth' });
});
projects2.addEventListener("click", () => {
    sectionP.scrollIntoView({ behavior: 'smooth' });
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
