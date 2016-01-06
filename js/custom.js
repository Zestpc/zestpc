(function ($) {

	$(window).load(function() {
		$("#preloader").delay(100).fadeOut("slow");
		$("#load").delay(100).fadeOut("slow");
	});

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

	$(function() {
		if($(window).width() <= 767) {
			$( "#featured-images" ).load( "featured-images-mob.html" );
		}
		else{
			$( "#featured-images" ).load( "featured-images-normal.html" );
		}
	});

	/*var Registration = Parse.Object.extend("Registration");

	function saveRegisters(){
		var registration = new Registration();

		registration.set("name", $("#name").val().toLowerCase().replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, function(letter) {
			return letter.toUpperCase();
		}));
		registration.set("email", $("#email").val());
		registration.set("city", $("#city").val());
		registration.set("number", $("#number").val());

		var callback = {
			success:function(e){
				$('#response').html('Registered Successfully. Thanks for the support!').addClass('success').fadeIn('fast');
			},
			error: function(){
				$('#response').html('Uh Oh, something went wrong').addClass('error').fadeIn('fast');
			}
		};

		registration.save(null, callback);
	}

	$("#buyForm").on("submit", function(e) {
		e.preventDefault();
		saveRegisters();
	});*/

	$('.fbShareButton').on('click',function(e){
		window.open('https://www.facebook.com/sharer/sharer.php?u=' + 'http://zestpc.com/');
	});

	$('.fbLikeButton').on('click',function(e){
		window.open('https://www.facebook.com/pczest');
	});

	$('.tweetButton').on('click',function(e){
		window.open('https://twitter.com/intent/tweet?text=@zestpc');
	});

	$('.followButton').on('click',function(e){
		window.open('https://twitter.com/intent/follow?screen_name=zestpc');
	});

	$.get( "ajax/test.html", function( data ) {
		$( ".result" ).html( data );
		alert( "Load was performed." );
	});


	/*$.post(
		'https://graph.facebook.com',
		{
			id: 'http://zestpc.com/',
			scrape: true
		},
		function(response){
			console.log(response);
		}
	);*/

	$(document).ready(function(){
		autoClick('.play-box','.play-desc',10000);
		autoClick('.play-box','.play-image',10000);
		autoClick('.feature-box','.feature-desc',5000);
		autoClick('.do-box','.do-desc',5000);
		autoClick('.featured-box','.featured-image',10000);
	});

	function autoClick(a,b,c){
		var i = 0;
		var len = $(a).length;
		function auto(){
			transitionEffect(a,b,++i%len);
		}
		var myAuto = setInterval(auto,c);
		$(a).click(function () {
			clearTimeout(myAuto);
			i = $(this).index();
			transitionEffect(a,b,i);
			myAuto = setInterval(auto,c);
		});
	}

	function transitionEffect(a,b,i){
		$(b).eq(i).addClass('active').siblings().removeClass('active');
		$($(a)[i]).addClass('highlight').siblings().removeClass('highlight');
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
