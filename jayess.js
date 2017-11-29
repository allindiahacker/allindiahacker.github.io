function prints() {
		var x = document.getElementById("frm1");
	var name = "Hello! " + x.elements[0].value ;
	var date = "Your Birthday is on " + x.elements[1].value;
	 document.getElementById("n1").innerHTML = name;
	 document.getElementById("d1").innerHTML = date;
	}