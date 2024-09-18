
/*      CONDICIONALES       */

if(1<2){}else if(2>1){}else{}

//                              BUCLES


//          WHILE
/*
let i =0;
do{
    i++;
    alert(i);
}while(i<5);            */


//          FOR
/*
for(let i=0; i<=5;i++){
    alert(i);
}                       */

//          FOR IN Y OF

let animales= ["perro","gato","iguana"];

for (let animal in animales){
    // imprime el indice
    document.write("<br>" + animal);
}

for (let animal of animales){
    // imprime el valor
    document.write("<br>" + animal);
}

//         INTERRUPCIONES DE BUCLES

//  BREAK: sale del bloque
//  CONTINUE: saltea una repeticion del bucle
//  LABEL:                                  (interrumpir bloque de arriba)

for1:
for (let animal of animales){
    for(let i=0;i<3;i++){
        if(animal=="iguana"){
            break for1;
        }
        else{
            document.write("<br>" + animal);
        }
    }
}