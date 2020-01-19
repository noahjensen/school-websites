$( document ).ready(function() {
	 
	 
	 
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