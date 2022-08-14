import Notiflix from 'notiflix';

const delayEL = document.querySelector('[name=delay]');
const stepEl = document.querySelector('[name=step]');
const amountEl = document.querySelector('[name=amount]');
const btnSubmit = document.querySelector('button');

btnSubmit.addEventListener('click', onStartCreatePromise);

function onStartCreatePromise(e) {
  e.preventDefault();

  const firstDelay = Number(delayEL.value);
  const stepDelay = Number(stepEl.value);
  const amount = Number(amountEl.value);
  let delay = firstDelay;

  for (position = 1; position <= amount; position++) {
    createPromise(position, delay).then(lookResultFulfilled).catch(lookResultRejected);
    delay += stepDelay;
  }
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  })
};

function lookResultFulfilled(result) {
  Notiflix.Notify.success(result);
};

function lookResultRejected(error) {
  Notiflix.Notify.failure(error);
};