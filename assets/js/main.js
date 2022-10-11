
/* ----------INICIO CODE BY IMMER ---------- */

/* INICIO DEL DomContentLoader */
document.addEventListener("DOMContentLoaded", () => {
  
  


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
      

  
  
    })
/* FIN DEL DomContentLoader */

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

const listarProductos = (arreglo) =>{
  let productos = ``
  arreglo.forEach(producto => {
    productos += 
    `<div class="tarjeta-producto">
      <img src="${producto.image}" class="img-producto">
      <div class="contenedor-detalle">
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