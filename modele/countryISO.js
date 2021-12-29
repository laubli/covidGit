const UrlApiIso = "../data/iso2And3.json";

/**
 * Get the ISO3 code of a country based on it's ISO2 code and execute a method with this code
 * @param {*} countryISO2 ISO2 code of a  country (e.g. for France: 'FR')
 * @param {*} methodToExecute Execute the method with the given information. The information is a ISO3 code (e.g. for FR: 'FRA')
 */
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