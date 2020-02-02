// Main js file

import './iq-dropdown'
//import './i18n'
//import './item-quantity-dropdown.min.js'
//import '../assets/css/item-quantity-dropdown.min.css'

import i18n from 'i18n-js';

i18n.translations["ru"] = {


  "%n bedroom": {
    "one": "{{count}} спальня",
    "few": "{{count}} спальни",
    "many": "{{count}} спален",
    "other": "{{count}} спален"
  },
  "%n bathroom": {
    "one": "{{count}} ванная комната",
    "few": "{{count}} ванные комнаты",
    "many": "{{count}} ванных комнат",
    "other": "{{count}} ванных комнат"
  },
  "%n bed": {
    "one": "{{count}} кровать",
    "few": "{{count}} кровати",
    "many": "{{count}} кроватей",
    "other": "{{count}} кроватей"
  },
  "%n visitor": {
    "one": "{{count}} гость",
    "few": "{{count}} гостя",
    "many": "{{count}} гостей",
    "other": "{{count}} гостей"
  },
};

i18n.pluralization["ru"] = function (count) {
  var key = count % 10 == 1 && count % 100 != 11 ? "one" : [2, 3, 4].indexOf(count % 10) >= 0 && [12, 13, 14].indexOf(count % 100) < 0 ? "few" : count % 10 == 0 || [5, 6, 7, 8, 9].indexOf(count % 10) >= 0 || [11, 12, 13, 14].indexOf(count % 100) >= 0 ? "many" : "other";
  return [key];
};

i18n.defaultLocale = "ru";
i18n.locale = "ru";

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
        .map(key => i18n.t(captions[key], { count: itemCount[key] }))
        .join(', ');
    },
  });
  $('.visitors').iqDropdown({
    getCustomMessage: function (itemCount, totalItems) {
      return i18n.t('%n visitor', { count: totalItems });
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
