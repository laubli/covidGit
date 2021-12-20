const UrlApiPIB = "https://stats.oecd.org/SDMX-JSON/data/SNA_TABLE1/";
const period = ".B1_GE.HCPC/all?startTime=2019&endTime=2019&dimensionAtObservation=allDimensions";


function getGDP(listCountry, methodToExecute) {
    // Creation of the URL to fetch
    var url = UrlApiPIB;
    for(var i = 0; i < listCountry.length; i++) {
        url += listCountry[i];
        if(listCountry.length - i != 1) {
            // '+' is needed between each countries' name
            url += "+";
        }
    }
    url += period;

    fetch(url)
        .then(response => response.json())
        .then(response => {
            //methodToExecute(response);
            methodToExecute(response["dataSets"]["0"]["observations"]["0:0:0:0"]["0"]);
            // Todo Entrer en parametre une liste de PIB.
            
        })
}

// Tests
getGDP(['FRA', 'DEU'], (info) => {
    console.log(info);
})