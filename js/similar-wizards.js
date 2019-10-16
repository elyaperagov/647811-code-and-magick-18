'use strict';

(function () {

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

  window.arrayRandElement = arrayRandElement;

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

  var coatColor;
  var eyesColor;
  var wizards = [];

  var updateWizards = function () {

    var sameCoatWizards = wizards.filter(function(it) {
      return it.colorCoat === coatColor;
    });
    var sameEyesWizards = wizards.filter(function(it) {
      return it.colorEyes === eyesColor;
    });

    render(sameCoatWizards.concat(sameEyesWizards).concat(wizards));
  }


var wizardTemplate = document.querySelector('#similar-wizard-template');

 var renderWizard = function (wizard) {
    var element = wizardTemplate.content.cloneNode(true);

    var wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    element.querySelector('.setup-similar-label').innerText = wizard.name;

    return element;
  };

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  var render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }

    similar.classList.remove('hidden');
  };

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var wizardElement = document.querySelector('.setup-wizard');

  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', function () {
    var newColor = getRandomElement(coatColors);
    this.style.fill = newColor;
    coatColor = newColor;
    updateWizards();
  });


  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    var newColor = getRandomElement(eyesColors);
    this.style.fill = newColor;
    eyesColor = newColor;
    updateWizards();
  });

  var onLoad = function (data) {
    wizards = data;
    updateWizards();
  };

  var form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onLoadSave, onError);
    evt.preventDefault();
  });

  var onLoadSave = function () {
    userDialog.classList.add('hidden');
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  //var URL = 'https://js.dump.academy/code-and-magick/data';
  window.backend.load(onLoad, onError);
})();
