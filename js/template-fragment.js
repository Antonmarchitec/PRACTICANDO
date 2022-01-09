//TEMPLATE Y FRAGMENT
//GUIA     https://bluuweb.github.io/desarrollo-web-bluuweb/


//CODIGO HTML DE NUESTRO EJERCICIO
/*
 <div class="contenedor">
       <table class="tabla" id="tabla">
         <tr>
           <td class="title">NOMBRE</td> <td class="title">SEXO</td> <td class="title">EDAD</td>
         </tr>
       </table>
     </div>

     <a href="#">
      <button class="boton" id="boton">Aumentar</button>
     </a>
        
  


      <template id="base__template">
        <tr>
          <td class="campo1" id="nombre"></td>
          <td class="campo1" id="sexo"></td>
          <td class="campo1" id="edad"></td>
        </tr>
      </template>
*/ 

//CODIGO JAVA SCRIPT

let base__template = document.querySelector("#base__template").content
let fragment = document.createDocumentFragment()
let tabla = document.querySelector("#tabla")

let boton = document.querySelector("#boton")

const datosPersonales = [
    {
        nombre:"Antonio",
        sexo: "Hombre",
        edad: "35"
    },
    {
        nombre:"Yanuna",
        sexo: "Mujer",
        edad: "20"
    },
    {
        nombre:"Daniela",
        sexo: "Mujer",
        edad: "40"
    }
]



datosPersonales.forEach((item)=>{
    base__template.querySelector("#nombre").textContent = item.nombre
    base__template.querySelector("#sexo").textContent = item.sexo
    base__template.querySelector("#edad").textContent = item.edad

    let clone = base__template.cloneNode(true)
    fragment.appendChild(clone)
})
tabla.appendChild(fragment)

