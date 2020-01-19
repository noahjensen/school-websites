$(document).ready(function() {

  $(".menu-wrap .generated-links").gridalicious({
    gutter: 0,
    width: 380
  });

  /* ---	Code for Menu ---- */

  $('.menu-wrap .generated-links li ul').parent().addClass('has-child');

  $('html').click(function() {
    //$(".menu-wrap").slideUp();
    $("#right-nav .menu-btn > span").removeClass('active');
    $("#left-nav, #header").removeClass('active');
  });
  $('.menu-btn').click(function(e) {
    e.stopPropagation();
  });


  $("#left-nav .menu-btn > span").click(function(e) {
    var sliderheight = $('#slider').height();
    $('#left-nav .menu-wrap, #right-nav .menu-wrap').css("min-height", sliderheight);
    $(window).resize(function() {
      var sliderheight = $('#slider').height();
      $('#left-nav .menu-wrap, #right-nav .menu-wrap').css("min-height", sliderheight);

    });
    $("#left-nav").toggleClass('active');

    if ($('#left-nav').hasClass('active')) {
      $('#header').addClass('active');
    } else {
      $('#header').removeClass('active');
    }
    $("#right-nav .menu-btn > span").removeClass('active');

    $("#change_language_form form").removeClass('focus');
    $("#change_language_form .styledSelect").removeClass('active');
    $("#change_language_form .options").removeClass('open');
  });

  $(".menu-close").click(function(e) {
    $("#left-nav, #header, #right-nav .menu-btn > span").removeClass('active');
  });
  $("#right-nav .menu-btn > span").click(function(e) {
    var sliderheight = $('#slider').height();
    $('#left-nav .menu-wrap, #right-nav .menu-wrap').css("min-height", sliderheight);
    $(window).resize(function() {
      var sliderheight = $('#slider').height();
      $('#left-nav .menu-wrap, #right-nav .menu-wrap').css("min-height", sliderheight);

    });
    $("#left-nav").removeClass('active');
    $(this).toggleClass('active');
    if ($('#right-nav .menu-btn > span').hasClass('active')) {
      $('#header').addClass('active');
    } else {
      $('#header').removeClass('active');
    }
    $("#change_language_form form").removeClass('focus');
    $("#change_language_form .styledSelect").removeClass('active');
    $("#change_language_form .options").removeClass('open');
  });
  if ($(window).width() > 980) {
    $(".generated-links li.has-child").hover(
      function() {
        //$(this).children('ul').stop().slideDown("slow");
        $(this).addClass("open");
      },
      function() {
        //$(this).children('ul').stop().slideUp("slow");
        $(this).removeClass("open");
      }
    );
  }
  $('.generated-links').on('tap touchstart click', 'li.has-child span', function(e) {
    e.preventDefault();
    $(this).parent().siblings().removeClass('open');
    $(this).parent().find('.open').removeClass('open');
    $(this).parent().toggleClass("open");
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



});




//set max height----------------------------------------------//
function setEqualHeight(columns) {
  var tallestcolumn = 0;
  columns.each(
    function() {
      currentHeight = $(this).height();
      if (currentHeight > tallestcolumn) {
        tallestcolumn = currentHeight;
      }
    }
  );
  columns.height(tallestcolumn);
}

var delay = (function() {
  var timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();
//vertically align----------------------------------------------//
jQuery.fn.verticalAlign = function() {
  return this
    .css("margin-top", ($(this).parent().height() - $(this).height()) / 2 + 'px')
};

//$('.live-feeds-wrapper .avatar').verticalAlign();
