
/////////////////////EJEMPLO 1

class Usuario{
    //vamos a instanciar
    constructor(nombre, edad){
      this.nombre = nombre
      this.edad = edad    
    }
} 

//esto es una nueva instancia de un usuario
const carlos = new Usuario("Carlos Arturo", 21)
console.log(carlos.nombre)
console.log(carlos.edad)







//////////////////////EJEMPLO 2
//LAS FUNCIONES DENTRO DE CLASES SE LLAMAN METODOS
class Sumar{
    constructor( dato1, dato2){
        //this.dato1 = dato1
        //this.dato2 = dato2
        this.res = dato1 + dato2 
    }
}

const Sumando = new Sumar(100, 500)
console.log(Sumando.res)

const Sumando2 = new Sumar(5200, 9800)
console.log(Sumando2.res)

const Sumando3 = new Sumar(125400, 98)
console.log(Sumando3.res)


/*console.log(carlos.nombre)
console.log(carlos.edad)*/


//instancio un nuevo usuario
/*const daniel = new Usuario()
console.log(carlos.nombre)
console.log(carlos.edad)*/




/////////////////EJEMPLO 3
class Resta{
    constructor(dato11, dato12){
        //this.dato11 = dato11
        //this.dato12 = dato12
        this.rest = dato11 - dato12
        console.log(this.rest)
    }
}
const x = new Resta(5000, 1000)


////////////////EJEMPLO 4
class Suma{
    constructor(dato_a, dato_b){
        //this.dato11 = dato11
        //this.dato12 = dato12
        this.sum = dato_a + dato_b
    }
    
    //PODEMOS INTRODUCIR FUNCIONES DENTRO DE LA CLASE
    mostrarSaludo(f1, f2){
        //let resultado = f1 + f2     //TAMBIEN ES VALIDO
        //return resultado            //TAMBIEN ES VALIDO
        this.resultado = f1 + f2
        return this.resultado
    }

}

const yema = new Suma(5000, 1000)
console.log(yema)       //me resulta un objeto
console.log(yema.sum)  //me resulta el dato  
console.log(yema.mostrarSaludo(50, 100))




//////////EJEMPLO 5

class mostrarTemplate{
    constructor(nombre, edad, sexo){
        this.nombre = nombre,
        this.edad = edad,
        this.sexo = sexo
    }

    //UTILIZANDO METODO (FUNCION) DENTRO DE CLASE
    mostrarInfo(){
        return `
         nombre: ${this.nombre} <br/>
         edad: ${this.edad} <br/>
         sexo: ${this.sexo} 
        `
    }
} 



//AMBOS ELEMENTOS UTIOLIZAN REUTILIAN EL MISMO CONSTRUCTOR
//Y PARA ELLO NOS SIRVE LAS CLASES
const mostrar = new mostrarTemplate("Tonio", 18, "Varon")
console.log(mostrar.mostrarInfo())





//////////////////EJEMPLO 7 UTILIZANDO HERENCIA
//HERENCIA AGREGANDO LA PROPIEDAD CARRERA
class Estudiantes extends mostrarTemplate {
    constructor(nombre, edad, sexo, carrera){
        super(nombre, edad, sexo)
        this.carrera = carrera
    }
    //UTILIZANDO METODO (FUNCION) DENTRO DE CLASE
    mostrarInfo(){
        return `
         nombre: ${this.nombre} <br/>
         edad: ${this.edad} <br/>
         sexo: ${this.sexo} <br/>
         carrera: ${this.carrera} 
        `
    }
}


const richard = new Estudiantes("Richard Ponce", 37, "Hombre", "desarrollo")
console.log(richard.mostrarInfo())


//////////////EJHEMPLO 8

class Automoviles{
    constructor(color, motor, modelo ){
       this.color = color
       this.motor = motor
       this.modelo = modelo 
    }
}  


const Auto1 = new Automoviles("red", "B8-512", "Mazda")


class Motocicletas extends Automoviles{
    constructor(color, motor, modelo, ruedas){
        super(color, motor, modelo)
        this.ruedas = ruedas
    }
    mostrarMotos(da1, da2){
         this.reeee = da1 * da2
         return this.reeee
    }
}
     
const Moto1 = new Motocicletas("amarillo", "sepa", "buyrt", "godyear")
console.log(Moto1.mostrarMotos(100, 12))


