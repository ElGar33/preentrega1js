const dolar = 378;
let juego = {
  compras: [],
};

const mainMenu = () => {
  let opcion = prompt("Elija una opción: \n 1. Elegir juego \n 2. Ver detalle de factura \n 3. Salir");
  switch (opcion) {
    case "1":
      datosJuego();
      break;
    case "2":
      factura();
      break;
    case "3":
      alert("Gracias por usar el programa!");
      break;
    default:
      break;
  }
};

const datosJuego = () => {
  let continuar = "s";
  while (continuar.toLowerCase() === "s") {
    juego.compras.push(datosFactura());
    continuar = prompt("¿Deseas continuar? s/n");
  }
  mainMenu();
};

const datosFactura = () => {
  let datosCompra = {};
  datosCompra.nombre = prompt("¿Qué juego quieres comprar?");
  datosCompra.precio = prompt("Precio del juego");
  datosCompra.moneda = prompt("Elija la moneda de pago: \n 1. U$D \n 2. AR$");
  return datosCompra;
};

let impuestos = "";

const factura = () => {
  let datosCompra = juego.compras[juego.compras.length - 1]; // Obtener los datos de la última compra

  if (datosCompra.moneda === "1") {
    impuestos = datosCompra.precio * dolar * 1.45;
    alert("El precio de tu juego es: \n Neto: $" + datosCompra.precio * dolar + "\n Impuestos: $" + impuestos);
  } else {
    impuestos = 0;
    alert("El precio de tu juego es: \n Total: $" + datosCompra.precio * dolar);
  }
};

mainMenu();