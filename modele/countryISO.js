const UrlApiIso = "../data/iso2And3.json";

function getISO3(countryISO2, methodToExecute) {
    fetch(UrlApiIso)
    .then(response => response.json())
    .then(response => {
        methodToExecute(response[countryISO2]);
    })
    .catch(error => alert(error));
}

getISO3('FR', (infos) => {
    console.log(infos);
})

export {getISO3}