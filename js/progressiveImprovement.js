var img = document.querySelector('.javascript-hidden');
var speedBlock = document.querySelector('.javascript-speed');
img.classList.add('javascript-live');

//Добавляем управляющие элементы
var canv = '<canvas class="javascript-js" id="canvas" height="136" width="254"></canvas>';
speedBlock.innerHTML = speedBlock.innerHTML + canv;