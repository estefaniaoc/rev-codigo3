const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

// Cambiamos por el getElementById
const listaDeProductos = document.getElementById("lista-de-productos");

// Cambiamos por getElementById y Seleccionamos el input
const filtroInput = document.getElementById("filtro");

// Se agrega función para mostrar productos
const displayProductos = (productos) => {
  // Limpiamos la lista de productos
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild);
  }

  for (let i = 0; i < productos.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    listaDeProductos.appendChild(d);
  }
};

//se utiliza la funcion para mostrar todos los productos al cargar la página
displayProductos(productos);


const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  const texto = filtroInput.value.toLowerCase();
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);

  displayProductos(productosFiltrados);
};

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};
