$( document ).ready(function() {
	 $('.menu-wrap ul.second-nav li ul').parent().addClass('has-child');
	 $("#left-nav .menu-btn > span, .menu-close").click(function(e) {
                $("#left-nav .menu-wrap").slideToggle();
                $("#left-nav").toggleClass('active');

                        var headerheight = $('#header').height();
                        var windowheight = $(window).height();
                        var imgheight = windowheight - headerheight;
                        $('#left-nav .menu-wrap').css("min-height", imgheight);

            });
            $('#left-nav .schools-menu').click(function() {
                $('.menu-wrap ul.first-nav, .menu-wrap .second-nav').hide();
                $('.menu-wrap .schools-nav').slideDown();
                $('#left-nav.active .first-menu').removeClass('active');
                $(this).addClass('active');
                $('.menu-wrap').addClass('school-wrap');
                $('#left-nav .menu-btn').addClass('school-active-btn');
            });
            $('#left-nav .first-menu').click(function() {
                $('.menu-wrap .schools-nav').hide();
                $('.menu-wrap .first-nav, .menu-wrap .second-nav').slideDown();

                $('#left-nav .schools-menu').removeClass('active');
                $(this).addClass('active');
                $('.menu-wrap').removeClass('school-wrap');
                $('#left-nav .menu-btn').removeClass('school-active-btn');
            }); 
    
    
    if ($(window).width() > 980) {

                $("ul.second-nav li.has-child").hover(
                    function() {
                        $(this).children('ul').stop().slideDown("slow");
                        $(this).addClass("open");
                    },
                    function() {
                        $(this).children('ul').stop().slideUp("slow");
                        $(this).removeClass("open");
                    }
                );

            }
            $('ul.second-nav li.has-child span').click(function() {
                $(this).next().slideToggle("slow");
                $(this).parent().toggleClass("open");
            });
	 
});




//set max height----------------------------------------------//
function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
    function() {
        currentHeight = $(this).height();
        if(currentHeight > tallestcolumn) {
            tallestcolumn  = currentHeight;
            }
        }
    );
 columns.height(tallestcolumn);
}

var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
    };
})();
//vertically align----------------------------------------------//
jQuery.fn.verticalAlign = function ()
{
    return this
            .css("margin-top",($(this).parent().height() - $(this).height())/2 + 'px' )
};
 
 //$('.live-feeds-wrapper .avatar').verticalAlign();