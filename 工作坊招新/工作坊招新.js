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
	var getBottomnumber = getId.getBoundingClientRect().bottom;
	var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	if (getBottomnumber<=h) {
		for (var i = 0; i <= 1; i++) {
			document.getElementsByClassName('yinhao')[i].style.opacity = 1;
		}
		for (var i = 0; i <= 1; i++) {
			document.getElementsByClassName('neirong')[i].style.opacity = 1;
		}
	}
}

function part_height() {
	var part = ["part1","part3","part4-2"];
	var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	for (var i = 0; i <= part.length - 1; i++) {
		var p = part[i];
		document.getElementById(p).style.height = h + 'px';
	}
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if (w>=900) {
		document.getElementById('part2').style.height = h +'px';
		document.getElementById('part4').style.height = h +'px';
	}
	document.getElementById('up-inner').style.paddingTop = h/2 - 55 + 'px';
}
