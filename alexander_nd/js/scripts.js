$( document ).ready(function() {
			var ah = $('#slider .left-slider').height();
			var ph = $('.right-slider img').height();
			var mh = (ph - ah) / 2;
			$('#slider .left-slider').css('margin-top', mh);
			
			$('.tips .tip > span').click(function() {
				$('.tips .tip').removeClass('active');
				$('.tips .tip').animate({
					top: '0'
				});
				$('.tip-content').fadeOut();
				$(this).parent().addClass('active');
				$('.tips .tip.active').prevAll().animate({
					top: '-200'
				});
				$('.tips .tip.active').animate({
					top: '-200'
				}, function() {
				$(this).find('.tip-content').fadeIn();
			  });
				
			});
			$(".left-menu").on('click', function(e){
    	$(".overlay-close").trigger("click");
    	});
	$("#right-nav button").on('click', function(e){
		$("body").addClass('noscroll');
	});
	$(".left-menu, .overlay-close").on('click', function(e){
		$("body").removeClass('noscroll');
	});
	/* ---	Equal height function resizeable on window resize ---- */
	  if ($(window).width() > 880) {			
			 delay(function(){			
				$('.main .col-item').css('height','auto'); //solve for all you browser stretchers out there!
				setEqualHeight($('.main .col-item'));
			}, 500);
		}  
 	$(window).resize(function() {
		 if ($(window).width() > 880) {
			 var ah = $('#slider .left-slider').height();
			var ph = $('.right-slider img').height();
			var mh = (ph - ah) / 2;
			$('#slider .left-slider').css('margin-top', mh);
			delay(function(){
				$('.main .col-item').css('height','auto'); //solve for all you browser stretchers out there!
				setEqualHeight($('.main .col-item'));
			}, 500);
	 
		}  
		 else {
			 $(".main .col-item").css('height', 'auto');
		}
	});  
	 
});

/* ========================
	SCROLLING
======================== */

$( document ).ready(function() {
	$('.goto a[href^="#"]').on('click',function (e) {
		
	    var target = this.hash;
	    $target = $(target);
	    
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 200
	    }, 1000, 'swing', function () {
	
	    });
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
$.fn.vAlign = function() {
    return this.each(function(i) {
        var ah = $(this).height();
        var ph = $(this).parent().height();
        var mh = (ph - ah) / 2;
        $(this).css('margin-top', mh);
        $('#slider .left-slider').css('margin-top', mh);
    });
};
(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn = overlay.querySelector( 'button.overlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };
		s = Snap( overlay.querySelector( 'svg' ) ), 
		path = s.select( 'path' ),
		pathConfig = {
			from : path.attr( 'd' ),
			to : overlay.getAttribute( 'data-path-to' )
		};

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			
			var onEndTransitionFn = function( ev ) {
				classie.remove( overlay, 'close' );
			};
			
			path.animate( { 'path' : pathConfig.from }, 400, mina.linear, onEndTransitionFn );
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
			path.animate( { 'path' : pathConfig.to }, 400, mina.linear );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn.addEventListener( 'click', toggleOverlay );
})();
 