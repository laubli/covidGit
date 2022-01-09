export const INPUT_ID = 'nbCountries';

var TABLE = document.createElement('table'),
            thead = TABLE.createTHead(), // thead element
            thRow = thead.insertRow(), // trow element
            tbody = TABLE.createTBody(); // tbody element;

const TABLE_ID = 'Table';

var recupib = [];
var recuptabPays = [];
var tabPays;
var nbVoulue =10;
var nomPays = [];
var FusionPibPays = [["PIB", "NbCas", {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}]];


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
    const div = document.createElement('div');
    div.setAttribute('class', 'row');
    div.setAttribute('id', 'div_row');
    document.body.appendChild(div);
    div.appendChild(TABLE);
}

export function addContriesInfos(iso2Name, fullName, confirmed, deaths, gdpPerHab) {

    // Initialisation of the rows and its columns
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
    flagPicture.setAttribute('src', URL_API_FLAG + iso2Name + '.png');
    flagPicture.setAttribute('height', '32');
    flagPicture.setAttribute('width', '32');
    cellFlagPicture.appendChild(flagPicture);

    cellName.innerText = fullName;
    cellConfirmed.innerText = confirmed;
    cellDeaths.innerText = deaths;
    cellGdbPerHab.innerText = gdpPerHab;


    recupib.push(gdpPerHab);
    nomPays.push(fullName);
    recuptabPays.push(confirmed);


    for(var i =0; recupib.length >i ; i ++ ){
        FusionPibPays.push([recupib[i],recuptabPays[i], "<div><h4>" + nomPays[i] + "</h4></div>"]);
    }
    drawChart(FusionPibPays);


    $("#Table").DataTable().ajax.reload();

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
    document.getElementById("div_row").appendChild(div);
}

google.charts.load('current', {'packages':['corechart']});
  function drawChart(FusionPibPays) {
        google.charts.setOnLoadCallback(

                 function() {
                 console.log("debut");
                    var data = google.visualization.arrayToDataTable(FusionPibPays);
                            var options = {
                                title: 'PIB en fonction du nombre de cas',
                                hAxis: {title: 'PIB', minValue: 0, maxValue: 10},
                                vAxis: {title: 'NB de cas', minValue: 0, maxValue: 15},
                                tooltip: { isHtml: true },
                                legend: 'none'
                            };
                             var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));
                             chart.draw(data, options);
                }
          );
        }


$(document).ready(function() {
    $('#Table').DataTable({
        "paging":   false,
        "ordering": true,
        "info":     false,
        "searching": false,
        "aoColumnDefs": [
            { 'bSortable': false, 'aTargets': [ 0 ] } 
        ],
    });
} );