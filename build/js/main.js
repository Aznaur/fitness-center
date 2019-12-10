'use strict';

(function () {
  var numberOfMonths = document.querySelectorAll('.duration-list__item');
  var element = document.querySelector('#tel-field');

  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var mask = IMask(element, maskOptions);

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

  var marginRightItem = 40;
  var width = document.querySelector('.trainers__item').offsetWidth + marginRightItem; // ширина картинки
  var count = 4; // видимое количество изображений
  var list = document.querySelector('.trainers__list');
  var listElems = document.querySelectorAll('.trainers__item');

  var position = 0; // положение ленты прокрутки

  if (window.innerWidth < 1200) {
    marginRightItem = 30;
    width = document.querySelector('.trainers__item').offsetWidth + marginRightItem;
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
  }
  if (window.innerWidth < 768) {
    marginRightItem = 30;
    width = 226 + marginRightItem;
    count = 1;
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

  var marginReviewsItem = 30;
  var reviewsWidth = document.querySelector('.reviews__item').offsetWidth + marginReviewsItem;
  var reviewsCount = 1;

  var reviewsList = document.querySelector('.reviews__list');
  var reviewsListElems = document.querySelectorAll('.reviews__item');
  var reviewsPosition = 0;

  if (window.innerWidth < 768) {
    reviewsWidth = 226 + marginReviewsItem;
    document.querySelector('.reviews__arrow--prev').onclick = function () {
      reviewsPosition += reviewsWidth * reviewsCount;
      reviewsPosition = Math.min(reviewsPosition, 0);
      reviewsList.style.marginLeft = reviewsPosition + 'px';
    };

    document.querySelector('.reviews__arrow--next').onclick = function () {
      reviewsPosition -= reviewsWidth * reviewsCount;
      reviewsPosition = Math.max(reviewsPosition, -reviewsWidth * (reviewsListElems.length - reviewsCount));
      reviewsList.style.marginLeft = reviewsPosition + 'px';
    };
  } else {
    document.querySelector('.reviews__arrow--prev').onclick = function () {
      reviewsPosition += reviewsWidth * reviewsCount;
      reviewsPosition = Math.min(reviewsPosition, 0);
      reviewsList.style.marginLeft = reviewsPosition + 'px';
    };

    document.querySelector('.reviews__arrow--next').onclick = function () {
      reviewsPosition -= reviewsWidth * reviewsCount;
      reviewsPosition = Math.max(reviewsPosition, -reviewsWidth * (reviewsListElems.length - reviewsCount));
      reviewsList.style.marginLeft = reviewsPosition + 'px';
    };
  }

})();
