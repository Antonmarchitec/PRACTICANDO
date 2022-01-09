const sumar = (num1,num2)=>{
    let resdd = num1 + num2
    let res = "el numero es " + resdd
    return res
}

let gre =  sumar(500,200)
console.log(gre)

//USANDO TEMPLATE STRING SERIA

let dat1 = 500
let dat2 = 1000 

const sumar2 = (dat1,dat2)=>{
    let resdd = dat1 + dat2
    let res = `EL RESULTADO ES: ${resdd}` //ALT+96
    return res
}

let gre32 =  sumar(dat1,dat2)
console.log(gre32)