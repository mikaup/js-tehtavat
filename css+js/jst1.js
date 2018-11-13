document.getElementById('berry').setAttribute('style','background : red');

document.querySelector('[data-foodType=squishy]').setAttribute('style', 'background: orange');



const a = document.getElementsByTagName('li');
console.log(a);


const b = document.getElementsByTagName('li');
for (let i =0; i < b.length; i++){
  b[i].style.width = '100px';
  b[i].style.listStyleType = 'none';
  b[3].style.backgroundColor = 'green';



}

const x = document.querySelectorAll('li');
console.log(x);

const y = document.querySelectorAll('li');

y.forEach((list) => {
  list.style.border = 'solid';
  console.log(list);
});