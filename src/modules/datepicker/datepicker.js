$(function() {
    // Инициализация
    $(".arrival").datepicker({
        navTitles: {
            days: "MM yyyy"
        }
    });
    $(".exit").datepicker({
        navTitles: {
            days: "MM yyyy"
        }
    });
    $(".temp").datepicker({
        navTitles: {
            days: "MM yyyy"
        }
    });
    $(".period").datepicker({
        navTitles: {
            days: "MM yyyy"
        },
        range: true,
        multipleDatesSeparator: " - ",
        dateFormat: "dd M"
    });
    $(".none").datepicker({
        inline: true,
        navTitles: {
            days: "MM yyyy"
        },
 //       showButtonPanel: true,
        range: true,
        multipleDatesSeparator: " - ",
        clearButton: true,
        showButtonPanel: true,
 //       addButton: true,
//        todayButton: new Date()
    });
});
/*
// Доступ к экземпляру объекта
var myDatepicker = $(".mydatepicker").data("datepicker");
//myDatepicker.hide();
(function($) {
    $.fn.datepicker = function(options) {
        this.each(function() {
            const $this = $(this);
            const $panelButtons = $this.find(".datepicker--buttons");
            var defaults = {
                addButton: false
            };
        });

        return this;
    };
})(jQuery);*/
