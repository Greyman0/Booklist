// bikin jika password tidak sama maka ada alert
// bikin email tidak sesuai maka ada alert

const username = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("pass"); // password
const pass_val = document.getElementById("pass_val");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
	e.preventDefault();

	formCheck();
});

function formCheck() {
	if (username.value == "") {
		username.classList.add("alert");
	} else if (username.value.length < 6) {
		username.classList.add("alert");
	} else {
		username.classList.remove("alert");
	}

	if (email.value == "") {
		email.classList.add("alert");
	} else if (email.value.includes("@")) {
		email.classList.add("alert");
	} else {
		username.classList.remove("alert");
	}

	if (pass.value == "") {
		pass.classList.add("alert");
	} else if (pass.value.length < 6) {
		pass.classList.add("alert");
	} else {
		pass.classList.remove("alert");
	}

	if (pass_val.value == "") {
		pass_val.classList.add("alert");
	} else if (pass_val.value.length < 6 || pass_val.value !== pass.value) {
		pass_val.classList.add("alert");
	} else {
		pass_val.classList.remove("alert");
	}
}
