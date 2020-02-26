$(function() {
    // Инициализация
    $(".arrival").datepicker({});
    $(".exit").datepicker({});
    $(".temp").datepicker({
        inline: true
    });
});

// $('#my-element').datepicker([options])

// Доступ к экземпляру объекта
// $(".arrival").data("datepicker");
/*
$(function() {
    $("#date")
        .datepicker({
            nextText: "",
            prevText: "",
            changeMonth: true,
            changeYear: true
        })
        .mask("99/99/9999");
});*/
