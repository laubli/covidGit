import * as Display from '../vue/display.js';
import * as ISO from '../modele/countryISO.js';
import * as GDP from '../modele/pibCountry.js';
import * as STATS from '../modele/statsCovid.js';
import { Country } from './country.js';

const nbCountriesID = Display.INPUT_ID;
const nbCountriesToBeginWith = 5;
var countryList = [];

window.addEventListener('DOMContentLoaded', init);

function init() {
    Display.askNbCountries();
    processCountries();
    document.getElementById(nbCountriesID).addEventListener('change', processCountries);

    Display.tableHeader();
    Display.chart();
}

function getNumberOfCountries() {
    Display.resetTableContent();
    countryList = [];
    var nbCountries = document.getElementById(Display.INPUT_ID).value;
    return nbCountries;
}

function processCountries() {
    var nbCountries = getNumberOfCountries();
    if(nbCountries != "" && !(nbCountries > 0 && nbCountries <= 20)) {
        alert("Veuillez entrer un nombre de pays entre 1 et 20");
        return;
    }


    if(nbCountries == "") {
        getRandomCountries(nbCountriesToBeginWith);
        return;
    }

    getRandomCountries(nbCountries);
}

function getRandomCountries(nbCountries) {
    ISO.getRandomCountriesJSON(nbCountries, (countryJSON) => {
        for(var i = 0; i < countryJSON.length; i++) {
            var countryToAdd = new Country();
            const myMap = new Map();

            //Set the name of the country
            myMap.set('fullName', countryJSON[i].Country);

            //set the iso2 of the country
            myMap.set('iso2', countryJSON[i].ISO2);

            countryToAdd.fullName = myMap.get('fullName');
            countryToAdd.iso2 = myMap.get('iso2');
            countryList.push(countryToAdd);
        }

        getISO3();
    });
}

function getISO3() {
    var iso2List = [];
    countryList.forEach(country => iso2List.push(country.iso2));

    ISO.getISO3JSON(iso2List, (iso3List) => {
        for(var i = 0; i < countryList.length; i++) {
            countryList[i].iso3 = iso3List[i];
        }
        getGDP();
    });
}

function getGDP() {
    countryList.forEach(country => {
        GDP.getGDPJSON(country.iso3, (value) => {
            if(value == undefined) {
                console.error("GDP not found for " + country.iso3);
            } else {
                country.gdpPerHab = value;
            }
            confirmed(country);
        });
    });
}

function confirmed(country) {
    STATS.getCountryInfo(country.fullName, STATS.InfoEnum.CONFIRMED, (value) => {
        country.totalConfirmed = value;
        deaths(country);
    });
}

function deaths(country) {
    STATS.getCountryInfo(country.fullName, STATS.InfoEnum.DEATHS, (value) => {
        country.totalDeaths = value;
        Display.addContriesInfos(country.iso2, country.fullName,
                                country.totalConfirmed, country.totalDeaths, country.gdpPerHab);
    });
}