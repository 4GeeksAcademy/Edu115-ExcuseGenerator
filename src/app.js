import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let quien = ["Mi perro", "Mi abuela", "El cartero", "Un pajaro"]
  let accion = [" se comio", " se orino", " destruyo", " rompio"]
  let cosa = [" mi tarea", " mi carro", " mi telefono"]
  let cuando = [" antes de clases", " mientras dormia", " mientras hacia ejercicio", " durante mi almuerzo", " mientras rezaba"]

  function aleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  let posicionQuien = aleatorio(quien)
  let posicionAccion = aleatorio(accion)
  let posicionCosa = aleatorio(cosa)
  let posicionCuando = aleatorio(cuando)

  let excusa = posicionQuien + posicionAccion + posicionCosa + posicionCuando

  document.getElementById("excuse").innerHTML = excusa
};