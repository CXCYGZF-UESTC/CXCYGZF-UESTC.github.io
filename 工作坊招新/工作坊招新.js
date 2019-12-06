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


function appear() {
	var list = document.getElementsByClassName('appear');
	for (var i = 0; i <= list.length - 1; i++) {
		var getTopnumber=list[i].getBoundingClientRect().top;
		if (getTopnumber<=150) {
			list[i].style.opacity = 1;
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
		document.getElementsByClassName('erweima')[0].style.opacity = 1;
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
	var h4 = document.getElementsByClassName('appear_4')[0].offsetHeight;
	if (w>=900) {
		document.getElementById('part2').style.height = h +'px';
		if (h4>=h) {
			document.getElementById('part4').style.height = h4 +'px';
		}
		else {
			document.getElementById('part4').style.height = h +'px';
		}
	}
	document.getElementById('WIE2').style.paddingTop = h/2 - w*0.05 + 'px';
	document.getElementById('up-inner').style.paddingTop = h/2 - 55 + 'px';
}
