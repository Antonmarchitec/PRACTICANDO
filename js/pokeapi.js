/*document.addEventListener("DOMContentLoaded", () =>{
    rastreandoData()
})


const rastreandoData = async () =>{
    try{
        const res = await fetch("https://pokeapi.co/api/v2/")
        const resData = await res.json()
        const pokemon = resData.pokemon
        pintarDatosPokemon(pokemon)

    }catch(error){
        console.log("error en rastreando")
    }
}


const pintarDatosPokemon = (pokemon) =>{
     //console.log(pokemon)
     const dataPokemon = async () =>{
        try{
            let resPokemon = await fetch(pokemon)
            let dataPokemon = await resPokemon.json()
            resultado(dataPokemon)
           
            
        }catch(error){
            console.log("error en pokeData")
        }
     }
     dataPokemon()

     const resultado = (dataPokemon) =>{
        //console.log(dataPokemon) 
        dataPokemon.results.forEach( element => {
            //console.log(element.url)
            let urlPoke = element.url
            const urlsPokemones = async () =>{
                try{
                    const resUrlPoke = await fetch(urlPoke)
                    const resPokeData = await resUrlPoke.json()
                    console.log(resPokeData)
                    pintarPokemones(resPokeData)
                }catch(error){
                    console.log("error en datosPoke")
                }
            }
            urlsPokemones()

            const pintarPokemones = (resPokeData) =>{
                //console.log(resPokeData)
                document.addEventListener("click", (e) =>{
                    
                })
            }
        });
    }
     
}*/


let base = document.querySelector("#base")
let template_pokemones = document.querySelector("#template_pokemones").content
let fragmentPokemones = document.createDocumentFragment()


window.document.addEventListener("DOMContentLoaded", ()=>{
    dataFech()
})



const dataFech = async()=>{
     try{
         const res = await fetch('https://pokeapi.co/api/v2/')
         const data = await res.json()
         pintar(data)
     }
     catch(error){
         console.log("Ocurrio un error")
     }
}


 const pintar = (data) =>{
      let pokemones = data.pokemon
      const dataPokemones = async () => {
          try{
             const resPoke = await fetch(pokemones)
             const dataPoke = await resPoke.json()
             //console.log(dataPoke)
             pintarPoke(dataPoke)
           
          }
          catch(error){
              console.log("error en dataPokemones")
          }
      } 
      dataPokemones()
 }

 const pintarPoke = (dataPoke) =>{
     //console.log(pintarPoke)
     dataPoke.results.forEach( element => {
         //console.log(element.url);
         let urlPoke = element.url
         
         const dataFechUrl = async () =>{
            try{
               const resUrlPoke = await fetch(urlPoke)
               const dataUrl = await resUrlPoke.json()
               //console.log(dataUrl)
               pintarLosPokemones(dataUrl)
               
              
            }
            catch(error){
               console.log("error urlPoke")
            }
         }
         dataFechUrl()
     });
 }

const pintarLosPokemones = (dataUrl) =>{
     //console.log(dataUrl)
     template_pokemones.querySelector(".NombrePoke").textContent = dataUrl.name
     template_pokemones.querySelector("img").setAttribute("src", dataUrl.sprites.other.dream_world.front_default)
     let clonePokepoke = template_pokemones.cloneNode(true)
     fragmentPokemones.appendChild(clonePokepoke)
     base.appendChild(fragmentPokemones)
}



let cont = 1
while ( cont <= 5) {
    cont++   
}  

document.addEventListener("click", (e)=>{
    if(e.target.id === "siguiente"){
        pintarLosOtrosPoke()
    }
})


//Los siguientes 20
const pintarLosOtrosPoke = async() =>{
    try{
        const res = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await res.json()
        //console.log(data.next)
        pokemonesDel_2_40(data)
    }catch(error){
        console.log("error al conectar")
    }
}

const pokemonesDel_2_40 = (data) =>{
     //console.log(data.next)
     let urlOtros20 = data.next

     const dataFechOtros20 = async () =>{
         try{
           const resOt = await fetch(urlOtros20)
           const dataOt = await resOt.json()
           //console.log(dataOt)
           pintalos(dataOt)
         }catch(error){
           console.log("error en otros 20")
         }
     }
     dataFechOtros20()
}


const pintalos = (dataOt) =>{
     //console.log(dataOt)
     dataOt.results.forEach( elem =>{
         let url21_40 = elem.url
         //console.log(url21_40)
         const dataFech21_40 = async () =>{
             try{
                 const resu = await fetch(url21_40)
                 const datau = await resu.json()
                 //console.log(datau)
                 mostrar21_40(datau)

             }catch(error){
                 console.log("ocurrio un error")
             }
         }
         dataFech21_40()
     })
}

const mostrar21_40 = (datau) =>{
    console.log(datau)
    template_pokemones.querySelector(".NombrePoke").textContent = datau.name
    template_pokemones.querySelector("img").setAttribute("src", datau.sprites.other.dream_world.front_default)
    let clone21_40 = template_pokemones.cloneNode(true)
    fragmentPokemones.appendChild(clone21_40)
    base.appendChild(fragmentPokemones)
}