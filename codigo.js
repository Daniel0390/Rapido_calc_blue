// comezamos jutando los botone primarios para 
// que al hacer click se ponga el fondo de el contenedor 
// principal delcolor dele boton

// ---------recupracion de los botones primarios----------------
const boton_tradicional= document.getElementById("btn_TRADIC");
const boton_P92        = document.getElementById("btn_P-92"  );
const boton_P65        = document.getElementById("btn_P-65"  );
const boton_V_ALUM     = document.getElementById("btn_V_ALUM");


// ----------------RECUPERACIO BOTON CALCULO-----------------------------
const boton_calculo = document.getElementById("boton_calculo");






// ------------Aqui le agregamos el evento a cada boton primario-
boton_tradicional.onclick = color_tradiccional;
boton_P92        .onclick = color_p92;
boton_P65        .onclick = color_p65;
boton_V_ALUM     .onclick = color_v_alum;
// --------------------------------------------------------------



// --------Aqui ejecutamos las funciones---------------------------------------

function color_tradiccional (){
    contenedor_principal.style.backgroundColor="rgb(178, 172, 172)";
    

    
}

function color_p92(){
    contenedor_principal.style.backgroundColor=" rgb(228, 194, 153)";
}

function color_p65 (){
    contenedor_principal.style.backgroundColor="cornflowerblue";
}

function color_v_alum (){
    contenedor_principal.style.backgroundColor="darkseagreen";
}

// ---Aqui hacemos que el contenedor AJUSTES venga a el frente y regrese atras---


boton_ajustes.addEventListener("click", ()=>{
    contenedor_de_ajustes.style.zIndex = 3;
    boton_atras_ajustes.style.backgroundColor="rgb(7, 111, 7";
    boton_atras_ajustes.textContent="Ok";
})

boton_atras_ajustes.addEventListener("click", ()=>{
    contenedor_de_ajustes.style.zIndex = -3;
})


// -----PRIMERA FUNCION DE CALCULO -->BOTON CALCULO<--------

    boton_calculo.addEventListener("click", ()=>{
    
    const valor_de_ancho    = Number(document.getElementById("valor_de_ancho").value);
    const resto_de_alfersar = Number(document.getElementById("resto_de_alfersar").value );
    const campo_resultado_alfersal = document.getElementById("campo_resultado_alfersal");

    let  result = campo_resultado_alfersal.innerHTML= valor_de_ancho - resto_de_alfersar 

    const el_divisor_alfersal = Number(document.getElementById("el_divisor_alfersal").value);

    const ancho_total = campo_resultado_alfersal.innerHTML=Number(result / el_divisor_alfersal).toFixed(2);
          
// -----------------------------------------------------------------------------------------
    const valor_de_alto  = Number(document.getElementById("valor_de_alto").value);
    const resto_de_jamba = Number(document.getElementById("resto_de_jamba").value);
    const campo_resultado_jamba = document.getElementById("campo_resultado_jamba");

    const alto_total = campo_resultado_jamba.innerHTML = Number(valor_de_alto-resto_de_jamba).toFixed(2);
                     

//  -----------------------------------------------------------------------------------------
     
     const resto_rieles = Number(document.getElementById("resto_rieles").value);
     const campo_resultado_rieles = document.getElementById("campo_resultado_rieles");

           campo_resultado_rieles.innerHTML= Number(valor_de_ancho - resto_rieles).toFixed(2);
           
//---------------------------------------------------------------------------------------------
     
      
      const resto_laterales = document.getElementById("resto_laterales").value;
      const campo_resultado_laterales = document.getElementById("campo_resultado_laterales");

            campo_resultado_laterales.innerHTML= Number(valor_de_alto - resto_laterales).toFixed(2);
            


                         contenedor_pequeño.style.visibility="visible";
//--------------------------------------------------------------------------------------------
    const resto_de_vidrio_ancho = Number(document.getElementById("resto_de_vidrio_ancho").value);
    const resultado_cristales_ancho = document.getElementById("resultado_cristales_ancho");
     
     resultado_cristales_ancho.innerHTML= Number(ancho_total- resto_de_vidrio_ancho).toFixed(2);


    const resto_de_vidrio_alto = Number(document.getElementById("resto_de_vidrio_alto").value);
    const resultado_cristales_alto =document.getElementById("resultado_cristales_alto");

          resultado_cristales_alto.innerHTML= Number(alto_total-resto_de_vidrio_alto).toFixed(2);

         

       
})


//----------------------------------------------------------------------------------------------
   const boton_guardar = document.getElementById("boton_guardar");
   const contenedor_pequeño = document.getElementById("contenedor_pequeño");
   const contenedor_medida_y_cotizacion =document.getElementById("contenedor_medida_y_cotizacion");
    
    const campo_alfersal_vacija = document.getElementById("campo_alfersal_vacija")
    const campo_jamba_vacija    = document.getElementById("campo_jamba_vacija")
    const campo_rieles_vacija   = document.getElementById("campo_rieles_vacija")
    const campo_laterales_vacija= document.getElementById("campo_laterales_vacija")

         boton_guardar.onclick =  guardar_atras;
           
         function guardar_atras (){
              contenedor_pequeño.style.visibility="hidden";
             
              
              valor_de_ancho.value="";
              valor_de_alto.value="";
              
} 

       



  











 



