(function ($) {

	"use strict";

	// 1. Header Scroll (Fixed Header)
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var box = $('.header-text').height();
		var header = $('header').height();

		if (scroll >= box - header) {
			$("header").addClass("background-header");
		} else {
			$("header").removeClass("background-header");
		}
	});

	// 2. Owl Carousel (Slider)
	$('.loop').owlCarousel({
		center: true,
		items: 1,
		loop: true,
		autoplay: true,
		nav: true,
		margin: 0,
		responsive: {
			1200: { items: 5 },
			992: { items: 3 },
			760: { items: 2 }
		}
	});

	// 3. Modal Trigger (Əgər istifadə olunursa)
	if ($("#modal_trigger").length) {
		$("#modal_trigger").leanModal({
			top: 100,
			overlay: 0.6,
			closeButton: ".modal_close"
		});
	}

	// 4. Login/Register Form Switcher
	$(function () {
		$("#login_form").click(function () {
			$(".social_login").hide();
			$(".user_login").show();
			return false;
		});

		$("#register_form").click(function () {
			$(".social_login").hide();
			$(".user_register").show();
			$(".header_title").text('Register');
			return false;
		});

		$(".back_btn").click(function () {
			$(".user_login").hide();
			$(".user_register").hide();
			$(".social_login").show();
			$(".header_title").text('Login');
			return false;
		});
	});

	// 5. Accordion (Acc)
	$(document).on("click", ".naccs .menu div", function () {
		var numberIndex = $(this).index();

		if (!$(this).hasClass("active")) {
			$(".naccs .menu div").removeClass("active");
			$(".naccs ul li").removeClass("active");

			$(this).addClass("active");
			$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

			var listItemHeight = $(".naccs ul")
				.find("li:eq(" + numberIndex + ")")
				.innerHeight();
			$(".naccs ul").height(listItemHeight + "px");
		}
	});

	// 6. Menu Dropdown Toggle (BURA VACİBDİR)
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}

	// 7. Scroll to Section
	$('.scroll-to-section a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('.scroll-to-section a').removeClass('active');
		$(this).addClass('active');

		var target = $(this).attr("href");
		var $targetElement = $(target);

		if ($targetElement.length) {
			$('html, body').stop().animate({
				scrollTop: $targetElement.offset().top + 1
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		} else {
			window.location.href = "/" + target;
		}
	});

	// 8. Document Ready & OnScroll
	$(document).ready(function () {
		$(document).on("scroll", onScroll);
		mobileNav(); // Mobil menyu funksiyasını çağırırıq
	});

	function onScroll(event) {
		var scrollPos = $(document).scrollTop();
		$('.nav a').each(function () {
			var currLink = $(this);
			if (currLink.attr("href").indexOf('#') !== -1) {
				var refElement = $(currLink.attr("href"));
				if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					$('.nav ul li a').removeClass("active");
					currLink.addClass("active");
				}
				else {
					currLink.removeClass("active");
				}
			}
		});
	}

	// 9. Page Loading Animation
	$(window).on('load', function () {
		$('#js-preloader').addClass('loaded');
	});

	// 10. Window Resize Mobile Menu Fix
	function mobileNav() {
		$('.submenu').on('click', function () {
			var width = $(window).width();
			if (width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}

})(window.jQuery);