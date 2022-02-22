var hola = "Me pondre en contacto"

function procesarFormulario(){

	var nom = document.getElementById("nombre").value;
	document.getElementById("salida").innerHTML = hola + " " + nom;

}
