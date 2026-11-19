# Lista Dinámica de Compras

Aplicación web de lista de compras desarrollada en equipo como proyecto práctico de **Rolling Code School**. Integra en una sola app los tres pilares trabajados en clase: **arrays de objetos**, **manipulación dinámica del DOM** y **gestión de eventos**. Todo reacciona al instante, sin recargar la página.

## Funcionalidades

- Agregar productos con su nombre y precio mediante un formulario (clic en el botón o tecla Enter).
- Validación de los datos: nombre no vacío y precio numérico mayor a 0, con mensaje de error si algo falla.
- Cada producto se muestra como una **tarjeta** creada dinámicamente en el DOM.
- **Total actualizado** automáticamente al agregar o quitar productos.
- Eliminación de un producto **haciendo clic sobre su tarjeta**.
- Estilo visual con CSS: tarjetas con sombra y bordes redondeados, y cambio visual al pasar el mouse.

## Tecnologías

- HTML5
- CSS3
- JavaScript (vanilla, sin librerías externas)

## Estructura del proyecto

```
JS-codear/
├── index.html   # Estructura: formulario, total y contenedor de tarjetas
├── styles.css   # Estilos de la aplicación
├── app.js       # Lógica: array de objetos, renderizado y eventos
└── README.md
```

## Cómo ejecutarlo

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/juancruzbussetti/JS-codear.git
   ```
2. Entrá a la carpeta del proyecto:
   ```bash
   cd JS-codear
   ```
3. Abrí `index.html` en tu navegador (doble clic, o con la extensión Live Server de VS Code).

No requiere instalación de dependencias ni servidor.

## Cómo funciona

### Fuente de verdad: array de objetos

Los productos se guardan en un array de JavaScript. Cada producto es un objeto con esta forma:

```js
{ id: 1700000000000, nombre: "Leche", precio: 2500 }
```

El `id` se genera con `Date.now()` y permite eliminar el producto correcto sin ambigüedades, incluso si hay otros con el mismo nombre o precio.

### Flujo de la aplicación

1. **Captura:** el evento `submit` del formulario ejecuta `evento.preventDefault()` para evitar la recarga de la página, lee los valores de los campos, convierte el precio con `Number()` y lo valida con `Number.isNaN()`.
2. **Almacenamiento:** si los datos son válidos, se crea el objeto y se agrega al array con `push()`.
3. **Renderizado:** la función `renderizar()` vacía el contenedor, recorre el array con `forEach()`, crea cada tarjeta con `createElement()` y calcula el total con `reduce()`.
4. **Eliminación:** al hacer clic en una tarjeta, se genera un nuevo array sin ese producto con `filter()` y se vuelve a renderizar, de modo que el DOM y el estado siempre quedan sincronizados.

## Requisitos del enunciado

| Requisito | Estado |
|---|---|
| Captura con `<input>` / `<form>` y evento `submit` | ✅ |
| Sin recarga de página (`preventDefault()`) | ✅ |
| Array de objetos como fuente de verdad | ✅ |
| Tarjetas creadas dinámicamente en el DOM | ✅ |
| Sumatoria total actualizada al agregar o quitar | ✅ |
| Clic en una tarjeta para eliminarla | ✅ |
| Diseño y estilo CSS (punto extra) | ✅ |

## Equipo

| Integrante | Bloque a cargo |
|---|---|
| _Nombre_ | HTML y formulario |
| _Nombre_ | Captura y validación |
| _Nombre_ | Renderizado y total |
| _Nombre_ | Eliminación por clic |
| _Nombre_ | Estilos CSS |

## Flujo de trabajo con Git

Cada integrante trabaja en su propia rama y la integra mediante un pull request:

```bash
git checkout -b nombre-de-la-rama
git add .
git commit -m "Descripción del cambio"
git push -u origin nombre-de-la-rama
```

---

Proyecto realizado en **Rolling Code School**.
