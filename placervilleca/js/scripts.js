$(document).ready(function () {



// Change Theme Based on School
$('body').addClass('<%= current_organization.organization_alias.parameterize%>');
var schoolname = $('body').attr('class');

switch(schoolname){

  case "pusd":
  $("#header .logo img").after( "Placerville Union School District" );
  $("#header .logo img").attr("src","css/logo.png");
  $("img").attr("alt","Placerville Union School District");
  $(".first-nav li.dining").hide();
  $(".first-nav li.athletics").hide();
  $("title").append( "Placerville Union School District" );

  break;

  case "sierra":
  $("#header .logo img").after( "Sierra School" );
  $("#header .logo img").attr("src","css/logo-sierra.png");
      $("img").attr("alt","Sierra School");
        $(".first-nav li.athletics").hide();
        $("title").append( "Sierra School" );
  break;

  case "emms":
  $("#header .logo img").after( "Edwin Markham Middle School");
  $("#header .logo img").attr("src","css/logo-emms.png");
      $("img").attr("alt","Edwin Markham Middle School");
      $("title").append( "Edwin Markham Middle School" );
  break;

  case "lses":
  $("#header .logo img").after( "Louisiana Schnell Elementary School" );
  $("#header .logo img").attr("src","css/logo-lses.png");
  $("img").attr("alt","Louisiana Schnell Elementary School");
  $(".first-nav li.athletics").hide();
    $("title").append( "Louisiana Schnell Elementary School" );
  break;

  default:
  $("#header .logo img").after( "Placerville Union School District" );
  $("#header .logo img").attr("src","css/logo.png");
  $("img").attr("alt","Placerville Union School District");
  $(".first-nav li.dining").hide();
  $(".first-nav li.athletics").hide();
  $("title").append( "Placerville Union School District" );
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
