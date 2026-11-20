let productos = [];

// ---------- REFERENCIAS AL DOM ----------
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("input-nombre");
const inputPrecio = document.getElementById("input-precio");
const mensajeError = document.getElementById("mensaje-error");
const contenedor = document.getElementById("contenedor");
const totalElemento = document.getElementById("total");
let sumatoria = 0;

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  inputNombre.value.trim();

  const precioNumero = Number(inputPrecio.value);
if (!inputNombre.value || isNaN(precioNumero) || precioNumero <= 0) {
  alert("Ingresa un nombre válido y un precio mayor a 0");
  return;
}
const producto = {
  nombre: inputNombre.value,
  precio: Number(inputPrecio.value),
};
productos.push(producto);

sumatoria = productos.reduce((acumulado, producto) => acumulado + producto.precio, 0);
console.log(sumatoria);
totalElemento.textContent = "$ " + sumatoria;

formulario.reset();

inputNombre.focus();

renderizar();

});


function renderizar() {
  // 1. Limpiar el contenedor para no duplicar tarjetas
  contenedor.textContent = "";

  // 2. Recorrer el array y crear una tarjeta por producto
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

    contenedor.appendChild(tarjeta);

    tarjeta.addEventListener("click", () => eliminarProducto(producto.id));

  });

}

