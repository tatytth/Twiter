function contar(){
	//alert("Hola mundo");
	var cadena = document.getElementById('mensaje').value;
	//alert(cadena);
	var largo = cadena.length;
	//alert(largo);
	var resto = 140-largo;
	document.getElementById("numero").innerHTML=resto;
	if (largo >140) {
		document.getElementById("numero").style.color="red";
	} else {
		document.getElementById("numero").style.color="black";
	}
	if (largo >130 && largo <=140) {
		document.getElementById("numero").style.color="orange";
	} else {
		//document.getElementById("numero").style.color="black";
	}
	if (largo >120 && largo <=130) {

		document.getElementById("numero").style.color="yellow";
	} else {
		//document.getElementById("numero").style.color="black";
	}
	if (largo==0){
		document.getElementById("boton").disabled = true;
		document.getElementById("boton").style.backgroundColor = "#A2ADB8";
			document.getElementById("boton").style.color = "black";
	} else{
		document.getElementById("boton").disabled = false;
		document.getElementById("boton").style.background = "#6AD2F3";
		document.getElementById("boton").style.color = "white";
	}

}

function adicionar () {

	var cadena = document.getElementById('mensaje').value;


	var cuadro3=document.getElementById("cuadro3");
	var marca=document.getElementById("marca");

	var elemento=document.createElement("div");
	elemento.className = "mensaje";
	

	var fecha=new Date();
	var hora=fecha.getHours();
	var minuto=fecha.getMinutes();




	elemento.innerHTML= cadena+'<br>'+hora+":"+minuto;




	cuadro3.insertBefore(elemento, marca);
	document.getElementById("mensaje").value="";
}

function inicio(){
	document.getElementById("boton").style.color="black";
	document.getElementById("boton").style.backgroundColor="#A2ADB8";
}