function toggleNav() {
	navSize = document.getElementById("mobile-menu-left").style.display;
		if(navSize == 'none') {
			return openNav();
		}
		else {
			return closeNav();
		}
}
function openNav() {
	document.getElementById("mobile-menu-left").style.display = "inline-block";
	document.getElementById("navSide").style.width = "70%";
}
function closeNav() {
	document.getElementById("mobile-menu-left").style.display = "none";
	document.getElementById("navSide").style.width = "0";
}
function recaptchaValidation() {
	var response = grecaptcha.getResponse();
	if(response.length === 0) {
		document.getElementById("submitButton").disabled = true;
		document.getElementById("submitButton").style = 'background-color: white;color: gray;cursor: not-allowed;border-color: gray;'
	} 
}
function verifyValidation() {
		document.getElementById("submitButton").disabled = false;
		document.getElementById("submitButton").style = 'background-color: #0d65bf;color: white;border-color: white;'
		document.getElementById("submitButton").style = 'input:hover{background-color: white;color: #0d65bf;cursor: hand;border-color: #0d65bf;}'
}
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slideshowSlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1} 
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none"; 
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block"; 
	dots[slideIndex-1].className += " active";
}