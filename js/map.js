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
    const arrayNombres =  data.results.map(element => element.name)
    console.log(arrayNombres)
}

//ESTA NO ES LA FORMA CORRECTA DE USAR MAP
/*
const mostrar = (data) =>{
    data.results.map( ele =>{
        const arrayN = ele.name
        console.log(arrayN)
    })
}
*/

//LE METODO MAP ME SIRVE PARA CREA UN NUEVO ARRAY CON LOS RESULTADOS DE LA FUNCION INDICADA