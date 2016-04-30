$(document).ready(function(){	
	introduction(); 

	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function(){
		$(".ryu-ready").hide();
		$(".ryu-still").show();; 
	})
	.mousedown(function(){
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show().animate(
			{"left": "1020px"},
			500,
			function(){
				$(this).hide();
				$(this).css("left", "520px"); 
			}); 
	})
	.mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	})
$(document).keydown(function(e){
		if(e.which == 88){
			$(".ryu-ready").hide();
			$(".ryu-still").hide();
			$(".ryu-cool").show();	
		}
})
.keyup(function(){
			$(".ryu-ready").show();
			$(".ryu-cool").hide();	
})	

	
}); 

function introduction(){
	
	$('.main').fadeIn(5000, function(){
		$(".introimage").fadeIn(5000).fadeOut(5000);
		$('.text').fadeIn(5000);
		$('.main').fadeIn(3000);	
		$('.ryu').fadeIn(3000);
	});
	
}; 

var playsound = true; 

function playHadouken(){
	if(playsound){
		$("#hadouken-sound")[0].volume = 0.5; 
		$("#hadouken-sound")[0].load(); 
		$("#hadouken-sound")[0].play(); 
	} else {
		$("#hadouken-sound")[0].volume = 0.0; 
	}
}

$('.volume-control-container').on('click', function(){
	$('.volume-control').toggleClass('fa-volume-up fa-volume-off');
	playsound = !playsound; 
})