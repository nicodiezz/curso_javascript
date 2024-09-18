/*    DOM      

Nodo:   cualquier etiqueta 

Tipos: Document, element, text, attribute, comentarios

            dom         <-nodo document(del q salen todos)
             |
            html                <-nodo element
             /\
          head body             <-nodos element
                |
                p
                |
            "lorep ipsum"       <-text
                ...



*/

//      Métodos de selección de elementos
document.getElementById("id")                               //ELEMENT OR NULL
document.getElementsByTagName("li")                         //HTML COLLECTION
document.getElementsByClassName(".clase")                   //HTML COLLECTION
document.querySelector(".primer-objeto-de-una-clase")       //ELEMENT OR NULL
document.querySelectorAll("todos los objetos de una clase") //NODELIST

//      Modificar Atributos
const rangoEtario = document.querySelector(".rangoEtario");
rangoEtario.setAttribute("type","range");
const atributo = rangoEtario.getAttribute("type");
//rangoEtario.removeAttribute("type");

//                  DOM Navigation

const lista = document.getElementsByTagName("ul");
lista.firstElemtChild;
lista.lastElementChild;

lista.parentElement;
lista.children;

//                  DOM Manipulation

//      Crear elementos
const nuevoElemento = document.createElement("p");
nuevoElemento.append("texto");

const h1 = document.getElementsByTagName("h1").firstElemtChild;
nuevoElemento.prepend(h1);


//      Eliminar elementos
const eliminarElemento = document.querySelector("p");
eliminarElemento.remove();


//      Modificar elementos
const modificarElemento = document.querySelector("p");
modificarElemento.textContent = "Este es un texto modificado";


//      ATRIBUTOS GLOBALES de HTML
// Todos los elementos los tienen

//contentEditable (bool)-> indica si el usuario puede modificar el contenido
//hidden (bool)


//      Nodelist

/*
    Static collection
    Similar to an array, but no (map, filter, reduce).
    won't update to automatically reflect changes
*/


//      ClassList
//atributo

lista.classList.add("clase");
lista.classList.remove("clase");
lista.classList.toogle("clase");
lista.classList.replace("old","new");
lista.classList.contains("clase");