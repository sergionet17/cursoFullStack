var variableGlobal = 0;


function operaciones3 (precio,iva) {
	var precio =9;
	var iva =10;
	var valor = precio + iva;
	return  valor;
}

function enviarMensaje(){
	var mensaje = "HOLA MUNDO";
	return mensaje;
}

function operaci_llama_funcion (){
	
	var valorFuncion = operaciones3(12,12.3);
	alert (valorFuncion);
	var mensaje = enviarMensaje();
    alert (mensaje);
}

function operacion5(){
	var mensaje = "eSTO ES UN MENSAJE DE PRUEBA PARA PROBAR LÑAS FUNCIONES ESTO ES UN MENSAJE DE PRUEBA PARA PROBAR LAS FUNCIONES";
	var mensaje_con_split = mensaje.split("");
	var resultado="";
	
	for (i in mensaje_con_split){
		if(mensaje_con_split[i] == 'A'){
			//break;
			continue;
		}else {
			resultado = resultado + mensaje_con_split[i];
		}
	}
	alert(resultado);
}