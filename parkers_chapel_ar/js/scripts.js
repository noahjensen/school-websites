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
            $('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
                $(this).parent().parent().removeClass('focus');
            });
            $(this).toggleClass('active').next('ul.options').toggle();
            $(this).parent().parent().toggleClass('focus');
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
    $('.menu-wrap .second-nav li ul').parent().addClass('has-child');
    $('html').click(function () {
        $("#right-nav .menu-btn span").show();
    });
    $('.menu-btn').click(function (e) {
        e.stopPropagation();
    });
    $("#left-nav .menu-btn > span, .menu-close").click(function (e) {
        $("#right-nav .menu-wrap").slideUp();
        $("#left-nav .menu-wrap").slideToggle();
        $("#right-nav .menu-btn span").toggle();
    });
    $("#right-nav .menu-btn > span").click(function (e) {
        $("#left-nav .menu-wrap").slideUp();
        $("#right-nav .menu-wrap").slideToggle();
        $(this).toggleClass('active');
    });
    if ($(window).width() > 980) {
        $(".second-nav li.has-child").hover(function () {
            //$(this).children('ul').stop().slideDown("slow");
            $(this).addClass("open");
        }, function () {
            //$(this).children('ul').stop().slideUp("slow");
            $(this).removeClass("open");
        });
    }
    $('.second-nav ul li.has-child span').click(function () {
        $(this).next().slideToggle("slow");
        $(this).parent().toggleClass("open");
    });
    /* ---	Equal height function resizeable on window resize ---- */
    if ($(window).width() > 880) {
        delay(function () {
            $('.menu-wrap .second-nav > ul').css('height', 'auto'); //solve for all you browser stretchers out there!
            setEqualHeight($('.menu-wrap .second-nav > ul'));
        }, 500);
    }
    $(window).resize(function () {
        if ($(window).width() > 880) {
            delay(function () {
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
    return this.css("margin-top", ($(this).parent().height() - $(this).height()) / 2 + 'px')
};
//$('.live-feeds-wrapper .avatar').verticalAlign();
