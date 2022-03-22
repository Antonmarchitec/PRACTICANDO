COMANDOS SWITCH ALERT2
----------------------
----------------------

Swal.fire({
   title:"Bienvenido",
   text:"Espero te sea de utilidad",     
   html:'<b class="clase">Entrar</b>'    // estilizar en pagina de css
   icon:'success',   //error/ warning / info / question
   confirmButtonText:'Seleccionar',    //leyenda del boton
   footer:'<span class="red">Esta es info importante</span>',   //colocar un pie de pagina
   width:"600%"              //tamaño ancho de la alerta en %
   padding:"20px",           //de la alerta
   background:"yellow"
   grow:"fullscreen"       //row / column / fullscreen
   backdrop:true,             //false / true    (sin comillas)   //para cerrar la ventana desde fuera
   timer:5000,             //tiempo de estancia ventana
   timerProgressBar:true       //aparece barra progresiva
   toast: true,
   position:"center",        //bottom-start o end /top-start o end   (funciona con position)


   /***PAQUETE PARA VENTANA */
   allowOutsideClick:true,      //permitir que afuera de la alerta se de click y cerrarla
   allowEscapeKey:false,        //se cierra la alerta con la tecla esc
   allowEnterKey:false,         //que el usuario de click dentro de la alerta y se cierre
   stopKeydownPropagation:false,    // mas avanzado


   /***PAQUETE PARA VENTANA */
   customClass: {
      //container:''
      //popup:'clase'
      /*header:''
      title:''
      closeButton:''
      icon:''
      image:''
      content:''
      imput:''
      actions:''
      confirmButton:''
      cancelButton:''
      footer:''*/
   },




   /****BOTON DE CONFIRMACION*********** */
   showConfirmButton:true,       //true o false
   confirmButtonColor:"#203753",      //color del boton
   confirmButtonAriaLabel:"Confirmar",   //confirma el color de boton que le puse
   



   /****BOTON DE CANCELAR*********** */
   showCancelButton:true,     ///false o true para que se muestre
   cancelButtonText:"cancelar",
   cancelButtonColor:"",
   cancelButtonAriaLabel:"cancelar",



   /***SI SE QUIERE TRABAJAR CON LOS ESTILOS DE LA ALERTA*************************** */
   buttonsStyling:false,    //dapaso a que se trabaje con mis propios estilos y no con los de la libreria
                            //utilizando customClass:)
   showCloseButton:true,    //para mostrar icono x de cerrar ventana
   closeButtonAriaLabel:"cerrar alerta",    //un simple label



   /******SI SE QUISIERA TRABAJAR CON IMG******************** */
   imgUrl:'img/img1.png',      
   imageWidth:'200px',
   imageHeigth:'',
   imageAlt:'nombre-imagen'



});