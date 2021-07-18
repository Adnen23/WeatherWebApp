export async function getCountyDetail (codePays){
        
    const response = await fetch("https://restcountries.eu/rest/v2/alpha/"+ codePays)
    const data = await response.json()
    var detailPays = document.querySelector("#affichageDetailPays");
    detailPays.innerHTML = `
        <p>${data.name}</p>
        <img src=" ${data.flag}" class="img-fluid rounded-end">

    ` ;

    console.log(data);


}