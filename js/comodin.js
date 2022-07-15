function validate() {

	var error = 0;
    
	var firstName = document.getElementById("fName");
    var lastName = document.getElementById("fLastN");
    var email = document.getElementById("fEmail");
    var password = document.getElementById("fPassword");
	var address = document.getElementById("fAddress");
    var phoneNumber = parseInt(document.getElementById("fPhone"));

 //Regular expressions for every input field

    const regExp = {
		nameExp: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letters and spaces, could have accents.
        emailExp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	    addressExp: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
	    lastnExp: /^[a-zA-Z]+ [a-zA-Z]{3,}$/,
        passwordExp: /^.{3,12}$/, // 3 to 12 digits.
	    phoneExp: /^\d{9,14}$/, // 9 to 14 numebers.
	};

	  if (regExp.nameExp.test(firstName.value)) {
		firstName.classList.remove("is-invalid");
		firstName.classList.add("is-valid");
		console.log("Has escrito correctamente un nombre");
	  } else {
		error++;
		firstName.classList.remove("is-valid");
		firstName.classList.add("is-invalid");
		console.log(error);
	  }

	  if (regExp.lastnExp.test(lastName.value)) {
		lastName.classList.remove("is-invalid");
		lastName.classList.add("is-valid");
		console.log("Has escrito correctamente un apellido");
	  } else {
		error++;
		lastName.classList.remove("is-invalid");
		lastName.classList.add("is-valid");
		console.log(error);
	  }

	  if (regExp.emailExp.test(email.value)) {
		email.classList.remove("is-invalid");
		email.classList.add("is-valid");
		console.log("Has escrito un mail correcto");
	  } else {
		error++;
		email.classList.remove("is-invalid");
		email.classList.add("is-valid");
	  }

	  if (regExp.addressExp.test("address")) {
		address.classList.remove("is-invalid");
		address.classList.add("is-valid");
		console.log("Has ecsrito una dirección correcta");
	  } else {
		error++;
		address.classList.remove("is-invalid");
		address.classList.add("is-valid");
	  }

	  if (regExp.phoneExp.test("phoneNumber")){
        phoneNumber.classList.remove("is-invalid");
		phoneNumber.classList.add("is-valid");
	  } else {
		error++;
		phoneNumber.classList.remove("is-invalid");
		phoneNumber.classList.add("is-valid");
	  }

	  if (regExp.passwordExp.test("password")) {
	     password.classList.remove("is-invalid");
	     password.classList.add("is-valid");
	     console.log("Has escrito una contraseña correcta");
	  } else {
		error++;
		password.classList.remove("is-invalid");
		password.classList.add("is-valid");
	  } 

	  if (error > 0) {
		alert("Los datos facilitados no son correctos");
	  } else {
		alert ("¡Muchas gracias!, hemos guardado tus datos");
	  }
}
