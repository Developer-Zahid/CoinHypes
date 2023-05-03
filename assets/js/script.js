$(function () {
    "use strict"

	//  Fixed Header
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 110) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
	});

	// scroll top
	$(".scroll-top").on("click", function () {
		$("html,body").animate(
			{
				scrollTop: 0,
			},50,
		);
	});
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	// Closes responsive menu when a scroll link is clicked
	$(".nav-link").on("click", function () {
		$(".navbar-collapse").collapse("hide");
	});

	// Header Height Fixer
	var headerHeight = $('header').innerHeight();
    $('header').before('<div class="header-height-fix"></div>');
    $('.header-height-fix').css('height', headerHeight+'px');

	// Get thead titles and append those into tbody table data items as a "data-title" attribute
	$(".responsive-table__body__text--promoted").attr("data-title", $(".responsive-table__head__title--promoted").text())
	$(".responsive-table__body__text--symbol").attr("data-title", $(".responsive-table__head__title--symbol").text())
	$(".responsive-table__body__text--status").attr("data-title", $(".responsive-table__head__title--status").text())
	$(".responsive-table__body__text--capital").attr("data-title", $(".responsive-table__head__title--capital").text())
	$(".responsive-table__body__text--launch").attr("data-title", $(".responsive-table__head__title--launch").text())
	$(".responsive-table__body__text--upvotes").attr("data-title", $(".responsive-table__head__title--upvotes").text())

	// Toggle "active" class from Table body rows
	$('.responsive-table__body .responsive-table__row').on("click",function () {
		$('.responsive-table__body .responsive-table__row').not(this).removeClass('active');
		$(this).addClass('active');
	});

	// Stop open active content when user click in upvotes buttons
	$('.secondary-btn--upvotes').on("click",function (e) {
		e.stopPropagation();
	});

});
