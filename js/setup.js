'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSecondNames = ['да Мапья', ' Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}


var wizards = [
  {
    name: arrayRandElement(wizardNames) + ' ' + arrayRandElement(wizardSecondNames),
    coatColor: arrayRandElement(coatColors),
    eyesColor: arrayRandElement(eyesColors)
  },
  {
    name: arrayRandElement(wizardNames) + ' ' + arrayRandElement(wizardSecondNames),
    coatColor: arrayRandElement(coatColors),
    eyesColor: arrayRandElement(eyesColors)
  },
  {
    name: arrayRandElement(wizardNames) + ' ' + arrayRandElement(wizardSecondNames),
    coatColor: arrayRandElement(coatColors),
    eyesColor: arrayRandElement(eyesColors)
  },
  {
    name: arrayRandElement(wizardNames) + ' ' + arrayRandElement(wizardSecondNames),
    coatColor: arrayRandElement(coatColors),
    eyesColor: arrayRandElement(eyesColors)
  }
];


var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);


// userDialog.querySelector('.setup-similar').classList.remove('hidden');

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

//  ИЗМЕНЕНИЕ ЦВЕТА МАНТИИ ГЛАЗ И ФАЕРБОЛЛА

var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

var setColor = function (coat, eyes, fire) {
  coat.addEventListener('click', function () {
    coat.style.fill = arrayRandElement(coatColor);
  });
  eyes.addEventListener('click', function () {
    eyes.style.fill = arrayRandElement(eyesColor);
  });
  fire.addEventListener('click', function () {
    fire.style.backgroundColor = arrayRandElement(fireballColor);
  });
};

setColor(wizardCoat, wizardEyes, fireball);
