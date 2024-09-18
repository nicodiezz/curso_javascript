/*                      VARIABLES 
    
    var: variables globales -> NO USAR
    let: variables locales 
    const: constantes
*/

/*  Concatenar

si el navegador identifica unas comillas
convierte todo a texto

numero = 7 + 5
numero -> 12

numero = " " + 7 + 5
numero -> 75
*/

parseInt("3"); // -> =3

/* Backticks */
nombre= "nico";
saludo = `hola ${nombre}`;

codigo_html= ` <h1> Aprendiendo Javascript </h1>` 
document.write(codigo_html);


//          ARRAYS

let cosas = ["hola", 5, 6, "mundo"];

//          ARRAYS ASOCIATIVOS  (Objetos)

let persona = {
    nombre: "nico",
    edad: 18
} //    persona["edad"] = 18


//      METODOS DE CADENA

let cadena="cadena de prueba"

cadena.concat(" hola")
cadena.indexOf("prueba")// -> 10
cadena.length()
// booleanas
cadena.endsWith("a") 
cadena.includes("a")


/*
split(",")
substring()
toLowerCase()
toUpperCase()
toString()
trim()-> elimina espacios al comienzo y al final
*/



//      METODOS DE ARRAY

let array=["hola",1,5,"glup"]


//TRANSFORMADORES
array.pop()
array.shift()
array.push()
array.reverse()
array.unshifht()
array.sort()
array.splice()
array.map()

//ACCESORES
array.join(",")
array.slice(0,-1)

//DE REPETICIÓN
array.filter()
array.forEach()

// MATH class


Math.max([1,15,20,5])
Math.min()
Math.random()
Math.round()