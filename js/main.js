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

	
	$("#eq span").text(true);
	$("#ss span").text(setB.subset(setA).toString());
	$("#em span").text(true);
	$("#cm span").text(setB.compliment(setA).toString());
	$("#uni span").text(false);
	$("#ex span").text(true);
	$("#im span").text(false);
	$("#un span").text(setA.union(setB).toString());
	$("#in span").text(setB.intersect(setA).toString());
	$("#rl span").text("indirect");

	return false;
});


