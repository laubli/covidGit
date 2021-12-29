const UrlApiPIB = "https://stats.oecd.org/SDMX-JSON/data/SNA_TABLE1/";
const period = ".B1_GE.HCPC/all?startTime=2019&endTime=2019&dimensionAtObservation=allDimensions";

/**
 * Calculate the URL to fetch to get the GDP of countries
 * @param {*} listCountry Array of countries with the ISO3 format
 * @returns The url with the countries
 */
function urlToFetchGDP(listCountry) {
    // Creation of the URL to fetch
    var url = UrlApiPIB;

    for(var i = 0; i < listCountry.length; i++) {
        url += listCountry[i];
        if(listCountry.length - i != 1) {
            // '+' is needed between each countries' name
            url += "+";
        }
    }

    return url + period;
}

/**
 * Get the GDP of an array of countries using the API of this website: https://stats.oecd.org/
 * @param {*} listCountry Array of country. Each country follow the iso3 rule (e.g: 'France' --> 'FRA')
 * @param {*} methodToExecute Execute the method with a JSON in parameter. This JSON is composed of key values (ISO3 country ; GDP)
 */
function getGDP(listCountry, methodToExecute) {
    var url = urlToFetchGDP(listCountry);

    // The result is a JSON with the key being the name of the country and the value it's GDP
    var result = {}
    fetch(url)
        .then(response => response.json())
        .then(response => {
            for(var i = 0; i < listCountry.length; i++) {
                // To select a country we change the value of the 4th layer of the response (in the JSON we received)
                // For the X country of the country array, we select the following value: "X:0:0:0"
                result[listCountry[i]] = response["dataSets"]["0"]["observations"][i + ":0:0:0"]["0"];
            }
            methodToExecute(result);
        });
}

export{getGDP}