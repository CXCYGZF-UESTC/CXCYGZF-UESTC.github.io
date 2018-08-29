function lunbo(){
	var swiper = new Swiper('.swiper-container',{
		autoplay: false,
		speed: 1000,
		autoplayDisableOnInteraction: false,
		loop: true,
		centeredSlides: true,
		slidesPerView: 2,
		pagination: '.swiper-pagination',
		paginationClickable: true,
		prevButton: '.swiper-button-prev',
		nextButton: '.swiper-button-next',
		onInit: function(swiper) {
			swiper.slides[2].className = "swiper-slide swiper-slide-active";
		},
		breakpoints: {
			668: {
				slidesPerView: 1,
			}
		}
	});
}

function SME() {
	alert("有关SME杯详情的网站还在紧张制作中，请稍候。");
}

function appear_1() {
	document.getElementById('WIE2').style.opacity = 1;
	document.getElementById('wenzi1').style.opacity = 1;
	document.getElementById('wenzi2').style.opacity = 1;
}
function appear_2() {
	var getId = document.getElementById('part2');
	var getTopnumber = getId.getBoundingClientRect().top;
	if (getTopnumber<=100) {
		document.getElementById('part2-img').style.opacity = 1;
		document.getElementById('part2_1').style.opacity = 1;
		document.getElementById('part2_2').style.opacity = 1;
		document.getElementById('part2_3').style.opacity = 1;
	}
}
function appear_3() {
	var getId = document.getElementById('part3');
	var getTopnumber = getId.getBoundingClientRect().top;
	if (getTopnumber<=100) {
		document.getElementById('jiao1').style.opacity = 1;
		document.getElementById('jiao2').style.opacity = 1;
		document.getElementById('jiao3').style.opacity = 1;
		document.getElementById('jiao4').style.opacity = 1;
		document.getElementById('h2-1').style.opacity = 1;
		document.getElementById('h2-2').style.opacity = 1;
		document.getElementById('part3-up').style.opacity = 1;
		document.getElementById('part3-down').style.opacity = 1;
	}
}
function appear_4() {
	var getId = document.getElementById('part4');
	var getTopnumber = getId.getBoundingClientRect().top;
	if (getTopnumber<=100) {
		document.getElementById('swiper-container').style.opacity = 1;
	}
}
function appear_5() {
	var getId = document.getElementById('part5');
	var getTopnumber = getId.getBoundingClientRect().top;
	if (getTopnumber<=100) {
		document.getElementById('QA').style.opacity = 1;
		document.getElementById('part2_1').style.opacity = 1;
		document.getElementById('mengxin1').style.opacity = 1;
		document.getElementById('dalao1').style.opacity = 1;
		document.getElementById('mengxin2').style.opacity = 1;
		document.getElementById('dalao2').style.opacity = 1;
		document.getElementById('mengxin3').style.opacity = 1;
		document.getElementById('dalao3').style.opacity = 1;
		document.getElementById('mengxin4').style.opacity = 1;
		document.getElementById('dalao4').style.opacity = 1;
	}
}
function appear_6() {
	var getId = document.getElementById('part6');
	var getTopnumber = getId.getBoundingClientRect().top;
	if (getTopnumber<=200) {
		document.getElementById('shangyinhao').style.opacity = 1;
		document.getElementById('geyan').style.opacity = 1;
		document.getElementById('xiayinhao').style.opacity = 1;
		document.getElementById('Hegel').style.opacity = 1;
	}
}
