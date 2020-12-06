function CarritoDeCompras(){
    this.compra = []
    this.agregarCompra = function(compra) { this.compra.push(compra) 
    }
}
​


function Compra(producto, precio, cantidad){
    this.producto = producto;
    this.precio = precio;
    this.cantidad = cantidad;
​
    this.agregarAlCarrito = function(carritoDeCompras) { 
        var compra = { producto: this.producto, precio: this.precio, cantidad: this.cantidad}; 
        carritoDeCompras.agregarCompra(compra);
    }
}
​
var carritoDeCompras = new CarritoDeCompras();
var compra = new Compra("iphone", 50000, 1);
compra.agregarAlCarrito(carritoDeCompras);
var compra2 = new Compra("one plus pro", 30000, 1);
compra2.agregarAlCarrito(carritoDeCompras);
​
if(carritoDeCompras!=0){
    console.log(compra.length)
​
} else{
    console.log(error)
}
​
console.log(compra)
​
​
function Login(){
​
}
​
​
​
var body = document.body

let products = getProducts();

cons cart = [];
const productsContainer = document.getElementById('productsContainer')
​
products.forEach( product => {
   let productCard = createProductCard(product);
   productsContainer.appendChild(productCard)
})
​
function createProductCardWithString (product)
​
function createProductCard(product) {
    let productCard = document.createElement('div');
    //productDiv. id = product.id;
    //productDiv. classList = 'productCard col-4 p-2 d-flex flex-colum align-items-center'
    
    let nameDiv = document.createElement('div')
    nameDiv.innerHTML = product.name;
    
    let stockDiv = document.createElement('div')
    stockDiv.innerHTML = product.stock;
    
    let priceDiv = document.createElement('div')
    priceDiv.innerHTML = product.price;
​
    let button = document.createElement("button");
    button.innerHTML = "Agregar al carrito"
​
    button.addEventListener('click', () => {
        cart.push(product)
    })
​
    productCard.appendChild(nameDiv)
    productCard.appendChild(priceDiv)
    productCard.appendChild(stockDiv)
    productCard.appendChild(button)
    return productCard;
}  
var inputJS 
$(document).ready(function(){
    let inputJS = document.querySelector('products')

})

var products = $('.productsContainer')
products.forEach(function(product){
    productsContainer.append('')

})


var producto
var productsContainer = $('.productContainer')
$.ajax('productos.json').done(function(data){
    producto = data

})
