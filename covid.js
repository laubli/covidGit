// TODO
// en pluse de la selection du nombre de pays, afficher un graphe en 2 dimensions permettant
// d'afficher pour chaque pays le nombre de deces ou de cas de covid en abscisse et le
// PIB par habitant en ordonnees

// La requete pour récupérer le PIB par habitant
// gdp per capita:
// https://stats.oecd.org:443/SDMX-JSON/data/SNA_TABLE1/FRA+DEU.B1_GE.HCPC/all?startTime=2019&endTime=2019&dimensionAtObservation=allDimensions
// -> afficher le PIB/habitant/ pays selectionne

// la liste des codes de pays en 3 lettres
// country iso code 3 letters: http://country.io/iso3.json

// la documentation sur les charts google
// scatter plot chart: https://developers.google.com/chart/interactive/docs/gallery/scatterchart



// exemple XHR + Promise "à la main"
function country_promise(url) {
  return new Promise((resolve, reject) => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          resolve(this.responseText);
        } else {
          reject(this.responseText);
        };
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }).then(txt => new Promise(resolve => resolve(JSON.parse(txt))))
    .then(json => {
      //Quand la requette est finie on charge le tableau dans une constante pour la réutiliser
      countryList = json.Countries;
      console.log(countryList);
      //Puis on initialise le tableau
      init();
    }).catch(txt => alert(txt));
}

// Exemple de fetch
function country_fetch(url) {
  fetch(url)
    .then(response => response.json())
    .then(countries => { countryList = countries.Countries; console.log(countryList); init(); });
};

// Exemple async/await
async function country_async(url) {
  const r = await fetch(url);
  const countries = await r.json();
  countryList = countries.Countries;
  console.log(countryList);
  init();
};
