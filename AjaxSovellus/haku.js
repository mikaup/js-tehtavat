const nappi = document.querySelector('#hakunappi');
nappi.addEventListener('click', function(evt) {
  let haku = arvo.value;
  console.log(haku);
  console.log(' http://api.tvmaze.com/search/shows?q=' + haku);

  fetch(' http://api.tvmaze.com/search/shows?q=' + haku).
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

});

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