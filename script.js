const form = document.getElementById('form');			//Call per ID inputs.
const username = document.getElementById('username');
const password = document.getElementById('password');
const login = document.getElementById('login');

form.addEventListener('submit', e => {		//Submit Event.
	e.preventDefault();						//Preventing Default Behavior.
	
	checkInputs();							//Input Check.
});

function checkInputs() {							// Functions for checks and get values from inputs.

	// Moving empty spaces:
	const usernameValue = username.value.trim();	// Above values
	const passwordValue = password.value.trim();	// Trim values to move empty spaces from strings.
	const loginValue = password.value.trim();

	//Username:	
    if(usernameValue === 'new_user') {									// If in the field input...
		setSuccessFor(username, 'Valid username has been entered.'); 	// Condition za Success.
    } else if (usernameValue === '') {
		setErrorFor(username, 'Please, enter username');				// Conditions for Error.
    } else {
		setErrorFor(username, 'Please, enter valid username.');
    }


	//Password:
	if(passwordValue === '123456789') {
		setSuccessFor(password, 'Valid password has been entered.');
    } else if (passwordValue === '') {
		setErrorFor(password, 'Please, enter password');
    } else {
		setErrorFor(password, 'Please, enter valid password.');
    }


	//Login:

    if(usernameValue === 'new_user' && passwordValue === '123456789') {
		setSuccessFor(login, '*Successful Login!'); 	// Success Condition.

    } else if (usernameValue === '') {
		setErrorFor(login, 'Please, enter username');	// Error Conditions.

    } else if (usernameValue !== 'new_user'){
		setErrorFor(login, 'Please, enter valid username.');
    }	

	  else if (passwordValue === '') {
		setErrorFor(login, 'Please, enter password');
    } 
	
	  else if (passwordValue !== '123456789') {
		setErrorFor(login, 'Please, enter valid password.');
    }
	  else {
		setErrorFor(login, 'Unsuccessful Login!');
	}

}

//Functions:
function setErrorFor(input, message) {					//Errors for Input and Message.
	const formControl = input.parentElement;			//For .form-control.
	const small = formControl.querySelector('small');	//Also for error:
	small.innerText = message;							//To add error inside 'small'.

	formControl.className = 'form-control error'; 		// Adding dynamic error class.
}

//Functions for Success:
function setSuccessFor(input, message) {				//For input like above - aimed for form-control.
	const formControl = input.parentElement;			//Also for formControl success.
	const small = formControl.querySelector('small');	//Also for success.
	small.innerText = message;							//For success message within 'small'.	
	formControl.className = 'form-control success'; 	//Adding Success dynamic class.
}