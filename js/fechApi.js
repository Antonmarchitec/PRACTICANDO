
document.addEventListener('DOMContentLoaded', () =>{
    fechData() 
})


const fechData = async ()=>{
    try{
       const res = await fetch('api.json')
       const data = await res.json()
       mostrar(data)
       /*data.forEach(element => {
           console.log(element.precio)
       });*/
    }catch(error){
        console.log('error')
    }
}

const mostrar = (data) =>{
    data.forEach( element => {
        console.log(element.title)
    });
}