
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
    const edadingresada=prompt("Ingrese su edad");
    if(edadingresada >=18){
        console.log("Mayor de edad");
        vof=false;
    }else{
        console.log("Menor de edad");
        alert("Lo sentimos, ingresaste la edad de"+" "+edadingresada+" "+"y para ingresar al sitio debes ser mayor de 18 años.");
        vof=true
    }
}
let tof=true;
while(tof){
    const nombre= prompt("Ingrese su nombre");
    const nombreUsuario=prompt("Ingrese su usuario");
    if (nombreUsuario!=""&& nombre!=""){
        console.log("Nombre ingresado correctamente")
    alert("Bienvenida al sitio web"+" "+nombre+ "!");
    vof=true;
}else{
    alert ("Por favor,complete todos los campos");
    console.log("Error")
    vof=false;
}
}
 