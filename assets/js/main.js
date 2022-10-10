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

/*LISTADO DE PRODUCTOS*/
const contenedorProductos = document.getElementById('contenedor-productos')

const listarProductos = () =>{
  let productos = ``
  items.forEach(producto => {
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

listarProductos()
/* FIN LISTADO DE PRODUCTOS*/
