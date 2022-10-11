
/* ----------INICIO CODE BY IMMER ---------- */

/* INICIO DEL DomContentLoader - NO ELIMINAR!! */
document.addEventListener("DOMContentLoaded", () => {
  
  
/* ----- INICIO MODO DARK ----- */

    /* Inicio Variables */
    const themeIcon = document.getElementById("btn-moon-nav")
    const body = document.querySelector("body")
    /* Fin Variables */

    themeIcon.addEventListener("click", () => {
    body.classList.toggle("dark")

    if (themeIcon.classList.contains("bx-moon")){
        themeIcon.classList.replace("bx-moon", "bx-sun")
    } else{
        themeIcon.classList.replace("bx-sun", "bx-moon")
      }

      })

/* ----- FIN MODO DARK ----- */

/* ----- INICIO FONDO BAR-NAV----- */

window.addEventListener("scroll", function(){
  var fondoNav0 = document.getElementById("bar-nav-scroll");
  fondoNav0.classList.toggle("bar-nav-white", window.scrollY>0)
})
      
/* ----- FIN CODE FONDO BAR-NAV----- */

/* ----------FIN CODE BY IMMER ---------- */


/*Array de items*/

const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]


/* ---------- INICIO CODE JS BY LAUTHER ---------- */

/*LISTADO DE PRODUCTOS*/
const contenedorProductos = document.getElementById('contenedor-productos')
const btnsAgrega = document.getElementsByClassName('btn-agrega') //-------------------------------- para que todos los hijos tengan esta funcion

const listarProductos = (arreglo) =>{
  let productos = ``
  arreglo.forEach(producto => {
    productos += 
    `<div class="tarjeta-producto">
      <img src="${producto.image}" class="img-producto">
      <div class="contenedor-detalle" name="${producto.id}">
        <button class="btn-agrega" id="btn-agrega">+</button>
        <div class="precio-stock">
          <h2>$${producto.price}.00</h2>
          <p>Stock: ${producto.quantity}</p>
        </div>
        <p>${producto.name}</p>
      </div>
    </div>`
  })
  contenedorProductos.innerHTML = productos
  agrega()

}

listarProductos(items)
/* FIN LISTADO DE PRODUCTOS*/

/* CARRITO*/

const cartIcon = document.getElementById('cart-icon')
const carritoMenu = document.getElementById('carrito')
const cierraCarrito = document.getElementById('close')

/*Mostrar carrito*/

cartIcon.addEventListener('click', () => {
  carritoMenu.classList.remove('hidden');
  cierraCarrito.addEventListener('click', () => {
    carritoMenu.classList.add('hidden')
  })
  
})

/* ---------- FIN CODE JS BY LAUTHER ---------- */

/* ---------- INICIO CODE JS BY LAUTHER 2.0 ---------- */
// Botones para el filtro
const allProducts = document.getElementById('all-products')
const hoodies = document.getElementById('1')
const shirts = document.getElementById('2')
const sweatshirts = document.getElementById('3')

//Lista todos los productos
allProducts.addEventListener('click',  () => {
  listarProductos(items)
})

//Funcion lista por Id
function listaPorId(id ){
  let arrayProductoSeleccionado = []
  items.forEach((producto) => {
    producto.id === parseInt(id) ? 
    arrayProductoSeleccionado.push(producto) : null
  })
  listarProductos(arrayProductoSeleccionado)
}

//Lista hoodies
hoodies.addEventListener('click', () => {
  let idButton = hoodies.getAttribute('id')
  listaPorId(idButton)
})
//Lista shirts
shirts.addEventListener('click', () => {
  let idButton = shirts.getAttribute('id')
  listaPorId(idButton)
})

//Lista Sweatshirts
sweatshirts.addEventListener('click', () => {
  let idButton = sweatshirts.getAttribute('id')
  listaPorId(idButton)
})

/* ---------- FIN CODE JS BY LAUTHER 2.0 ---------- */

/* ---------- INICIO CODE JS BY LAUTHER 3.0 ---------- */

//Agrega productos
let carritoArreglo = []

function agrega(){
  for (const boton of btnsAgrega) {
    boton.addEventListener('click', e => {
      //Variables
      const idProducto = parseInt(e.target.parentElement.getAttribute('name'))
      let productoSeleccionado = items.find( item =>item.id === idProducto)
      const indexproductoSeleccionado= items.indexOf(productoSeleccionado)
      let indexProductoEnCarrito = carritoArreglo.indexOf(productoSeleccionado)
      
      //Aqui se llena el carritoArreglo para ser listado / actualiza el array PRINCIPAL (items)
      if(indexProductoEnCarrito !== -1){
        if(carritoArreglo[indexProductoEnCarrito].quantity === 0){
            alert('se acabó :c')
        }else{
          carritoArreglo[indexProductoEnCarrito].cantidad++
          actualizaCantidad(indexproductoSeleccionado)
          listaCarrito()
        }
      }else{
          productoSeleccionado.cantidad = 1
          carritoArreglo.push(productoSeleccionado)
          actualizaCantidad(indexproductoSeleccionado)
          listaCarrito()
      }
    })
  }
}

//funcion que resta cuando se hace click en el boton de suma
function actualizaCantidad(index){ 
  items[index].quantity -= 1
  listarProductos(items)
}

// Codigo para agregar items al carrito
//Variables para InnerHTML
let carritoVacio = `
<img src="./assets/images/empty-cart.png" alt="" class="img-empty-cart">
<h2>Your cart is empty</h2>
<p>Your can add items to your car by clicking on the '+' button on the product page.</p>`


//Listar en el contenedor carrito
const contenedorItemCarrito = document.querySelector('.carrito-1')
function listaCarrito(){
  carritoArreglo.length === 0 ? 
  contenedorItemCarrito.innerHTML = carritoVacio : listaCarritoFuncion() 
}
listaCarrito()

function listaCarritoFuncion(){
  let itemCarrito =``
  carritoArreglo.forEach(element =>{
    itemCarrito += `
        <div class="item-carrito" id="item-carrito">
          <img src="${element.image}" alt="" class="img-item-carrito">
          <div class="detalle-item">
            <h3>${element.name}</h3>
            <div class="detalle-item-stock">
              <p>Stock: ${element.quantity} |</p>
              <p class="red">$${element.price}</p>
            </div>
            <div class="detalle-item-subtotal red">
              <p>Subtotal: $24.00</p>
            </div>
            <div class="agrega-resta">
              <i class='bx bx-minus minus-icon'></i>
              <p> ${element.cantidad} units</p>
              <i class='bx bx-plus plus-icon' ></i>
              <i class='bx bx-trash-alt trash-icon'></i>
            </div>
          </div>
          </div>`
  })
  contenedorItemCarrito.innerHTML = itemCarrito
}
/* ---------- FIN CODE JS BY LAUTHER 3.0 ---------- */

}) /* FIN DEL DomContentLoader - NO ELIMINAR!!!*/