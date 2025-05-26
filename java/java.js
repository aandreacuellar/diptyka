// JavaScript Document
//*SHOW MENU*/
const navmenu = document.querySelector("#navmenu");
const abrirmenu = document.querySelector("#abrirmenu");
const cerrarmenu = document.querySelector("#cerrarmenu");

abrirmenu.addEventListener("click", () => {
	navmenu.classList.add("visible");
})

cerrarmenu.addEventListener("click", () => {
	navmenu.classList.remove("visible");
})

// BUSCADOR
