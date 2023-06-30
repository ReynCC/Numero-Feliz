function sumarCuadradosDigitos(n) {

    let suma = 0;

    while (n > 0) {

      const digito = n % 10;

      suma += digito ** 2;

      n = Math.floor(n / 10);

    }

    return suma;

  }
  
  function esFeliz(n) {

    const historial = new Set();

    while (n !== 1) {

      n = sumarCuadradosDigitos(n);

      if (historial.has(n)) {

        return false;

      }

      historial.add(n);

    }

    return true;

  }
  
  function mostrarNumerosFelices(maximo) {

    for (let i = 1; i <= maximo; i++) {

      if (esFeliz(i)) {

        document.write(i + '<br>');

      }

    }

  }
  
  const numeroMaximo = parseInt(prompt('Ingrese el número máximo:'));
  
    mostrarNumerosFelices(numeroMaximo);
    