function CarritoDeCompras(){
    this.compra = []
    this.agregarCompra = function(compra) { this.compra.push(compra) }
}

function Compra(producto, precio, cantidad){
    this.producto = producto;
    this.precio = precio;
    this.cantidad = cantidad;

    this.agregarAlCarrito = function(carritoDeCompras) { 
        var compra = { producto: this.producto, precio: this.precio, cantidad: this.cantidad}; 
        carritoDeCompras.agregarCompra(compra);
    }
}

var carritoDeCompras = new CarritoDeCompras();
var compra = new Compra("iphone", 50000, 1);
compra.agregarAlCarrito(carritoDeCompras);
var compra2 = new Compra("one plus pro", 30000, 1);
compra2.agregarAlCarrito(carritoDeCompras);

if(carritoDeCompras!=0){
    console.log(compra.length)

} else{
    console.log(error)
}

console.log(compra)


function Login(){

}

var body = document.body


var nombre = document.getElementById("nombre").value
var apellido = document.getElementById("apellido").value
var button = docuement.getElementById("boton").value

var button = document.getElementsById 
console.log(apellido)
document.getElementsById("boton").addEventListener("click", function(){
    document.getElementById("boton").innerHTML = "Bienvenido a to get"
};


var database = new Database()
database.getProducts();

var products = getProducts();

const productsContainer = document.getElementById('productsContiner')