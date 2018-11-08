const kuva = document.querySelector('#kuva');
const p = document.querySelector('p');

kuva.addEventListener('mouseenter', function() {
  p.style.display = 'block';
});

kuva.addEventListener('mouseleave', function() {
  p.style.display = 'none';
});