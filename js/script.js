let intervaloActual; // Variable para almacenar el intervalo actual

document.addEventListener('DOMContentLoaded', function() {
  const pantalla = document.getElementById("hora");


  function getSantiago() {
    const ciudad = "America/Santiago";
    // Construye la URL del servicio WorldTimeAPI para la ciudad específica
    const apiUrl = `https://worldtimeapi.org/api/timezone/${ciudad}`;

    // Realiza una solicitud HTTP para obtener la hora actual
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Extrae la fecha y hora de la respuesta
        const hora = new Date(data.datetime);

        // Obtiene solo la hora
        const horaFormateada = hora.toLocaleTimeString('en-US', { timeZone: ciudad });

        // Muestra en la consola
        pantalla.innerHTML = horaFormateada;
      })
      .catch(error => {
        console.error(`Error al obtener la hora para ${ciudad}: ${error.message}`);
      });
  }


  function getMadrid() {
    setInterval(getBuenosAires(), 1000)
    const ciudad = "Europe/Madrid";
    // Construye la URL del servicio WorldTimeAPI para la ciudad específica
    const apiUrl = `https://worldtimeapi.org/api/timezone/${ciudad}`;

    // Realiza una solicitud HTTP para obtener la hora actual
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Extrae la fecha y hora de la respuesta
        const hora = new Date(data.datetime);

        // Obtiene solo la hora
        const horaFormateada = hora.toLocaleTimeString('en-US', { timeZone: ciudad });

        // Muestra en la consola
        pantalla.innerHTML = horaFormateada;
      })
      .catch(error => {
        console.error(`Error al obtener la hora para ${ciudad}: ${error.message}`);
      });
  }


  function getBuenosAires() {
    const ciudad = "America/Argentina/Buenos_Aires";
    // Construye la URL del servicio WorldTimeAPI para la ciudad específica
    const apiUrl = `https://worldtimeapi.org/api/timezone/${ciudad}`;

    // Realiza una solicitud HTTP para obtener la hora actual
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Extrae la fecha y hora de la respuesta
        const hora = new Date(data.datetime);

        // Obtiene solo la hora
        const horaFormateada = hora.toLocaleTimeString('en-US', { timeZone: ciudad });

        // Muestra en la consola
        pantalla.innerHTML = horaFormateada;
      })
      .catch(error => {
        console.error(`Error al obtener la hora para ${ciudad}: ${error.message}`);
      });
  }


  function getNewYork() {
    const ciudad = "America/New_York";
    // Construye la URL del servicio WorldTimeAPI para la ciudad específica
    const apiUrl = `https://worldtimeapi.org/api/timezone/${ciudad}`;

    // Realiza una solicitud HTTP para obtener la hora actual
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Extrae la fecha y hora de la respuesta
        const hora = new Date(data.datetime);

        // Obtiene solo la hora
        const horaFormateada = hora.toLocaleTimeString('en-US', { timeZone: ciudad });

        // Muestra
        pantalla.innerHTML = horaFormateada;
      })
      .catch(error => {
        console.error(`Error al obtener la hora para ${ciudad}: ${error.message}`);
      });
  }
  

  function getTokio() {
    const ciudad = "Asia/Tokyo";
    // Construye la URL del servicio WorldTimeAPI para la ciudad específica
    const apiUrl = `https://worldtimeapi.org/api/timezone/Asia/Tokyo`;

    // Realiza una solicitud HTTP para obtener la hora actual
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Extrae la fecha y hora de la respuesta
        const hora = new Date(data.datetime);

        // Obtiene solo la hora
        const horaFormateada = hora.toLocaleTimeString('en-US', { timeZone: ciudad });

        // Muestra en la consola
        pantalla.innerHTML = horaFormateada;
      })
      .catch(error => {
        console.error(`Error al obtener la hora para ${ciudad}: ${error.message}`);
      });
  }

  // Primera llamada opcion 1
  getSantiago();

  // Funcion para onchange
  window.eleccionOption = function() {
    const selectElement = document.getElementById("opciones");
    const option = selectElement.value;

    switch (option) {
      case "opcion1":
        getSantiago();
        break;
      case "opcion2":
        getBuenosAires();
        break;
      case "opcion3":
        getMadrid();
        break;
      case "opcion4":
        getTokio();
        break;
      case "opcion5":
        getNewYork();
        break;
      default:
        console.error("Opción no reconocida");
    }
  }

});


