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
	for (var i = 0; i <= 1; i++) {
		document.getElementsByClassName('wenzi')[i].style.opacity = 1;
	}
}
function appear_2() {
	var getId = document.getElementById('part2');
	var getTopnumber = getId.getBoundingClientRect().top;
	if (getTopnumber<=100) {
		for (var i = 0; i <= 3; i++) {
			document.getElementsByClassName('part2_0')[i].style.opacity = 1;
		}
	}
}
function appear_3() {
	var getId = document.getElementById('part3');
	var getTopnumber = getId.getBoundingClientRect().top;
	if (getTopnumber<=100) {
		for (var i = 0; i <= 3; i++) {
			document.getElementsByClassName('jiao')[i].style.opacity = 1;
		}
		for (var i = 0; i <= 1; i++) {
			document.getElementsByClassName('h2_0')[i].style.opacity = 1;
		}
		for (var i = 0; i <= 1; i++) {
			document.getElementsByClassName('part3-ud')[i].style.opacity = 1;
		}		
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
		for (var i = 0; i <= 3; i++) {
			document.getElementsByClassName('mengxin')[i].style.opacity = 1;
		}
		for (var i = 0; i <= 3; i++) {
			document.getElementsByClassName('dalao')[i].style.opacity = 1;
		}
	}
}
function appear_6() {
	var getId = document.getElementById('part6');
	var getTopnumber = getId.getBoundingClientRect().top;
	if (getTopnumber<=200) {
		for (var i = 0; i <= 1; i++) {
			document.getElementsByClassName('yinhao')[i].style.opacity = 1;
		}
		for (var i = 0; i <= 1; i++) {
			document.getElementsByClassName('neirong')[i].style.opacity = 1;
		}
	}
}
