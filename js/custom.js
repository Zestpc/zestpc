(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
		//setTimeout(function(){new WOW().init();}, 1000);
		new WOW().init();
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

	$('.fbShareButton').on('click',function(e){
		window.open('https://www.facebook.com/sharer/sharer.php?u=' + 'http://zestpc.com/index.html', 'sharer', 'width=626,height=436');
	});

	$('.tweetButton').on('click',function(e){
		window.open('https://twitter.com/intent/tweet?url=http:%3A%2F%2Fzestpc.com%2F&hashtags=MyNextTV','tweeter','width=533,height=398');
	});

	$('.followButton').on('click',function(e){
		window.open('https://twitter.com/intent/follow?screen_name=prathamshah','tweeter','width=533,height=398');
	});


	/*$.post(
		'https://graph.facebook.com',
		{
			id: 'http://zestpc.com/index.html',
			scrape: true
		},
		function(response){
			console.log(response);
		}
	);*/

	$(document).ready(function(){
		//hoverDesc('.play-box','.play-desc');
		hoverDesc('.feature-box','.feature-desc');
		hoverDesc('.do-box','.do-desc');
		$('.play-box').hover(
			function(){
				$(this).find('.play-desc').slideDown(250); //.fadeIn(250)
			},
			function(){
				$(this).find('.play-desc').slideUp(250); //.fadeOut(205)
			}
		);
	});

	function autoDesc(a,b){
		var delay = 4000, fade = 400;
		var i = 0;
		var len = $(a).length;
		$(a).hide();
		function cycle(){
			$($(a)[i%len]).fadeOut(fade, function() {
				$(b).eq(++i%len).addClass('active').siblings().removeClass('active');
				$($(a)[i%len]).fadeIn(fade, function() {
					setTimeout(cycle, delay);
				});
			});
		}
		setTimeout(cycle,delay);
	}

	function hoverDesc(a,b){
		$(a).hover(function(){
			$(b).eq($(this).index()).addClass('active').siblings().removeClass('active');
			$(this).addClass('highlight').siblings().removeClass('highlight');
		});
	}

	function viewport() {
		var e = window, a = 'inner';
		if (!('innerWidth' in window )) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
	}



})(jQuery);
