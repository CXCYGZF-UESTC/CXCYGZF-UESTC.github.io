window.onload = function() {
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
