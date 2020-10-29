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



































/* 
if(this.genType === "gas" && this.genPotency == 60){
    checkoutValue = checknoutValue + 10000;
} else if(this.genType === "gas" && this.genPotency == 125){
    checkoutValue = checkoutValue + 15000;
} else if(this.genType === "diesel" && this.genPotency == 60){
    checkoutValue = checkoutValue + 20000;
} else if(this.genType === "diesel" && this.genPotency == 125){
    checkoutValue = checkoutValue + 40000;
}}

var generator1 = new generator("gas", 60);
var generator2 = new generator("diesel", 125);

quotationPreview.push(generator1);
quotationPreview.push(generator2);

for(i=0, length = quotationPreview.length ; i < length ; i++){
    console.log("El generador ha sido añadido a la cotización.");
}

console.log(quotationPreview);
console.log(checkoutValue);
*/