class carrito {
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
            

        }
    }

    leerDatosProducto(producto){
        const infoProducto = {
            imagen : producto.querySelector('img').src,
            titulo : producto.querySelector('h4').textContent,
            precio : producto.querySelector('.precio span').textContent,
            id : producto.querySelector('a').getAttribute('data-id'),
            cantidad : 1
        }
        var productoLS;
        productoLS = this.obtenerProductosLocalStorage();
        productoLS.forEach(function(productoLS){
            if(productoLS.id === infoProducto.id){
                productoLS = productoLS.id;
            }
        });
        if(productoLS === infoProducto.id){
            Swal.fire({
                type: 'info',
                title: 'Cuidado...',
                text: 'Producto ya agregado',
                timer: 1000,
                showConfirmButton: false 
              })
        }
        else{
            this.insertarCarrito(infoProducto);
        }
        
    }

    insertarCarrito(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" with=100
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
            </td>
        `;
        listaProductos.appendChild(row);
        this.guardarProductosLocalStorage(producto);

        
    }

    eliminarProducto(e){
        e.preventDefault();
        var producto, productoId;
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoId = producto.querySelector('a').getAttribute('data-id'); 
        } 
        this.eliminarProductosLocalStorage(productoId);
        this.calcularTotal();
    }

    vaciarCarrito(e){
        e.preventDefault();
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.vaciarLocalStorage();
        return false;
    }

    guardarProductosLocalStorage(producto){
        var productos;
        productos = this.obtenerProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    obtenerProductosLocalStorage(){
        var productosLS;
        if(localStorage.getItem('productos') === null){
            productoLS = [];
        }
        else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }
    
    eliminarProductosLocalStorage(productoId){
        var productoLS;
        productoLS = this.obtenerProductosLocalStorage();
        productoLS.forEach(function(productoLS, index){
            if(productoLS.id === productoId){
                productoLS.splice(index, 1);
            }
        });
            
        localStorage.setItem('productos', JSON.stringify(productoLS));

    }
    
    leerLocalStorage(){
        var productoLS;
        productoLS = this.obtenerProductosLocalStorage();
        productoLS.forEach(function(producto){
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" with=100
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
                </td>
            `;
            listaProductos.appendChild(row);
        });
    }

    vaciarLocalStorage(){
        localStorage.clear();

    }
    
    procesarPedido(e){
        e.preventDefault();
        if(this.obtenerProductosLocalStorage().lenght === 0){
            Swal.fire({
                type: 'info',
                title: 'Cuidado...',
                text: 'Agrega producto',
                timer: 2000,
                showConfirmButton: false 
              })
        }
        else {
            location.href = "compra.html";
        }
        
    }

    leerLocalStorageCompra(){
        var productoLS;
        productoLS = this.obtenerProductosLocalStorage();
        productoLS.forEach(function(producto){
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" with=100
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                    <input type="number" class="form-control cantidad" min="1" value=${producto.cantidad}>
                </td>
                    <a href="#" class="borrar-producto fas fa-times-circle" style="font=size-:30px" data-id="${producto.id}"></a>
                </td>${producto.precio * producto.cantidad}<td>

                </td>
            `;
            listaProductos.appendChild(row);
        });
    }

    calcularTotal(){
        var productoLS;
        var total = 0
        var subtotal = 0
        var igv = 0
        productoLS = this.obtenerProductosLocalStorage();
        for(var i = 0; i < productoLS.lenght; i++){
            var element = Number(productoLS[i].precio * productoLS[i].cantidad);
            total =  total + element;
        }
        igv = parseFloat(total * 0.18).toFixed(2);
        subtotal = parseFloat(total-igv).toFixed(2);

        document.getElementById('subtotal').innerHTML = "$." + subtotal;
        document.getElementById('igv').innerHTML = "$." + igv;
        document.getElementById('total').innerHTML = "$." + total.toFixed(2);
    }
}   
