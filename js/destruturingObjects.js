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


