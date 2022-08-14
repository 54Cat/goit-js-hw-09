import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector("#datetime-picker");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");
const btnEl = document.querySelector("[data-start]");

let choosedDate = 0;

btnEl.disabled = true;
btnEl.addEventListener('click', onStartTimer)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose,
};

flatpickr(input, options);

function onClose(selectedDates) {
  const currentDate = Date.now();

  if (selectedDates[0] < currentDate) {
    Notiflix.Notify.failure('Please choose a date in the future');
  }
  else {
    choosedDate = selectedDates[0];
    btnEl.disabled = false;
  }
}

function onStartTimer() {
  btnEl.disabled = true;
  input.disabled = true;
  
  const intervalId = setInterval(() => {
    const currentDate = Date.now();
    const delta = choosedDate - currentDate;
    
    updateData(convertMs(delta));
    if (delta < 1000) {
      input.disabled = false;
      clearInterval(intervalId);
    }
  }, 1000);  
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0"); 
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateData({ days, hours, minutes, seconds }) {
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}