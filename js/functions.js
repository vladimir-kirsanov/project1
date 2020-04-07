$(document).ready(function() {
	//alert("1");
	$(".menu-add1")
		.click (function() {
			$(".menu ul")
				.animate({width: "show"}, 500);				
				//.slideDown(500); 
				//.fadeIn(500);
			$(".menu-add1")
				.css("z-index", "11");			
			$(".menu-add2")
				.css("z-index", "12");
           

				
		});	
	$(".menu-add2")
		.click (function() {
			//alert("3");			
			$(".menu ul")
				.animate({width: "hide"}, 500);			
				//.slideUp(500); 
				//.fadeOut(500);						
			$(".menu-add1")
				.css("z-index", "12");			
			$(".menu-add2")
				.css("z-index", "11");								
		});	
});
