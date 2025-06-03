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

<script>
  const sections = document.querySelectorAll(".section");
  let current = 0;
  let isScrolling = false;

  function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: "smooth" });
    current = index;
    setTimeout(() => { isScrolling = false; }, 1000); // tiempo de bloqueo
  }

  window.addEventListener("wheel", (e) => {
    const currentSection = sections[current];
    const isScrollable = currentSection.classList.contains("scrollable");
    const innerScroll = currentSection.querySelector(".inner-scroll");

    if (isScrolling) return;

    if (isScrollable && innerScroll) {
      const atTop = innerScroll.scrollTop === 0;
      const atBottom = innerScroll.scrollTop + innerScroll.clientHeight >= innerScroll.scrollHeight - 5;

      if (e.deltaY > 0 && atBottom) {
        scrollToSection(current + 1);
      } else if (e.deltaY < 0 && atTop) {
        scrollToSection(current - 1);
      }
    } else {
      scrollToSection(e.deltaY > 0 ? current + 1 : current - 1);
    }
  });
</script>
