// JavaScript Document
// slide.js - a variable slider that updates price tier information
// for users trying to create personalized payment/storage plans
// author: Cole Yeager
// https://github.com/yeagerhaus

var slider = document.getElementById("priceRange"),
	price1 = document.getElementById("price")
	price2 = document.getElementById("price2"),
	active = document.getElementById("active"),
	archive = document.getElementById("archive");
	price1.innerHTML = slider.value;
	price2.innerHTML = slider.value;
	active.innerHTML = slider.value;
	archive.innerHTML = slider.value;
	

	slider.oninput = function() {
		price1.innerHTML = this.value;
		price2.innerHTML = this.value * 1.5;
		active.innerHTML = this.value * 3;
		archive.innerHTML = this.value * 4;
	}