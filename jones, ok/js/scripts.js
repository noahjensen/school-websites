$(document).ready(function () {


	

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
		$(".left-nav.menu-wrap").removeClass('active');
		$("#slider").removeClass('open');
		$("body").removeClass('no_overflow');
	});
	$('.menu-btn, .left-nav.menu-wrap').click(function (e) {
		e.stopPropagation();
	});


	$("#left-nav .menu-btn > span, .menu-close").click(function (e) {
		$("#right-nav .menu-wrap").slideUp();
		$(".left-nav.menu-wrap").toggleClass('active');
		$("#slider").toggleClass('open');
		$('body').toggleClass('overflow-hidden');
		$("#right-nav .menu-btn > span").removeClass('active');
	});
	$("#right-nav .menu-btn > span").click(function (e) {

		
		$("#right-nav .menu-wrap").slideToggle("slow", function () {
		});
		$("#left-nav").removeClass('active');
		$("#slider").removeClass('open');
		$("body").removeClass('no_overflow');
		$(this).toggleClass('active');
	});
  
    
  //menu hover ----------------------------------------------//  
    
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
		e.preventDefault();
		$(this).parent().siblings().removeClass('open');
		$(this).parent().find('.open').removeClass('open');
		$(this).parent().toggleClass("open");
	});

// end menu hover ----------------------------------------------// 

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
