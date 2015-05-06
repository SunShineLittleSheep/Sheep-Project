$(function(){

	var duration=300;

	$('.service button')
	.on('mouseover',function(){
		$(this).animate({
			backgroundColor:'#faee00',
			color:'#000'
		},duration);
		$(this).find('img:first-child').animate({
			opacity:0
		},duration);
		$(this).find('img:nth-child(2)').animate({
			opacity:1
		},duration);
	})

	.on('mouseout',function(){
		$(this).animate({
			backgroundcolor:'#fff',
			color:'#01b169'
		},duration);
		$(this).find('img:first-child').animate({
			opacity:1
		},duration);
		$(this).find('img:nth-child(2)').animate({
			opacity:0
	},duration);
	});

	var $slides = $('.slideshow').find('img'),
		slideCount = $slides.length,
		currentIndex = 0;
		$slides.eq(currentIndex).fadeIn();
		setInterval(showNextSlide,3000);

		function showNextSlide(){
		var nextIndex = (currentIndex+1)%slideCount;
		$slides.eq(currentIndex).fadeOut();
		$slides.eq(nextIndex).fadeIn();
		currentIndex = nextIndex;
	}
});

