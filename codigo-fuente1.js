let promedio1 = 0;
let promedio2 = 0;

let nombre1 = prompt ("Ingrese al primer alumno");
let primerNumero1 = Number(prompt ("Ingrese primera nota"));
let segundoNumero1 = Number(prompt ("Ingrese segunda nota"));
let tercerNumero1 = Number(prompt ("Ingrese tercera nota"));

let nombre2 = prompt ("Ingrese al segundo alumno");
let primerNumero2 = Number(prompt ("Ingrese primera nota"));
let segundoNumero2 = Number(prompt ("Ingrese segunda nota"));
let tercerNumero2 = Number(prompt ("Ingrese tercera nota"));


function promediar1 (primerNumero1, segundoNumero1, tercerNumero1) {
    
    return ((primerNumero1 + segundoNumero1 + tercerNumero1)/3);

}

function promediar2 (primerNumero2, segundoNumero2, tercerNumero2) {
    
    return ((primerNumero2 + segundoNumero2 + tercerNumero2)/3);

}

promedio1 = promediar1 (primerNumero1, segundoNumero1, tercerNumero1);

promedio2 = promediar2 (primerNumero2, segundoNumero2, tercerNumero2);


if (promedio1 >= 7 && promedio2 >= 7) {

    alert("El promedio del alumno " + nombre1 + " es " + promedio1 + " y el promedio del alumno " + nombre2 + " es " + promedio2 + ", Felicidades!!!");
}

else if (promedio1 >= 7 && promedio2 < 7) {

    alert("El promedio del alumno " + nombre1 + " es " + promedio1 + " y el promedio del alumno " + nombre2 + " es " + promedio2 + " Felicidades para " + nombre1 + ", Una lastima por " + nombre2 + " !!!");

}

else if (promedio2 >= 7 && promedio1 < 7) {

    alert("El promedio del alumno " + nombre1 + " es " + promedio1 + " y el promedio del alumno " + nombre2 + " es " + promedio2 + " Felicidades para " + nombre2 + ", Una lastima por " + nombre1 + " !!!");

}

else {

    alert("El promedio del alumno " + nombre1 + " es " + promedio1 + " y el promedio del alumno " + nombre2 + " es " + promedio2 + ", Una lastima por ambos!!");

}