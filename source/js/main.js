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

  var width = 300; // ширина картинки
  var count = 4; // видимое количество изображений
  var list = document.querySelector('.trainers__list');
  var listElems = document.querySelectorAll('.trainers__item');

  var position = 0; // положение ленты прокрутки

  if (window.innerWidth <= 1024) {
    count = 2;
    document.querySelector('.trainers__arrow--prev').onclick = function () {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0);
      list.style.marginLeft = position + 'px';
    };

    document.querySelector('.trainers__arrow--next').onclick = function () {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
  } else {
    document.querySelector('.trainers__arrow--prev').onclick = function () {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0);
      list.style.marginLeft = position + 'px';
    };

    document.querySelector('.trainers__arrow--next').onclick = function () {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
  }

})();
