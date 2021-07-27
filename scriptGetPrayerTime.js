
export async function getPrayerTime(a, b, c, d) {

    //const response = await fetch("https://api.pray.zone/v2/times/today.json?longitude=" + a + "&latitude=" + b + "&elevation=" + c + "&school=8")
    const response = await fetch("http://api.aladhan.com/v1/calendar?latitude=" + a + "&longitude=" + b + "&method=2&month=" + c + "&year=" + d + "&method=3")
    const data1 = await response.json()
    let h = new Date().getDate();
    console.log(data1);
    console.log(data1.data[h - 1].timings.Fajr)

    let heurePriere = document.querySelector("#affichageHeurePriere");
    heurePriere.innerHTML = `
            <table class = table>
                <thead>
                    <tr>
                        <th scope = "col" id = "dateAuj" colspan="2" class = "text-center">
                        ${data1.data[h-1].date.gregorian.date} <br>
                           <i class="bi bi-arrow-left-circle-fill" style="font-size: 1.5rem; color: cornflowerblue;" id ="plus"></i> 
                        ${data1.data[h-1].date.hijri.year} ${data1.data[h-1].date.hijri.weekday.ar} ${data1.data[h-1].date.hijri.day} ${data1.data[h-1].date.hijri.month.ar} 
                            <i class="bi bi-arrow-right-circle-fill" style="font-size: 1.5rem; color: cornflowerblue;" id ="moins"></i> 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope = "row"> Fajr</th>
                        <td>${data1.data[h-1].timings.Fajr}</td>
                    </tr>
                    <tr>
                        <th scope = "row"> Dhuhr</th>
                        <td>${data1.data[h-1].timings.Dhuhr}</td>
                    </tr>
                    <tr>
                        <th scope = "row"> Asr</th>
                        <td>${data1.data[h-1].timings.Asr}</td>
                    </tr>
                    <tr>
                        <th scope = "row"> Maghrib</th>
                        <td>${data1.data[h-1].timings.Maghrib}</td>
                    </tr>
                    <tr>
                        <th scope = "row"> Isha</th>
                        <td>${data1.data[h-1].timings.Isha}</td>
                    </tr>
                </tbody>
            </table>
            ` ;
}