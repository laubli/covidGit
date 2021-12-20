const UrlApiCovid = "https://api.covid19api.com/total/country/"

/**
 * Execute a method with the asked information
 * @param {*} oneCountryName A country name with this format: "south-africa"
 * @param {*} infoToGet An information like "Confirmed", "Deaths"...
 * @param {*} methodToExecute This method will use the information received as a parameter
 */
function getCountryInfo(oneCountryName, infoToGet, methodToExecute) {
    fetch(UrlApiCovid + oneCountryName)
        .then(response => response.json())
        .then(response => {
            var nbDeaths = 0;
            for(var i = 0; i < response.length; i++) {
                nbDeaths += response[i][infoToGet];
            }
            methodToExecute(nbDeaths);
        })
        .catch(error => alert(error))
}

export {getCountryInfo}