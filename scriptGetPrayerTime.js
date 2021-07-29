import { NonbreJourMois } from "./scriptLocalisation.js";


export async function getPrayerTime(a, b, c, d) {

    //const response = await fetch("https://api.pray.zone/v2/times/today.json?longitude=" + a + "&latitude=" + b + "&elevation=" + c + "&school=8")
    const response = await fetch("https://api.aladhan.com/v1/calendar?latitude=" + a + "&longitude=" + b + "&method=2&month=" + c + "&year=" + d + "&method=3&tune=0,0,0,0,0,3,0,0,0")
    const data1 = await response.json()
    var h = new Date().getDate();
    afficheHeurePriere();
    function afficheHeurePriere() {
        let heurePriere = document.querySelector("#affichageHeurePriere");
        heurePriere.innerHTML = `
            <table class = table>
                <thead>
                    <tr>
                        <th scope = "col" id = "dateAuj" colspan="2" class = "text-center">
                        ${data1.data[h - 1].date.gregorian.date} <br>
                           <i class="bi bi-arrow-left-circle-fill" style="font-size: 1.5rem; color: cornflowerblue;" id ="moins"></i> 
                        ${data1.data[h - 1].date.hijri.year} ${data1.data[h - 1].date.hijri.weekday.ar} ${data1.data[h - 1].date.hijri.day} ${data1.data[h - 1].date.hijri.month.ar} 
                            <i class="bi bi-arrow-right-circle-fill" id ="plus" style="font-size: 1.5rem; color: cornflowerblue;" ></i> 
                        
                            </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope = "row"> Fajr</th>
                        <td>${data1.data[h - 1].timings.Fajr}</td>
                    </tr>
                    <tr>
                        <th scope = "row"> Dhuhr</th>
                        <td>${data1.data[h - 1].timings.Dhuhr}</td>
                    </tr>
                    <tr>
                        <th scope = "row"> Asr</th>
                        <td>${data1.data[h - 1].timings.Asr}</td>
                    </tr>
                    <tr>
                        <th scope = "row"> Maghrib</th>
                        <td>${data1.data[h - 1].timings.Maghrib}</td>
                    </tr>
                    <tr>
                        <th scope = "row"> Isha</th>
                        <td>${data1.data[h - 1].timings.Isha}</td>
                    </tr>
                </tbody>
            </table>
            `
        if (document.querySelector("#plus")) {
            let next = document.querySelector("#plus");
            next.addEventListener("click", nextDate);
            function nextDate() {
                var getMois = new Date().getMonth();
                var getAnnee = new Date().getFullYear();
                var nbJours = NonbreJourMois(getMois, getAnnee);
                if (h < (nbJours)) {
                    h++;
                    afficheHeurePriere();
                }
            }
        }
        if (document.querySelector("#moins")) {
            let prev = document.querySelector("#moins");
            prev.addEventListener("click", prevDate);
            function prevDate() {
                if (h > 1) {
                    h--;
                    afficheHeurePriere();
                }
            }
        }

    }
}

