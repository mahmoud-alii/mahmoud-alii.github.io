
$(window).on("hashchange", function () {
	if (location.hash.slice(1) == "signup") {
		$(".page").addClass("extend");
		$("#login").removeClass("active");
		$("#signup").addClass("active");
	} else {
		$(".page").removeClass("extend");
		$("#login").addClass("active");
		$("#signup").removeClass("active");
	}
});
$(window).trigger("hashchange");

var regxMail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}$/;
var regxPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/;
var regxMobile = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

function validateLoginForm() {
	var name = document.getElementById("logName").value;
	var password = document.getElementById("logPassword").value;

	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (!regxPass.test(password)) {
		document.getElementById("errorMsg").innerHTML = "Your password must be have at least: <br> <ul> <li>8 characters long <li>1 uppercase & 1 lowercase character <li>1 number <li>1 symbol</ul>"
		return false;
	}
	else {
		//  DATABASE VALIDATION
		alert("Successfully logged in");
		return true;
	}
}
function validateSignupForm() {
	var mail = document.getElementById("signEmail").value;
	var mobile = document.getElementById("signMobile").value;
	var name = document.getElementById("signName").value;
	var password = document.getElementById("signPassword").value;

	if (mail == "" || name == "" || password == "" || mobile == "") {
		alert("Please fill the required fields");
		return false;
	}

	else if(!regxMail.test(mail)){
		alert("Invalid email. Please try again");
		return false;
	}

	else if(!regxMobile.test(mobile)){
		alert("Invalid mobile number. Please try again");
		return false;
	}

	else if (!regxPass.test(password)) {
		alert("Your password must be have at least: 8 characters long - 1 uppercase & 1 lowercase character - 1 number - 1 symbol");
		return false;
	}
	else {
		//  DATABASE VALIDATION
		alert("Successfully signed up");
		return true;
	}
}