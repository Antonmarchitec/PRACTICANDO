//ESTRUCTURA HTML DEL EJERCICIO
   /*<div class="contenedor" id="contenedor">
        <div class="prev" id="prev">Anterior</div>
        <div class="numerador" id="num">0</div>
        <div class="next" id="next">Siguiente</div>
    </div>*/



//ESTILOS CSS
  /* .contenedor{
    width: 300px;
    height: 200px;
    margin: 100px auto;
    border-radius: 8px;
    background: brown;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }*/


    let contenedor = document.querySelector("#contenedor")
    let num = document.querySelector('#num')
    let prev = document.querySelector("#prev")
    let next = document.querySelector("#next")
    
    let contador = 0
    
    //EN LA DELEGACION ASIGNAMOS EL EVENTO AL CONTENEDOR PADRE  
    //PARA LUEGO DELEGAR EVENTOS A LOS ELEMENTOS HIJOS
    contenedor.addEventListener("click", (e) =>{
        if(e.target.classList.contains('next')){
            contador ++
            num.textContent = contador
        }
    
        else if(e.target.classList.contains('prev')){
            if(contador > 0 ){
                contador --
                num.textContent = contador
            }   
        }
        e.stopPropagation()   
    })

   
    document.body.addEventListener('click', () =>{
        console.log('me diste click')
    })
    
    