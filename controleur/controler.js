import * as Display from '../vue/display.js';
import * as CovidData from '../modele/statsCovid.js';

window.addEventListener('DOMContentLoaded', init);

function init() {
    // Nombre pays
    Display.askNbCountries();
    // Tableau avec les donnees
    Display.table();
    // Graphique
    Display.table();
}