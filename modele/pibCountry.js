const UrlApiPIB = "https://stats.oecd.org/SDMX-JSON/data/SNA_TABLE1/";
const period = ".B1_GE.HCPC/all?startTime=2019&endTime=2019&dimensionAtObservation=allDimensions";

/**
 * Calculate the URL to fetch to get the GDP of countries
 * @param {*} listCountry Country with the ISO3 format
 * @returns The url with the countries
 */
function urlToFetchGDP(country) {
    // Creation of the URL to fetch
    return UrlApiPIB + country + period;
}

/**
 * Get the GDP of an array of countries using the API of this website: https://stats.oecd.org/
 * @param {*} listCountry A country which follow the iso3 rule (e.g: 'France' --> 'FRA')
 * @param {*} methodToExecute Execute the method with an integer in parameter.
 */
 export function getGDPJSON(Country, methodToExecute) {
    var url = urlToFetchGDP(Country);
    fetch(url)
        .then(response => response.json())
        .then(response => {
            methodToExecute(response["dataSets"]["0"]["observations"]["0:0:0:0"]["0"]);
        })
        .catch(() => methodToExecute(undefined));
}
