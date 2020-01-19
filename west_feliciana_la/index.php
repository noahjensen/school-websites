<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
	<?php include '_head.php';?>

</head>

<body class="homepage desktop">

	<!-- ======================== HEADER ======================== -->

	<?php include '_header.php';?>

		<!-- ======================== SLIDER ======================== -->
		<div id="slider">
			<div class="slider-container">

				<div class="slide">
					<img src="images/slider/slide1.jpg" alt="">
					<div class="slider-info">
						<h5>Welcome to</h5>
						<h2>Marysville schools</h2>
						<p>Lorem ipsum dolor sit amet, molestie vel et rhoncus phasellus cursus, felis luctus a, purus tincidunt porta vestibulum a dolor, posuere convallis at volutpat, turpis urna nunc dolor mattis eget. Non vitae, purus vitae.</p>
					</div>
				</div>
				<div class="slide">
					<img src="images/slider/slide1.jpg" alt="">
					<div class="slider-info">
						<h5>Welcome to</h5>
						<h2>Marysville schools</h2>
						<p>Lorem ipsum dolor sit amet, molestie vel et rhoncus phasellus cursus, felis luctus a, purus tincidunt porta vestibulum a dolor, posuere convallis at volutpat, turpis urna nunc dolor mattis eget. Non vitae, purus vitae.</p>
					</div>
				</div>
				<div class="slide">
					<img src="images/slider/slide1.jpg" alt="">
					<div class="slider-info">
						<h5>Welcome to</h5>
						<h2>Marysville schools</h2>
						<p>Lorem ipsum dolor sit amet, molestie vel et rhoncus phasellus cursus, felis luctus a, purus tincidunt porta vestibulum a dolor, posuere convallis at volutpat, turpis urna nunc dolor mattis eget. Non vitae, purus vitae.</p>
					</div>
				</div>
				<div class="slide">
					<img src="images/slider/slide1.jpg" alt="">
					<div class="slider-info">
						<h5>Welcome to</h5>
						<h2>Marysville schools</h2>
						<p>Lorem ipsum dolor sit amet, molestie vel et rhoncus phasellus cursus, felis luctus a, purus tincidunt porta vestibulum a dolor, posuere convallis at volutpat, turpis urna nunc dolor mattis eget. Non vitae, purus vitae.</p>
					</div>
				</div>
			</div>

		</div>

		<!-- ======================== MAIN CONTENT ======================== -->
		<div class="main" role="main">
			<div class="container clearfix">
				<?php include '_section_boxes.php';?>
			</div>
		</div>


		<!-- ======================== FOOTER ======================== -->

		<?php include '_footer.php';?>





			<!-- ======================== JAVASCRIPTS ======================== -->
			<script src="js/jquery.min.js"></script>
			<script src="js/jquery.bxslider.min.js"></script>
			<script src="js/jquery.dotdotdot.min.js"></script>
			<script src="js/jquery.grid-a-licious.min.js"></script>
			<script src="js/scripts.js"></script>

			<script type="text/javascript">
				if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
					$('body').removeClass('desktop');
				}
				$(document).ready(function() {

					$('.main .col-item.news-wrapper .news p').dotdotdot({
						watch: 'window'
					});


					/* ---	Equal height function resizeable on window resize ---- */
					if ($(window).width() > 880) {
						delay(function() {
							$('.main .col-item').css('height', 'auto'); //solve for all you browser stretchers out there!
							setEqualHeight($('.main .col-item'));
						}, 500);
					}
					$(window).resize(function() {
						if ($(window).width() > 880) {
							delay(function() {
								$('.main .col-item').css('height', 'auto'); //solve for all you browser stretchers out there!
								setEqualHeight($('.main .col-item'));
							}, 500);

						} else {
							$(".main .col-item").css('height', 'auto');
						}
					});



					$(window).on('scroll', function() {
						var delay = 0;
						$('.main .col-item').children().each(function(i) {

							var bottom_of_object = $(this).offset().top;
							var bottom_of_window = $(window).scrollTop() + $(window).height();
							if (bottom_of_window > bottom_of_object) {

								var $li = $(this);
								setTimeout(function() {
									$li.addClass('active');
								}, delay += 50);
							}

						});

					});
					$(window).trigger('scroll');

					if ($(window).width() > 1040) {
						var sliderheight = $('#slider').height();
						var headerheight = $('#header').height();
						var windowheight = $(window).height();
						var imgheight = windowheight - headerheight;
						$('.slider-container img, #slider,.slider-container  .bx-wrapper .bx-viewport').css("max-height", imgheight);
						//$('#left-nav .menu-wrap').css("min-height", imgheight);

					} else {
						$('.slider-container img, #slider,.slider-container .bx-wrapper .bx-viewport').css("max-height", "100%");
						$('.slider-container img, #slider, .bx-wrapper .bx-viewport').css("min-height", 90);
						//$('#left-nav .menu-wrap').css("height", "auto");
					}
					$(window).resize(function() {
						if ($(window).width() > 1040) {
							var sliderheight = $('#slider').height();
							var headerheight = $('#header').height();
							var windowheight = $(window).height();
							var imgheight = windowheight - headerheight;
							$('.slider-container img, #slider, .slider-container  .bx-wrapper .bx-viewport').css("max-height", imgheight);
							//$('#left-nav .menu-wrap').css("min-height", imgheight);

						} else {
							$('.slider-container img, #slider,.slider-container  .bx-wrapper .bx-viewport').css("max-height", "100%");
							$('.slider-container img, #slider, .slider-container  .bx-wrapper .bx-viewport').css("min-height", 90);
							//$('#left-nav .menu-wrap').css("height", "auto");
						}
					});
					$('.slider-container').bxSlider({
						mode: 'fade',
						auto: true,
						autoHover: true,
						adaptiveHeight: true,
						onSliderLoad: function() {
							if ($(window).width() > 1040) {
								var sliderheight = $('#slider').height();
								var headerheight = $('#header').height();
								var windowheight = $(window).height();
								var imgheight = windowheight - headerheight;
								$('.slider-container img, #slider,.slider-container  .bx-wrapper .bx-viewport').css("max-height", imgheight);
								//$('#left-nav .menu-wrap').css("min-height", imgheight);

							} else {
								$('.slider-container img, #slider,.slider-container .bx-wrapper .bx-viewport').css("max-height", "100%");
								$('.slider-container img, #slider, .bx-wrapper .bx-viewport').css("min-height", 90);
								//$('#left-nav .menu-wrap').css("height", "auto");
							}
							$(window).resize(function() {
								if ($(window).width() > 1040) {
									var sliderheight = $('#slider').height();
									var headerheight = $('#header').height();
									var windowheight = $(window).height();
									var imgheight = windowheight - headerheight;
									$('.slider-container img, #slider, .slider-container  .bx-wrapper .bx-viewport').css("max-height", imgheight);
									//$('#left-nav .menu-wrap').css("min-height", imgheight);

								} else {
									$('.slider-container img, #slider,.slider-container  .bx-wrapper .bx-viewport').css("max-height", "100%");
									$('.slider-container img, #slider, .slider-container  .bx-wrapper .bx-viewport').css("min-height", 90);
									//$('#left-nav .menu-wrap').css("height", "auto");
								}
							});
						}

					});

				});

				$('.news-slider').bxSlider({
					auto: true,
					autoHover: true
				});

			</script>

</body>

</html>
