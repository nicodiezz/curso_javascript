/*
asyncronous code in javascript is handled by:
callbacks, promises, async/await
*/ 

//  CALLBACKS
function fun1(callback){
    setTimeout(function(){
        console.log("Hello");
        callback();
        }, 2000);
}
function fun2(){
    console.log("World");
}

fun1(fun2);

/*    explicacion: setTimeout es asincrona,
    asi que para ejecutar fun2 despues de fun 1
    fun2 se le pasa como callback a fun1.
*/


//      PROMISES
/*
son objetos cuyo constructor es una funcion 
de parametros resolve, reject

las promises cuentan con el metodo .then()
este recibe una funcion como parametro
la funcion recibe como parametro lo que se haya definido dentro de la promesa -> resolve("valor")

para encadenar promesas:
promesa.then(()=> return funcion).then()        ->funcion debe retornar una promesa => 
                                                return funcion sirve para que 
                                                el sig then reciba esa promesa
        .catch(error=> {})          -> si hay algun reject en la cadena 
                                        corta la ejecución y se va al catch
*/

//Resolve
function task1() {
    return new Promise((resolve,reject)=>{
        setTimeout( 
        ()=> resolve("valor"),
        1000);
    })
}

function task2() {
    return new Promise((resolve,reject)=>{
        resolve("task2 completada");
    })
}
task1().then(value=>{
    console.log(value);
    return task2();
}).then(value=> console.log(value));

//Reject
function task1() {
    return new Promise((resolve,reject)=>{
        algoSalioMal=True
        if(algoSalioMal){
            reject("error");
        }else{
            resolve("valor");
        }
    })
}

function task2() {
    return new Promise((resolve,reject)=>{
        resolve("esto no se ejecuta");
    });
}
task1().then(value=>{
    console.log(value);
    return task2();
},           error=>{
    console.error(error);
    return task2();
}
).then(value=> console.log(value));


//      (promises +)    ASYNC/AWAIT
/*
    await: waits for a promise and return its value
    async: allows to use the await keyword
*/
async function doTasks() {
    try {
        const value1 = await task1();
        console.log(value1);

        const value2= await task2();
        console.log(value2);

    } catch (error) {
        console.error(error);
    }
}

doTasks();

