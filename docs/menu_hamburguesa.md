para integrar wattssap 

https://wa.me/+59170856061?text=Hola%20necesito%20información

<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>


.menu-btn {     /*contBtn padre*/
    width: 80px;
    height: 80px;
    cursor: pointer;
    border: 3px solid #fff;
    margin: 100px auto; 
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 20px;
}
.menu-btn__burger {     /*cnt hijo*/
    width: 50px;
    height: 6px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(155, 155, 175, 0.678);
    transition: all .5s ease-in-out;
  }
.menu-btn__burger::before,
.menu-btn__burger::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 6px;
  background: rgb(70, 214, 13);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
}
.menu-btn__burger::before {  
    transform: translateY(-16px);
}
.menu-btn__burger::after {
    transform: translateY(16px);
}
/* ANIMATION */
.menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow:none;
}
.menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
}

.menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);


}




onsubmit="return validar();"



function validar(){
    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#correo").value;
    let celular = document.querySelector("#celular").value;
    let expresionRegular = /\w+@\w+\.+[a-z]/;  //para correo electronico

    if(nombre === "" || correo === "" || celular === ""){
        //alert("Rellenar todos los campos!");
        
        Swal.fire({
            html:"<h3 class='texto'>¡Rellenar todos los campos!</h3>",
            icon:"error",
            confirmButtonText: "Aceptar",
            backdrop: false, 
            footer: '<h3 class ="footer">¡La información es importante!</h3>', 
            //timer: 5000,
          	//timerProgressBar: true,
            padding: "10px",
            customClass:{
                 	popup: "class_popup",
                 	icon:"class_icon",
                  confirmButton:"class_buttonConfirm",
                  cancelButton:"class_buttonCancel"
            },
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#fff54",
               cancelButtonAriaLabel:"dfdfa",

            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
               buttonsStyling: false,     //true para trabajar con stilos de switchAlert
               showCloseButton: true,     //coloca el la x para cerrar
               closeButtonAriaLabel:"Cerrar alerta"
         });
         return false;
                
    }else if(nombre.length > 30){
        //alert("no puedes ingresar mas de 20 palabras en el campo nombre");
        
        Swal.fire({
            html:"<h3 class='texto'>¡No puedes ingresar más de 20 palabras!</h3>",
            icon:"error",
            confirmButtonText: "Aceptar",
            backdrop: false,
            footer: 'Campo " Nombre "',  
            timer: 9000,
        	timerProgressBar: true,
            padding: "10px",
            customClass:{
                 	popup: "class_popup",
                 	icon:"class_icon",
                    confirmButton:"class_buttonConfirm",
                  	cancelButton:"class_buttonCancel"
            },
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#fff54",
               cancelButtonAriaLabel:"dfdfa",

            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
               buttonsStyling: false,     //true para trabajar con stilos de switchAlert
               showCloseButton: true,     //coloca el la x para cerrar
               closeButtonAriaLabel:"Cerrar alerta"
         });
         return false;  
        
    }else if (isNaN(celular)){
        //alert("El dato que ingresaste no es un numero, o verifica que no haya espacios de por medio");
        
        Swal.fire({
            html:"<h3 class='texto'>¡El dato que ingresaste no es un número, o verifica que no haya espacios de por medio!</h3>",
            icon:"error",
            confirmButtonText: "Aceptar",
            backdrop: false,  
            footer: 'Campo " Celular "',
            timer: 9000,
        	timerProgressBar: true,
            padding: "10px",
            customClass:{
                 	popup: "class_popup",
                 	icon:"class_icon",
                    confirmButton:"class_buttonConfirm",
                  	cancelButton:"class_buttonCancel"
            },
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#fff54",
               cancelButtonAriaLabel:"dfdfa",

            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
               buttonsStyling: false,     //true para trabajar con stilos de switchAlert
               showCloseButton: true,     //coloca el la x para cerrar
               closeButtonAriaLabel:"Cerrar alerta"
         });
         return false; 
        
    }else if(celular.length < 8 || celular.length > 15 ){
        //alert("solo se permiten 8 digitos minimo y 15 maximo, o verifica que no haya espacios de por medio");
        
        Swal.fire({
            html:"<h3 class='texto'>¡Solo se permiten 8 dígitos mínimo y 15 máximo, o verifica que no haya espacios de por medio!</h3>",
            icon:"error",
            confirmButtonText: "Aceptar",
            backdrop: false,  
            footer: 'Campo " Celular "',
            timer: 9000,
        	timerProgressBar: true,
            padding: "10px",
            customClass:{
                 	popup: "class_popup",
                 	icon:"class_icon",
                    confirmButton:"class_buttonConfirm",
                  	cancelButton:"class_buttonCancel"
            },
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#fff54",
               cancelButtonAriaLabel:"dfdfa",

            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
               buttonsStyling: false,     //true para trabajar con stilos de switchAlert
               showCloseButton: true,     //coloca el la x para cerrar
               closeButtonAriaLabel:"Cerrar alerta"
         });
         return false; 
        
    }else if(!expresionRegular.test(correo)){
        //alert("el correo no es valido");
        
        Swal.fire({
            html:"<h3 class='texto'>¡El correo no es válido!</h3>",
            icon:"error",
            confirmButtonText: "Aceptar",
            backdrop: false,  
            footer: 'Campo " Correo electronico "',
            timer: 5000,
        	timerProgressBar: true,
            padding: "10px",
            customClass:{
                 	popup: "class_popup",
                 	icon:"class_icon",
                    confirmButton:"class_buttonConfirm",
                  	cancelButton:"class_buttonCancel"
            },
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#fff54",
               cancelButtonAriaLabel:"dfdfa",

            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
               buttonsStyling: false,     //true para trabajar con stilos de switchAlert
               showCloseButton: true,     //coloca el la x para cerrar
               closeButtonAriaLabel:"Cerrar alerta"
         });
         return false;  
    }
}