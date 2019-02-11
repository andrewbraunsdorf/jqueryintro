var button = $("#lead-banner a");

button[0].onclick = function(){
	
	$("#points-of-sale").toggleClass("open");
	return false;
	
};

// $("header .wrapper").removeClass("wrapper");
// $("header > div").addClass("wrapper");

// .removeClass() - removes a class from the matched elements
// .addClass() - adds a class to the matched element(s)
// .toggleClass - toggles the class on and off on their matched element(s)
