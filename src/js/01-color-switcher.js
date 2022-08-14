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
        const color = getRandomHexColor();
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