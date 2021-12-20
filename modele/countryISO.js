const UrlApiIso = "../data/iso2And3.json";

function getISO3(countryISO2, methodToExecute) {
    fetch(UrlApiIso,
        {
            method: 'get',
            header: {
            'Access-Control-Allow-Origin':'*',
            }
        })
    .then(response => response.json())
    .then(response => {
        methodToExecute(response);
    })
    .catch(error => alert(error));
}

getISO3('FR', (infos) => {
    console.log(infos);
})

export {getISO3}