const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

const html = document.querySelector('ul');
for (let i = 0; i < kuvat.length; i++) {

  const a = document.createElement('img');
  a.src += kuvat[i];
  a.alt += 'kissa';

  const b = document.createElement('li');

  b.appendChild(a);

  html.appendChild(b);

}