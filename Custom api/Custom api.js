'use strict';



let max = 3;
let min = 1;
 let   numero =  Math.floor(Math.random() * max) + min;
console.log(numero);
   if(numero == 1){
       fetch('http://api.tvmaze.com/search/shows?q='+ 'Batman' ).
       then(function(vastaus) {
           return vastaus.json();
       }).
       then(function(json) {
           console.log(json);
           nayta(json);
       }).
       catch(function(error) {
           console.log(error);
       });

   }else if (numero == 2){
       fetch('http://api.tvmaze.com/search/shows?q='+ 'Iron man' ).
       then(function(vastaus) {
           return vastaus.json();
       }).
       then(function(json) {
           console.log(json);
           nayta(json);
       }).
       catch(function(error) {
           console.log(error);
       });
   }else if (numero ==3){
       fetch('http://api.tvmaze.com/search/shows?q='+ 'spider man' ).
       then(function(vastaus) {
           return vastaus.json();
       }).
       then(function(json) {
           console.log(json);
           nayta(json);
       }).
       catch(function(error) {
           console.log(error);
       });
   }




// http://api.tvmaze.com/schedule?country=US&date=2014-12-01
//' http://api.tvmaze.com/search/shows?q='
//

const nayta = (lista) => {
    for (let i = 0; i < lista.length; i++) {
        let v = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

        try {
            v = lista[i].show.image.medium;
        } catch (e) {

        }

        let esine = document.createElement('div');
        let otsikko = document.createElement('h1');
        let kuva = document.createElement('img');
        let kuvaus = document.createElement('p');
        let linkki = document.createElement('p1');
        let genre = document.createElement('h3');

        //nimi
        let x = lista[i].show.name;
        //linkki
        let y = lista[i].show.url;
        //summary
        let z = lista[i].show.summary;
        //kuva

        //genre
        let g = lista[i].show.genres;

        otsikko.innerHTML = x;
        linkki.innerHTML = y;
        kuvaus.innerHTML = z;
        kuva.src = v;
        genre.innerHTML = 'Genre:' + g;

        tulosta.appendChild(esine);
        tulosta.appendChild(otsikko);
        tulosta.appendChild(kuva);
        tulosta.appendChild(kuvaus);
        tulosta.appendChild(genre);
        tulosta.appendChild(linkki);

    }
};

let arvo = document.querySelector('#hakuteksti');

console.log('ready');
const tulosta = document.querySelector('#tulosta');

// https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
// nayta(json);

//let tulos = json.q;
//     return tulos.map(function(nayta) {
//       const nimi = tulos[0].name;
//       const tyyppi = tulos[0].type;
//     })
//
//console.log(nimi);
// console.log(tyyppi);
//((resp)=>resp.json())
//let v =lista[i].show.image.medium;
//esine.innerHTML = v;

// if (lista[i].show.image.value=null){
//
//       otsikko.innerHTML = x;
//       linkki.innerHTML = y;
//       kuvaus.innerHTML = z;
//
//       }else { }

// let v = lista[i].show.image.medium;