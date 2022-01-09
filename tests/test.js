const { test, expect } = require("@jest/globals");
const {
  getNumberOfCountries,
  processCountries,
  getRandomCountries,
  getISO3,
  getGDP,
  confirmed,
  deaths
} = require('../controleur/controler');
const {
  getISO3JSON,
  getRandomCountriesJSON
} = require('../modele/countryISO');

describe('Country ISO', () => {
  test('Number of countries', () => {
    getRandomCountriesJSON(5, (result) => {
      expect(result.length).toBe(5);
    });
  });

  test('Differents countries only', () => {
    getRandomCountriesJSON(5, (result) => {
      var countryList = result;
      for(var i = 0; i < result.length; i++) {
        for(var j = 0; j < result.length; j++) {
          expect(countryList[i] == result[j]).toBeFalsy();
        }
      }
    });
  });
});