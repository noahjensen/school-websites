function setEqualHeight(e) {
    var t = 0;
    e.each(function() {
        currentHeight = $(this).height(), currentHeight > t && (t = currentHeight);
    }), e.height(t);
}

$(document).ready(function() {
    $(".menu-wrap .generated-links").gridalicious({
        gutter: 0,
        width: 370
    }), $("#change_language_form select").each(function() {
        var e = $(this), t = $(this).children("option").length;
        e.addClass("s-hidden"), e.wrap('<div class="select"></div>'), e.after('<div class="styledSelect"></div>');
        var a = e.next("div.styledSelect");
        a.text(e.children("option").eq(0).text()), a.text(e.children("option:selected").text());
        for (var n = $("<ul />", {
            class: "options"
        }).insertAfter(a), s = 0; s < t; s++) $("<li />", {
            text: e.children("option").eq(s).text(),
            rel: e.children("option").eq(s).val()
        }).appendTo(n);
        var i = n.children("li");
        a.click(function(e) {
            e.stopPropagation(), a.hasClass("active") ? ($(this).removeClass("active").next("ul.options").removeClass("open"), 
            $(this).parent().parent().removeClass("focus")) : ($(this).addClass("active").next("ul.options").addClass("open"), 
            $(this).parent().parent().addClass("focus")), $("#right-nav .menu-btn > span").removeClass("active"), 
            $("#left-nav, #header").removeClass("active");
        }), a.parent().prev().click(function(e) {
            e.stopPropagation(), $(this).parent().toggleClass("focus").find("ul.options").toggleClass("open");
        });
        var l = e.children("option:selected").index();
        return i.eq(l).addClass("selected"), i.click(function(t) {
            t.stopPropagation(), $(".options li").removeClass("selected"), $(this).addClass("selected"), 
            a.text($(this).text()).removeClass("active"), a.parent().parent().removeClass("focus"), 
            e.val($(this).attr("rel")), n.removeClass("open"), e.trigger("change");
        }), $(document).click(function() {
            a.removeClass("active"), a.parent().parent().removeClass("focus"), n.removeClass("open");
        }), $(this);
    }), $(".menu-wrap .generated-links li ul").parent().addClass("has-child"), $("html").click(function() {
        $("#right-nav .menu-btn > span").removeClass("active"), $("#left-nav, #header").removeClass("active");
    }), $(".menu-btn").click(function(e) {
        e.stopPropagation();
    }), $("#left-nav .menu-btn > span").click(function(e) {
        var t = $("#slider").height();
        $("#left-nav .menu-wrap").css("min-height", t), $(window).resize(function() {
            var e = $("#slider").height();
            $("#left-nav .menu-wrap").css("min-height", e);
        }), $("#left-nav").toggleClass("active"), $("#left-nav").hasClass("active") ? $("#header").addClass("active") : $("#header").removeClass("active"), 
        $("#right-nav .menu-btn > span").removeClass("active"), $("#change_language_form form").removeClass("focus"), 
        $("#change_language_form .styledSelect").removeClass("active"), $("#change_language_form .options").removeClass("open");
    }), $(".menu-close").click(function(e) {
        $("#left-nav, #header, #right-nav .menu-btn > span").removeClass("active");
    }), $("#right-nav .menu-btn > span").click(function(e) {
        var t = $("#slider").height();
        $("#left-nav .menu-wrap").css("min-height", t), $(window).resize(function() {
            var e = $("#slider").height();
            $("#left-nav .menu-wrap").css("min-height", e);
        }), $("#left-nav").removeClass("active"), $(this).toggleClass("active"), $("#right-nav .menu-btn > span").hasClass("active") ? $("#header").addClass("active") : $("#header").removeClass("active"), 
        $("#change_language_form form").removeClass("focus"), $("#change_language_form .styledSelect").removeClass("active"), 
        $("#change_language_form .options").removeClass("open");
    }), $(window).width() > 980 && ($(document).on("mouseenter", ".generated-links li.has-child", function() {
        $(this).addClass("open");
    }), $(document).on("mouseleave", ".generated-links li.has-child", function() {
        $(this).removeClass("open");
    })), $(".generated-links").on("click", "li.has-child span", function(e) {
        e.preventDefault(), $(this).parent().siblings().removeClass("open"), $(this).parent().find(".open").removeClass("open"), 
        $(this).parent().toggleClass("open");
    }), $("<i class='arrow'></i>").appendTo(".generated-links li.has-child > a"), $(".generated-links").on("click", "li.has-child > a .arrow", function(e) {
        e.preventDefault(), $(this).parent().parent().siblings().removeClass("open"), $(this).parent().parent().find(".open").removeClass("open"), 
        $(this).parent().parent().toggleClass("open");
    });
});

var delay = function() {
    var e = 0;
    return function(t, a) {
        clearTimeout(e), e = setTimeout(t, a);
    };
}();

jQuery.fn.verticalAlign = function() {
    return this.css("margin-top", ($(this).parent().height() - $(this).height()) / 2 + "px");
};
//# sourceMappingURL=scripts-dist.js.map