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

gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".panel");
let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    pin: true, 
    pinSpacing: false 
  });
});

ScrollTrigger.create({
  snap: {
    snapTo: (progress, self) => {
      let panelStarts = tops.map(st => st.start),
          snapScroll = gsap.utils.snap(panelStarts, self.scroll());
    },
    duration: 0.5
  }
})
ScrollTrigger.create({
  snap: {
    snapTo: (progress, self) => {
      let panelStarts = tops.map(st => st.start),
          snapScroll = gsap.utils.snap(panelStarts, self.scroll());
      return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
    },
    duration: 0.5
  }
});

// Scroll horizontal por sección
    const secciones = document.querySelectorAll('.epoca');

    secciones.forEach(epoca => {
      const slider = epoca.querySelector('.slider');
      let currentIndex = 0;
      const totalSlides = slider.children.length;

      epoca.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) < 10) return; // evita scrolls suaves innecesarios
        e.preventDefault();

        if (e.deltaY > 0 && currentIndex < totalSlides - 1) {
          currentIndex++;
        } else if (e.deltaY < 0 && currentIndex > 0) {
          currentIndex--;
        } else {
          return;
        }

        const offset = currentIndex * window.innerWidth;
        slider.style.transform = `translateX(-${offset}px)`;
      }, { passive: false });
    });