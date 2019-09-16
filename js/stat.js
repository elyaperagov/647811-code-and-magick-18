'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var HORIZONTAL_GAP = 55;
var VERTICAL_GAP = 55;
// var GAP = 10;
var FONT_GAP = 15;
// var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_SPACE = 50;
// var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  // ctx.font = '16px Mono';
  ctx.textBaseline = 'hanging';
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + HORIZONTAL_GAP, CLOUD_Y + 10);
  ctx.fillText('Список результатов:', CLOUD_X + HORIZONTAL_GAP, CLOUD_Y + 30);

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * i, VERTICAL_GAP + CLOUD_Y + BAR_HEIGHT + FONT_GAP);
    ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsla(240, 100%, 50%, ' + Math.random() + ')';
    ctx.fillRect(CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * i, CLOUD_Y + VERTICAL_GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * i, (BAR_HEIGHT * times[i]) / maxTime + 10);
  }
};


// ctx.fillStyle = '#000';
// ctx.fillText('Вы', CLOUD_X + HORIZONTAL_GAP, VERTICAL_GAP + CLOUD_Y + BAR_HEIGHT + FONT_GAP);
// ctx.fillStyle = 'rgba(255, 0, 0, 1)';
// ctx.fillRect(CLOUD_X + HORIZONTAL_GAP, CLOUD_Y + VERTICAL_GAP, BAR_WIDTH, BAR_HEIGHT);


/*
  var playerIndex = 0;
  var playerName = 'Вы';

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * 0, VERTICAL_GAP + CLOUD_Y + BAR_HEIGHT + FONT_GAP);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * 0, CLOUD_Y + VERTICAL_GAP, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillStyle = '#000';
  ctx.fillText('Кекс', CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * 1, VERTICAL_GAP + CLOUD_Y + BAR_HEIGHT + FONT_GAP);
  ctx.fillStyle = 'hsla(240, 100%, 50%, '+ Math.random() +')';
  ctx.fillRect(CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * 1, CLOUD_Y + VERTICAL_GAP, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillStyle = '#000';
  ctx.fillText('Катя', CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * 2, VERTICAL_GAP + CLOUD_Y + BAR_HEIGHT + FONT_GAP);
  ctx.fillStyle = 'hsla(240, 100%, 50%, '+ Math.random() +')';
  ctx.fillRect(CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * 2, CLOUD_Y + VERTICAL_GAP, BAR_WIDTH, BAR_HEIGHT);

  ctx.fillStyle = '#000';
  ctx.fillText('Игорь', CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * 3, VERTICAL_GAP + CLOUD_Y + BAR_HEIGHT + FONT_GAP);
  ctx.fillStyle = 'hsla(240, 100%, 50%, '+ Math.random() +')';
  ctx.fillRect(CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * 3, CLOUD_Y + VERTICAL_GAP, BAR_WIDTH, BAR_HEIGHT);
};*/

