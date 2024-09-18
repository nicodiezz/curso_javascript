const objeto = {
    clave: "valor"
}

JSON.stringify(objeto)  //-> JS Object to JSON string
JSON.parse(objeto)      //-> JSON string to JS Object


fetch("prueba.json")    //-> accede a un .json y devuelve una Promise con una response
    .then(response=> response.json())   //-> response.json() devuelve una promise con el objeto
    .then(object => console.log(object.clave));

/*
Se suele usar con async/await pq tiene mejor manejo de errores 
y se lee más fácil          ->
*/

async function fetchData() {
    try {
        const response = await fetch("prueba.json");
        if (!response.ok) {
            throw new Error("couldn't fetch data");
            
        }
        const objeto = await response.json();
        console.log(objeto.clave);
    } catch (error) {
        console.error(error);
    }
}