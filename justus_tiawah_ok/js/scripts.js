$(document).ready(function() {
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
				$(this).removeClass('active').next('ul.options').hide();
				$(this).parent().parent().removeClass('focus');
			} else {
				$(this).addClass('active').next('ul.options').show();
				$(this).parent().parent().addClass('focus');
			}
		});
		$styledSelect.parent().prev().click(function(e) {
			e.stopPropagation();
			$(this).parent().toggleClass('focus').find('ul.options').toggle();;
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
			$list.hide();
			$this.trigger("change");
		});
		$(document).click(function() {
			$styledSelect.removeClass('active');
			$styledSelect.parent().parent().removeClass('focus');
			$list.hide();
		});
		return $(this);
	});
	/* End custom Select   */
	/* ---	Code for Menu ---- */
	$('.menu-wrap ul.generated-links li ul').parent().addClass('has-child');
	$('html').click(function() {
		$("#right-nav .menu-wrap").slideUp();
		$("#right-nav .menu-btn > span").removeClass('active');
		//$("#right-nav .menu-btn > span").removeClass('inactive');
		$("#left-nav").removeClass('active');
	});
	$('.menu-btn').click(function(e) {
		e.stopPropagation();
	});
	var headerheight = $('#header').height();
	var windowheight = $(window).height();
	var imgheight = windowheight - headerheight;
	var sliderheight = $('#slider').height();
	$('#left-nav .menu-wrap').css("min-height", imgheight);
	$('#right-nav .menu-wrap').css("min-height", sliderheight);
	$(window).resize(function() {
		var headerheight = $('#header').height();
		var windowheight = $(window).height();
		var imgheight = windowheight - headerheight;
		var sliderheight = $('#slider').height();
		$('#left-nav .menu-wrap').css("min-height", imgheight);
		$('#right-nav .menu-wrap').css("min-height", sliderheight);
	});
	$("#left-nav .menu-btn > span, .menu-close").click(function(e) {
		$("#right-nav .menu-wrap").slideUp();
		$("#left-nav").toggleClass('active');
		$("#right-nav .menu-btn > span").removeClass('active');
	});
	$("#right-nav .menu-btn > span").click(function(e) {
		var sliderheight = $('#slider').height();
		//$("#right-nav .menu-btn > span").removeClass('inactive');
		$("#right-nav .menu-wrap").css('min-height', 0).slideToggle("slow", function() {
			$(this).css('min-height', sliderheight);
		});
		$("#left-nav").removeClass('active');
		$("body").removeClass('no_overflow');
		$(this).toggleClass('active');
	});
	$('ul.generated-links li.has-child').hover(function() {
		$(this).children('ul').removeClass('open');
		$(this).find('.open').removeClass('open');
		$(this).toggleClass("open");
	});
});
// Menu Overlap fix
$(function() {
	$(".has-child").on('mouseenter mouseleave', function(e) {
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
$(window).resize(function() {
	$('.has-child ul').removeClass('edge');
});
//set max height----------------------------------------------//
function setEqualHeight(columns) {
	var tallestcolumn = 0;
	columns.each(function() {
		currentHeight = $(this).height();
		if (currentHeight > tallestcolumn) {
			tallestcolumn = currentHeight;
		}
	});
	columns.height(tallestcolumn);
}
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
$('.generated-links').on('tap touchstart click', 'li.has-child span', function(e) {
	e.preventDefault();
	$(this).parent().siblings().removeClass('open');
	$(this).parent().find('.open').removeClass('open');
	$(this).parent().toggleClass("open");
});
$("<i class='arrow'></i>").appendTo("ul.generated-links li.has-child > a");
$('.generated-links').on('tap touchstart click', 'li.has-child > a .arrow', function(e) {
	e.preventDefault();
	$(this).parent().parent().siblings().removeClass('open');
	$(this).parent().parent().find('.open').removeClass('open');
	$(this).parent().parent().toggleClass("open");
});
var delay = (function() {
	var timer = 0;
	return function(callback, ms) {
		clearTimeout(timer);
		timer = setTimeout(callback, ms);
	};
});
//vertically align----------------------------------------------//
jQuery.fn.verticalAlign = function() {
	return this.css("margin-top", ($(this).parent().height() - $(this).height()) / 2 + 'px')
};
//$('.live-feeds-wrapper .avatar').verticalAlign();