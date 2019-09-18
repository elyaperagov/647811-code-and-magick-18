'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var HORIZONTAL_GAP = 55;
var VERTICAL_GAP = 65;
var FONT_GAP = 15;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_SPACE = 50;
var SHADOW_GAP = 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.font = '16px PT mono';
  ctx.textBaseline = 'hanging';
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getColor = function (i) {
  return i === 0 ? 'rgba(255, 0, 0, 1)' : 'hsla(240, 100%, 50%, ' + Math.random() + ')';
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + HORIZONTAL_GAP, CLOUD_Y + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + HORIZONTAL_GAP, CLOUD_Y + FONT_GAP * 2);

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];
  var maxTime = getMaxElement(times);
  var offset = 20;
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * i, VERTICAL_GAP + CLOUD_Y + BAR_HEIGHT + FONT_GAP);
    ctx.fillStyle = getColor(i);
    ctx.fillRect(CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * i, BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime + VERTICAL_GAP + offset, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + HORIZONTAL_GAP + (BAR_WIDTH + BAR_SPACE) * i, BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime + VERTICAL_GAP);
  }
};
