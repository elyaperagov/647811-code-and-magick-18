'use strict';

(function () {

  var setupUserName = document.querySelector('.setup-user-name');

  setupUserName.addEventListener('invalid', function () {
    if (setupUserName.validity.tooShort) {
      setupUserName.setCustomValidity('В имени должно быть минимум 2 символа');
    } else if (setupUserName.validity.tooLong) {
      setupUserName.setCustomValidity('В имени должно быть не более 25 символов');
    } else if (setupUserName.validity.valueMissing) {
      setupUserName.setCustomValidity('Заполните это поле');
    }
  });

})();
