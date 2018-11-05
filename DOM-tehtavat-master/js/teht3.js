const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

const html = document.querySelector('ul');

for (let i = 0; i < kuvat.length; i++) {
  html.innerHTML += '<li><img src="' + kuvat[i] + '"></li>';
}