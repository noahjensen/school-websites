$(document).ready(function () {

  var headerheight = $('#header').height();
  var imgheight = windowheight - headerheight;
 // $('body').css('padding-top', headerheight);

  $('#left-nav .menu-wrap').css('height', imgheight);


  $(window).on("scroll touchmove", function () {
    $('#header, body').toggleClass('sticky', $(document).scrollTop() > 100);
    var headerheight = $('#header').height();
    var imgheight = windowheight - headerheight;
   // $('body').css('padding-top', headerheight);
    $('#left-nav .menu-wrap').css('height', imgheight);
  });



  /* ---	Code for Menu ---- */

  $('.menu-wrap ul.second-nav li ul').parent().addClass('has-child');

  $('html').click(function () {
    $(".menu-wrap").slideUp();
    $("#right-nav .menu-btn > span").removeClass('active');
    $("#right-nav .menu-btn > span").removeClass('inactive');
    $("#left-nav").removeClass('active');
    $("body").removeClass('overflow-hidden');
  });
  $('.menu-btn, .menu-wrap').click(function (e) {
    e.stopPropagation();
  });

  var headerheight = $('#header').height();
  var windowheight = $(window).height();
  var imgheight = windowheight - headerheight;
  var sliderheight = $('#slider').height();
  $('#left-nav .menu-wrap').css("min-height", imgheight);
  $('#right-nav .menu-wrap').css("min-height", sliderheight);

  $(window).resize(function () {
    var headerheight = $('#header').height();
    var windowheight = $(window).height();
    var imgheight = windowheight - headerheight;
    var sliderheight = $('#slider').height();
    $('#left-nav .menu-wrap').css("min-height", imgheight);
    $('#right-nav .menu-wrap').css("min-height", sliderheight);

   // $('#header+*').css('margin-top', headerheight);
    $('#left-nav .menu-wrap').css('height', imgheight);
  });
  $("#left-nav .menu-btn > span, .menu-close").click(function (e) {

    var headerheight = $('#header').height();
    var windowheight = $(window).height();
    var imgheight = windowheight - headerheight;


    $("#left-nav .menu-wrap").css('min-height', 0).slideToggle("slow", function () {
      $(this).css('min-height', imgheight);
    });

    $("#right-nav .menu-wrap").slideUp();
    $("#left-nav").toggleClass('active');

    $('body').removeClass('overflow-hidden');
     if (!$(this).parents('#left-nav').hasClass('active')) {
           $('body').removeClass('overflow-hidden');
        } else {
           $('body').addClass('overflow-hidden');
        }



    $("#right-nav .menu-btn > span").removeClass('active');
    $("#right-nav .menu-btn > span").toggleClass('inactive');
  });
  $("#right-nav .menu-btn > span").click(function (e) {
    var headerheight = $('#header').height();
    var windowheight = $(window).height();
    var imgheight = windowheight - headerheight;
    var sliderheight = $('#slider').height();

    $("#right-nav .menu-btn > span").removeClass('inactive');
    $("#left-nav .menu-wrap").slideUp();
    $("#left-nav").removeClass('active');


    $("#right-nav .menu-wrap").css('min-height', 0).slideToggle("slow", function () {
       $(this).css('min-height', sliderheight);
       var rightMenuHeight = $('#right-nav .menu-wrap').outerHeight();

       if (rightMenuHeight > imgheight) {
         $("#right-nav .menu-wrap").height(imgheight-40);
         $('#right-nav .menu-wrap').css("min-height", imgheight-40);
         $('body').removeClass('overflow-hidden');

         if (!$('#right-nav .menu-btn > span').hasClass('active')) {
             $('body').removeClass('overflow-hidden');
          } else {
             $('body').addClass('overflow-hidden');
          }
       }
    });

    $(this).toggleClass('active');


    $(window).resize(function () {
      var rightMenuHeight = $('#right-nav .menu-wrap').outerHeight();
      if (rightMenuHeight > imgheight) {
         $("#right-nav .menu-wrap").height(imgheight-40);
         $('#right-nav .menu-wrap').css("min-height", imgheight-40);
         $('body').removeClass('overflow-hidden');

         if (!$('#right-nav .menu-btn > span').hasClass('active')) {
             $('body').removeClass('overflow-hidden');
          } else {
             $('body').addClass('overflow-hidden');
          }
       }
    });
  });
  if ($(window).width() > 980) {

    $("ul.second-nav li.has-child").hover(
      function () {
        $(this).children('ul').stop().slideDown("slow");
        $(this).addClass("open");
      },
      function () {
        $(this).children('ul').stop().slideUp("slow");
        $(this).removeClass("open");
      }
    );

  }
  $('ul.second-nav li.has-child span').click(function () {
    $(this).next().slideToggle("slow");
    $(this).parent().toggleClass("open");
  });







  /* ---	Equal height function resizeable on window resize ---- */
  if ($(window).width() > 880) {
    delay(function () {
      $('.main .col-item.same-height').css('height', 'auto'); //solve for all you browser stretchers out there!
      setEqualHeight($('.main .col-item.same-height'));
    }, 500);
  }
  $(window).resize(function () {
    if ($(window).width() > 880) {
      delay(function () {
        $('.main .col-item.same-height').css('height', 'auto'); //solve for all you browser stretchers out there!
        setEqualHeight($('.main .col-item.same-height'));
      }, 500);

    } else {
      $(".main .col-item.same-height").css('height', 'auto');
    }
  });



});




//set max height----------------------------------------------//
function setEqualHeight(columns) {
  var tallestcolumn = 0;
  columns.each(
    function () {
      currentHeight = $(this).height();
      if (currentHeight > tallestcolumn) {
        tallestcolumn = currentHeight;
      }
    }
  );
  columns.height(tallestcolumn);
}

var delay = (function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();
//vertically align----------------------------------------------//
jQuery.fn.verticalAlign = function () {
  return this
    .css("margin-top", ($(this).parent().height() - $(this).height()) / 2 + 'px')
};

//$('.live-feeds-wrapper .avatar').verticalAlign();

$(document).ready(function() {
  if (document.location.href.indexOf('/o/swp') > -1) {
    $('footer').addClass('swp');
  };
});
