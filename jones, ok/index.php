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
			<div class="container">
				<a class="first-logo" href="index.html"><img src="css/logo.png" alt="Andrew Hawks">
					<h2>JONES PUBLIC SCHOOLS</h2>
					<p>HOME OF THE LONGHORNS</p>
				</a>
				<nav id="right-nav" class="nav schools" role="navigation">
					<div class="menu-btn"><span>Schools</span>
						<div class="menu-wrap">
							<ul>
								<li><a href="index.php">district</a></li>
								<li><a href="#">Jones elementary</a></li>
								<li><a href="#">Jones middle school</a></li>
								<li><a href="#">Jones high school</a></li>
							</ul>
						</div>
					</div>
				</nav>
				<nav id="left-nav" class="nav" role="navigation">
					<div class="menu-btn"><span>Menu</span></div>
				</nav>
				<span class="search-icon no-bg-color no-icon"></span>
				<div id="change_language_form">
					<form accept-charset="UTF-8" action="/apptegy_cms/change_language" class="custom" method="get">
						<div style="margin:0;padding:0;display:inline">
							<input name="utf8" type="hidden" value="✓"> </div>
						<select class="language-submittable" id="lang" name="lang">
							<option value="english" selected="selected">english</option>
							<option value="spanish">spanish</option>
						</select>
					</form>
				</div>
				<div class="slider-container">
					<div class="slide">
						<img src="images/slider/slide1.jpg" alt="">
					</div>
					<div class="slide">
						<img src="images/slider/slide1.jpg" alt="">
					</div>
					<div class="slide">
						<img src="images/slider/slide1.jpg" alt="">
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
			<script src="js/scripts.js"></script>


			 <script type="text/javascript">
		if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
			$('body').removeClass('desktop');
		}

		var windowheight = $(window).height();
		$('#slider').css("min-height", windowheight);


		$(document).ready(function() {
			
			$('.main .col-item.live-feeds-wrapper .live-feed p').dotdotdot({
				watch: 'window'
			});

			if ($(window).width() > 880) {
				delay(function() {
					$('.main .col-item.same-height').css('height', 'auto'); //solve for all you browser stretchers out there!
					setEqualHeight($('.main .col-item.same-height'));
				}, 500);
			}
			$(window).resize(function() {
				if ($(window).width() > 880) {
					delay(function() {
						$('.main .col-item.same-height').css('height', 'auto'); //solve for all you browser stretchers out there!
						setEqualHeight($('.main .col-item.same-height'));
					}, 500);

				} else {
					$(".main .col-item.same-height").css('height', 'auto');
				}
			});


			var windowheight = $(window).height();
			var imgheight = windowheight - 71;
			var sliderwidth = $(window).width() - 100;

			if ($(window).width() < 1920) {

				$('#slider .container').animate({
					height: imgheight,
					width: sliderwidth
				}, 450, function() {
					$('#left-nav .menu-btn, #right-nav .menu-btn, #slider .search-icon, #change_language_form').delay(3000).addClass('active');
					$('#slider .first-logo').delay(3000).addClass('active');
					$('#slider').delay(3000).addClass('active');
					//$('#slider .social-media').delay(9000).addClass('active');
				});
				$('#slider .slider-container img, .slider-container .slide, .bx-wrapper .bx-viewport').css("height", imgheight);
				$('#slider .slider-container img,  .slider-container .slide, .bx-wrapper .bx-viewport').css("width", sliderwidth);
			} else if ($(window).width() > 1920) {
				$('#slider .container').delay(900).animate({
					height: 750,
					width: 1920
				}, 450, function() {
					$('#left-nav .menu-btn, #right-nav .menu-btn, #slider .search-icon, #change_language_form').delay(3000).addClass('active');
					$('#slider .first-logo').delay(3000).addClass('active');
					$('#slider').delay(3000).addClass('active');
					//$('#slider .social-media').delay(9000).addClass('active');
				});
			}
			else {
					$('#slider .container, #slider .slider-container img, .slider-container .slide, .bx-wrapper .bx-viewport').css("height", "auto");
					$('#slider .container, #slider .slider-container img, .slider-container .slide, .bx-wrapper .bx-viewport').css("width", "auto");
					$('#slider').css("min-height", "inherit");
				}

			$(window).resize(function() {
				if ($(window).width() < 1920 && $(window).width() > 1000) {

					var windowheight = $(window).height();
					var imgheight = windowheight - 71;
					var sliderwidth = $(window).width() - 100;

					$('#slider .container, #slider .slider-container img, .slider-container .slide, .bx-wrapper .bx-viewport').css("height", imgheight);
					$('#slider .container, #slider .slider-container img, .slider-container .slide, .bx-wrapper .bx-viewport').css("width", sliderwidth);
					$('#slider').css("min-height", windowheight);


				} else if ($(window).width() > 1920) {
					$('#slider .container').css("height", 750);
					$('#slider .container').css("width", 1920);
				} else {
					$('#slider .container, #slider .slider-container img, .slider-container .slide, .bx-wrapper .bx-viewport').css("height", "auto");
					$('#slider .container, #slider .slider-container img, .slider-container .slide, .bx-wrapper .bx-viewport').css("width", "auto");
					$('#slider').css("min-height", "inherit");
				}
			});

			$(window).on('scroll', function() {
				var delay = 0;
				$('.main .col-item').children().each(function(i) {

					var bottom_of_object = $(this).offset().top;
					var bottom_of_window = $(window).scrollTop() + $(window).height();

					/* If the object is completely visible in the window, fade it it */
					if (bottom_of_window > bottom_of_object) {

						var $li = $(this);
						setTimeout(function() {
							$li.addClass('active');
						}, delay += 50);

					}
					/*else {
					                       $(this).removeClass('active');
					                   } */


				});

			});
			$(window).trigger('scroll');



		$('.slider-container').bxSlider({
					mode: 'fade',
					//auto: true,
					autoHover: true,
					onSliderLoad: function() {
						if ($(window).width() > 1000) {
							var imgheight = windowheight - 71;
							var sliderwidth = $(window).width() - 100;
							$('#slider .slider-container img, .slider-container .slide, .bx-wrapper .bx-viewport').css("height", imgheight);
							$('#slider .slider-container img,  .slider-container .slide, .bx-wrapper .bx-viewport').css("width", sliderwidth);
						}
					}

				});

		});

	</script>

</body>

</html>
