// plugin styles
//import '../assets/css/item-quantity-dropdown.min.css'

/* eslint-disable func-names */
(function ($) {
  const defaults = {
    maxItems: Infinity,
    minItems: 0,
    selectionText: 'item',
    textPlural: 'items',
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-content',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter',
      controlsRst: 'iqdropdown-menu-reset',
    },
    items: {},
//    resetData: () => {},
    onChange: () => {},
    beforeDecrement: () => true,
    beforeIncrement: () => true,
  };

  $.fn.iqDropdown = function (options) {
    this.each(function () {
      const $this = $(this);
      const $selection = $this.find('p.iqdropdown-selection').last();
      const $menu = $this.find('div.iqdropdown-menu');
      const $resetButton = $menu.find('button.iqdropdown-menu-reset');
      const $items = $menu.find('div.iqdropdown-menu-option');
      const itemCount = {};
      let totalItems = 0;

      const settings = $.extend(
        true,
        {
          getCustomMessage: () => {
            const usePlural = totalItems !== 1 && settings.textPlural.length > 0;
            const text = usePlural ? settings.textPlural : settings.selectionText;
            return `${totalItems} ${text}`;
          },
        },
        defaults,
        options,
      );

      function updateDisplay() {
        $selection.html(settings.getCustomMessage(itemCount, totalItems));
        toggleReset(totalItems);
      }

      function toggleReset(totalItems) {
        if (totalItems > 0) {
          $resetButton.show();
        } else {
          $resetButton.hide();
        }
      }

      function setItemSettings (id, $item) {
        const minCount = Number($item.data('mincount'));
        const maxCount = Number($item.data('maxcount'));
        const defaultCount = Number($item.data('defaultcount'));

        settings.items[id] = {
          minCount: Number.isNaN(Number(minCount)) ? 0 : minCount,
          maxCount: Number.isNaN(Number(maxCount)) ? Infinity : maxCount,
          defaultCount: Number.isNaN(Number(defaultCount)) ? 0 : defaultCount,
        };
      }

      function resetData(id, $counter) {
        $resetButton.click((event) => {
        const { items, onChange } = settings;
        itemCount[id] = items[id].defaultCount;
        $counter.html(itemCount[id]);
        totalItems = 0;
        for (const prop in itemCount) {
          if (itemCount.hasOwnProperty(prop)) {
            totalItems += itemCount[prop];
          }
        }
          updateDisplay();
          onChange(id, itemCount[id], totalItems);
//          toggleReset(totalItems)
          event.preventDefault();
          event.stopPropagation();
        });
      }

      function addControls (id, $item) {
        const $controls = $('<div />').addClass(settings.controls.controlsCls);
        const $decrementButton = $(`
          <button class="button-decrement">
            <i class="icon-decrement">-</i>
          </button>
        `);
        const $incrementButton = $(`
          <button class="button-increment">
            <i class="icon-increment">+</i>
          </button>
        `);
        const $counter = $(`<span>${itemCount[id]}</span>`).addClass(settings.controls.counterCls);

        $item.children('div').addClass(settings.controls.displayCls);
        $controls.append($decrementButton, $counter, $incrementButton);

        if (settings.controls.position === 'right') {
          $item.append($controls);
        } else {
          $item.prepend($controls);
        }

        $decrementButton.click((event) => {
          const { items, minItems, beforeDecrement, onChange } = settings;
          const allowClick = beforeDecrement(id, itemCount);

          if (allowClick && totalItems > minItems && itemCount[id] > items[id].minCount) {
            itemCount[id] -= 1;
            totalItems -= 1;
            $counter.html(itemCount[id]);
            updateDisplay();
            onChange(id, itemCount[id], totalItems);
            resetData(id, $counter);
//            toggleReset(totalItems)
          }

          event.preventDefault();
        });

        $incrementButton.click((event) => {
          const { items, maxItems, beforeIncrement, onChange } = settings;
          const allowClick = beforeIncrement(id, itemCount);

          if (allowClick && totalItems < maxItems && itemCount[id] < items[id].maxCount) {
            itemCount[id] += 1;
            totalItems += 1;
            $counter.html(itemCount[id]);
            updateDisplay();
            onChange(id, itemCount[id], totalItems);
            resetData(id, $counter);
 //           toggleReset(totalItems);
          }

          event.preventDefault();
        });

        // $resetButton.click((event) => {
        //   const { items, onChange } = settings;
        //   itemCount[id] = defaultCount;
        //   $counter.html(itemCount[id]);
        //   totalItems = 0;
        //   for (const prop in itemCount) {
        //     if (itemCount.hasOwnProperty(prop)) {
        //       totalItems += itemCount[prop];
        //     }
        //   }
        //   updateDisplay();
        //   onChange(id, itemCount[id], totalItems);
        //   event.preventDefault();
        //   event.stopPropagation();
        // });

        $item.click(event => event.stopPropagation());

        return $item;
      }

      $this.click(() => {
        $this.toggleClass('menu-open');
      });

      $items.each(function () {
        const $item = $(this);
        const id = $item.data('id');
        const defaultCount = Number($item.data('defaultcount') || '0');

        itemCount[id] = defaultCount;
        totalItems += defaultCount;
        setItemSettings(id, $item);
        addControls(id, $item);
//        resetData(id, itemCount[id], defaultCount);
      });

//      $resetButton.toggleClass('menu-open');

      // if (totalItems > 0) {
      //   $resetButton.show();
      // } else {
      //   $resetButton.hide();
      // }

      updateDisplay();
    });

    return this;
  };
}(jQuery));
