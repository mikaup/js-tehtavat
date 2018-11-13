const nappi = document.querySelector("#hakunappi");
nappi.addEventListener('click', function(evt) {
  let haku = arvo.value;
  console.log(haku);
  console.log(' http://api.tvmaze.com/search/shows?q='+haku);
console.log(nimi);
console.log(tyyppi);
});

let arvo = document.querySelector("#hakuteksti");



console.log('ready');


const p = document.querySelector("#tulosta");

  fetch(' http://api.tvmaze.com/search/shows?q='+haku).then(function(vastaus) {
  }).then((resp)=>resp.json())
  .then(function(json) {
    let tulos = json.q;
    return tulos.map(function(nayta) {
      const nimi = tulos[0].name;
      const tyyppi = tulos[0].type;
    })
  })

  .catch(function(error) {
    console.log(error);
  });



// https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
// nayta(json);