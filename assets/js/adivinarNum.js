document.addEventListener('DOMContentLoaded', function() {

    
    const botonAdivinar = document.getElementById('comenzar');
    const resultadoElemento = document.getElementById('respuesta');
  
    botonAdivinar.addEventListener('click', function() {
      adivinarNumero();
    });
  
    function adivinarNumero() {
      let min = 1;
      let max = 100;
      let intentos = 0;
  
      while (min <= max) {
        intentos++;
        let numAdivinadoListo = Math.floor((min + max) / 2);
        let confirmado = confirm(`¿Tu número es ${numAdivinadoListo}?`);
  
        if (confirmado) {
          resultadoElemento.textContent = `¡Tu número es el ${numAdivinadoListo}! ¡Lo adivine!`;
          return;
        } else if (confirm("¿Tu número es mayor que " + numAdivinadoListo + "?")) {
          min = numAdivinadoListo + 1;
        } else {
          max = numAdivinadoListo - 1;
        }
      }
  
      resultadoElemento.textContent = "No pude adivinar tu número en " + intentos + " intentos. !Volvamos a comenzar pero ahora imagina más fuerte!";
    }
  });