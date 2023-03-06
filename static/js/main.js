"use strict";
$(function () {
    var t = $(".wrap-scrollbar"),
        l = t.parents(".wrap"),
        i = [];
    t.find("header,section").each(function () {
        i.push($(this).offset().left);
    }),
        t.scroll(function () {
            var a = t.scrollLeft();
            i.includes(a)
                ? l.attr("data-current", i.indexOf(a))
                : i.forEach(function (a) {
                      i.indexOf(a);
                  });
        }),
        $("[data-section-link]").click(function (a) {
            a.preventDefault();
            a = parseInt($(this).data("section-link"));
            t.addClass("free"),
                l.attr("data-current", a),
                $(t)
                    .stop()
                    .animate({ scrollLeft: i[a] + "px" }, 500, function () {
                        t.removeClass("free");
                    });
        }),
        $("[data-modal-call]").click(function (a) {
            a.preventDefault(), $("html").addClass("modal-called"), $(".modal-bg").fadeIn(function () {}), $('.modal[data-modal="' + $(this).attr("data-modal-call") + '"]').fadeIn();
        }),
        $(".js-modal-close, .modal-bg").click(function (a) {
            a.preventDefault(), $(".modal-bg, .modal:visible").fadeOut(), $("html").removeClass("modal-called");
        }),
        $("[data-highlight]").hover(
            function () {
                console.log($(this).attr("data-highlight")), $('[data-highlight-aim="' + $(this).attr("data-highlight") + '"]').addClass("ish");
            },
            function () {
                $('[data-highlight-aim="' + $(this).attr("data-highlight") + '"]').removeClass("ish");
            }
        );


        $('.js-copy-link').click(function(e){
            e.preventDefault();

            var dummy = document.createElement('input'),
            text = window.location.href;

            document.body.appendChild(dummy);
            dummy.value = text;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);

            $("html").addClass("modal-called"), 
            $(".modal-bg").fadeIn(function () {}), 
            $('.modal[data-modal="link"]').fadeIn();

        })


        //if()
        //console.log()
        var str = window.location.href.split("#")[1];
        if(str){
            if(str == 'donate'){
                $("[data-section-link='4']").click();
            }
        }

});
