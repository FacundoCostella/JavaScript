//Ejercicio 2
let a = 5
let b = 10
let c = a+b;
console.log("Valor de a=", a, ", valor de b=", b);
console.log("La suma del valor a + b es= ", c);
console.log(" ");

//Ejercicio 3
 let nombre = prompt("Ingrese su nombre: ");

  if(nombre !==null && nombre.trim() !== ""){
     console.log("Hola,",nombre,"!");
   }else{
     console.log("No ingresó el nombre");
  }
  console.log(" ");

//--------------------------------------------------------- Operadores lógicos y condicionales
//Ejercicio 1
let num1 = 9
let num2 = 12
let num3 = 18
let numMayor; 

if (num2>num1 && num2>num3){
  numMayor = num2;
}else if (num1>num2 && num1>num3){
  numMayor = num1;
}else{
  numMayor = num3;
}
console.log("Valores declarados:",num1,";", num2,";",num3);
console.log("El mayor de los tres números es:",numMayor);
console.log(" ");

//Ejercicio 2
  let numero = prompt("Ingrese un número y veré si es Par o Impar:");
  if(numero %2 ===0){
    console.log("El número ingresado","(",numero,")","es Par.");
  }else{
    console.log("El número ingresado","(",numero,")","es Impar.");
  }
  console.log(" ");

//--------------------------------------------------------- Operadores de asignación y bucles
//Ejercicio 1
let variable = 10;
console.log("Bucle while:");
while(variable>0){
  console.log(variable);
  variable --;
}

//Ejercicio 2
  console.log("Bucle do while:");
  let entrada;

  do {
    entrada = prompt("Ingrese un número mayor a 100:");
    if (entrada <= 100) {
      console.log("El número ingresado no es mayor a 100.");
    } else {
      console.log("El número que ingresaste es mayor a 100: ", entrada);
    }
  } while (entrada <= 100);

//--------------------------------------------------------- Funciones en JavaScript
//Ejercicio 1
function esPar(valor){
  return valor % 2 === 0;
}
console.log("");
console.log("Funcion Par:")
console.log("El número 3 es Par:", esPar(3));
console.log("El número 4 es Par:", esPar(4));
console.log("El número 543 es Par:", esPar(543));
console.log("El número 106 es Par:", esPar(106));

//Ejercicio 2 
function convertirCelsiusAFahrenheit(temperatura){
  return temperatura * 1.8 + 32;; 
}
console.log("");
console.log("Conversión de Celsius a Farenheit:");
console.log("30°C son equivalentes a", convertirCelsiusAFahrenheit(30), "°F");
console.log("28°C son equivalentes a", convertirCelsiusAFahrenheit(28), "°F");
console.log("");

//--------------------------------------------------------- Objetos en JavaScript
//Ejercicio 1
let persona ={
  nombre : "Facundo",
  edad : "21",
  ciudad: "Maipú",

  cambiarCiudad : function(nuevaCiudad){
    this.ciudad = nuevaCiudad;
    return this.ciudad;
  }
}
console.log("Persona:",persona.nombre, "- Edad:", persona.edad,"- Ciudad:", persona.ciudad);
console.log("Datos actualizados: ");
console.log("Persona:",persona.nombre, "- Edad:", persona.edad,"- Ciudad:", persona.cambiarCiudad("Madrid"));
console.log("");

//Ejercicio 2 
let libro ={
  titulo : "Física I",
  autor : "Rouselle",
  año : 2002,

  antiguedad : function(año){
    if(año <= 2014){
      console.log("El libro", this.titulo, "es antiguo.");
    }else{
      console.log("El libro", this.titulo, "es reciente");
    }
  }
}
console.log(libro.antiguedad(2002));
//Pruebo con otro libro
let libro2 ={
  titulo : "Cálculo Integral",
  autor : "Gonzales Pirez",
  año : 2017,

  antiguedad : function(año){
    if(año <= 2014){
      console.log("El libro", this.titulo, "es antiguo.");
    }else{
      console.log("El libro", this.titulo, "es reciente");
    }
  }
}
console.log(libro2.antiguedad(2017));

//--------------------------------------------------------- Arrays en JavaScript
//Ejercicio 1
let numeros = [1,2,3,4,5,6,7,8,9,10];
let resultados = [];

for(let i=0; i<numeros.length; i++){
  resultados.push(numeros[i]*2);
}

console.log("Array original:", numeros);
console.log("Array multiplicado por 2: ",resultados);
console.log("");

//Ejercicio 2
let pares = [];
for(let i=1; i<=20; i++){
  if(i % 2 ==0){
    pares.push(i);
  }
}
console.log("Los primeros 10 numeros pares son:", pares);
console.log("");

//--------------------------------------------------------- DOM
//Ejercicio 2
function emitirAlerta(){
const valoringresado = document.getElementById("texto").value;
prompt("Has ingresado:",valoringresado);
}

//--------------------------------------------------------- Eventos en DOM
//Ejercicio 1
const elementosLista = document.querySelectorAll("#lista li");

elementosLista.forEach(elemento =>{
  elemento.addEventListener("click", function(){
    console.log(this.textContent);
  });
});

//Ejercicio 2
document.getElementById('deshabilitar').addEventListener('click', function() {
  document.getElementById('campotexto').disabled = true;
});

document.getElementById('habilitar').addEventListener('click', function() {
  document.getElementById('campotexto').disabled = false;
});

//Seccion 9 
document.addEventListener('DOMContentLoaded', function() {
  const correoInput = document.getElementById('correo');
  const correoGuardadoTexto = document.getElementById('correoGuardado');
  const eliminarBtn = document.getElementById('eliminarCorreo');  // Aquí el ID correcto

  // Verificar si hay un correo guardado al cargar la página
  const correoGuardado = localStorage.getItem('correo');
  if (correoGuardado) {
      mostrarCorreoGuardado(correoGuardado);
  }

  // Manejar el envío del formulario para guardar el correo
  document.getElementById('formCorreo').addEventListener('submit', function(event) {
      event.preventDefault();  // Evitar que se recargue la página
      const correo = correoInput.value;
      
      if (correo) {
          localStorage.setItem('correo', correo);  // Guardar el correo en localStorage
          mostrarCorreoGuardado(correo);           // Mostrar el correo en el DOM
      }
  });

  // Eliminar el correo del localStorage
  eliminarBtn.addEventListener('click', function() {
      localStorage.removeItem('correo');  // Eliminar el correo de localStorage
      correoGuardadoTexto.textContent = 'Correo guardado: ';  // Limpiar el texto en el DOM
      eliminarBtn.style.display = 'none';  // Ocultar el botón de eliminar
  });

  // Función para mostrar el correo guardado
  function mostrarCorreoGuardado(correo) {
      correoGuardadoTexto.textContent = `Correo guardado: ${correo}`;
      eliminarBtn.style.display = 'block';  // Mostrar el botón de eliminar
  }
});
