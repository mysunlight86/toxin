$(function() {
    // Инициализация
    $(".arrival").datepicker({
        navTitles: {
            days: "MM yyyy"
        }
        // range: true,
        // multipleDatesSeparator: " - "
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
        range: true,
        multipleDatesSeparator: " - ",
        clearButton: true
        //       showButtonPanel: true,
        //       addButton: true,
        //        todayButton: new Date()
    });
});

// $(".arrival").datepicker({
//     onSelect: function(fd, d, picker) {
//         $(".arrival").val(fd.split("-")[0]);
//         $(".exit").val(fd.split("-")[1]);
//     }
// });

var $start = $(".start"),
    $end = $(".end");

$start.datepicker({
    onSelect: function(fd, date) {
        $end.data("datepicker").update("minDate", date);

        $end.focus();
    }
});
$end.datepicker({
    onSelect: function(fd, date) {
        $start.data("datepicker").update("maxDate", date);
    }
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

$(".mydatepicker").datepicker({
    onShow: function(input) {
        setTimeout(function() {
            const $panelButtons = $(".datepicker--buttons");
            const $btnApply = $(
                `<span class="datepicker--button" data-action="hide">
                    применить
                </span>`
            );
            $btnApply.unbind("click").bind("click", function() {
                $.datepicker.onHide(input);
            });

            $btnApply.appendTo($panelButtons);
        }, 1);
    }
});
