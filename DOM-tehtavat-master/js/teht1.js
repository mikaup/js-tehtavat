document.querySelectorAll('td')[0].innerHTML = 'Mika';
document.querySelectorAll('td')[1].innerHTML = 'Uponen';
document.querySelectorAll('td')[2].innerHTML = 'ei ole';


const tokarivi = document.querySelectorAll('tr')[1];

tokarivi.innerHTML += '<td>045 110 1920</td>';

const lisays = document.querySelectorAll('tr')[0];

lisays.innerHTML += '<th>Puh.</th>';

document.querySelectorAll('th')[2].innerHTML = delete('th');
document.querySelectorAll('td')[2].innerHTML = delete('td');


