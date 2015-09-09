(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	Parse.initialize("GFFNw5yzAcReEiVN7h5Poqj1G6QGDbeZqgcmZMrl", "g6cIiYa4DkkxiUMCCogf8ASspdAFQFIRbcRJ1eGf");

	var Registration = Parse.Object.extend("Registration");

	function saveRegisters(){
		var registration = new Registration();

		registration.set("name", $("#name").val());
		registration.set("email", $("#email").val());
		registration.set("city", $("#city").val());
		registration.set("number", $("#number").val());

		var callback = {
			success:function(){
				$('#response').html('Registered Successfully. Thanks for the support!').addClass('success').fadeIn('fast');
			},
			error: function(){
				$('#response').html('Oops! Something went wrong').addClass('error').fadeIn('fast');
			}
		};

		registration.save(null, callback);
	}

	$("#buyForm").on("submit", function(e) {
		e.preventDefault();
		saveRegisters();
	});

	$('.shareButton').on('click',function(e){
		window.open('https://www.facebook.com/sharer/sharer.php?u=' + 'http://zestpc.com/index.html', 'sharer', 'width=626,height=436');;
	})
})(jQuery);
