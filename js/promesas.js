//Falcon masters

const promesa = new Promise((resolve,reject)=>{
    //accion que se ejecutara
    //resolve()
    //reject()

    //ejemplo corto
    setTimeout(() => {
        const exito = false
        if(exito){
            resolve("la operacion fue un exito")
        }else{
            reject("la operacion no fue un exito")
        }
    }, 3000);
})

promesa.then((mensaje)=>{
    //alert("mensaje")
    alert(mensaje)
})

promesa.catch((mensaje)=>{
    //alert("mensaje")
    alert(mensaje)
})