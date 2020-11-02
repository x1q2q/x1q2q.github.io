
$(document ).ready(function(){
	$('.menu-scroll').click(function(e){
		var elem = $(this).attr('href');
		e.preventDefault();
		$('html, body').animate({
			scrollTop:$(elem).offset().top-50
		},1000);
	});
	$( window ).on('scroll',function(){
		var pscroll = $(this).scrollTop();
		if(pscroll > 90){
			$('#jf-nav').addClass('fixed');
		}else{
			$('#jf-nav').removeClass('fixed');
		}
	});
});