const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let interval = null;

function changeColor() {
  const color = randomIntegerFromInterval(0, colors.length);
  refs.body.style.backgroundColor = colors[color];
  console.log(`Стиль №${color}`);
}

function startChange() {
  refs.start.disable = true;
  interval = setInterval(changeColor, 1000);
}

function stopСhange() {
  refs.start.disabled = false;
  clearInterval(interval);
  console.log('Зупеняємо інтервал!!!');
}

refs.start.addEventListener('click', startChange);
refs.stop.addEventListener('click', stopСhange);
