import { Country } from "../controleur/country.js";
import * as stat from "./statsCovid.js";
import { getGDP } from "./pibCountry.js";

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
            while (result.length != nbCountries) {
                // A random country is selected
                var tpmCountry = response[Math.floor(Math.random() * response.length)];

                // We check if it's already picked
                var alreadyPicked = false;
                result.forEach(country => {
                    if (country === tpmCountry) {
                        alreadyPicked = true;
                    }
                });

                if (!alreadyPicked) {
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
            while (countries.length != nbCountries) {
                // A random country is selected
                var tpmCountry = response[Math.floor(Math.random() * response.length)];

                // We check if it's already picked
                var alreadyPicked = false;
                countries.forEach(country => {
                    if (country === tpmCountry) {
                        alreadyPicked = true;
                    }
                });

                if (!alreadyPicked) {
                    console.log(tpmCountry);
                    let countryToAdd = new Country();
                    const myMap = new Map();

                    //Set the name of the country
                    myMap.set('fullName', tpmCountry.Country);

                    //set the iso2 of the country
                    myMap.set('iso2', tpmCountry.ISO2);

                    //set the iso3 of the country
                    getISO3(tpmCountry.ISO2, (valeur) => {
                        myMap.set('iso3', valeur);
                        //set the gross domestic product of the country
                        console.log(valeur);
                        getGDP([valeur], (val) => {
                            myMap.set('gdpPerhab', valeur);
                        });
                    });

                    //set the total deaths of the country
                    stat.getCountryInfo(tpmCountry.Slug, stat.InfoEnum.DEATHS, (valeur) => {
                        myMap.set('totalDeaths', valeur);
                    });

                    //set the total confirmed of the country
                    stat.getCountryInfo(tpmCountry.Slug, stat.InfoEnum.CONFIRMED, (valeur) => {
                        myMap.set('totalConfirmed', valeur);
                    });

                    countryToAdd.fullName = myMap.get('fullName');
                    countryToAdd.iso2 = myMap.get('iso2');
                    countryToAdd.iso3 = myMap.get('iso3');
                    countryToAdd.totalDeaths = myMap.get('totalDeaths');
                    countryToAdd.totalConfirmed = myMap.get('totalConfirmed');
                    countryToAdd.gdpPerhab = myMap.get('gdpPerhab');
                }
            }
            return result;
        });
}