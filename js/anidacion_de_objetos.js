
///////////////////////////OBJETOS ANIDADOS EJEMPLO 1
const web = {
    nombre: 'bluweb',
    apellido:'emisor',
    links:{
        enlace:'www.bloweb.com'
    },
    redesSociales:{
        youTube:{
            enlace:'youtube.com',
            enlace2:'youTube2.com'
        },
        instagram:{
            enlace:'instagram.com',
            enlace2:'instagram2.com'
        },
        twiter:{
            enlace:'twiter.com',
            enlace2:'twiter2.com'
        }

    } 
}
 const {enlace,enlace2} = web.redesSociales.instagram
 console.log(enlace)
 console.log(enlace2)




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




