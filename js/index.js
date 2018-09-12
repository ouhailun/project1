$(function(){
	// $(document).ready(function(){
	// 	$('.m_top').slideDown(600);
	// })
	$(window).scroll(function(){
		var height1 = $('.header').height();
		var height2 = $('.m_top').height();
		var height = height1 + height2 ;
		var scrollTop = $(window).scrollTop();	
		if(scrollTop>=height){
			$('.header').css({'position':'fixed','top':'0px','border-bottom':'1px solid #ccc','background':'#fff'})
			$('.h_b_small').css({'color':'#000','border':'2px solid #000'})
			$('.h_b_small').hover(function(){
				$('.h_b_small').css({'color':'#D55'})
			},function(){
				$('.h_b_small').css({'color':'#000'})
			})
		}else{
			$('.header').css({'position':'static','border-bottom':'1px solid transparent','background':'transparent'})
			$('.h_b_small').css({'color':'#fff','border':'2px solid #fff'})	
			$('.h_b_small').hover(function(){
				$('.h_b_small').css({'color':'#D55'})
			},function(){
				$('.h_b_small').css({'color':'#fff'})
			})
		}
	})

})