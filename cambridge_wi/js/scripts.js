$(document).ready(function () {
    $('.menu-wrap').width($('#header').outerWidth());
    /* ---	Code for Menu ---- */

    $('.menu-wrap .second-nav li ul').parent().addClass('has-child');

    $('html').click(function () {
        $(".menu-wrap").slideUp();
        $("#right-nav .menu-btn > span").removeClass('active');
        $("#left-nav .menu-btn").removeClass('active');
    });
    $('.menu-btn').click(function (e) {
        e.stopPropagation();
    });

    $("#left-nav .menu-btn > span, .menu-close").click(function (e) {
        $("#left-nav .menu-wrap").slideToggle();
        $("#right-nav .menu-wrap").slideUp();
        $("#left-nav .menu-btn").toggleClass('active');
        $("#right-nav .menu-btn > span").removeClass('active');
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
                    $('.menu-wrap .second-nav > ul').css('height', 'auto'); //solve for all you browser stretchers out there!
                    setEqualHeight($('.menu-wrap .second-nav > ul'));
                }, 500);

            } else {
                $(".menu-wrap .second-nav > ul").css('height', 'auto');
            }
        });
    });
    $("#right-nav .menu-btn > span").click(function (e) {
        $("#right-nav .menu-wrap").slideToggle();
        $("#left-nav .menu-wrap").slideUp();
        $("#left-nav .menu-btn").removeClass('active');
        $(this).toggleClass('active');
    });
    if ($(window).width() > 980) {

        $(".second-nav li.has-child").hover(
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
    $('.second-nav li.has-child span').click(function () {
        $(this).next().slideToggle("slow");
        $(this).parent().toggleClass("open");
    });







    /* ---	Equal height function resizeable on window resize ---- */
    if ($(window).width() > 880) {
        delay(function () {
            $('.main .col-item').css('height', 'auto'); //solve for all you browser stretchers out there!
            setEqualHeight($('.main .col-item'));
        }, 500);
    }
    $(window).resize(function () {
        $('.menu-wrap').width($('#header').outerWidth());
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
