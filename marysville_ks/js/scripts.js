$(document).ready(function () {
	
	/* Sticky Nav */
	
  var windowheight = $( window ).height();
  var headerheight = $('#header').height();
  var imgheight = windowheight - headerheight;

  $('#left-nav .menu-wrap').css('height', imgheight);
  $('body').css('padding-top', headerheight);


  $(window).on("scroll touchmove", function () {
    $('#header, body').toggleClass('sticky', $(document).scrollTop() > 100);
    var headerheight = $('#header').height();
    var imgheight = windowheight - headerheight;
    $('#left-nav .menu-wrap').css('height', imgheight);
  });
  $(window).resize(function(){
	var windowheight = $( window ).height();
	var headerheight = $('#header').height();
    var imgheight = windowheight - headerheight;
	
    $('body').css('padding-top', headerheight);
	$('#left-nav .menu-wrap').css('height', imgheight);
  });

	$(document).on('DOMMouseScroll mousewheel', '.menu-wrap', function(ev) {
		var $this = $(this),
			scrollTop = this.scrollTop,
			scrollHeight = this.scrollHeight,
			height = $this.innerHeight(),
			delta = (ev.type == 'DOMMouseScroll' ?
				ev.originalEvent.detail * -40 :
				ev.originalEvent.wheelDelta),
			up = delta > 0;

		var prevent = function() {
			ev.stopPropagation();
			ev.preventDefault();
			ev.returnValue = false;
			return false;
		}

		if (!up && -delta > scrollHeight - height - scrollTop) {
			// Scrolling down, but this will take us past the bottom.
			$this.scrollTop(scrollHeight);
			return prevent();
		} else if (up && delta > scrollTop) {
			// Scrolling up, but this will take us past the top.
			$this.scrollTop(0);
			return prevent();
		}
	});
	
	
	/*  Custom Select   */

  $('#change_language_form select').each(function () {

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

    $styledSelect.click(function (e) {
			e.stopPropagation();
			if ($styledSelect.hasClass('active')) {
				$(this).removeClass('active').next('ul.options').hide();
				$(this).parent().parent().removeClass('focus');
			} else {
				$(this).addClass('active').next('ul.options').show();
				$(this).parent().parent().addClass('focus');
			}
		
	  		$("#left-nav, #left-nav .menu-btn").removeClass('active');
			$("#right-nav, #right-nav .menu-btn").removeClass('active');
		
		});
    $styledSelect.parent().prev().click(function (e) {
      e.stopPropagation();
      $(this).parent().toggleClass('focus').find('ul.options').toggle();;
    });
    var indexselected = $this.children('option:selected').index();

    $listItems.eq(indexselected).addClass('selected');
    $listItems.click(function (e) {

      e.stopPropagation();

      $('.options li').removeClass('selected');
      $(this).addClass('selected');
      $styledSelect.text($(this).text()).removeClass('active');
      $styledSelect.parent().parent().removeClass('focus');

      $this.val($(this).attr('rel'));
      $list.hide();
      $this.trigger("change");
    });

    $(document).click(function () {
      $styledSelect.removeClass('active');
      $styledSelect.parent().parent().removeClass('focus');
      $list.hide();
    });
    return $(this);
  });



  /* End custom Select   */



  /* ---	Code for Menu ---- */

  $('.menu-wrap .generated-links li ul').parent().addClass('has-child');

  $('html').click(function () {
    $("#right-nav .menu-wrap").slideUp();
    $("#right-nav .menu-btn > span").removeClass('active');
    //$("#right-nav .menu-btn > span").removeClass('inactive');
    $("#left-nav").removeClass('active');
   
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
  });
  $("#left-nav .menu-btn > span, .menu-close").click(function (e) {
       $("#right-nav .menu-wrap").slideUp();
        $("#left-nav").toggleClass('active');
        
        $("#right-nav .menu-btn > span").removeClass('active');
	  	$("#change_language_form form").removeClass('focus');
		$("#change_language_form .styledSelect").removeClass('active');
		$("#change_language_form .options").hide();
	  
  });
  $("#right-nav .menu-btn > span").click(function (e) {

    var sliderheight = $('#slider').height();

    //$("#right-nav .menu-btn > span").removeClass('inactive');

    $("#right-nav .menu-wrap").css('min-height', 0).slideToggle("slow", function () {
      $(this).css('min-height', sliderheight);
    });
    $("#left-nav").removeClass('active');
    $("body").removeClass('no_overflow');
    $(this).toggleClass('active');
  });

	if ($(window).width() > 980) {		
		 $(document).on("mouseenter", ".generated-links li.has-child", function() {
			//$(this).children('ul').stop().slideDown("slow");
            $(this).addClass("open");
		});
		$(document).on("mouseleave", ".generated-links li.has-child", function() {
			//$(this).children('ul').stop().slideUp("slow");
            $(this).removeClass("open");
		});
	}
	$('.generated-links').on('click', 'li.has-child span', function (e) {
		$(this).parent().siblings().removeClass('open');
		$(this).parent().find('.open').removeClass('open');
		$(this).parent().toggleClass("open");
	});
	
	$( "<i class='arrow'></i>" ).appendTo( ".generated-links li.has-child > a" );
	
	  $('.generated-links').on('click', 'li.has-child > a .arrow', function (e) {
			e.preventDefault();
		   $(this).parent().parent().siblings().removeClass('open');
		   $(this).parent().parent().find('.open').removeClass('open');
		   $(this).parent().parent().toggleClass("open");
	  }); 


	// Language Dropdown Change

	var language_current = $(".styledSelect").text();
	var short_lang = language_current.substring(0,2);
	$(".styledSelect").text(short_lang);
	$('#header #change_language_form .options li').click(function () {
		var language_current = $(this).text();
		var short_lang = language_current.substring(0,2);
		$(".styledSelect").text(short_lang);		
	});


});


// Menu Overlap fix

		$(function () {
			$(".has-child").on('mouseenter mouseleave', function (e) {
				if ($('ul', this).length) {
					var elm = $('ul:last', this);
					var off = elm.offset();
					var l = off.left;
					var w = elm.width();
					var docH = $("body").height();
					var docW = $("body").width();

					var isEntirelyVisible = (l + w <= docW);

					if (!isEntirelyVisible) {
						$(this).find('ul').addClass('edge');
					}
				}
			});
		});
		$( window ).resize(function() {
		  $('.has-child ul').removeClass('edge');
		});


	  $(document).ready(function () {
	  var language_current = $(".styledSelect").text();
	  var short_lang = language_current.substring(0,2);
	  $(".styledSelect").text(short_lang);
	  $('#header #change_language_form .options li').click(function () {
		var language_current = $(this).text();
		var short_lang = language_current.substring(0,2);
		$(".styledSelect").text(short_lang);
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
