// JavaScript Document
var slider = document.getElementById("priceRange"),
	output = document.getElementById("price"),
	active = document.getElementById("active"),
	archive = document.getElementById("archive");
	output.innerHTML = slider.value;
	active.innerHTML = slider.value;
	archive.innerHTML = slider.value;
	

	slider.oninput = function() {
		output.innerHTML = this.value;
		active.innerHTML = this.value * 3;
		archive.innerHTML = this.value * 1.5;
	}