$(function(){
$('.list-photo')
			.slick({
				infinite: false,
  				slidesToShow: 5,
			  variableWidth: false,
			  responsive: [
						    {
						      breakpoint: 900,
						      settings: {
						        slidesToShow: 4,
						        slidesToScroll: 1,
						        variableWidth: false
						        
						      }
						    },
						    {
						      breakpoint: 800,
						      settings: {
						        slidesToShow: 3,
						        slidesToScroll: 1,
						         variableWidth: false
						      }
						    },
						     {
						      breakpoint: 700,
						      settings: {
						        slidesToShow: 2,
						        slidesToScroll: 1,
						        variableWidth: false
						      }
						    },
						    {
						      breakpoint: 480,
						      settings: {
						        slidesToShow: 1,
						        slidesToScroll: 1,
						        variableWidth: false
						      }
						    }
						    // You can unslick at a given breakpoint now by adding:
						    // settings: "unslick"
						    // instead of a settings object
						  ]
			});


			var btn = document.querySelector('.play .play_btn');
var btn_pause = document.querySelector('.pause .pause_btn');
var watch_video = document.querySelector('.watch-video');
var lozung = document.querySelector('.lozung');

btn.addEventListener('click',function(){
	var classPlay = this.parentNode;
	var classPause = classPlay.nextSibling.nextSibling;
	var video = classPlay.previousSibling.previousSibling;
	
	if(video.paused) { video.play(); classPlay.style.display = 'none';  classPause.style.display = 'block';  watch_video.style.display = "none"; lozung.style.display = "none";}
	else { video.pause(); classPlay.style.display = 'block'; classPause.style.display = 'none'; watch_video.style.display = "block"; lozung.style.display = "block";
} 
	
});

btn_pause.addEventListener('click',function(){
	var classPause = this.parentNode;
	var classPlay = classPause.previousSibling.previousSibling;
	var video = classPlay.previousSibling.previousSibling;
		 
	classPause.style.display = 'none';
	classPlay.style.display = 'block';
		video.pause();
		 watch_video.style.display = "block";
		 lozung.style.display = "block";

});
var cooperation_form_link = document.querySelector('.cooperation-link');
var ideal_gift_form = document.querySelector('.header .form_wrap .form_content');
cooperation_form_link.addEventListener("click",function(e) {
e.preventDefault();

if(!(ideal_gift_form.style.display == 'block')) ideal_gift_form.style.display = "block" ;
else ideal_gift_form.style.display = "none" ;

});

var form1 = {
	textFields: '.form .form-text',
	form:'.form',
	buttonSend:'.form .form-btn',
	classNoSubmit:'noSubmit'
};


var obj1 = new hendlerSubmit(form1);
obj1.submit();

});
	














	



	
	

				



		
		
		
		
		
					
							
				

				
							
							
		
		

	



	


			
		


						 

					



	
		
			 


		