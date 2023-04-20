//trae todo el array desde el carrito
const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
console.log(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");


if (productosEnCarrito){
    //si hay productos en carrito, contenedor tenga la clase disiable
    contenedorCarritoVacio.classList.add("disable");
    contenedorCarritoProductos.classList.remove("disable");
    contenedorCarritoAcciones.classList.remove("disable");
    contenedorCarritoComprado.classList.add("disable");
    

} else{

}