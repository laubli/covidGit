function askNbCountries() {
    const txt = document.createElement('p');
    txt.appendChild(document.createTextNode('Nb. de pays'));
    document.body.appendChild(txt);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'nbCountries');
    input.setAttribute('palceholder', 'Combien de pays afficher ?');
    document.body.appendChild(input);
}

///////////////////////////////////////////////////////////////////////////////////////

// Todo Mettre le contenu du tableau dans une DIV pour qu'on puisse facilement supprimer le contenu

function tableHeader() {

}

// Renommer en "tableContent"
function table(nbContries, pictures, names, cases, deaths, pibHab) {
    var table = document.createElement('table');

    var rowHeader = document.createElement('tr');
    var headerPictures = document.createElement('th');
    var headerNames = document.createElement('th');
    headerNames.innerHTML = "Pays";
    var headerCases = document.createElement('th');
    headerCases.innerHTML = "Total des cas";
    var headerDeaths = document.createElement('th');
    headerDeaths.innerHTML = "Décès";
    var headerPibHab = document.createElement('th');
    headerPibHab.innerHTML = "PIB/hab.";

    rowHeader.appendChild(headerPictures);
    rowHeader.appendChild(headerNames);
    rowHeader.appendChild(headerCases);
    rowHeader.appendChild(headerDeaths);
    rowHeader.appendChild(headerPibHab);

    for(var i = 0; i < nbContries; i++) {
        // Todo : Ajouter tous les autres elements du tableau
    }
}

function resetTable() {
    // Supprimer le contenu du tableau
}

///////////////////////////////////////////////////////////////////////////////////////

function chart() {
    const div = document.createElement('div');
    div.setAttribute('id', 'chart_div');
    div.setAttribute('style', 'width: 900px; height: 500px;');
    document.body.appendChild(input);
}

export {askNbCountries, table, chart}