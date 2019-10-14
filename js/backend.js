'use strict';

(function () {
  window.backend = {
    load: function (onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick/data';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case 200:
            onLoad(xhr.response);
            break;

          default: onError('Произошла ошибка: ' + xhr.status + ' ' + xhr.responseText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка!');
      });

      xhr.addEventListener('timeout', function () {
        onError('Истек таймаут ожидания ответа!');
      });

      xhr.timeout = 10000;
      xhr.open('GET', URL);
      xhr.send();
    },

    save: function (data, onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();

      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case 200:
            onLoad(xhr.response);
            break;

          default: onError('Произошла ошибка: ' + xhr.status + ' ' + xhr.responseText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Ошибка соединения с сервером');
      });

      xhr.addEventListener('timeout', function () {
        onError('Истек таймаут соединения с сервером');
      });

      xhr.timeout = 10000;
      xhr.open('POST', URL);
      xhr.send(data);
    }
  };
})();
