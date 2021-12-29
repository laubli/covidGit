/*
Nous avons beaucoup de donnees provenent d'APIs. Chaque pays possède ainsi beaucoup de données qui lui est propre.
Au lieu de travailler avec plusieurs listes, pourquoi ne pas travailler avec une classe "Country"?
Cette classe suivra le pattern POJO (Plain Old JavaScript Object).
*/

export class Country {
    constructor() {
        this._fullName;
        this._iso2;
        this._iso3;

        this._flag;

        this._totalDeaths;
        this._totalConfirmed;
        this._gdpPerHab;
    }

    // GETTERS
    get fullName() {
        return this._fullName;
    }

    get iso2() {
        return this._iso2;
    }

    get iso3() {
        return this._iso3;
    }

    get flag() {
        return this._flag;
    }

    get totalDeaths() {
        return this._totalDeaths;
    }

    get totalConfirmed() {
        return this._totalConfirmed;
    }

    get gdpPerhab() {
        return this._gdpPerHab;
    }

    // SETTERS
    set fullName(fullName) {
        this._fullName = fullName;
    }

    set iso2(iso2) {
        this._iso2 = iso2;
    }

    set iso3(iso3) {
        this._iso3 = iso3;
    }

    set flag(flag) {
        this._flag = flag;
    }

    set totalDeaths(totalDeaths) {
        this._totalDeaths = totalDeaths;
    }

    set totalConfirmed(totalConfirmed) {
        this._totalConfirmed = totalConfirmed;
    }

    set gdpPerhab(gdpPerHab) {
        this._gdpPerhab = gdpPerHab; 
    }
}