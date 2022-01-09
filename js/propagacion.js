   //Javascript #09: DOM delegación de eventos   https://www.youtube.com/watch?v=OspjzGQa86g
   
   //CODIGO HTML DE NUESTRO EJERCICIO
   /*
    <div class="container">
      <div class="border border_primary border-5 py-5 m-3">
          Lorem, ipsum dolor
          <div class="border border_secondary border-5 py-5 m-3" >
              Lorem, ipsum dolor
              <div class="border border_danger border-5 py-5 m-3" >
                  Lorem, ipsum dolor
              </div>
          </div>
      </div>
   </div>
   */



 //CODIGO JAVA SCRIPT DE NUESTRO EJERCICIO

//FORMA 1: ESTA FORMA NO ES CORRECTA YA QUE EXISTE PROPAGACION DE EVENTOS

/*let border_primary = document.querySelector(".border_primary")
let border_secondary = document.querySelector(".border_secondary")
let border_danger = document.querySelector(".border_danger")

border_primary.addEventListener("click", (e)=>{
    console.log("elemento padre")
},false)

border_secondary.addEventListener("click", (e)=>{
    console.log("elemento hijo")
},false)

border_danger.addEventListener("click", (e)=>{
    console.log("elemento nieto")
},false)*/




//FORMA 2: ESTA FORMA NO ES CORRECTA YA QUE EXISTE PROPAGACION DE EVENTOS

let cajas = document.querySelectorAll(".container div")

cajas.forEach((element) => {
    element.addEventListener("click", (e)=>{
        e.stopPropagation()
        console.log("un solo click")
    })
})