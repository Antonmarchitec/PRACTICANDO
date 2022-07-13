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
    pokemones_1_al_20()
    pokemones_21_al_40()
    pokemones_41_al_60()
})


//POKEMONES DEL 1 AL 20
const pokemones_1_al_20 = async()=>{
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
     //console.log(dataPoke.results)
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




//POKEMONES DEL 20 AL 40
const pokemones_21_al_40 = async() =>{
    try{
        const res = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await res.json()
        //console.log(data.next)
        //pokemonesDel_2_40(data)
        document.addEventListener("click", (e)=>{
            if(e.target.id === "anterior"){
                base.textContent =   pokemonesDel_2_40(data)
            }
        })
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
    //console.log(datau)
    template_pokemones.querySelector(".NombrePoke").textContent = datau.name
    template_pokemones.querySelector("img").setAttribute("src", datau.sprites.other.dream_world.front_default)
    let clone21_40 = template_pokemones.cloneNode(true)
    fragmentPokemones.appendChild(clone21_40)
    base.appendChild(fragmentPokemones)
}



//POKEMONES DEL 21 AL 60
const pokemones_41_al_60 = async () =>{
    try{
        const res4160 = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20")
        const data4160 = await res4160.json()
        //console.log(data4160)
        document.addEventListener("click", (e)=>{
            if(e.target.id === "siguiente"){
                base.textContent = urlPaso1Poke4160(data4160)
            }
        })
    }catch(error){
        console.log("ERROR CARGA 41-60")
    }
}

const urlPaso1Poke4160 = (data4160)=>{
    //console.log(data4160.results)
    data4160.results.forEach( elemento =>{
        //console.log(elemento.url)
        let url4160 = elemento.url
        const urlPaso2Poke4160 = async () =>{
            try{
                const res41_60 = await fetch(url4160)
                const data41_60 = await res41_60.json()
                //console.log(data41_60)
                pintarElements4160(data41_60)

            }catch(error){
                console.log("ERROR AL CARGAR URL 41_60")
            }
        }
        urlPaso2Poke4160()
    })
}

const pintarElements4160 = (data41_60) =>{
    console.log(data41_60)
    template_pokemones.querySelector(".NombrePoke").textContent = data41_60.name
    template_pokemones.querySelector("img").setAttribute("src", data41_60.sprites.other.dream_world.front_default)
    let clone4160 = template_pokemones.cloneNode(true)
    fragmentPokemones.appendChild(clone4160)
    base.appendChild(fragmentPokemones)
}
