(function() {
	"use strict";

	var button1 = document.getElementById('expandbutton');

button1.onclick = function() {
    var div = document.getElementById('details');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
		document.getElementById('expandbutton').innerHTML = "Show Details " + "<i class='fas fa-angle-down'></i>";
    }
    else {
        div.style.display = 'flex';
		document.getElementById('expandbutton').innerHTML = "Hide Details " + "<i class='fas fa-angle-up'></i>";
    }
};

var button2 = document.getElementById('menubutton');


button2.onclick = function() {
    var div = document.getElementById('mobileMenu');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
		document.getElementById('menubutton').innerHTML = "Menu " + "<i class='fas fa-angle-down'></i>";
    }
    else {
        div.style.display = 'flex';
		document.getElementById('menubutton').innerHTML = "Menu " + "<i class='fas fa-angle-up'></i>";
    }
};
    	
})();