let nombre1 = prompt ("Ingrese al primer alumno");
let numero1 = Number(prompt ("Ingrese primera nota"));
let numero2 = Number(prompt ("Ingrese segunda nota"));
let numero3 = Number(prompt ("Ingrese tercera nota"));

let nombre2 = prompt ("Ingrese al segundo alumno");
let numero4 = Number(prompt ("Ingrese primera nota"));
let numero5 = Number(prompt ("Ingrese segunda nota"));
let numero6 = Number(prompt ("Ingrese tercera nota"));



let promedio1 = (((numero1 + numero2 + numero3)/3));
let promedio2 = (((numero4 + numero5 + numero6)/3));


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


