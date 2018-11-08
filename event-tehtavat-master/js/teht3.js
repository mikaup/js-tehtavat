const luku1 = document.querySelector('#num1');
const luku2 = document.querySelector('#num2');

const summa = document.querySelector('#sum');
const erotus = document.querySelector('#sub');
const kerto = document.querySelector('#multi');
const jako = document.querySelector('#div');
const p = document.querySelector('#vastaus');
let vastaus;

summa.addEventListener('click', function() {
  vastaus = +luku1.value + +luku2.value;
  p.innerHTML = vastaus;
});

erotus.addEventListener('click', function() {
  vastaus = luku1.value - luku2.value;
  p.innerHTML = vastaus;
});

kerto.addEventListener('click', function() {
  vastaus = luku1.value * luku2.value;
  p.innerHTML = vastaus;
});

jako.addEventListener('click', function() {
  vastaus = luku1.value / luku2.value;
  p.innerHTML = vastaus;
});

