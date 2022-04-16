/* CODE */

function stmh() {
    $(".img_info").each(function () {
        var el_top = $(this).offset().top;
        var el_bottom = $(this).offset().top + $(this).outerHeight();
        var el_quart = (el_bottom - el_top) >> 2;
        var el_quart_top = el_top + el_quart; // 1/4 of div height
        var el_quart_bottom = el_bottom - el_quart; // 3/4 of div height
        var screen_bottom = $(window).scrollTop() + $(window).innerHeight();
        var screen_top = $(document).scrollTop();

        if (screen_bottom >= el_quart_top && screen_top <= el_quart_bottom) {
            // if div in view
            $(this).addClass("appear");
            $(".shadow_overlay", this).addClass("appear");
            $(".text", this).addClass("appear");
        } else {
            $(this).removeClass("appear");
            $(".shadow_overlay", this).removeClass("appear");
            $(".text", this).removeClass("appear");
        }
    });
}

$(document).ready(function () {
    stmh(); // initial load if divs in view (wiithout scroll)

    $(window).scroll(function () {
        stmh();
    });
});
