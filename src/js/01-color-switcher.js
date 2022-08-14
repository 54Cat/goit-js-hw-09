// Задание 1 - переключатель цветов

// Выполняй это задание в файлах 01-color-switcher.html и 01-color-switcher.js. Посмотри демо видео работы переключателя.

// В HTML есть кнопки «Start» и «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на случайное значение используя инлайн стиль. При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

// ВНИМАНИЕ
// Учти, на кнопку «Start» можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }



const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");
let intervalId = null;

btnStop.disabled = true;

btnStart.addEventListener('click', onStartSwitchColor);
btnStop.addEventListener('click', onStopSwitchColor);

function onStartSwitchColor() {
    btnStop.disabled = false;
    btnStart.disabled = true;

    intervalId = setInterval(() => {
        let color = getRandomHexColor();
        document.body.style.backgroundColor = color;
    }, 1000); 
}

function onStopSwitchColor() {
    btnStop.disabled = true;
    btnStart.disabled = false;

    clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}