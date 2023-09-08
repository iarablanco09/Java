
const hora=prompt("Ingrese la hora (Desde 00 a 23)");

if(hora >= 6 && hora <= 12){
    console.log("Horario diurno")
    alert("¡Buenos dias!");
}else if (hora >=12 && hora <=20){
    console.log("Horario vespertino")
    alert("¡Buenas tardes!");
}else{
    console.log("Horario nocturno")
    alert("¡Buenas noches!");
}

let vof=true;
while (vof){
    const edadingresada= Number(prompt("Ingrese su edad"));
    if(edadingresada >=18){
        console.log("Mayor de edad");
        vof=false;
        break;
    }else{
        console.log("Menor de edad");
        alert("Lo sentimos, ingresaste la edad de"+" "+edadingresada+" "+"y para ingresar al sitio debes ser mayor de 18 años.");
        vof=true;
    }
}

let tof=true;
while(tof){
    const nombre= prompt("Ingrese su nombre").toLocaleUpperCase();
    if (nombre!=""){
        console.log("Nombre ingresado correctamente")
       alert("!Bienvenida al sitio web"+" "+nombre+ "!");
    tof=false;
    break;
}else{
    alert ("Por favor,complete todos los campos");
    console.log("Error")
    tof=true;
}
}

let tOrF=true;
function initEntradas(){
    while(tOrF){
        let opSeleccion=parseInt(prompt("Elija una opcion:\n 1-Comprar entradas:$2500 \n 2-Comprar entrada a mesas VIP \n 3-Elegir metodo de pago\n 4-Seguir comprando \n 5-Salir"));
        switch(opSeleccion){
        case 1:
        comprarEntrada();
        tOrF=true;
        break;
        case 2:
        mesasVipSeleccion();
        tOrF=true;
        break;
        case 3:
        metodoDePago();
        tOrF=true;
        break;
        case 4:
        Producto();
        tOrF=true;
        case 5:
        tOrF=false;
        }
    }}
function comprarEntrada(){
    let cantSeleccion= parseInt(prompt("Ingrese la cantidad de entradas que quiere comprar."));
    while(tOrF){
        if(cantSeleccion>0){
            alert(`Cantidad de entradas seleccionadas ${cantSeleccion}`);
            tOrF=true;
            break;
        }else{
            alert("Por favor, ingrese la cantidad de entradas que quiere comprar");
            break;
        }
    }
}


function mesasVipSeleccion(){
    while(tOrF){
        const mesasVipSeleccion=parseInt(prompt("Elija una mesa:\n(Una vez que termine con su eleccion,vuelva al inicio para realizar pago)\n 1-Mesa Green (Max 5 personas):$25000 \n 2-Mesa Blue (Max 10 personas):$50000 \n 3-Mesa Red (Max 20 personas):$100000 \n 4-Salir/Volver a inicio"));

        if(mesasVipSeleccion==""){
            alert("Por favor, Ingrese una opcion.")
        }else if(mesasVipSeleccion==4){            
            break;
        }
        switch(mesasVipSeleccion){
        case 1:
            alert("Haz seleccionado la Mesa Green.");
            tOrF=true;
            break;
        case 2:
            alert("Haz seleccionado la Mesa Blue.");
            tOrF=true;
            break;
        case 3:
            alert("Haz seleccionado la Mesa Red.");
            tOrF=true;
            break;
        default:
            tOrF=false;
            break;      
    }}}

initEntradas();

function Producto(nombre, precio){
    this.nombre= nombre;
    this.precio= precio;
    this.ivaPorcentaje = function () {
        return this.precio * 0.21;
    }
};


let trueOrFalse= true;
let producto

while (trueOrFalse){
    let nombre=parseInt(prompt("Si desea alguna consumision, selecciones entre las siguientes: \n 1-Cerveza (Lata) $800 \n 2-Champagne (Extra brut 750ml) $3700\n 3-Vodka (Absolut 700ml)$5689 \n 4-Gaseosas o aguas $750) \n 5-Salir "));
    let precio =Number(prompt("Ingrese el precio del producto que quiere comprar: \n 1-Cerveza (Lata):$800 \n 2-Champagne (Extra brut 750ml): $3700\n 3-Vodka (Absolut 700ml): $5689 \n 4-Gaseosas o aguas: $750 \n 5-Salir"));

    if(nombre ===""|| precio===""|| precio!==Number){
        alert("Por favor, complete todos los campos correctamente");
        
    }else{
        producto= new Producto(nombre, precio);
        trueOrFalse=false;
    }

}

console.log("precio" in producto);
for(propiedad in producto){
console.log(`Para la propiedad ${propiedad} el valor es ${producto[propiedad]}`)
};

trueOrFalse=true;
while(trueOrFalse){
    const opciones= Number(prompt("¡Ultimo paso! A continuacion puede acceder a la informacion de su producto ingresando la opcion 1 o 2: \n 1-Corroborar el producto y su precio \n 2-Ver precio del producto con el iva incluido \n Si esta seguro de que NO quiere ninguna consumision ingrese la opcion numero 3: \n 3-Salir"));
    switch(opciones){
        case 1:
            alert(`El nombre del producto es ${producto.nombre} y su precio es ${producto.precio}`);
            break;
        case 2:
            alert(`El precio del producto es ${producto.precio} y su  iva incluido es ${producto.ivaPorcentaje()} y su precio total es ${producto.precio + producto.ivaPorcentaje()}`)
            break;

        case 3:
            trueOrFalse=false;
            break;
        default:
            alert("Opcion incorrecta");
            break;
    }

}


const metodoDePago=["Efectivo","Credito","Debito","Mercadopg"];
console.log(metodoDePago);
vof=true;

for(let i=0;i < metodoDePago.length; i++){
    console.log(metodoDePago[i]);
}

while(vof){
    const opcionDePago=parseInt(prompt("Seleccione un Metodo de pago:\n 1-Efectivo \n 2-Tarjeta de Credito \n 3-Tarjeta Debito \n 4-Mercado Pago"))
    switch(opcionDePago){
        case 1:
            alert("Ha seleccionado Efectivo")
            console.log(metodoDePago[metodoDePago[0]])
            break;
        case 2:
            alert("Ha seleccionado Tarjeta Credito")
            console.log(metodoDePago[metodoDePago[1]])
             break;   
        case 3:
            alert("Ha seleccionado Tarjeta Debito")
            console.log(metodoDePago[metodoDePago[2]])
            break;
        case 4:
            alert("Ha seleccionado Mercado Pago")
            console.log(metodoDePago[metodoDePago[3]])
            break;
        default:
            vof=false;
            
    
    }


}



