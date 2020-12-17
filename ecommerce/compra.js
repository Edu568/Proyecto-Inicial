const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getAnimations('correo');

cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
    carrito.addEventListener('click', (e)=>{compra.eliminarProducto(e)});
    compra.calcularTotal(); 
    procesarCompraBtn.addEventListener('click', procesarCompra)
}

function procesarCompra(e){
    e.preventDefault();
    if(compra.obtenerProductosLocalStorage().length === 0){
        Swal.fire({
            type: 'error',
            title: 'Cuidado...',
            text: 'Seleccionar un producto',
            timer: 2000,
            showConfirmButton: false 
          }).then(function(){
              window.location = "index.html";
          }
    }
    else if(cliente.value === '' || correo.value === ''){
        Swal.fire({
            type: 'Error',
            title: 'Cuidado...',
            text: 'Ingrese todos los campos requeridos',
            timer: 1000,
            showConfirmButton: false 
          })
    }
    else{
        const.cargandoGif = document.querySelector('#cargando');
        cargandoGif.style.display = 'block';

        const enviado = document.createElement('img');
        enviado.src = 'imagenes proyecto/mail.gif';
        enviado.style.display = 'block'
        enviado..width = '150';
        setTimeout(()=>{
            cargandoGif.style.display = 'none';
            document.querySelector('#loaders').appendChild(enviado)
            setTimeout(()=>{
                enviado.remove();
                compra.vaciarLocalStorage();
                window.location = 'index.html'
            }, 2000);
        }, 3000);    }
}