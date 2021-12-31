import { Country } from "../controleur/country.js";
import { getCountryInfo2 } from "./statsCovid.js";

const UrlApiIso2To3 = "../data/iso2And3.json";
const UrlApiFullNameToIso2 = "https://api.covid19api.com/countries";

/**
 * Get the ISO3 code of a country based on it's ISO2 code and execute a method with this code
 * @param {*} countryISO2 ISO2 code of a  country (e.g. for France: 'FR')
 * @param {*} methodToExecute Execute the method with the given information. The information is a ISO3 code (e.g. for FR: 'FRA')
 */
export function getISO3(countryISO2, methodToExecute) {
    fetch(UrlApiIso2To3)
    .then(response => response.json())
    .then(response => {
        methodToExecute(response[countryISO2]);
    })
    .catch(error => alert(error));
}

/**
 * Get the ISO3 code of a country based on it's ISO2 code and execute a method with this code
 * @param {*} countryISO2 ISO2 code of a  country (e.g. for France: 'FR')
 * @param {*} iso3 the ISO3
 */
 export function getISO3FromISO2(countryISO2) {
    
    fetch(UrlApiIso2To3)
    .then(response => response.json())
    .then(response => {
        var result;
        result = response[countryISO2];
        return result;
    })
    .catch(error => alert(error));

    
}

/**
 * Get randomly the name, slug name and ISO2 code of X countries
 * @param {*} nbCountries Number of countries to get
 * @param {*} methodToExecute Execute the method with the given information. The informations are X names, slug names and ISO2 code.
 */
export function getRandomsCountriesNameAndISO2(nbCountries, methodToExecute) {
    fetch(UrlApiFullNameToIso2)
    .then(response => response.json())
    .then(response => {
        var result = [];

        // X countries are added to the result
        while(result.length != nbCountries) {
            // A random country is selected
            var tpmCountry = response[Math.floor(Math.random() * response.length)];

            // We check if it's already picked
            var alreadyPicked = false;
            result.forEach(country => {
                if(country === tpmCountry) {
                    alreadyPicked = true;
                }
            });

            if(!alreadyPicked) {
                result.push(tpmCountry);
            }
        }

        methodToExecute(result);
    });
}

/**
 * Get randomly the name, slug name and ISO2 code of X countries
 * @param {*} nbCountries Number of countries to get
 * @param {*} countries The array of countries
 */
 export function getRandomsCountries(nbCountries, countries) {
    fetch(UrlApiFullNameToIso2)
    .then(response => response.json())
    .then(response => {
        var result = [];

        // X countries are added to the result
        while(countries.length != nbCountries) {
            // A random country is selected
            var tpmCountry = response[Math.floor(Math.random() * response.length)];

            // We check if it's already picked
            var alreadyPicked = false;
            countries.forEach(country => {
                if(country === tpmCountry) {
                    alreadyPicked = true;
                }
            });

            if(!alreadyPicked) {
                console.log(tpmCountry);
                console.log(tpmCountry.Country);
                let countryToAdd = new Country();

                countryToAdd.fullName = tpmCountry.Country;
                countryToAdd.iso2 = tpmCountry.ISO2;

                // test pour récupérer l'iso3
                let iso3;
                getISO3FromISO2(tpmCountry.ISO2, iso3);
                countryToAdd.iso3 = iso3;

                let info;
                getCountryInfo2(tpmCountry.Slug, 'Deaths', info);
                countryToAdd.totalDeaths = info;

                console.log(countryToAdd);
                countries.push(tpmCountry);
            }
        }
        return result;
    });
}