// JavaScript Document

// Menú
    const navmenu = document.querySelector("#navmenu");
    const abrirmenu = document.querySelector("#abrirmenu");
    const cerrarmenu = document.querySelector("#cerrarmenu");

    abrirmenu.addEventListener("click", () => {
      navmenu.classList.add("visible");
    });

    cerrarmenu.addEventListener("click", () => {
      navmenu.classList.remove("visible");
    });

// TRANSICIÓN
// Selecciona todos los elementos con la clase .anim
const animElements = document.querySelectorAll('.anim');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}, { threshold: 0.1 });

animElements.forEach(el => observer.observe(el));
