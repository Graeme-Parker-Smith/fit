// ================================================================
// Prevents both checkboxes from being checked at once
// checking one will uncheck other
// ================================================================
const sanAntonioCheck = document.getElementById('sanAntonio');
const boerneCheck = document.getElementById('boerne');
sanAntonioCheck.addEventListener('click', function () {
	if (sanAntonioCheck.checked) {
		if (boerneCheck.checked) {
			boerneCheck.click();
		}
	}
});
boerneCheck.addEventListener('click', function () {
	if (boerneCheck.checked) {
		if (sanAntonioCheck.checked) {
			sanAntonioCheck.click();
		}
	}
});

// ================================================================
// handle contact form submit
// ================================================================

const contactForm = document.getElementById('contact__form');

contactForm.addEventListener('submit', async function (e) {
	e.preventDefault();
	// select form inputs
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const sanAntonio = document.getElementById('sanAntonio');
	const boerne = document.getElementById('boerne');
	const message = document.getElementById('message');
	// check do all inputs have a value?
	console.log('contactForm children', name.value);
	console.log('contactForm children', email.value);
	console.log('contactForm children', sanAntonio.value);
	console.log('contactForm children', boerne.value);
	console.log('contactForm children', message.value);
	const inputsAreFilled = name.value && email.value && message.value;
	// const boxChecked = sanAntonio.checked || boerne.checked;
	let location;
	if (sanAntonio.checked && !boerne.checked) {
		location = "San Antonio";
	} else if (boerne.checked && !sanAntonio.checked) {
		location = "Boerne"
	} else {
		location = null;
	}

	// if all input fields in form are completed, do this
	if (inputsAreFilled && location) {
		const url = 'https://fit-email.herokuapp.com/api/sendemail';
		const options = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json;charset=UTF-8',
			},
			body: JSON.stringify({
				name: name.value,
				email: email.value,
				location: location,
				message: message.value,
			}),
		};

		fetch(url, options).then((response) => {
			console.log(response.status);
		});
	} else {
		// if form is not completed, do this
		alert('Your message could not be sent because not all of the fields in the form are completed.');
	}
});
