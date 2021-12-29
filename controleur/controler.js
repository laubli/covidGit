import * as Country from './country.js';

import * as Display from '../vue/display.js';

import * as ISO from '../modele/countryISO.js';
import * as GDB from '../modele/pibCountry.js';
import * as CovidData from '../modele/statsCovid.js';

window.addEventListener('DOMContentLoaded', init);

function init() {
    Display.askNbCountries();
    Display.tableHeader();
    Display.addContriesInfos(2, ['FR', 'BR'], ['France', 'Brazil'], [754264, 985743], [564234, 785423], [25000, 8000]);
}