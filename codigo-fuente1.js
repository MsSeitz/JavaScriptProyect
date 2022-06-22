let totalDeLaCompra = 0;

class Motor {
    constructor (id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    calculoDePrecio (){
        return this.precio * IVA;
    }
}

const motor1 = new Motor("AUTCOR020","Ch 500","12500");
const motor2 = new Motor("AUTCOR040","Ch 600","16500");
const motor3 = new Motor("AUTCOR060","Ch 800","23500");

const productos = [motor1, motor2, motor3];

const carrito = [];

function agregarAlCarrito (id) {

    const productoEncontrado = productos.find(motor=> motor.id == id);

    if(productoEncontrado == undefined) {
        alert("Producto Inexistente");
    }
    else {
        carrito.push(productoEncontrado);
    }
}

function mostrarCarritoActual () {
    
    const mostrarCarrito = carrito.map(function(carrito) {
        return "\n" + carrito.nombre +" - $" + carrito.precio + "\n";
    });
     
    alert("Los productos de su carrito son los siguientes:" + mostrarCarrito);

}



function confirmarCompra() {
    const respuesta = prompt("Desea comprar algo? \n1) Si \n2) No");
    if (respuesta == "1"){
        return true;
    }
    else {
        return false;
        
    }
}

function mostrarProductos() {
    let menuMostrar = "Que producto quiere?\n";
    productos.forEach(Motor=> {
        menuMostrar += Motor.id +" -" + Motor.nombre +" - $" + Motor.precio+"\n"; 
    })
    let respuesta = prompt(menuMostrar);
    return respuesta;
}

function comprarProducto() {
    while (confirmarCompra()) {
        let productoElegido = mostrarProductos();

        agregarAlCarrito(productoElegido);

         mostrarCarritoActual();
    }
}

comprarProducto();