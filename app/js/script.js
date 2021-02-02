// document.getElementById('submitMsgBtn').addEventListener('click', function (event) {
// 	event.preventDefault();
// });



// ================================================================
// Prevents both checkboxes from being checked at once
// checking one will uncheck other
// ================================================================

const sanAntonioCheck = document.getElementById('checkbox-sanAntonio');
const boerneCheck = document.getElementById('checkbox-boerne');

sanAntonioCheck.addEventListener('click', function (e) {
	console.log('san-antonio-checked is: ', sanAntonioCheck.checked);
	console.log('boerne-checked is: ', boerneCheck.checked);
	if (sanAntonioCheck.checked) {
		if (boerneCheck.checked) {
			boerneCheck.click();
		}
	}
});

boerneCheck.addEventListener('click', function (e) {
	console.log('san-antonio-checked is: ', sanAntonioCheck.checked);
	console.log('boerne-checked is: ', boerneCheck.checked);

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
	// const formData = new formData
});