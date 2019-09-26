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


//userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

setupOpen.addEventListener('click', function() {
  setup.classList.remove('hidden');
});

setupOpen.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 13) {
      setup.classList.remove('hidden');
  }
});

setupClose.addEventListener('click', function() {
  setup.classList.add('hidden');
});

document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      setup.classList.add('hidden');
    }
  });

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) {
    setup.classList.add('hidden');
  }
});

