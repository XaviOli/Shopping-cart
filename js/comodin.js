function validate() {

	var error = 0;

    var nameExp = /^[a-zA-ZÀ-ÿ\s]{3,40}$/; // Letras y espacios, pueden llevar acentos.
    var emailExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	var addressExp = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
	var lastnExp = /^[a-zA-Z]+ [a-zA-Z]{3,}$/;
    var passwordExp = /^.{3,12}$/; // 3 a 12 digitos.
	var phoneExp = /^\d{9,14}$/; // 9 a 14 numeros.

	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastName = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
