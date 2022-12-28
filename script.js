function animacion() {
  // Obtener la secci�n de proyectos
  const proyectos = document.querySelector('#projects');

  // Asignar una funci�n al evento mouseover de la secci�n
  proyectos.addEventListener('mouseover', reproducirAnimacion);

  // Funci�n para reproducir la animaci�n
  function reproducirAnimacion() {
    // Obtener la secci�n de animaci�n
    const animacion = document.querySelector('#animacion');
    
    // Reproducir la animaci�n (puedes usar cualquier m�todo o librer�a para hacerlo)
    animacion.play();
  }
}

// Ejecutar la funci�n al cargar la p�gina
window.addEventListener('load', animacion);