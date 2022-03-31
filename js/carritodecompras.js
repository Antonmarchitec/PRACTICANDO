
/*
let items = document.querySelector('#items')
let templateCard = document.querySelector('#template_card').content
let fragment = document.createDocumentFragment()
let carrito = {}



document.addEventListener("DOMContentLoaded", ()=>{
    dataFech()
})


const dataFech = async () =>{
    try{
       const res = await fetch("api2.json")
       const data = await res.json()
       //console.log(data)
       pintarProductos(data)
    }catch(error){
        console.log("error")
    }
}



const pintarProductos = (data)=>{
    data.forEach(element => {
        templateCard.querySelector('h5').textContent = element.title
        templateCard.querySelector('p').textContent = element.precio
        templateCard.querySelector('img').setAttribute('src', element.thumbnailUrl)
        templateCard.querySelector('img').setAttribute('alt', element.title)
        templateCard.querySelector('button').dataset.id = element.id
        
        let clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}



items.addEventListener('click', (e) =>{
   addCarrito(e)
})

const addCarrito = (e) =>{
    //console.log(e.target.classList.contains('btn-dark'))
    if(e.target.classList.contains('btn-dark')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = (objeto) =>{
      //console.log(objeto)
      const producto = {
          id:objeto.querySelector('.btn-dark').dataset.id,
          title: objeto.querySelector('h5').textContent,
          precio: objeto.querySelector('p').textContent,
          cantidad: 1
      }
      console.log(producto)
}



location.href ="index.html"


*/


/*


let items = document.querySelector("#items")
let template_card = document.querySelector("#template_card").content
let fragment = document.createDocumentFragment()


let carrito = {
    //COLECCION DE OBJETOS VACIO
}


document.addEventListener("DOMContentLoaded", ()=>{
    dataFech()
})

const dataFech = async () =>{
    try{ 
        const res = await fetch("api2.json")
        const data = await res.json()
        mostrarProductos(data)
        //console.log(data)

    }catch(error){
        console.log("error")
    }
}


const mostrarProductos = (data) =>{
    //console.log(data)
    data.forEach( element => {
        //console.log(element)
        template_card.querySelector("img").setAttribute("src", element.thumbnailUrl)
        template_card.querySelector("img") .setAttribute("alt", element.title)
        template_card.querySelector("h5").textContent = element.title
        template_card.querySelector("p").textContent = element.precio
        template_card.querySelector("button").dataset.id = element.id

        let clone = template_card.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

}


document.addEventListener("click", (e) =>{
     //console.log(e.target)
     addCarrito(e)

})


const addCarrito = (e) =>{
    //console.log(e.target.classList.contains("btn-dark"))
    if(e.target.classList.contains("btn-dark")){   //comprueba si existe el elemento botton
         setCarrito(e.target.parentElement)
         //console.log(e.target.parentElement)    
    }
    e.stopPropagation()
}


const setCarrito = objeto =>{
      //console.log(objeto)
      const producto = {
          id: objeto.querySelector(".btn-dark").dataset.id,
          title: objeto.querySelector("h5").textContent,
          precio: objeto.querySelector("p").textContent,
          cantidad: 1 
      }
      
      console.log(producto)

}

*/

let items = document.querySelector('#items')
let template_card = document.querySelector('#template_card').content
let fragment = document.createDocumentFragment()

let carrito = {}


document.addEventListener("DOMContentLoaded", () =>{
    dataFech()
})

const dataFech = async () =>{
    try{  
        const res = await fetch('api2.json')
        const data = await res.json()
        //console.log(data)
        pintarProductos(data)

    }catch(error){
        console.log("error")
    }
}

const pintarProductos = (data) =>{
     data.forEach( element => {
         //console.log(element)
         template_card.querySelector('img').setAttribute('src', element.thumbnailUrl)
         template_card.querySelector('img').setAttribute('alt', element.title)
         template_card.querySelector('h5').textContent = element.title
         template_card.querySelector('p').textContent = element.precio
         template_card.querySelector('.btn-dark').dataset.id = element.id   

         let clone = template_card.cloneNode(true)
         fragment.appendChild(clone)
    });     
    items.appendChild(fragment)
}



//DELEGACION DE EVENTOS
document.addEventListener('click', (e) =>{
    //console.log(e.target.classList.contains('btn-dark'))
    if(e.target.classList.contains('btn-dark')){
        //setCarrito(e.target.parentElement)
        //console.log(e.target.parentElement)
        setCarrito(e.target.parentElement) 
    }
})

    
const setCarrito = (objeto) =>{
    //console.log(objeto)
    const productoOb = {
        title: objeto.querySelector("h5").textContent,
        precio: objeto.querySelector("p").textContent,
        id: objeto.querySelector(".btn-dark").dataset.id,
        cantidad: 1
    }
    console.log(productoOb)
}













































