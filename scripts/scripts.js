$("#lead-banner").dblclick(function(){
	alert("you double clicked me");
	$("#lead-banner").off("dblclick");
});

// $("#lead-banner").on("dblclick", function(){
// 	alert("you double clicked me");
// });

// on()- binds an event to matched element(s)
// off() - unbinds event from matched element(s)