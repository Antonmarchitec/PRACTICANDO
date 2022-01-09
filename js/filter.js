document.addEventListener('DOMContentLoaded', ()=>{
    fechData()
})

const fechData = async () =>{
    try{
       const res = await fetch( "https://pokeapi.co/api/v2/pokemon/")
       const data = await res.json()
       mostrar(data)
       //console.log(data)
       /*data.forEach(element => {
           console.log(element.precio)
       });*/
    }catch(error){
        console.log('error')
    }
}

const mostrar = (data) =>{
    const arrayNombres=  data.results.filter(element => element.name !== 'bulbasaur')
    console.log(arrayNombres)
}


