/* =========================================================
   NOVASTREAM · script.js
   - Navegación entre vistas usando el hash de la URL (#inicio, #planes...)
   - Marca como "activo" el ítem del menú actual
   - Botones con data-go (navegan) y data-plan (muestran aviso)
   ========================================================= */

(function () {
  const navItems = document.querySelectorAll(".nav-item");
  const views = document.querySelectorAll(".view");
  const genericView = document.getElementById("vista-generica");
  const genericTitle = document.getElementById("generica-titulo");
  const toast = document.getElementById("toast");
  let toastTimer;

  /* Muestra la vista que corresponde al hash actual */
  function showView() {
    const id = location.hash.slice(1) || "inicio";
    const link = document.querySelector('.nav-item[href="#' + id + '"]');
    let target = document.getElementById("vista-" + id);

    // Si no existe una vista con contenido, usamos la genérica con el nombre del ítem
    if (!target) {
      target = genericView;
      genericTitle.textContent = link
        ? link.querySelector(".label").textContent
        : "Sección";
    }

    views.forEach(function (view) { view.hidden = true; });
    target.hidden = false;

    // Reinicia la animación de entrada
    target.classList.remove("view-enter");
    void target.offsetWidth;
    target.classList.add("view-enter");

    // Actualiza el ítem activo del menú
    navItems.forEach(function (item) {
      const isActive = item === link;
      item.classList.toggle("active", isActive);
      if (isActive) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    });

    window.scrollTo({ top: 0 });
  }

  /* Aviso emergente temporal */
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 2500);
  }

  /* Un solo listener para todos los botones */
  document.addEventListener("click", function (event) {
    const goButton = event.target.closest("[data-go]");
    if (goButton) {
      location.hash = "#" + goButton.dataset.go;
      return;
    }

    const planButton = event.target.closest("[data-plan]");
    if (planButton) {
      showToast("Elegiste el plan " + planButton.dataset.plan + " ✦");
    }
  });

  window.addEventListener("hashchange", showView);
  showView();
})();
