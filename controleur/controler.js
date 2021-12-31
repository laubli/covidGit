import * as Country from './country.js';

import * as Display from '../vue/display.js';

import * as ISO from '../modele/countryISO.js';
import * as GDB from '../modele/pibCountry.js';
import * as CovidData from '../modele/statsCovid.js';

const nbCountriesID = Display.INPUT_ID;

window.addEventListener('DOMContentLoaded', init);

function init() {
    Display.askNbCountries();
    document.getElementById(nbCountriesID).addEventListener('change', getNumberOfCountries);

    Display.tableHeader();
    Display.addContriesInfos(2, ['FR', 'BR'], ['France', 'Brazil'], [754264, 985743], [564234, 785423], [25000, 8000]);
    
}

function getNumberOfCountries() {
    // document.getElementById(Display.INPUT_ID).value;
    Display.resetTableContent();
    var nbCountries = document.getElementById(Display.INPUT_ID).value;
    var countries = [];
    console.log(countries);
    ISO.getRandomsCountries(nbCountries, countries);
    console.log(countries);
    Display.addContries(countries);
}