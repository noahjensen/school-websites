$(document).ready(function () {
    /* ---	Code for Menu ---- */
    $('.menu-wrap .second-nav li ul').parent().addClass('has-child');

    $('html').click(function () {
        $("#left-nav").removeClass('active');
        $("#right-nav").removeClass('active');
    });
    $('.menu-btn, .menu-wrap').click(function (e) {
        e.stopPropagation();
    });

    $("#left-nav .menu-btn").click(function (e) {
        $("#right-nav .menu-wrap").slideUp();
        $("#left-nav .menu-wrap").slideToggle();
        $("#right-nav .menu-btn").removeClass('active');
        $(this).toggleClass('active');
    });
    $(".menu-close").click(function (e) {
        $("#right-nav .menu-wrap").slideUp();
        $("#left-nav .menu-wrap").slideUp();
        $("#left-nav .menu-btn").removeClass('active');
    });
    $("#right-nav .menu-btn").click(function (e) {
        $("#left-nav .menu-wrap").slideUp();
        $("#left-nav .menu-btn").removeClass('active');
        $("#right-nav .menu-wrap").slideToggle('active');
        $(this).toggleClass('active');
    });
    if ($(window).width() > 980) {

        $(".second-nav li.has-child").hover(
            function () {
                //$(this).children('ul').stop().slideDown("slow");
                $(this).addClass("open");
            },
            function () {
                //$(this).children('ul').stop().slideUp("slow");
                $(this).removeClass("open");
            }
        );

    }
    $('.second-nav li.has-child span').click(function () {
        // $(this).next().slideToggle("slow");
        $(this).parent().toggleClass("open");
    });

    $('.second-nav li.has-child ul li A').click(function () {
        // $(this).next().slideToggle("slow");
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
