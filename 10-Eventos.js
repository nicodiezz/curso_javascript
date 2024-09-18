//      EVENTOS DE MOUSE
// click, mouseout, mouseout

const boton = document.querySelector("button");
boton.addEventListener("click", function(){
    console.log("Has hecho clic en el botón");
});


//      EVENTOS DE TECLADO
// keydown, keyup, keypress

const input = document.querySelector("input");
input.addEventListener("keydown", function(event){
    console.log("Has presionado una tecla");

    if(event.key === "ArrowDown"){
        console.log("Has presionado la flecha hacia abajo");
    }
    });


// a la callback le llega como argumento 'event'

function hola(evento){
    console.log(evento.target.innerText);
}

input.addEventListener("click",hola);