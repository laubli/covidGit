export const INPUT_ID = 'nbCountries';

const TABLE = document.createElement('table');
const TABLE_ID = 'Table';

const CONTENT_CLASS = 'Content';
const URL_API_FLAG = "https://www.countryflagicons.com/SHINY/32/";

export function askNbCountries() {
    const txt = document.createElement('p');
    txt.appendChild(document.createTextNode('Nb. de pays'));
    document.body.appendChild(txt);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', INPUT_ID);
    input.setAttribute('placeholder', 'Combien de pays afficher ?'); // Todo Placeholder doesn't display anything
    document.body.appendChild(input);
}

///////////////////////////////////////////////////////////////////////////////////////

export function tableHeader() {
    // Initialisation of the table, header row and its columns
    TABLE.setAttribute('id', TABLE_ID);
    TABLE.style.border = '1px solid black';

    const rowHeader = TABLE.insertRow();

    const headerPictures = rowHeader.insertCell();
    const headerNames = rowHeader.insertCell();
    const headerCases = rowHeader.insertCell();
    const headerDeaths = rowHeader.insertCell();
    const headerPibHab = rowHeader.insertCell();
    
    // Columns content
    headerNames.innerHTML = "Pays";
    headerCases.innerHTML = "Total des cas";
    headerDeaths.innerHTML = "Décès";
    headerPibHab.innerHTML = "PIB/hab.";

    // Columns style
    headerPictures.style.border = '1px solid black';
    headerNames.style.border = '1px solid black';
    headerCases.style.border = '1px solid black';
    headerDeaths.style.border = '1px solid black';
    headerPibHab.style.border = '1px solid black';

    // Add Table to HTML page
    document.body.appendChild(TABLE);
}

export function addContriesInfos(nbCountries, iso2Name, fullName, confirmed, deaths, gdpPerHab) {
    // Initialisation of the rows and its columns
    for(var i = 0; i < nbCountries; i++) {
        const row = TABLE.insertRow();
        row.setAttribute('class', CONTENT_CLASS);

        const cellFlagPicture = row.insertCell();
        const cellName = row.insertCell();
        const cellConfirmed = row.insertCell();
        const cellDeaths = row.insertCell();
        const cellGdbPerHab = row.insertCell();

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