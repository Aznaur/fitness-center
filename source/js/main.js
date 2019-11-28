'use strict';

(function () {
  var numberOfMonths = document.querySelectorAll('.duration-list__item');

  for (var i = 0; i < numberOfMonths.length; i++) {
    numberOfMonths[i].addEventListener('click', function (evt) {
      var target = evt.target;

      if (target.classList.contains('duration-list__item--active')) {
        // target.classList.remove('duration-list__item--active');
      } else {
        var itemActive = document.querySelector('.duration-list__item--active');
        if (itemActive) {
          itemActive.classList.remove('duration-list__item--active');
        }
        target.classList.add('duration-list__item--active');
      }
    });
  }
})();
