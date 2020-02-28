import './air-datepicker'

$(function() {
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
        clearButton: true,
        applyButton: true
    });
    $(".mydatepicker").datepicker({
        clearButton: true,
        applyButton: true
    });
});

// $(".arrival").datepicker({
//     onSelect: function(fd, d, picker) {
//         $(".arrival").val(fd.split("-")[0]);
//         $(".exit").val(fd.split("-")[1]);
//     }
// });
