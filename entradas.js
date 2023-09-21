
let tOrF = true;
let precioUnitario=2500;
let precioGreen=25000;
let precioBlue=50000;
let precioRed=100000;


function initEntradas() {
    while (tOrF) {
        let opSeleccion = parseInt(prompt("Elija una opción:\n 1-Comprar entradas: $2500 \n 2-Comprar entrada a mesas VIP \n 3-Elegir método de pago\n 4-Seguir comprando \n 5-Salir"));
        switch (opSeleccion) {
            case 1:
                comprarEntrada();
                break;
            case 2:
                mesasVipSeleccion();
                break;
            case 3:
                opcionDePago();
                break;
            case 4:
                comprarProductos();
                break;
            case 5:
                tOrF = false;
                break;
            default:
                alert("Por favor, ingrese una opción válida.");
                break;
        }
    }
}
initEntradas();


function comprarEntrada(){
    let cantSeleccion= parseInt(prompt("Ingrese la cantidad de entradas que quiere comprar."));
    while(tOrF){
        if(cantSeleccion>0){
            let precioTotal=precioUnitario*cantSeleccion
            alert(`Cantidad de entradas seleccionadas ${cantSeleccion} a ${precioTotal}`);
            tOrF=true;
            break;
        }else{
            alert("Por favor, ingrese la cantidad de entradas que quiere comprar");
            break;
        }
    }
}

function mesasVipSeleccion() {
    while (tOrF) {
        const mesaVipSeleccion = parseInt(prompt("Elija una mesa:\n(Una vez que termine con su elección, vuelva al inicio para realizar el pago)\n 1-Mesa Green (Max 5 personas): $25000 \n 2-Mesa Blue (Max 10 personas): $50000 \n 3-Mesa Red (Max 20 personas): $100000 \n 4-Salir/Volver a inicio"));
        if (isNaN(mesaVipSeleccion)){
            alert("Por favor, ingrese una opción válida.");
        } else if (mesaVipSeleccion == 4) {
            break;
        } else if (mesaVipSeleccion >= 1 && mesaVipSeleccion <= 3) {
            switch (mesaVipSeleccion) {
                case 1:
                    alert(`Haz seleccionado la Mesa Green al valor de ${precioGreen}`);
                    break;
                case 2:
                    alert(`Haz seleccionado la Mesa Blue al valor de ${precioBlue}`);
                    break;
                case 3:
                    alert(`Haz seleccionado la Mesa Red al valor de ${precioRed}`);
            break;
            break;
        default:
            tOrF=false;
            break;
    }}}}

   
function Producto(nombre, precio){
    this.nombre= nombre;
    this.precio= precio;
    this.ivaPorcentaje = function () {
        return this.precio *=1.21;
        }
}

const arrayProductos = [
    { codigo: 1, nombre: "Cerveza (Lata)", precio: 800 },
    { codigo: 2, nombre: "Champagne (Extra brut 750ml)", precio: 3700 },
    { codigo: 3, nombre: "Vodka (Absolut 700ml)", precio: 5689 },
    { codigo: 4, nombre: "Gaseosas o aguas", precio: 750 }
];

const arrayProductosUsuario = [];

function buscarProductoPorCodigo(codigo, productos) {
    return productos.find(producto => producto.codigo === codigo);
}

function agregarElementoALaLista(producto, lista) {
    lista.push(producto);
}

function comprarProductos() {
    while (tOrF) {
        let codigo = parseInt(prompt("Si desea alguna consumición, seleccione entre las siguientes opciones: \n 1-Cerveza (Lata) $800 \n 2-Champagne (Extra brut 750ml) $3700\n 3-Vodka (Absolut 700ml)$5689 \n 4-Gaseosas o aguas $750 \n 5-Salir "));
        const productoElegido = buscarProductoPorCodigo(codigo, arrayProductos);
        if (productoElegido != null) {
            agregarElementoALaLista(productoElegido, arrayProductosUsuario);
            alert("Producto agregado al carrito");
        }
        let continuar = prompt("Ingrese SI si desea seguir comprando. Si desea salir, presione cualquier otra tecla");
        if (continuar.toLowerCase() !== 'si') {
            tOrF = false;
        }
    }
}


const metodosDePago = ["Efectivo", "Tarjeta de Crédito", "Tarjeta de Débito", "Mercado Pago"];
console.log("Métodos de pago disponibles:");
for (let i = 0; i < metodosDePago.length; i++) {
    console.log(`${i + 1}. ${metodosDePago[i]}`);
}
let metodoSeleccionado;
while (true) {
    const opcionDePago = parseInt(prompt("Seleccione un método de pago (1-4):\n 1-Efectivo \n 2-Tarjeta de credito \n 3-Tarjeta de Debito \n 4-Mercado Pago"));
    if (opcionDePago >= 1 && opcionDePago <= 4) {
        metodoSeleccionado = metodosDePago[opcionDePago - 1];
         alert(`Ha seleccionado ${metodoSeleccionado}`); 
        //Total a pagar: productos.find(producto => producto.precio === precio))//
        break;
    } else {
        alert("Opción incorrecta. Por favor, seleccione un método de pago válido.");
    }
}
