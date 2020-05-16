alert ("Welcome !!");
//Hola soy un comentario de javaScript

let name="Jonh";
let lastName="Carter";
let completeName=name+" "+lastName;
console.log(completeName);

//Condicionales
let passwordDB="pepe123"
let input="pepe123"
let result=input==passwordDB;
if (result==true){console.log("Login Correcto")}else{console.log("Login Incorrecto")}

//Otro ej condicionales con if
let score=70;
if(score>30){console.log("You need to practice more")}
// Si tu Score es mayor a 30 necesitas practicar mas
else if(score>15){("You are inproving")}
//Si tu score es mayor a 15 estas mejorando
else{console.log("You need to follow this tutorial")}
// si no es ninguno de los anteriores muestra necesitas seguir el tutorial con else if controlamos el flujo y que salga solamente una información



let typecard="Debid Card";
switch(typecard){case"Debid Card"}