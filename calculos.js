
var imagenID = "";

function changePage(){
	document.getElementById("pag1").style.display = 'none';
	document.getElementById("pag2").style.display = 'block';
}

function returnMain(){
	hideImg();
	document.getElementById("pag1").style.display = 'block';
	document.getElementById("pag2").style.display = 'none';
}

function hideImg(){
	document.getElementById(imagenID).style.display = 'none';

}


function calcularIMC(){
	var altura = parseFloat(document.getElementById("altura").value);
	var peso = parseFloat(document.getElementById("peso").value);
	var imc = peso/(altura*altura);

	if (altura <= 0 || peso <= 0) {
		alert("¡La altura y el peso deben ser valores mayores a 0!")
	}
	else{

		if (imc < 18.5 || imc == 18.5 ) { 
			document.getElementById("p1").style.display = 'block';
			imagenID = "p1";
			document.getElementById("edoIMC").style.backgroundColor ="#03bafc";
			document.getElementById("edoIMC").innerHTML = "Su IMC indica peso bajo";
		//bajo
		}
		else if (imc > 18.5 && imc <= 24.9) {
			document.getElementById("p2").style.display = 'block';
			imagenID = "p2";
			document.getElementById("edoIMC").style.backgroundColor ="#89D452";
			document.getElementById("edoIMC").innerHTML = "Su IMC indica peso saludable";
			//saludable
		}
		else if (imc >= 25 && imc <= 29.9) {
			document.getElementById("p3").style.display = 'block';
			imagenID = "p3";
			document.getElementById("edoIMC").style.backgroundColor ="#F3CE24";
			document.getElementById("edoIMC").innerHTML = "Su IMC indica sobrepeso";
			//sobrepeso
		}
		else if (imc >= 30 && imc <= 34.9) {
			document.getElementById("p4").style.display = 'block';
			imagenID = "p4";
			document.getElementById("edoIMC").style.backgroundColor ="#F39B24";
			document.getElementById("edoIMC").innerHTML = "Su IMC indica obesidad 1";
			//obeso 1
		}
		else if (imc >= 35 && imc <= 39.9) {
			document.getElementById("p5").style.display = 'block';
			imagenID = "p5";
			document.getElementById("edoIMC").style.backgroundColor ="#F37224";
			document.getElementById("edoIMC").innerHTML = "Su IMC indica  obesidad 2";
			//obeso2
		}
		else if (imc >= 40) {
			document.getElementById("p6").style.display = 'block';
			imagenID = "p6";
			document.getElementById("edoIMC").style.backgroundColor ="#D3300D";
			document.getElementById("edoIMC").innerHTML = "Su IMC indica obesidad mórbida";
			document.getElementById("edoIMC").style.color = 'white';
			//obeso morbido
		}

		document.getElementById("imc").innerHTML = "IMC = " + imc.toFixed(2);
		document.getElementById("alt").innerHTML = altura + " m";
		document.getElementById("pes").innerHTML = peso + " Kg";
		changePage();

	}

}