$(document).ready(function() {
	$(".rtr-screen").css("display", "block"); 	
	$(".rtr-screen").css("opacity", "0"); 						
		$(function() {
		setTimeout("tif()", 250);
	});	
});
function tif(){
	$(".rtr-screen").css("display", "none"); 
	$(".rtr-screen").css("opacity", "1"); 							
	$('.flexslider').flexslider({		
		direction: "horizontal", 
		animation:"slide",		
		reverse:true,		
		animationLoop:true,
		slideshow:true,
		slideshowSpeed:4000,
		animationSpeed:1500,	
		pauseOnHover:true,		
		directionNav:true,
		keyboard:false,			
		
		//initDelay:3000,		
		//randomize:true,		
		pauseOnAction:false,		
		//controlNav:false,
		pausePlay:true,
		//prevText:"Previos",
		//nextText:"Next",		
		//playText:"Play",
		//pauseText:"Pause"		
	});
	$(".rtr-screen").fadeIn(3000); 		
}

