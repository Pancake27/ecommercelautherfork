
/* ----------INICIO CODE BY IMMER ---------- */

/* INICIO DEL DomContentLoader - NO ELIMINAR!! */
document.addEventListener("DOMContentLoaded", () => {
  
/* ----------INICIO CODE BY IMMER ---------- */

/* ----- INICIO MENU RIGHT -----*/

const bagIcon = document.getElementById("bt-grid-nav")
const menuRight = document.getElementById("menu-navright")
const containerRight = document.getElementById("container-navright")

bagIcon.addEventListener("click", () => {

  menuRight.classList.toggle("hide-menuright")
  containerRight.classList.toggle("hide-menuright")
  
})

/* ----- FIN MENU RIGHT -----*/

/*----- INICIO INTRO ACADEMLO -----*/

const loader = document.getElementById("loader")

const loadpage = () => {
    setTimeout(()=> {
        loader.classList.add("hide")
    }, 3000);
}

document.addEventListener("DomContentLoader", loadpage())

/*----- FIN INTRO ACADEMLO -----*/

/* ----- INICIO CODE MODO DARK ----- */

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

/* ----- FIN CODE MODO DARK ----- */

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

/* ---------- LISTADO DE PRODUCTOS ---------- */
const contenedorProductos = document.getElementById('contenedor-productos')
const btnsAgrega = document.getElementsByClassName('btn-agrega') //-------------------------------- para que todos los hijos tengan esta funcion

//Funcion que lista productos en la página 
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
  agrega() // Funcion para darle el 'addEventListener' a los botones que suman en la tarjeta-producto cada vez que son listados por listarProductos()
}
// LLAMADO DE LA FUNCION PARA QUE LISTE EN LA PAGINA
listarProductos(items)
/* ---------- FIN LISTADO DE PRODUCTOS ----------*/



/* ---------- ABRE Y CIERRA CARRITO LAUTHER ----------*/
const cartIcon = document.getElementById('cart-icon')
const carritoMenu = document.getElementById('carrito')
const cierraCarrito = document.getElementById('close')

cartIcon.addEventListener('click', () => {
  carritoMenu.style.animation = 'cart-open 1.5s'
  carritoMenu.style.display = 'flex'
  cierraCarrito.addEventListener('click', () => {
    carritoMenu.style.animation = 'cart-close 1.5s'
    setTimeout(() => carritoMenu.style.display = 'none', 1400)
  })
})
/* ---------- FIN ABRE Y CIERRA CARRITO ---------- */


/* ---------- FILTRO PRODUCTOS LAUTHER 2.0---------- */
const allProducts = document.getElementById('all-products')
const hoodies = document.getElementById('1')
const shirts = document.getElementById('2')
const sweatshirts = document.getElementById('3')

//Lista todos los productos con  el boton allproducts
allProducts.addEventListener('click',  () => {
  listarProductos(items)
})
//Funcion lista por Id
const listaPorId = (id) => {
  let arrayProductoSeleccionado = []
  items.forEach((producto) => {
    producto.id === parseInt(id) ? 
    arrayProductoSeleccionado.push(producto) : null
  })
  listarProductos(arrayProductoSeleccionado)
}
//Lista sólo hoodies
hoodies.addEventListener('click', () => {
  let idButton = hoodies.getAttribute('id')
  listaPorId(idButton)
})
//Lista sólo shirts
shirts.addEventListener('click', () => {
  let idButton = shirts.getAttribute('id')
  listaPorId(idButton)
})
//Lista sólo Sweatshirts
sweatshirts.addEventListener('click', () => {
  let idButton = sweatshirts.getAttribute('id')
  listaPorId(idButton)
})
/* ---------- FIN FILTRO PRODUCTOS ---------- */


/* ---------- AGREGA PRODUCTOS (desde tarjeta-producto) LAUTHER 3.0 ---------- */
// Agrega productos ()
let carritoArreglo = []      // Array para el carrito
// Funcion agrega productos al carrito con un callback
function agrega(){
  for (const boton of btnsAgrega) {
    boton.addEventListener('click', e => {
      const idProducto = parseInt(e.target.parentElement.getAttribute('name'))
      sumaCarrito(idProducto)
    })
  }
}
// Funcion SumaCarrito, suma al array del carrito y resta al array principal, luego actualiza el stock de la pagina con un callback 
function sumaCarrito(idProducto) {
  let productoSeleccionado = items.find( item =>item.id === idProducto)
      const indexproductoSeleccionado= items.indexOf(productoSeleccionado)
      let indexProductoEnCarrito = carritoArreglo.indexOf(productoSeleccionado)
      
      if(indexProductoEnCarrito !== -1){                         // Aqui se llena el carritoArreglo para ser listado
        if(carritoArreglo[indexProductoEnCarrito].quantity === 0){
            alert('OUT OF STOCK !')
        }else{
          carritoArreglo[indexProductoEnCarrito].cantidad++
          actualizaArrayPrincipal(indexproductoSeleccionado)     // Funcion que actualiza el stock en la pagina principal
          listaCarrito()                                         // Callback que actualiza en el carrito, lo inicializa vacío 
        }
      }else{
          productoSeleccionado.cantidad = 1
          carritoArreglo.push(productoSeleccionado)
          actualizaArrayPrincipal(indexproductoSeleccionado)
          listaCarrito()
      }
}

// Funcion que actualiza el array PRINCIPAL (items), volviendo a listar en la ventana principal la cantidad actual (-1)
function actualizaArrayPrincipal(index){ 
  items[index].quantity -= 1
  listarProductos(items)
}
/* ---------- FIN AGREGA PRODUCTOS (desde tarjeta-producto) LAUTHER 3.0 ---------- */


/* ---------- FUNCIONALIDADES EN EL CARRITO (SUMA/RESTA/TOTAL/ACTUALIZA) LAUTHER 4.0 ---------- */
// Fragmento HTML que agrega items al HTML del contenedor del carrito
let carritoVacio = `
<img src="./assets/images/empty-cart.png" alt="" class="img-empty-cart">
<h2>Your cart is empty</h2>
<p>Your can add items to your car by clicking on the '+' button on the product page.</p>`

// Listar en el contenedor carrito
const contenedorItemCarrito = document.querySelector('.carrito-1')
function listaCarrito() {
  carritoArreglo.length === 0 ? contenedorItemCarrito.innerHTML = carritoVacio : listaItemsCarrito() 
}
// Se llama a la funcion para listar el carritoVacio
listaCarrito()

// Funcion que lista cuando el array del carrito tiene 1 item o más
function listaItemsCarrito(){
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
              <p>Subtotal: $${element.cantidad * element.price}.00</p>
            </div>
            <div class="agrega-resta">
              <i class='bx bx-minus minus-icon' name="${element.id}"></i>
              <p> ${element.cantidad} units</p>
              <i class='bx bx-plus plus-icon' name="${element.id}"></i>
              <i class='bx bx-trash-alt trash-icon' name="${element.id}"></i>
            </div>
          </div>
          </div>`           // el atributo name es el que hereda el id del producto, se da en los fragmentos de código
  })
  contenedorItemCarrito.innerHTML = itemCarrito
  actualizaPieCarrito()         // Actualiza el Pie de carrito, para el total a pagar
  plusButtonFunction()          // Inicializa el boton de suma (en el carrito)
  minusButtonFunction()         // Inicializa el boton de resta (en el carrito)
  borraProducto()
}


//Algunos callbacks:

//Funcion que Actualiza Cantidad de items (pie del carrito)
function actualizaPieCarrito (){
  const contenedorPadre = document.querySelector('.carrito-2').childNodes[1] //aquí extraigo al padre que es el div.items-precio
  const cantidadItemsHijo = contenedorPadre.childNodes[1] //aqui extraigo solo el 'p'
  const totalHijo = contenedorPadre.childNodes[3]
  cantidadItemsHijo.innerHTML = `${carritoArreglo.length} items`
  let suma = 0
  carritoArreglo.forEach(element => {
    suma += (element.cantidad * element.price)
  });
  totalHijo.innerHTML = `$${suma}.00`
}


//Funcion para el boton de agrega (en el carrito)
function plusButtonFunction(){
  const plusButton = document.getElementsByClassName('plus-icon')

  for (const element of plusButton) {
      element.addEventListener('click', () => {
      const idPlusButton = parseInt(element.getAttribute('name')) // Buscamos el ID para la funcion de sumaCarrito 
      sumaCarrito(idPlusButton)                 // Callback para ejecutar la suma y actualizar los arrays del carrito y principal respectivamente
      })
  }
}

//Funcion para el boton de resta (en el carrito)
function minusButtonFunction(){
  const minusButton = document.getElementsByClassName('minus-icon')
    for (const element of minusButton) {
      element.addEventListener('click', () => {
        const idMinusButton = parseInt(element.getAttribute('name'))
        restaCarrito(idMinusButton)
      })
    }
}

// Funcion resta, similar a agrega() pero esta disminuye los arrays 
function restaCarrito(idProducto) {
      let productoSeleccionado = carritoArreglo.find( item => item.id === idProducto)
      const indexproductoSeleccionado= items.indexOf(productoSeleccionado)
      let indexProductoEnCarrito = carritoArreglo.indexOf(productoSeleccionado)
      //Aqui se llena el carritoArreglo para ser listado / actualiza el array PRINCIPAL (items)
     if(indexProductoEnCarrito !== -1){
        if(carritoArreglo.length >= 1){
          carritoArreglo[indexProductoEnCarrito].cantidad--
          items[indexproductoSeleccionado].quantity += 1
          listarProductos(items)
          listaCarrito()
          if(carritoArreglo[indexProductoEnCarrito].cantidad === 0){
            carritoArreglo.splice(indexProductoEnCarrito, 1)
            listaCarrito()
            actualizaPieCarrito()
          }
        }
      }
}
/* ---------- FIN FUNCIONALIDADES EN EL CARRITO (SUMA/RESTA/TOTAL/ACTUALIZA) LAUTHER 4.0 ---------- */

function borraProducto() {
  const trashButton = document.getElementsByClassName('trash-icon')
  for (const element of trashButton) {
    element.addEventListener('click', () => {
      const idTrashButtom = parseInt(element.getAttribute('name'))
      //Buscamos todas las variables que necesitamos
      let productoSeleccionado = carritoArreglo.find( item => item.id === idTrashButtom)
      const indexproductoSeleccionado= items.indexOf(productoSeleccionado)
      let indexProductoEnCarrito = carritoArreglo.indexOf(productoSeleccionado)
      let quantityEnItems = items[indexproductoSeleccionado].quantity
      let cantidadEnCarrito = carritoArreglo[indexProductoEnCarrito].cantidad
      //Actualizamos la cantidad en el array principal
      items[indexproductoSeleccionado].quantity = quantityEnItems + cantidadEnCarrito
      //Borramos el item del carrito
      carritoArreglo.splice(indexProductoEnCarrito, 1)
      //Actualizamos el carrito, el pie del carrito y la parte principal
      listaCarrito()
      actualizaPieCarrito()
      listarProductos(items)
    })
  }
}
















}) /* FIN DEL DomContentLoader - NO ELIMINAR!!!*/