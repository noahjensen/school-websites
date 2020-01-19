$(document).ready(function() {
	$('.menu-wrap .second-nav li ul').parent().addClass('has-child');
	$('html').click(function() {
		$("#left-nav").removeClass('active');
		$("#right-nav").removeClass('active');
	});
	$('.menu-btn, .menu-wrap').click(function(e) {
		e.stopPropagation();
	});
	var headerheight = $('#header').height();
	var windowheight = $(window).height();
	var imgheight = windowheight - headerheight;
	//$('#left-nav .menu-wrap').css("min-height", imgheight);
	$(window).resize(function() {
		var headerheight = $('#header').height();
		var windowheight = $(window).height();
		var imgheight = windowheight - headerheight;
		//$('#left-nav .menu-wrap').css("min-height", imgheight);
	});
	$("#left-nav .menu-btn > span, .menu-close").click(function(e) {
		$("#left-nav").toggleClass('active');
		$("#right-nav").removeClass('active');
	});
	$("#right-nav .menu-btn > span").click(function(e) {
		$("#right-nav").toggleClass('active');
		$("#left-nav").removeClass('active');
	});
	if ($(window).width() > 980) {
		$(document).on("mouseenter", ".second-nav li.has-child", function() {
			//$(this).children('ul').stop().slideDown("slow");
			$(this).addClass("open");
		});
		$(document).on("mouseleave", ".second-nav li.has-child", function() {
			//$(this).children('ul').stop().slideUp("slow");
			$(this).removeClass("open");
		});
	}
	$('.second-nav').on('tap touchstart click', 'li.has-child span', function(e) {
		e.preventDefault();
		$(this).parent().siblings().removeClass('open');
		$(this).parent().find('.open').removeClass('open');
		$(this).parent().toggleClass("open");
	});
	$("<i class='arrow'></i>").appendTo("ul.second-nav li.has-child > a");
	$('.second-nav').on('tap touchstart click', 'li.has-child > a .arrow', function(e) {
		e.preventDefault();
		$(this).parent().parent().siblings().removeClass('open');
		$(this).parent().parent().find('.open').removeClass('open');
		$(this).parent().parent().toggleClass("open");
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
	$('.menu-wrap ul.second-nav li ul').parent().addClass('has-child');
	$('html').click(function() {
		$("#right-nav .menu-wrap").slideUp();
		$("#left-nav .menu-btn").removeClass('active');
		$("#right-nav .menu-btn").removeClass('active');
	});
	$('.menu-btn, .menu-wrap').click(function(e) {
		e.stopPropagation();
	});
	$("#left-nav .menu-btn").click(function(e) {
		$(this).toggleClass('active');
		$("#right-nav .menu-btn > span").removeClass('active');
		$("#right-nav .menu-wrap").slideUp();
	});
	$(".menu-close").click(function(e) {
		$("#left-nav .menu-btn").removeClass('active');
		$("#right-nav .menu-btn > span").removeClass('active');
		$("#right-nav .menu-wrap").slideUp();
	});
	$("#right-nav .menu-btn").click(function(e) {
		$("#right-nav .menu-wrap").slideToggle();
		$(this).toggleClass('active');
		$("#left-nav .menu-btn").removeClass('active');
	});
	$(".menu-close").click(function(e) {
		$("#right-nav .menu-wrap").slideUp();
		$("#right-nav .right-btn").removeClass('active');
	});
	if ($(window).width() > 980) {
		$(document).on("mouseenter", ".second-nav li.has-child", function() {
			$(this).children('ul').stop().slideDown("slow");
			$(this).addClass("open");
		});
		$(document).on("mouseleave", ".second-nav li.has-child", function() {
			$(this).children('ul').stop().slideUp("slow");
			$(this).removeClass("open");
		});
	}
	$('.second-nav').on('click', 'li.has-child span', function(e) {
		$(this).next().slideToggle("slow");
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
	columns.each(function() {
		currentHeight = $(this).height();
		if (currentHeight > tallestcolumn) {
			tallestcolumn = currentHeight;
		}
	});
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
	return this.css("margin-top", ($(this).parent().height() - $(this).height()) / 2 + 'px')
};
//$('.live-feeds-wrapper .avatar').verticalAlign();