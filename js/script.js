const botonMenu = document.querySelector(".hamb");
const menu = document.querySelector("#menu-principal");

// Controla el estado visual
function establecerMenu(abierto) {
  menu.classList.toggle("open", abierto);
  botonMenu.setAttribute("aria-expanded", String(abierto));
  botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  icono.classList.toggle("fa-bars", !abierto);
  icono.classList.toggle("fa-xmark", abierto);
}

// Escucha el clic en el botón para alternar entre abrir y cerrar el menú
botonMenu.addEventListener("click", () => {
  establecerMenu(!menu.classList.contains("open"));
});

// Cierra el menú al presionar la tecla Escape y pasa el foco al botón
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && menu.classList.contains("open")) {
    establecerMenu(false);
    botonMenu.focus();
  }
});

// Cierra el menú automáticamente al hacer clic en cualquier enlaces
menu.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => establecerMenu(false));
});

// Detecta si la pantalla cambia a tamaño de escritorio y cierra el menú para evitar fallos visuales
const escritorio = window.matchMedia("(min-width: 765px)");
escritorio.addEventListener("change", () => establecerMenu(false));
