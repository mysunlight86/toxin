// Main js file

$(document).ready(function () {
    $('.iqdropdown').iqDropdown(
        {
            // max total items
            maxItems: Infinity,
            // min total items
            minItems: 0,
            // text to show on the dropdown
            selectionText: 'гость',
            // text to show for multiple items
            textPlural: 'гостей',
            // buttons to increment/decrement
            controls: {
              position: 'right',
              displayCls: 'iqdropdown-item-display',
              controlsCls: 'iqdropdown-item-controls',
              counterCls: 'counter'
            },
            // fires when an item quantity changes
            onChange: (id, count, totalItems) => {},
            // return false to prevent an item decrement
            beforeDecrement: (id, itemCount) => {},
            // return false to prevent an item increment
            beforeIncrement: (id, itemCount) => {}
          },
    );
  
    $('.my-datepicker').datepicker([options]);
  
  });

/*$(document).ready(() => {
    $('.iqdropdown').iqDropdown({ [options] });
  });*/

/*
$(document).ready(function() {
  $('.wrapper').css('background-color', 'green');
});

$( document ).ready(function() {
  console.log( "ready!" );
});
*/

/*
var $datepicker = $('.js-date');
            var dateToday = new Date();

$datepicker.each(function() {
                    $(this)
                        .datepicker({
                            classes: 'bb-datepicker',
                            dateFormat: 'dd.mm.yy',
                            autoClose: true,
                            minDate: dateToday,
                            inline: true
                        })
                        .on('click', function() {
                            $(this)
                                .next()
                                .addClass('is-open');
                            $html.addClass('is-fixed');
                        })
                        .data('datepicker')
                        .selectDate(dateToday);
                });

                let $datepickerInline = $('.datepicker-inline');
                let header = $(
                    '<div class= "datepicker-inline__header"><span>Выберите дату</span> <svg class="icon icon-close datepicker-inline__close js-date-inline--close"><use xlink:href="img/sprite.svg#close"></use></svg></div>'
                );
                let btn = $(
                    '<div class="datepicker-inline__btn"><button class="btn btn-default datepicker-inline__btn js-date-inline--select">Выбрать дату</button></div>'
                );
                $datepickerInline
                    .find('.datepicker')
                    .wrap('<div class="datepicker-inline__inner">');
                header.prependTo($datepickerInline);
                btn.appendTo($datepickerInline);

                $(document).on('click', '.js-date-inline--close', function(e) {
                    e.stopPropagation();
                    $(this)
                        .closest('.datepicker-inline')
                        .removeClass('is-open')
                        .end()
                        .data('datepicker')
                        .selectDate();
                    $html.removeClass('is-hidden');
                });
                */
