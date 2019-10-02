'use strict';
(function () {

  //  ОТКРЫТИЕ ЗАКРЫТИЕ ОКНА НАСТРОЙКИ ПЕРСОНАЖА

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');

  setupOpen.addEventListener('click', function () {
    setup.classList.remove('hidden');
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      setup.classList.remove('hidden');
    }
  });

  setupClose.addEventListener('click', function () {
    setup.classList.add('hidden');
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      setup.classList.add('hidden');
    }
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      setup.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', onPopupEscPress);
  document.removeEventListener('keydown', onPopupEscPress);

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
  };

  var closePopup = function () {
    setup.classList.add('hidden');
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

})();
