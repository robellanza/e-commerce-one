
// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01", // Identificador del producto
        titulo: "Abrigo 01", // Nombre del producto
        imagen: "./img/abrigos/01.jpg", // Ruta de la imagen del producto
        categoria: { // Categoría del producto
            nombre: "Abrigos", // Nombre de la categoría
            id: "abrigos" // Identificador de la categoría
        },
        precio: 1000 // Precio del producto
    },
    // Repetimos la estructura anterior para cada uno de los productos
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "./img/pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos"); // Selecciona el elemento del DOM con el id "contenedor-productos" y lo guarda en la variable contenedorProductos
const botonesCategorias = document.querySelectorAll(".boton-categoria");// Selecciona todos los elementos del DOM con la clase "botones-categorias" y lo guarda en la variable botonesCategorias
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");




// Define la función cargarProductos
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = ""; //deja vacio

    // Recorre el arreglo de objetos "productos" utilizando forEach y crea un div para cada producto
    productosElegidos.forEach(producto => {

        // Crea un elemento div y le agrega la clase "producto"
        const div = document.createElement("div");
        div.classList.add("producto");

        // Agrega el código HTML para mostrar la imagen, título, precio y botón de agregar del producto actual
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        // Agrega el div con la información del producto al contenedorProductos
        contenedorProductos.append(div);

    });
    actualizarBotenesAgregar();
}

// Llama a la función cargarProductos para que muestre los productos en el HTML
cargarProductos(productos);

function menuCategoriaClick(e) {
    botonesCategorias.forEach(boton => boton.classList.remove("active"));

    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
        const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

        tituloPrincipal.innerText = productoCategoria.categoria.nombre;
        //queremos que solo traiga productos de esa categoria
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id); //trae ID del elemento html
        cargarProductos(productosBoton);
    } else {
        tituloPrincipal.innerText = "Todos los prodcutos";
        cargarProductos(productos)
    }

}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", menuCategoriaClick)
});

function actualizarBotenesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar"); //vuelve a buscar en el dom, todos los que existen, cada vez que carga

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

// Array de productos - Lista de productos - Vector de productos
// Se definen []
const productosEnCarrito = [];


function agregarAlCarrito(event) {

    const idBoton = event.currentTarget.id;

    // El código utiliza el método find() para buscar un objeto en un arreglo de productos 
    // que tenga una propiedad id igual al valor de idBoton. Retorna el primer elemento que cumple con la condición de búsqueda.
    const productoAgregado = productos.find(producto => producto.id == idBoton);

    // Verifica si algún producto en el carrito tiene el mismo ID que el botón presionado
    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        //findIndex = obtiene el indece de un elemento en el Array que cumpla con la con
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton); 

        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado); //push = AGREGA un elemento QUE QUERAMOS a un ARRAY
    }
    actualizarNumerito (); //se ejecuta

    //se llama desde el carrito, se guarda el array en el localStorage, para llevar a la pagina carrito
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)); 
}
//actuzaliza el numerito cada vez que se agrega un producto al carrito, suma cantidad de ese producto que hay en el array
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);

    numerito.innerText = nuevoNumerito; 
}

