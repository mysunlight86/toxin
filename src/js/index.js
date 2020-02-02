// Main js file

import './iq-dropdown'
//import './i18n'
//import './item-quantity-dropdown.min.js'
//import '../assets/css/item-quantity-dropdown.min.css'

//import i18n from './i18n';
import 'roddeh-i18n'

i18n.translator.add({
  values: {
    "%n bathroom": [
      [0, 0, "%n ванных"],
      [1, 1, "%n ванная"],
      [2, 4, "%n ванные"],
      [5, null, "%n ванных"]
    ],
    "%n bedroom": [
      [0, 0, "%n спален"],
      [1, 1, "%n спальня"],
      [2, 4, "%n спальни"],
      [5, null, "%n спален"]
    ],
    "%n bed": [
      [0, 0, "%n кроватей"],
      [1, 1, "%n кровать"],
      [2, 4, "%n кровати"],
      [5, null, "%n кроватей"]
    ],
    "%n visitor": [
      [0, 0, "%n гостей"],
      [1, 1, "%n гость"],
      [2, 4, "%n гостя"],
      [5, null, "%n гостей"],
    ],
    "#HOW_MANY_VISITIRS_MSG" : "Сколько гостей?",
    "(ru) How many visitors?" : "Сколько гостей?",
    "(en) How many visitors?" : "How many visitors?",
  }
});

var captions = {
  bathroom: "%n bathroom",
  bedroom: "%n bedroom",
  bed: "%n bed"
};

$(document).ready(function() {
  $('.room').iqDropdown({
    minItems: 2,
    onChange: function(id, count, totalItems) {
      console.log(id, count, totalItems);
    },
    getCustomMessage: function (itemCount, totalItems) {
      return Object.keys(itemCount)
        .map(key => i18n(captions[key], itemCount[key]))
        .join(', ');
    },
  });
  $('.visitors').iqDropdown({
    getCustomMessage: function (itemCount, totalItems) {
      return i18n('%n visitor', totalItems);
    },
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
