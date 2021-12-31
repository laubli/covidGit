export const INPUT_ID = 'nbCountries';

const TABLE = document.createElement('table'),
            thead = TABLE.createTHead(), // thead element
            thRow = thead.insertRow(), // trow element
            tbody = TABLE.createTBody(); // tbody element;

const TABLE_ID = 'Table';

const CONTENT_CLASS = 'Content';
const URL_API_FLAG = "https://www.countryflagicons.com/SHINY/32/";

export function askNbCountries() {
    const div = document.createElement('div');
    div.setAttribute('class', 'row');
    document.body.appendChild(div);

    const txt = document.createElement('label');
    txt.appendChild(document.createTextNode('Nb. de pays'));
    div.appendChild(txt);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', INPUT_ID);
    input.setAttribute('placeholder', 'Combien de pays afficher ?'); // Todo Placeholder doesn't display anything
    div.appendChild(input);
}

///////////////////////////////////////////////////////////////////////////////////////

export function tableHeader() {
    // Initialisation of the table, header row and its columns
    TABLE.setAttribute('id', TABLE_ID);

    const headerPictures = thRow.insertCell();
    const headerNames = thRow.insertCell();
    const headerCases = thRow.insertCell();
    const headerDeaths = thRow.insertCell();
    const headerPibHab = thRow.insertCell();
    
    // Columns content
    headerNames.innerHTML = "Pays";
    headerCases.innerHTML = "Total des cas";
    headerDeaths.innerHTML = "Décès";
    headerPibHab.innerHTML = "PIB/hab.";

    // Columns class
    headerPictures.className = 'rowClass';
    headerNames.className = 'rowClass';
    headerCases.className = 'rowClass';
    headerDeaths.className = 'rowClass';
    headerPibHab.className = 'rowClass';

    // Add Table to HTML page
    document.body.appendChild(TABLE);
}

export function addContriesInfos(nbCountries, iso2Name, fullName, confirmed, deaths, gdpPerHab) {
    // Initialisation of the rows and its columns
    for(var i = 0; i < nbCountries; i++) {
        const row = tbody.insertRow();
        row.setAttribute('class', CONTENT_CLASS);

        const cellFlagPicture = row.insertCell();
        const cellName = row.insertCell();
        const cellConfirmed = row.insertCell();
        const cellDeaths = row.insertCell();
        const cellGdbPerHab = row.insertCell();

        // Class name        
        cellFlagPicture.className = 'imgCell';
        cellName.className = 'rowClass';
        cellConfirmed.className = 'rowClass';
        cellDeaths.className = 'rowClass';
        cellGdbPerHab.className = 'rowClass';

        // Columns content        
        const flagPicture = document.createElement('img');
        flagPicture.setAttribute('src', URL_API_FLAG + iso2Name[i] + '.png');
        flagPicture.setAttribute('height', '32');
        flagPicture.setAttribute('width', '32');
        cellFlagPicture.appendChild(flagPicture);

        cellName.innerText = fullName[i];
        cellConfirmed.innerText = confirmed[i];
        cellDeaths.innerText = deaths[i];
        cellGdbPerHab.innerText = gdpPerHab[i];
    }
}

export function addContries(countries) {
    // Initialisation of the rows and its columns
    var country = countries;
    for(var i = 0; i < country.lenght; i++) {
        const row = tbody.insertRow();
        row.setAttribute('class', CONTENT_CLASS);

        const cellFlagPicture = row.insertCell();
        const cellName = row.insertCell();
        const cellConfirmed = row.insertCell();
        const cellDeaths = row.insertCell();
        const cellGdbPerHab = row.insertCell();

        // Class name        
        cellFlagPicture.className = 'imgCell';
        cellName.className = 'rowClass';
        cellConfirmed.className = 'rowClass';
        cellDeaths.className = 'rowClass';
        cellGdbPerHab.className = 'rowClass';

        // Columns content        
        const flagPicture = document.createElement('img');
        flagPicture.setAttribute('src', URL_API_FLAG + country[i].iso2Name + '.png');
        flagPicture.setAttribute('height', '32');
        flagPicture.setAttribute('width', '32');
        cellFlagPicture.appendChild(flagPicture);

        cellName.innerText = country[i].fullName;
        cellConfirmed.innerText = country[i].confirmed;
        cellDeaths.innerText = country[i].deaths;
        cellGdbPerHab.innerText = country[i].gdpPerHab;
    }
}

export function resetTableContent() {
    const elementsToDelete = document.getElementsByClassName(CONTENT_CLASS);
    while(elementsToDelete[0]) {
        elementsToDelete[0].parentNode.removeChild(elementsToDelete[0]);
    }
}

///////////////////////////////////////////////////////////////////////////////////////

export function chart() {
    const div = document.createElement('div');
    div.setAttribute('id', 'chart_div');
    div.setAttribute('style', 'width: 900px; height: 500px;');
    document.body.appendChild(input);
}

$(document).ready(function() {
    $('#Table').DataTable({
        "paging":   false,
        "ordering": true,
        "info":     false,
        "searching": false,
        "aoColumnDefs": [
            { 'bSortable': false, 'aTargets': [ 0 ] } 
        ]
    });
} );