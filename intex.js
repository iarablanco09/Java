
let hora=prompt("Ingrese la hora (Desde 00 a 23)");

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
    let nombre=prompt("Si desea alguna consumision, ingrese nombre del producto que quiere comprar: \n 1-Cerveza (Lata) $800 \n 2-Champagne (Extra brut 750ml) $3700\n 3-Vodka (Absolut 700ml)$5689 \n 4-Gaseosas o aguas $750) \n 5-Salir ");
    let precio =Number(prompt("Ingrese el precio del producto que quiere comprar: \n 1-Cerveza (Lata) $800 \n 2-Champagne (Extra brut 750ml) $3700\n 3-Vodka (Absolut 700ml)$5689 \n 4-Gaseosas o aguas $750) \nEn el caso de que haya ingresado la opcion SALIR ingrese el numero 5:\n 5-Salir"));

    if(nombre ===""|| precio===""){
        alert("No se ingreso un nombre o un precio");
        
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
