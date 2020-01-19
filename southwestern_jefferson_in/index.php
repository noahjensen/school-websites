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
            <h5>Welcome to SWJSC</h5>
            <p>Home of the Rebels!</p>
          </div>
        </div>
        <div class="slide">
          <img src="images/slider/slide2a.jpg" alt="">
          <div class="slider-info">
            <h5>Welcome to SWJSC</h5>
            <p>Home of the Rebels!</p>
          </div>
        </div>
        <div class="slide">
          <img src="images/slider/slide1.jpg" alt="">
          <div class="slider-info">
            <h5>Welcome to SWJSC</h5>
            <p>Home of the Rebels!</p>
          </div>
        </div>
        <div class="slide">
          <img src="images/slider/slide2a.jpg" alt="">
          <div class="slider-info">
            <h5>Welcome to SWJSC</h5>
            <p>Home of the Rebels!</p>
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
      <script src="js/jquery.dotdotdot.min.js"></script>
      <script src="js/jquery.bxslider.min.js"></script>
      <script src="js/scripts.js"></script>
      

      <script type="text/javascript">
         
         $('.live-feeds-wrapper p').dotdotdot({
            watch: 'window'
        });
         
         
        if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
          $('body').removeClass('desktop');
        }
        $(document).ready(function() {

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

      </script>

</body>

</html>
