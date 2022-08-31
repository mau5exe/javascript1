const nameUs = prompt("Ingrese su Nombre");
alert("Bienvenido " + nameUs);
alert(
  "En BURGERLAND vas a personzalizar tu hambuguesa a tu medida, estas listo???"
);

const continuar = prompt(
  "***RECORDA QUE SOLO TRABAJAMOS CON PAGO EN EFECTIVO***" +
    " INGRESE : " +
    "OK para continuar o" +
    " CANCELAR para salir"
);

switch (continuar) {
    case "CANCELAR":
          console.log(
            alert("gracias por tu visita, te esperamos en otra oportunidad")
          );
        break;

    case "OK": {
        console.log(alert("Empeza a elegir los ingredientes!!!"));
        let pan = prompt(`Ingrese tipo de pan: ,
        1: Pan Comun
        2: Pan de Queso
        3: Pan de papa`);
        let carne = prompt(`Ingrese cantidad de extra carne:",
        1: Una hamburguesa
        2: Dos hamburguesas
        3: Tres hamburguesas`);
        let ingredienteUno = prompt(`Ingrese ingrediente 1:",
        1: Con tomate
        2: Sin tomate`);
        let ingredienteDos = prompt(`Ingrese ingrediente 2:",
        1: Con lechuga
        2: Sin lechuga`);
        let ingredienteTres = prompt(`Ingrese Ingrediente 3:",
        1: Queso cheddar
        2: Queso tybo
        3: Sin queso`);

        alert("Elegiste estos Ingredientes: ");

     switch (pan) {
      case "1":
        alert("Pan Comun");
        break;
      case "2":
        alert("Pan de Queso");
        break;
      case "3":
        console.log("Pan de Papa");
        break;
      default:
        alert("No elegiste una opcion valida");
        break;
     }
     switch (carne) {
      case "1":
        alert("Una hamburguesa");
        break;
      case "2":
        alert("Dos hamburguesas");
        break;
      case "3":
        alert("Tres hamburguesas");
        break;
      default:
        alert("No elegiste una opcion valida");
        break;
     }
     switch (ingredienteUno) {
      case "1":
        alert("Con tomate");
        break;
      case "2":
        alert("Sin tomate");
        break;
      default:
        alert("No elegiste una opcion valida");
        break;
     }
     switch (ingredienteDos) {
      case "1":
        alert("Con lechuga");
        break;
      case "2":
        alert("Sin lechuga");
        break;

      default:
        alert("No elegiste una opcion valida");
        break;
     }
     switch (ingredienteTres) {
      case "1":
        alert("Queso cheddar");
        break;
      case "2":
        alert("Queso tybo");
        break;
      case "3":
        alert("Sin queso");
        break;
      default:
        alert("No elegiste una opcion valida");
        break;
        
    }

       alert("Tu pedido fue aceptado y ya se encuentra en preaparacion. Muchas Gracias");
    }   

}
/*for (let i = 0; (i = 6); i++) {
  let ingredientes = numero + i;
}*/
