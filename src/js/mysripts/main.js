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
						    
						  ]
			});

			$('.block-video')
			.slick({
				infinite: false,
  				slidesToShow: 3,
			  variableWidth: false,
			  responsive: [
						    {
						      breakpoint: 900,
						      settings: {
						        slidesToShow: 2,
						        slidesToScroll: 1,
						        variableWidth: false
						        
						      }
						    },
						    {
						      breakpoint: 700,
						      settings: {
						        slidesToShow: 1,
						        slidesToScroll: 1,
						         variableWidth: false
						      }
						    },
						     
						    
						  ]
			});

			$('.block-photo')
			.slick({
				infinite: false,
  				slidesToShow: 6,
			  variableWidth: false,
			  responsive: [
						    {
						      breakpoint: 900,
						      settings: {
						        slidesToShow: 5,
						        slidesToScroll: 1,
						        variableWidth: false
						        
						      }
						    },
						    {
						      breakpoint: 800,
						      settings: {
						        slidesToShow: 4,
						        slidesToScroll: 1,
						         variableWidth: false
						      }
						    },
						     {
						      breakpoint: 700,
						      settings: {
						        slidesToShow: 3,
						        slidesToScroll: 1,
						        variableWidth: false
						      }
						    },
						    {
						      breakpoint: 480,
						      settings: {
						        slidesToShow: 2,
						        slidesToScroll: 1,
						        variableWidth: false
						      }
						    },{
						      breakpoint: 380,
						      settings: {
						        slidesToShow: 1,
						        slidesToScroll: 1,
						        variableWidth: false
						      }
						    }
						    
						  ]
			});


	var d=document;
	var btn = d.querySelector('.play .play_btn');
	var btn_pause = d.querySelector('.pause .pause_btn');
	var watch_video = d.querySelector('.watch-video');
	var lozung = d.querySelector('.lozung');

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
var cooperation_form_link = d.querySelector('.cooperation-link');
var ideal_gift_form =d.querySelector('.header .form_wrap .form_content');
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
var full_size_btn_photos = d.querySelectorAll('.block-photo .item-photo-wrap .btn-full-size');
var full_size_photos = d.querySelectorAll('.block-photo-full-size .item-photo-wrap .item-photo');
// console.log(full_size_photos.getAttribute('src'));
for(var i=0; i<full_size_btn_photos.length; i++) {
    full_size_btn_photos[i].addEventListener('click',function(){
    var img = this.nextSibling.nextSibling;
    	for(var j = 0; j<full_size_photos.length; j++) {
    		if(full_size_photos[j].getAttribute('src') === img.getAttribute('src')) {
    			var showParent = full_size_photos[j].parentNode;

    			showParent.style.display = 'block';
    		
    		}
    	}

    
    

    
	
});
}

var closeBtnFullPhotos = d.querySelectorAll('.block-photo-full-size .btn-full-size-close');
for(var k=0; k<closeBtnFullPhotos.length; k++) {
	closeBtnFullPhotos[k].addEventListener('click',function(){
		this.parentNode.style.display = "none";
	});
}

$('.sandich').on('click',function(e) {
	
				
				if($(this).hasClass('active')) { $(this).removeClass('active'); $('.section-menu .menu').slideUp(400,function(){
					if($(this).attr('style')) $(this).removeAttr('style');
				});   } 
				else { $(this).addClass('active'); $('.section-menu .menu').slideDown(400);  }

			});
var header = document.querySelector('.header');

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled >  170) {
  	console.log(scrolled);
  	header.style.position = "fixed";

  }
  else header.removeAttribute('style');

 
}


});
	














	



	
	

				



		
		
		
		
		
					
							
				

				
							
							
		
		

	



	


			
		


						 

					



	
		
			 


		