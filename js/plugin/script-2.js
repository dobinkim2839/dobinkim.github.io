//00.a속성제거(a를 클릭했을 때 위로 튕기는 현상 제거)
$(document).on('click', 'a[href="#"]', function(e) {e.preventDefault();})


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


//03.scrolla.js
$(function(){
   $('.animate').scrolla({
      moblie:true,
      once: false
   });
});



$(function(){
    gsap.registerPlugin(ScrollTrigger);
	
	gsap.timeline({
		scrollTrigger:{
			trigger: '.con01',
			start:'top',
			end:'bottom top',
			scrub:1,
			pin:true, //사진 고정 할 때
			// markers:true
		}
	})
	.to('.con01 .title ', {'opacity':'1','ease':'none','duration':'10'},5)
	.to('.con01 .videoWrap video',{'scale':'0.4','ease':'none','duration':'10','opacity':'0.5'},5)

	gsap.utils.toArray('.videoWrap').forEach(function(videoWrap){  //배열이 같은거를 쓸 때 toArrat, forEach(반복적으로)
		gsap.timeline({
			scrollTrigger:{
				trigger:imgBox, //변수 ''을 쓰면 에러가 나서 ''로 묶지 않는다.
				start: '50% 100%',
				end:'',// 시작과 동시에 끝나서 생략
				toggleClass:{'targets':imgBox, className:'active'}, //imgBox가 변수여서 ''을 사용하지않음 , className도 ''로 묶으면 undefined (아무값도 할당 받지않는상태)를 나타냄
				// markers:true,
				scrub:1

			}
		})
	})
})


    //   change background
	$(window).on('scroll resize',function(){
		var scrollTop = $(document).scrollTop();
		bgcolor();
		
		function bgcolor(){
			if(scrollTop > 9000){
				$('body').addClass('on')
			}else{
				$('body').removeClass('on')
			}if(scrollTop > 11000){
				$('body').removeClass('on')
			}
		}
	})


// hobby
$(function(){
	gsap.registerPlugin(ScrollTrigger);
	let upBox = document.querySelectorAll('.upBox')
	let tl = gsap.timeline({
		scrollTrigger:{
			trigger:'.hobby',
			pin:true,
			scrub:3,
			start:'top top',
			end:' +400%',
			// markers:true
	
		}
	})
	
})
tl.from(upBox,{'y':'400%','duration':'8','ease':'none','stagger':'6'})
tl.to(upBox),{'y':'0'}

