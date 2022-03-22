const animales = {
    nombre: "Hachico",
    edad: "10",
    sexo: "Macho"
} 

const personas = {
    nombre: "Antonio",
    edad: "35",
    sexo: "Hombre"
} 

/*console.log(animales.nombre)
console.log(animales.edad)
console.log(animales.sexo)*/


//APLICANDO DESTRUCTURIN OBJECTS
const {nombre,edad,sexo} = animales
console.log(nombre)
console.log(edad)
console.log(sexo)





////////////////////////ARRAY DE OBJETOS ANIDADOS EJEMPLO 2
const objetoPesona = [{
    nombre: "Antonio Ponce",
    edad: 35,
    sexo: "Hombre",
    hovies:{
        deporte1: "futbol",
        deporte2: "basquet",
        otros:{
            casa:"video juegos"
        }
    },
    peliculas:{
        accion:"contracara",
        terror:"chuqui"
    },
    mascotas:{
        perros: 4,
        gatos: 6
    }     
}]

//console.log(objetoPesona[0])
let arrayMy = objetoPesona[0]
console.log(arrayMy.peliculas)

const{accion, terror} = arrayMy.peliculas
console.log(accion)
console.log(terror)

