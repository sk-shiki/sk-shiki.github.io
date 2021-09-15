//チェックボックスのチェックを外す
$(function() {
    $('.drawer-item>a').click(function() {
        $('#drawer-check').removeAttr('checked').prop('checked', false).change();
    });
});

$(function() {
    $('.lineBox>a').click(function() {
        $('#drawer-check').removeAttr('checked').prop('checked', false).change();
    });
});

var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
    var scroll_top = $(window).scrollTop();
    $("#scroll span").text(scroll_top);

    $(".reason1 ").each(function() {
        var elem_pos = $(this).offset().top;
        $(this).find(".reason1 _pos span").text(Math.floor(elem_pos));

        //どのタイミングでフェードインさせるか
        if (scroll_top >= elem_pos - window_h + 150) {
            $(this).addClass("fadein");
        }
    });
});


var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
    var scroll_top = $(window).scrollTop();
    $("#scroll span").text(scroll_top);

    $(".reason2 ").each(function() {
        var elem_pos = $(this).offset().top;
        $(this).find(".reason2 _pos span").text(Math.floor(elem_pos));

        //どのタイミングでフェードインさせるか
        if (scroll_top >= elem_pos - window_h + 150) {
            $(this).addClass("fadein");
        }
    });
});

var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
    var scroll_top = $(window).scrollTop();
    $("#scroll span").text(scroll_top);

    $(".voice1").each(function() {
        var elem_pos = $(this).offset().top;
        $(this).find(".voice1 _pos span").text(Math.floor(elem_pos));

        //どのタイミングでフェードインさせるか
        if (scroll_top >= elem_pos - window_h + 150) {
            $(this).addClass("zoomIn");
        }
    });
});

var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
    var scroll_top = $(window).scrollTop();
    $("#scroll span").text(scroll_top);

    $(".voice2").each(function() {
        var elem_pos = $(this).offset().top;
        $(this).find(".voice2 _pos span").text(Math.floor(elem_pos));

        //どのタイミングでフェードインさせるか
        if (scroll_top >= elem_pos - window_h + 150) {
            $(this).addClass("zoomIn");
        }
    });
});

var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
    var scroll_top = $(window).scrollTop();
    $("#scroll span").text(scroll_top);

    $(".voice3").each(function() {
        var elem_pos = $(this).offset().top;
        $(this).find(".voice3 _pos span").text(Math.floor(elem_pos));

        //どのタイミングでフェードインさせるか
        if (scroll_top >= elem_pos - window_h + 150) {
            $(this).addClass("zoomIn");
        }
    });
});
