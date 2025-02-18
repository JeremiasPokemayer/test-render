(function () {
  const botonEl = document.querySelector(".boton");
  botonEl.addEventListener("click", () => {
    history.pushState({}, "", "/una-ruta-especial");
  });
})();
