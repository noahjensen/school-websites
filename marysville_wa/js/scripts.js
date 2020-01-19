$(document).ready(function() {

  $(".menu-wrap .generated-links").gridalicious({
    gutter: 0,
    width: 380
  });


  /*  Custom Select   */

  $('#change_language_form select').each(function() {

    var $this = $(this),
      numberOfOptions = $(this).children('option').length;

    $this.addClass('s-hidden');

    $this.wrap('<div class="select"></div>');

    $this.after('<div class="styledSelect"></div>');

    var $styledSelect = $this.next('div.styledSelect');

    $styledSelect.text($this.children('option').eq(0).text());
    $styledSelect.text($this.children('option:selected').text());



    var $list = $('<ul />', {
      'class': 'options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
        text: $this.children('option').eq(i).text(),
        rel: $this.children('option').eq(i).val()
      }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
      e.stopPropagation();
      if ($styledSelect.hasClass('active')) {
        $(this).removeClass('active').next('ul.options').removeClass('open');
        $(this).parent().parent().removeClass('focus');
      } else {
        $(this).addClass('active').next('ul.options').addClass('open');
        $(this).parent().parent().addClass('focus');
      }
      $("#right-nav .menu-btn > span").removeClass('active');
      $("#left-nav, #header").removeClass('active');
    });
    $styledSelect.parent().prev().click(function(e) {
      e.stopPropagation();
      $(this).parent().toggleClass('focus').find('ul.options').toggleClass('open');
    });
    var indexselected = $this.children('option:selected').index();

    $listItems.eq(indexselected).addClass('selected');
    $listItems.click(function(e) {

      e.stopPropagation();

      $('.options li').removeClass('selected');
      $(this).addClass('selected');
      $styledSelect.text($(this).text()).removeClass('active');
      $styledSelect.parent().parent().removeClass('focus');

      $this.val($(this).attr('rel'));
      $list.removeClass('open');
      $this.trigger("change");
    });

    $(document).click(function() {
      $styledSelect.removeClass('active');
      $styledSelect.parent().parent().removeClass('focus');
      $list.removeClass('open');
    });
    return $(this);
  });



  /* End custom Select   */



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

$(document).ready(function() {

  if (document.location.href.indexOf('marysville-pilchuck-high-school') > -1) {
    $('html').addClass('marysville-pilchuck-high-school-page');
  };
  if (document.location.href.indexOf('allen-creek-elementary-school') > -1) {
    $('html').addClass('allen-creek-elementary-school-page');
  };
  if (document.location.href.indexOf('cascade-elementary-school') > -1) {
    $('html').addClass('cascade-elementary-school-page');
  };
  if (document.location.href.indexOf('grove-elementary-school') > -1) {
    $('html').addClass('grove-elementary-school-page');
  };
  if (document.location.href.indexOf('kellogg-marsh-elementary-school') > -1) {
    $('html').addClass('kellogg-marsh-elementary-school-page');
  };
  if (document.location.href.indexOf('liberty-elementary-school') > -1) {
    $('html').addClass('liberty-elementary-school-page');
  };
  if (document.location.href.indexOf('marshall-elementary-school') > -1) {
    $('html').addClass('marshall-elementary-school-page');
  };
  if (document.location.href.indexOf('pinewood-elementary-school') > -1) {
    $('html').addClass('pinewood-elementary-school-page');
  };
  if (document.location.href.indexOf('quil-ceda-tulalip-elementary-school') > -1) {
    $('html').addClass('quil-ceda-tulalip-elementary-school-page');
  };
  if (document.location.href.indexOf('shoultes-elementary-school') > -1) {
    $('html').addClass('shoultes-elementary-school-page');
  };
  if (document.location.href.indexOf('sunnyside-elementary-school') > -1) {
    $('html').addClass('sunnyside-elementary-school-page');
  };
  if (document.location.href.indexOf('tenth-street-middle-school') > -1) {
    $('html').addClass('tenth-street-middle-school-page');
  };
  if (document.location.href.indexOf('cedarcrest-middle-school') > -1) {
    $('html').addClass('marysville-pilchuck-high-school-page');
  };
  if (document.location.href.indexOf('marysville-middle-school') > -1) {
    $('html').addClass('marysville-middle-school-page');
  };
  if (document.location.href.indexOf('totem-middle-school') > -1) {
    $('html').addClass('totem-middle-school-page');
  };
  if (document.location.href.indexOf('arts-and-technology-high-school') > -1) {
    $('html').addClass('arts-and-technology-high-school-page');
  };
  if (document.location.href.indexOf('heritage-high-school') > -1) {
    $('html').addClass('heritage-high-school-page');
  };
  if (document.location.href.indexOf('marysville-mountain-view-high-school') > -1) {
    $('html').addClass('marysville-mountain-view-high-school-page');
  };
  if (document.location.href.indexOf('academy-of-construction-and-engineering-high-school') > -1) {
    $('html').addClass('academy-of-construction-and-engineering-high-school-page');
  };
  if (document.location.href.indexOf('biomed-academy-high-school') > -1) {
    $('html').addClass('biomed-academy-high-school-page');
  };
  if (document.location.href.indexOf('international-school-of-communications-high-school') > -1) {
    $('html').addClass('international-school-of-communications-high-school-page');
  };
  if (document.location.href.indexOf('school-for-the-entrepreneur-high-school') > -1) {
    $('html').addClass('school-for-the-entrepreneur-high-school-page');
  };
});
