//                  CLASES

class Animal{       //clases con mayusc, objetos con minusc
    //constructor:
    constructor(esp,color){
        this.especie= esp;
        this.color=color;
    }
    //método:
    info(){
        alert(`hola soy un/a ${this.especie}de color ${this.color}`);
    } 
}

const vaca =new Animal ("vaca ","marron"); /* !IMPORTANTE! las instancias se declaran con const*/
vaca.info();


//              HERENCIA

class Perro extends Animal{
    constructor(especie, color, raza){
        super(especie,color);
        this.raza=raza;
    }
    //      METODOS ESTATICOS
    /* solo se pueden ejecutar como método de la clase en sí
        y no de un objeto
        perro.ladrar() -> da error
        Perro.ladrar() -> se ejecuta
     */
    static ladrar(){ 
        alert("¡Guau!");
    }
}

const perro = new Perro("perro","blanco","golden");
Perro.ladrar();


//              ENCAPSULAMIENTO     (setters y getters)

class Gato extends Animal{
    constructor(especie,color){
        super(especie,color);
        this.raza = null /* no le asigno un valor al atributo encapsulado */
    }
    set setRaza(raza){
        this.raza= raza;
    }
    get getRaza(){
        return this.raza;
    }
}


gato = new Gato("gato","negro");
gato.setRaza = "razadegato";
alert(gato.getRaza);

// ver objeto en consola:
console.dir(gato);    // atributos y metodos de gato