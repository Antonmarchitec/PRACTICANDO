document.addEventListener("DOMContentLoaded", () =>{
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
            //console.log(dataPokemon)
            resultado(dataPokemon)
           
            
        }catch(error){
            console.log("error en pokeData")
        }
     }
     dataPokemon()

     const resultado = (dataPokemon) =>{
        console.log(dataPokemon) 
        dataPokemon.results.forEach( element => {
            //console.log(element.url)
            let urlPoke = element.url
            const urlsPokemones = async () =>{
                try{
                    const resUrlPoke = await fetch(urlPoke)
                    const resPokeData = await resUrlPoke.json()
                    //console.log(resPokeData)
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
     
}




