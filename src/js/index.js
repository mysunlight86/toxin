// Main js file

import './iq-dropdown'

$(document).ready(function() {
  $('.room').iqDropdown2({
    selectionText: ['спальня', 'кровать', 'ванная комната'],
    textPlural: ['спальни', 'кровати', 'ванные комнаты'],
  });
  $('.visitors').iqDropdown({
    selectionText: ['гость'],
    textPlural: ['гостя'],
    onChange: function(id, count, totalItems) {
      console.log(id, count, totalItems);
    },
    beforeDecrement: function(id, itemCount) {
      if (id === "adult") {
        return itemCount.adult > itemCount.infant;
      }
      return true;
    },
    beforeIncrement: function(id, itemCount) {
      if (id === "infant") {
        return itemCount.adult > itemCount.infant;
      }
      return true;
    }
  });
});









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

// range-slider

$( function() {
  $( "#range" ).slider({
    range: true,
    min: 0,
    max: 15000,
    values: [ 5000, 10000 ],
    slide : function( event, ui ) {
      $( "#result" ).text( new Intl.NumberFormat().format( ui.values[ 0 ] ) + "₽ - " + new Intl.NumberFormat().format( ui.values[ 1 ] ) + "₽" );
  }
  });

  //Записываем значения ползунков в момент загрузки страницы
  //То есть значения по умолчанию
  $( "#result" ).text( new Intl.NumberFormat().format( $( "#range" ).slider( "values", 0 ) ) + "₽ - " + new Intl.NumberFormat().format( $( "#range" ).slider( "values", 1 ) ) + "₽" );

} );
