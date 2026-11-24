
let productos = [];


const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("input-nombre");
const inputPrecio = document.getElementById("input-precio");
const mensajeError = document.getElementById("mensaje-error");
const contenedor = document.getElementById("contenedor");
const totalElemento = document.getElementById("total");

let sumatoria = 0;

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombreProducto = inputNombre.value.trim();
  const precioNumero = Number(inputPrecio.value);

  if (!nombreProducto || isNaN(precioNumero) || precioNumero <= 0) {
    alert("Ingresa un nombre válido y un precio mayor a 0");
    return;
  }

  const producto = {
    nombre: nombreProducto,
    precio: precioNumero,
  };

  productos.push(producto);

  actualizarTotal();

  formulario.reset();
  inputNombre.focus();

  renderizar();
});

function actualizarTotal() {
  sumatoria = productos.reduce(
    (acumulado, producto) => acumulado + producto.precio,
    0
  );

  totalElemento.textContent = "$ " + sumatoria;
}

function renderizar() {
  contenedor.textContent = "";

  productos.forEach((producto, index) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    const nombre = document.createElement("span");
    nombre.className = "tarjeta-nombre";
    nombre.textContent = producto.nombre;

    const precio = document.createElement("span");
    precio.className = "tarjeta-precio";
    precio.textContent = producto.precio;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);

    tarjeta.addEventListener("click", () => {
      productos.splice(index, 1);

      actualizarTotal();
      renderizar();
    });

    contenedor.appendChild(tarjeta);
  });
}

