
function galCalc() {
	var gal = document.getElementById("gal").value;
	document.getElementById("sic").value = gal*17
	document.getElementById("nut").value = gal*493
}

function sicCalc() {
	var sic = document.getElementById("sic").value;
	document.getElementById("gal").value = sic/17
	document.getElementById("nut").value = sic*29
}

function nutCalc() {
	var nut = document.getElementById("nut").value;
	document.getElementById("gal").value = nut/493
	document.getElementById("sic").value = nut/29
}

