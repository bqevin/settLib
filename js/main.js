//Evaluation Start




$("input[type=submit]").click(function() {
	var setA = new Set();
	var setB = new Set();

	var inA = $("#setA").val();
	var inB = $("#setB").val();

	var newA = inA.split(",");
	var newB = inB.split(",");	

	for (var i = 0; i < newA.length; i++) {
		//logging values of A into created array
		setA.add(newA[i]);
	}

	for (var i = 0; i < newB.length; i++) {
		//logging values of B into created array
		setB.add(newB[i]);
	}

	$("#setAd span").text(setA.show().toString());
	$("#setBd span").text(setB.show().toString());
	if (setA.equals(setB) === true) {
		$("#eq span").text("True");
	}else{
		$("#eq span").text("False");
	};
	$("#ss span").text(setB.show().toString());
	if (setA.isEmpty() && setB.isEmpty()) {
		$("#em span").text("True");
	}else{
		$("#em span").text("True");
	};
	$("#cm span").text(setB.show().toString());
	$("#un span").text(setB.show().toString());
	$("#ex span").text(setB.show().toString());
	$("#im span").text(setB.show().toString());
	$("#un span").text(setB.show().toString());
	$("#in span").text(setB.show().toString());
	$("#rl span").text(setB.show().toString());

	return false;
});


