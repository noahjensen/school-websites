$(document).ready(function () {

  $(".menu-wrap .second-nav").gridalicious({
                  gutter: 0,
                  width: 380
              });



var schoolname = $('body').attr('class');

// Change Theme Based on School

switch(schoolname){

  case "district":
    $("#header .org-name, #footer .org-name").before("Sheepscot Valley");
    $("#header .org-subtitle").html("Regional School Unit 12");
  $("img").attr("alt","Sheepscot Valley");
  $(".first-nav li.dining").hide();
  $(".first-nav li.athletics").hide();
  $("title").append( "Sheepscot Valley" );

  break;

  case "ses":
  $("#header .org-name").before("Somerville");
  $("#header .org-subtitle").html("Elementary School");
$("img").attr("alt","Somerville Elementary School");
$(".first-nav li.athletics").hide();
$("title").append( "Somerville Elementary School");
  break;

  case "ces":
  $("#header .org-name").before("Chelsea");
  $("#header .org-subtitle").html("Elementary School");
$("img").attr("alt","Chelsea Elementary School");
$(".first-nav li.athletics").hide();
$("title").append( "Sheepscot Valley");
  break;

  case "pcs":
  $("#header .org-name").before("Palermo");
  $("#header .org-subtitle").html("Consolidated School");
$("img").attr("alt","Palermo Consolidated School");
$(".first-nav li.dining").hide();
$("title").append( "Palermo Consolidated School" );
  break;

  case "whes":
  $("#header .org-name").before("Whitefield");
  $("#header .org-subtitle").html("Elementary School");
$("img").attr("alt","Whitefield Elementary School");
$(".first-nav li.dining").hide();
$("title").append( "Whitefield Elementary School" );
  break;

  case "windsor":
  $("#header .org-name").before("Windsor");
  $("#header .org-subtitle").html("Elementary School");
$("img").attr("alt","Windsor Elementary School");
$(".first-nav li.dining").hide();
$("title").append( "Windsor Elementary School" );
  break;

  case "pcs":
  $("#header .org-name").before("Palermo");
  $("#header .org-subtitle").html("Consolidated School");
$("img").attr("alt","Palermo Consolidated School");
$(".first-nav li.dining").hide();
$("title").append( "Palermo Consolidated School" );
  break;

  case undefined:
  $("#header .org-name").before("Sheepscot Valley");
  $("#header .org-subtitle").html("Regional School Unit 12");
$("img").attr("alt","Sheepscot Valley");
$(".first-nav li.dining").hide();
$(".first-nav li.athletics").hide();
$("title").append( "Sheepscot Valley" );
  break;
}




    /* ---	Code for Menu ---- */
    $('.menu-wrap ul.second-nav li ul').parent().addClass('has-child');
    $('html').click(function () {
        $(".menu-wrap").slideUp();
        $("#right-nav .menu-btn > span").removeClass('active');
        $("#right-nav .menu-btn > span").removeClass('inactive');
        $("#left-nav").removeClass('active');
    });
    $('.menu-btn').click(function (e) {
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
        var headerheight = $('#header').height();
        var windowheight = $(window).height();
        var imgheight = windowheight - headerheight;
        $("#left-nav .menu-wrap").css('min-height', 0).slideToggle("slow", function () {
        });
        $("#right-nav .menu-wrap").slideUp();
        $("#left-nav").toggleClass('active');
        $("#right-nav .menu-btn > span").removeClass('active');
        $("#right-nav .menu-btn > span").toggleClass('inactive');
    });
    $("#right-nav .menu-btn > span").click(function (e) {
        var sliderheight = $('#slider').height();
        $("#right-nav .menu-btn > span").removeClass('inactive');
        $("#right-nav .menu-wrap").css('min-height', 0).slideToggle("slow", function () {
        });
        $("#left-nav .menu-wrap").slideUp();
        $("#left-nav").removeClass('active');
        $(this).toggleClass('active');
    });
    if ($(window).width() > 980) {
        $("ul.second-nav li.has-child").hover(function () {
            $(this).children('ul').stop().slideDown("slow");
            $(this).addClass("open");
        }, function () {
            $(this).children('ul').stop().slideUp("slow");
            $(this).removeClass("open");
        });
    }
    $('ul.second-nav li.has-child span').click(function () {
        $(this).next().slideToggle("slow");
        $(this).parent().toggleClass("open");
    });
    /*  Custom Select   */
    $('#change_language_form select').each(function () {
        var $this = $(this)
            , numberOfOptions = $(this).children('option').length;
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
                text: $this.children('option').eq(i).text()
                , rel: $this.children('option').eq(i).val()
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
  });
        $styledSelect.parent().prev().click(function (e) {
            e.stopPropagation();
            $(this).parent().toggleClass('focus').find('ul.options').toggle();
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
});
//set max height----------------------------------------------//
function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(function () {
        currentHeight = $(this).height();
        if (currentHeight > tallestcolumn) {
            tallestcolumn = currentHeight;
        }
    });
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
    return this.css("margin-top", ($(this).parent().height() - $(this).height()) / 2 + 'px');
};
//$('.live-feeds-wrapper .avatar').verticalAlign();