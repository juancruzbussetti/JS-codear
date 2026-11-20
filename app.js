// ============================================================
// LISTA DE COMPRAS - Esqueleto base del grupo
// Cada producto tiene la forma: { id: 1700000000000, nombre: "Leche", precio: 2500 }

// BLOQUE 1: FORMULARIO DE INGRESO
// Responsable: Florencia Velez
// ============================================================

// ---------- ESTADO (fuente de verdad) ----------
// Usamos let (no const) para poder reasignar el array con filter()
let productos = [];

// ---------- REFERENCIAS AL DOM ----------
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("input-nombre");
const inputPrecio = document.getElementById("input-precio");
const mensajeError = document.getElementById("mensaje-error");
const contenedor = document.getElementById("contenedor");
const totalElemento = document.getElementById("total");

// ---------- UTILIDADES ----------
function formatearPrecio(valor) {
  return "$" + valor.toLocaleString("es-AR");
}

function mostrarError(texto) {
  mensajeError.textContent = texto;
}

// ============================================================
// BLOQUE 2: CAPTURA DE DATOS
// Responsable: FLorencia Velez
// ============================================================
function agregarProducto(evento) {
  evento.preventDefault(); // evita que la página se recargue

  // TODO 1: leer inputNombre.value (y aplicar .trim())
  // TODO 2: leer inputPrecio.value y convertirlo con Number()
  // TODO 3: validar -> nombre no vacío, Number.isNaN() y precio > 0
  //         si algo falla: mostrarError("...") y hacer return
  // TODO 4: mostrarError("") para limpiar el mensaje anterior
  // TODO 5: crear el objeto { id: Date.now(), nombre, precio } y agregarlo con push()
  // TODO 6: formulario.reset() y volver a poner el foco en inputNombre
  // TODO 7: llamar a renderizar()
}

formulario.addEventListener("submit", agregarProducto);

// ============================================================
// BLOQUE 3: RENDERIZADO Y TOTAL
// Responsable: Martin Veliz
// ============================================================
function renderizar() {
  // 1. Limpiar el contenedor para no duplicar tarjetas
  contenedor.textContent = "";

  // 2. Recorrer el array y crear una tarjeta por producto
  productos.forEach((producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.title = "Clic para eliminar";

    const nombre = document.createElement("span");
    nombre.className = "tarjeta-nombre";
    nombre.textContent = producto.nombre;

    const precio = document.createElement("span");
    precio.className = "tarjeta-precio";
    precio.textContent = formatearPrecio(producto.precio);

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);

    // BLOQUE 4: cada tarjeta se elimina al hacer clic
    tarjeta.addEventListener("click", () => eliminarProducto(producto.id));

    contenedor.appendChild(tarjeta);
  });

  // 3. Calcular y mostrar el total con reduce()
  const total = productos.reduce((acumulado, producto) => acumulado + producto.precio, 0);
  totalElemento.textContent = formatearPrecio(total);
}

// ============================================================
// BLOQUE 4: ELIMINAR AL HACER CLIC
// Responsable: Juan Cruz Bussetti
// ============================================================
function eliminarProducto(id) {
  // TODO 1: reasignar productos con filter() dejando todos menos el que tiene ese id
  // TODO 2: llamar a renderizar() para actualizar tarjetas y total
}

// ---------- ARRANQUE ----------
renderizar();
