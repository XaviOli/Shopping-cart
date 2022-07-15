const form = document.getElementById("form");

form.addEventListener("click", (event) => {
  event.preventDefault(validate);
});

// Exercise 7
// Get the input fields

function validate() {

	let error = 0;
	// Get the input fields
	const fName = document.getElementById("fName");
	const fLastName = document.getElementById("fLastN");
	const fEmail = document.getElementById("fEmail");
	const fPassword = document.getElementById("fPassword");
	const fAddress = document.getElementById("fAddress");
	const fPhone = document.getElementById("fPhone");
  
	// Validate fields entered by the user: name, phone, password, and email
  
	const regExp = {
	  phone: /^[0-9]{9}$/,
	  nameAndSurname: /^[A-Za-z]{3,}$/, // Letters and spaces, could have accents.
	  address: /^(?! )[A-Za-z0-9\s]{3,}$/,
	  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,  // 2 to 3 digits.
	  password: /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/, // 3 to 12 digits.
	};
  
	if (regExp.nameAndSurname.test(fName.value)) {
	  fName.classList.remove("is-invalid")
	  fName.classList.add("is-valid")
	  console.log("Has escrito correctamente un nombre");
	} else {
	  error++;
	  fName.classList.remove("is-valid")
	  fName.classList.add("is-invalid");
	  console.log(error);
	}
  
	if (regExp.nameAndSurname.test(fLastName.value)) {
	  fLastName.classList.remove("is-invalid")
	  fLastName.classList.add("is-valid")
	  console.log("Has escrito correctamente un apellido");
	} else {
	  error++;
	  fLastName.classList.remove("is-valid")
	  fLastName.classList.add("is-invalid");
	  console.log(error);
	}
  
	if (regExp.email.test(fEmail.value)) {
	  fEmail.classList.remove("is-invalid")
	  fEmail.classList.add("is-valid")
	  console.log("Has escrito un mail correcto");
	} else {
	  error++;
	  fEmail.classList.remove("is-valid")
	  fEmail.classList.add("is-invalid");
	}
  
	if (regExp.password.test(fPassword.value)) {
	  fPassword.classList.remove("is-invalid")
	  fPassword.classList.add("is-valid")
	  console.log("Has escrito una contraseña correcta");
	} else {
	  error++;
	  fPassword.classList.remove("is-valid")
	  fPassword.classList.add("is-invalid");
	}
  
	if (regExp.address.test(fAddress.value)) {
	  fAddress.classList.remove("is-invalid")
	  fAddress.classList.add("is-valid")
	  console.log("Has escrito una dirección correcta");
	} else {
	  error++;
	  fAddress.classList.remove("is-valid")
	  fAddress.classList.add("is-invalid");
	}
  
	if (regExp.phone.test(fPhone.value)) {
	  fPhone.classList.remove("is-invalid")
	  fPhone.classList.add("is-valid")
	  console.log("Has escrito un número de teléfono correcto");
	} else {
	  error++;
	  fPhone.classList.remove("is-valid")
	  fPhone.classList.add("is-invalid");
	}
  
	if (error > 0) {
	  alert("Los datos facilitados no son correctos");
	} else {
	  alert("¡Muchas gracias!, hemos guardado tus datos");
	}
  }
  
  form.addEventListener("submit", (event) => {
	event.preventDefault(validate);
  });