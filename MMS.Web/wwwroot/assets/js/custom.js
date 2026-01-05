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

	// 3. Modal Trigger
	$("#modal_trigger").leanModal({
		top: 100,
		overlay: 0.6,
		closeButton: ".modal_close"
	});

	// 4. Login/Register Form Switcher
	$(function () {
		// Login Formunu Çağır
		$("#login_form").click(function () {
			$(".social_login").hide();
			$(".user_login").show();
			return false;
		});

		// Register Formunu Çağır
		$("#register_form").click(function () {
			$(".social_login").hide();
			$(".user_register").show();
			$(".header_title").text('Register');
			return false;
		});

		// Geri Qayıt (Social Forms)
		$(".back_btn").click(function () {
			$(".user_login").hide();
			$(".user_register").hide();
			$(".social_login").show();
			$(".header_title").text('Login');
			return false;
		});
	});

	// 5. Accordion (Acc) - Təkrarlanan hissə silindi, yalnız biri saxlanıldı
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

	// 6. Menu Dropdown Toggle (Sizin soruşduğunuz hissə BURADADIR)
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
			// Əgər element yoxdursa (başqa səhifədəsinizsə), Ana səhifəyə yönləndir
			// Burada "/" işarəsi vacibdir ki, url düzgün formalaşsın
			window.location.href = "/" + target;
		}
	});

	// 8. Document Ready Scroll Listener
	$(document).ready(function () {
		$(document).on("scroll", onScroll);

		// Mobile Submenu Fix (Funksiyanı burada çağırırıq)
		mobileNav();
	});

	// 9. OnScroll Function
	function onScroll(event) {
		var scrollPos = $(document).scrollTop();
		$('.nav a').each(function () {
			var currLink = $(this);
			// Linkin href-i sadəcə "#" deyilsə yoxla
			if (currLink.attr("href").indexOf('#') !== -1) {
				var refElement = $(currLink.attr("href"));
				if (refElement.length && refElement.position().top <= scroll