function animacion() {
  // Obtener la sección de proyectos
  const proyectos = document.querySelector('#projects');

  // Asignar una función al evento mouseover de la sección
  proyectos.addEventListener('mouseover', reproducirAnimacion);

  // Función para reproducir la animación
  function reproducirAnimacion() {
    // Obtener la sección de animación
    const animacion = document.querySelector('#animacion');
    
    // Reproducir la animación (puedes usar cualquier método o librería para hacerlo)
    animacion.play();
  }
}

// Ejecutar la función al cargar la página
window.addEventListener('load', animacion);