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


//03.scrolla.js
$(function(){
   $('.animate').scrolla({
      moblie:true,
      once: false
   });
});

// svg path 길이 구하기
// $(function(){
// $('.svgLine').find('#svgLine1').each(function(i,path){
// 	var length = path.getTotalLength();
// 	alert(length)
// })
// })

// each()메서드는 object 와 배열 모두 사용할 수 있는 반복 함수인데, length속성을 갖는 배열과 유사배열객체들의 index 를 기준으로 첫번째 매개변수로 배열이나 객체를 받고, 두번째 매개변수로 콜백함수 값을 인자로 받음

// con01 gsap animation
$(function(){
	gsap.timeline({
		scrollTrigger:{
			trigger:'.con01',
			start:'0% 80%',
			end: '100% 100%',
			scrub:1,
			// markers: true
		}
	})
	.to('.wrap',{backgroundColor:'#fff',color:'#000', ease:'none', duration:'5'},0)
	.to('.svgAni path',{stroke:'#000', ease:'none', duration:5},0)
	.to('.scroll',{opacity:'0', ease:'none', duration:5},0)
	.fromTo('.videoWrap video', {'clip-path':'inset(60% round 30%)'},{'clip-path':'inset(0% round 0%)', 'esae':'none', 'duration':'10'}, 0)


	gsap.timeline({
		scrollTrigger:{
			trigger:'.motto',
			start:'30% 80%',
			end:'100%',
			scrub:2,
			// markers:true
		}
	})
	.fromTo('.motto .svgicon',{rotation: 0},{rotation: -360,ease: 'none',duration: 20},0)


// con02 gsap animation
gsap.timeline({
	scrollTrigger:{
	trigger:'.con02',
	start:'10% 100%',
    end:'0% 80%',
    scrub:1,
    // markers: true	
}
})
.fromTo('.con02 .title .a',{x:'-100%'},{x:'0%', ease:'none',duration:5},0)
.fromTo('.con02 .title .b',{x:'100%'},{x:'0%', ease:'none',duration:5},0)






// workList가 나타날 때 배경색이 검정으로 바뀌는 효과
gsap.timeline({
	scrollTrigger:{
		trigger:'.workList',
	start:'0% 100%',
	end:'0% 100%',
	scrub:1,
	// markers:true
	}
})

// 배경색 검정, 글자 흰색으로 바뀜
.to('.wrap',{backgroundColor:'#000',color:'#fff',ease:'none', duration:5},0)

// title position 을 fixed로 
.to('.con02 .title',{position:'fixed',left:'0' ,top:'0',ease:'none',duration:5},0)

// title이 position fixed가 되면서 위치값을 상실하게 되어ㅣ workList가 바로 top 0%로 위치 되어서 애니가 부자연스러움 -> margi-top 을 주어 애니를 자연스럽게 했다.
// position reletive를 주는 이유는 z-index를 위로 올라오게 할려고 주는 것 
.fromTo('.workList',{margin:'0 auto'},{margin:'100vh auto 0', position:'relative',zIndex:'10', duration:1},0)

// worList가 끝날 때  .title 글자가 화면 밖으로 사라지도록

// 펄럭이 효과

// let proxy = { skew: 0 },
//     skewSetter = gsap.quickSetter(".con02 .workList li", "skewY", "deg"), // fast
//     clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

// ScrollTrigger.create({
//   onUpdate: (self) => {
//     let skew = clamp(self.getVelocity() / -300);
//     // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
//     if (Math.abs(skew) > Math.abs(proxy.skew)) {
//       proxy.skew = skew;
//       gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
//     }
//   }
  
// });

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".con02 .workList li", {transformOrigin: "right center", force3D: true});


gsap.timeline({
	scrollTrigger:{
		trigger:'.workList',
		start: '100% 50%',
		end: '80% 0%',
		scrub:1,
		// markers:true
	}
})
.to('.con02 .title .a',{x:'-100%',ease:'none',duration:5},0)
.to('.con02 .title .b',{x:'100%',ease:'none',duration:5},0)

});

$(function(){
	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.matchMedia({
        '(min-width:500px)':function(){
			gsap.timeline({
				scrollTrigger:{
					trigger:'.workList',
					start: '20% 20%',
					end: '20% 100%',
					scrub:1,
					/* markers:true */
				}
			})
			.to('.con02 .title .a',{x:'-100%',ease:'none',duration:5},0)
			.to('.con02 .title .b',{x:'100%',ease:'none',duration:5},0)
		}
	})
});







//simplyScroll 
$(function(){
	
	$(".con03 .list").simplyScroll({
	   speed:4,
	   pauseOnHover:false,
	   pauseOnTouch: false
	});
 });




// svgLine
$(function(){
	$('.svg01').find('#Line01').each(function(i, path){
		var length = path.getTotalLength();
		alert(length);
	});
});




// slill 
$(function(){
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.matchMedia({
        '(min-width : 1020px)' :function(){
            // 03. 가로스크롤
            let list = gsap.utils.toArray('.skill ul li'); 
                    //.work ul li를 배열로 만들어서 변수리스트 한테 저장
            let scrollTween = gsap.to(list, {
                xPercent: -100 * (list.length -1),
                    //원래 리스트의 갯수보다 1을 빼서 길이를 구한 후 가로로 이동
                ease: 'none',
                scrollTrigger: {
                    trigger: '.skill',
                    pin: true,
                    scrub: 2,
                    start: 'center center',
                    end: '50%', //뷰포트 높이의 300% -> 숫자가 클수록 느려짐
					// markers: true
                }
            });// 가로스크롤 End
		}
	})
});


// change color 

