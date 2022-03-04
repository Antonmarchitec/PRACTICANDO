//ESTRUCTURA HTML DEL EJERCICIO
   /*<div class="contenedor" id="contenedor">
        <div class="prev" id="prev">Anterior</div>
        <div class="numerador" id="num">0</div>
        <div class="next" id="next">Siguiente</div>
    </div>*/


let contenedor = document.querySelector("#contenedor")
let num = document.querySelector("#num")
let prev = document.querySelector("#prev")
let next = document.querySelector("#next")

let contador = 0

//EN LA DELEGACION ASIGNAMOS EL EVENTO AL CONTENEDOR PADRE  
//PARA LUEGO DELEGAR EVENTOS A LOS ELEMENTOS HIJOS
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains('next')){
        console.log("le diste a next")
    }
    else if(e.target.classList.contains("prev")){
         console.log("le diste a prev")
    }
    else if(e.target.classList.contains("num")){
        console.log("le diste a num")
   }
})


//PRIMERA FORMA PARA DELEGAR EVENTOS POR ID
/*
<div class="content" id="content">
    <div class="padre" id="padre" data-id="papa">
        <div class="hijo" id="hijo" data-id="hijito">
 
        </div>
    </div>
</div
*/

let content = document.querySelector("#content")
let padreJS = document.querySelector("#padre")
let hijoJS = document.querySelector("#hijo")

document.addEventListener("click", (e)=>{
    //console.log(e.target.id)
    if(e.target.id === "hijo"){
        //console.log("LE DISTE A HIJITO")
    }else if(e.target.id === "padre"){
        //console.log("LE DISTE A PADRE")
    }else if(e.target.id === "content"){
        //console.log("LE DISTE A CONTENT")
    }

})


///////////////////////////////////////////////*/
//PRIMERA SEGUNDA FORMA DELEGACION EVENTOS POR METODO MATCHES

document.addEventListener("click", (e)=>{
    if (e.target.matches("#padre")){    
        //console.log("ESTOY PINCHANDO A PADRE")
    }else if(e.target.matches("#hijo")){
        //console.log("ESTOY PINCHANDO A HIJO")
    }else if(e.target.matches(".content")){
        //console.log("ESTOY PINCHANDO A CONTENT")
    }
})


///////////////////////////////////////////////*/
//PRIMERA TERCERA FORMA DELEGACION EVENTOS POR DATASET

document.addEventListener("click", (e)=>{
    if(e.target.dataset.extension === "contento"){
        console.log("LE DISTE A CONTENTO")
    }else if(e.target.dataset.extension === "hijito"){
        console.log("LE DISTE A HIJITO")
    }else if(e.target.dataset.extension === "papa"){
        console.log("LE DISTE A PAPA")
    }
})