
//let contUL = document.querySelector("#contUl");
//let miArray = ["Inicio","Noticias","About","Contact"];

/*miArray.forEach(elemento =>{
    //console.log(elemento);
    let contLi = document.createElement("li");
    contLi.textContent = elemento;
    contUL.appendChild(contLi);

});*/


/*for (i=0 ; i < miArray.length ; i++ ){
    let estado = miArray[i];
    let contLi = document.createElement("li");
    contUL.appendChild(contLi); 
    contLi.textContent = estado;
}*/

/*ArrayElement.forEach(ele => {
       //let elemento = ArrayElement[0];
        let contTtitle = document.createElement("h3");
        let contDescription = document.createElement("div");

        contTtitle.textContent = "titulo";
        contDescription.textContent = "El pais es :" + ele;

        contTtitle.classList.add("contTitle");
        contDescription.classList.add("contDescription");
           
        contCuadro.appendChild(contTtitle);
        contCuadro.appendChild(contDescription);
});*/


/*for (i = 0 ; i < ArrayElement.length ; i++){
        let estado = ArrayElement[i];

        let contTtitle = document.createElement("h3");
        let contDescription = document.createElement("div");

        contTtitle.textContent = "titulo";
        contDescription.textContent = "El pais es :" + estado;

        contTtitle.classList.add("contTitle");
        contDescription.classList.add("contDescription");
           
        contCuadro.appendChild(contTtitle);
        contCuadro.appendChild(contDescription);        
}*/


//TRABAJANDO CON FRAGMENT
/*let contCuadro = document.querySelector("#contCuadro");
let arElement = ["Bolivia" , "Paris" , "Mexico" , "Canada"];

const fragment = document.createDocumentFragment();
arElement.forEach(item => {
      let etiqueta_li = document.createElement("li");
      let etiqueta_b = document.createElement("b");
      let etiqueta_span = document.createElement("span");
      
      
      etiqueta_b.textContent = "Nombre:";
      etiqueta_span.classList.add("text-danger");
      etiqueta_span.textContent = item;

      etiqueta_li.appendChild(etiqueta_b);
      etiqueta_li.appendChild(etiqueta_span);

      fragment.appendChild(etiqueta_li);
});
contCuadro.appendChild(fragment);*/



//TRABAJNDO CON TEMPLATES
/*let contBase = document.querySelector("#contBase");
let miArray = ["Inicio","Noticias","About","Contact"];

let templateBase = document.querySelector("#templateBase").content;
const fragment = document.createDocumentFragment();


miArray.forEach(el =>{    

    //accedemos a los elementos del template
    templateBase.querySelector("#title").textContent = "Titulo1";
    templateBase.querySelector("#content").textContent = el;

   //clonamos el template
   let clone = templateBase.cloneNode(true);
   fragment.appendChild(clone);
});
contBase.appendChild(fragment);
*/
/*
let Persona = {
    Nombre:"Antom",
    Apellido:"Ponce",
    Edad:35
}

const Perro = {
    Nombre:"HACHICO",
    Edad:10
}
Perro.Pais = "Bolivia";
Perro.Caracter= "Furioso";

/*let primerArray = ["caso1","caso2","caso3","caso4"];
primerArray.push("cado5");*/









/********************************** */
//TEMPLATE MAS FRAGMENT EJEMPLO 1
/********************************** */

/*CODIGO HTML*/
/*<div class="contBase"  id ="contBase">
      
    </div>
  
    <template id="contTemplate">
        <!--
          <div class="caja">
            <h2 class="cajaText"> item </h2>
          </div>
        -->
    </template>
*/


/*CODIGO JS*/
/*const Persona = [
    {
    Nombre : "Antonio",
    Apellido : "Ponce",
    Edad : 35,
    Sexo : "Hombre"
    },
    {
    Nombre : "Gustavo",
    Apellido : "Perez",
    Edad : 18,
    Sexo : "Hombre"
    },
    {
    Nombre : "Lenia",
    Apellido : "Orellana",
    Edad : 31,
    Sexo : "Mujer"
    }
]  
console.log(Persona)

let contBase = document.getElementById("contBase");
let contTemplate = document.getElementById("contTemplate").content;
let fragment = document.createDocumentFragment();



Persona.forEach( box =>{
    let element_div = document.createElement("div");
    element_div.classList.add("caja_JS");

    let element_h2 = document.createElement("h2");
    element_h2.classList.add("cajatext_JS");
    let vaalorrr = box.Apellido;
    element_h2.textContent = vaalorrr;

    element_div.appendChild(element_h2)
    contTemplate.appendChild(element_div)
    fragment.appendChild(contTemplate)
})
contBase.appendChild(fragment)
*/







/********************************** */
//TEMPLATE MAS FRAGMENT EJEMPLO 2
/********************************** */

/*CODIGO JS*/

/*const lista = document.getElementById("lista_dinamica");
const arrayItem = ["Bolivia", "Argentina", "Chile"];

const fragment = document.createDocumentFragment();
const template = document.querySelector("template").content;


arrayItem.forEach((item) => {
    let span = document.createElement("span");
    span.classList.add("estiloLista");
    span.textContent = item;
    let template2 = template.appendChild(span);
    const clone = template2.cloneNode(true);
    fragment.appendChild(clone);
});

lista.appendChild(fragment);*/




let contenedor = document.getElementById("contenedor")
let base__template = document.getElementById("base__template").content
let fragment = document.createDocumentFragment()

const Persona = [
    {
    Nombre : "Antonio",
    Apellido : "Ponce",
    Edad : 35,
    Sexo : "Hombre"
    },
    {
    Nombre : "Gustavo",
    Apellido : "Perez",
    Edad : 18,
    Sexo : "Hombre"
    },
    {
    Nombre : "Lenia",
    Apellido : "Orellana",
    Edad : 31,
    Sexo : "Mujer"
    }
]  

Persona.forEach( item =>{
    base__template.getElementById("title").textContent = item.Sexo
    base__template.getElementById("parrafo").textContent = item.Nombre

    let clone = base__template.cloneNode(true)
    fragment.appendChild(clone)
})
contenedor.appendChild(fragment)
