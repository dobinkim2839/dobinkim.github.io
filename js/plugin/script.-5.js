//00.a속성제거(a를 클릭했을 때 위로 튕기는 현상 제거)
$(document).on('click', 'a[href="#"]', function(e) {e.preventDefault();})

// 02. scrolla
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once:false
    });
});


// 01.splitting
$(function(){
	Splitting();
});

// header영역 scroll 방향 이벤트
$(function(){
	var prevScrollTop =0; 
	document.addEventListener('scroll',function(){
		var nowScrollTop =$(window).scrollTop()

		if(nowScrollTop > prevScrollTop){
			$('header').addClass('active');
		}else{
			$('header').removeClass('active');
		}
		prevScrollTop= nowScrollTop;
	})   //이벤트를 부르는 함수 .addEventListener
});
