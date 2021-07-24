export async function getCountyDetail(codePays) {

    const response = await fetch("https://restcountries.eu/rest/v2/alpha/" + codePays)
    const data = await response.json()
    var detailPays = document.querySelector("#affichageDetailPays");
    detailPays.innerHTML = `
                
                    <img src="${data.flag}" class="rounded mx-auto d-block" style = "max-width : 250px;"  alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">${data.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Capital : ${data.capital}, ${data.nativeName} </li>
                        <li class="list-group-item">Région : ${data.region}, ${data.subregion}</li>
                        <li class="list-group-item">Population : ${data.population.toLocaleString()} habitants</li>
                        <li class="list-group-item">Superficie : ${data.area.toLocaleString()} km²</li>
                        <li class="list-group-item">Langue : ${data.languages[0].name}, ${data.languages[0].nativeName}</li>
                        <li class="list-group-item">Monnaie : ${data.currencies[0].name}, ${data.currencies[0].code}, ${data.currencies[0].symbol}</li>
                    </ul>
                
    ` ;

    console.log(data);

}


//<p>${data.name}</p>
//<img src=" ${data.flag}" class="img-fluid rounded-end">