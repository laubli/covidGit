const UrlApiCovid = "https://api.covid19api.com/total/country/"
export const InfoEnum = {
    DEATHS: "Deaths",
    CONFIRMED: "Confirmed"
}

/**
 * Execute a method with the asked information using the covid API
 * @param {*} oneCountryName A country name with this format: "south-africa"
 * @param {*} infoToGet An information like "Confirmed", "Deaths"...
 * @param {*} methodToExecute This method will use the information received as a parameter
 */
function getCountryInfo(oneCountryName, infoToGet, methodToExecute) {
    fetch(UrlApiCovid + oneCountryName)
        .then(response => response.json())
        .then(response => {
            var numberRelatedToInfo = 0;
            for(var i = 0; i < response.length; i++) {
                numberRelatedToInfo += response[i][infoToGet];
            }
            methodToExecute(numberRelatedToInfo);
        })
        .catch(error => alert(error))
}

export{getCountryInfo}

/**
 * Execute a method with the asked information using the covid API
 * @param {*} oneCountryName A country name with this format: "south-africa"
 * @param {*} infoToGet An information like "Confirmed", "Deaths"...
 * @param {*} info l'info récupéré
 */
 export function getCountryInfo2(oneCountryName, infoToGet, info) {
    fetch(UrlApiCovid + oneCountryName)
        .then(response => response.json())
        .then(response => {
            var numberRelatedToInfo = 0;
            for(var i = 0; i < response.length; i++) {
                numberRelatedToInfo += response[i][infoToGet];
            }
            info = numberRelatedToInfo;
            return numberRelatedToInfo;
        })
        .catch(error => alert(error))
}