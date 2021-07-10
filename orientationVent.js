
export function orientationVent(h) {
   // var hh="";

    if (h > 348.75) {
        return "N";
    }
    if (h < 11.25) {
        return "N";
    }
    else if (h < 33.75 && h > 11.25) {
        return "NNE";
    }
    else if (h < 56.25 && h > 33.75) {
        return "NE";
    }
    else if (h < 78.75 && h > 56.25) {
        return "ENE";
    }
    else if (h < 101.25 && h > 78.75) {
        return "E";
    }
    else if (h < 123.75 && h > 101.25) {
        return "ESE";
    }
    else if (h < 146.25 && h > 123.75) {
        return "SE";
    }
    else if (h < 168.75 && h > 146.25) {
        return "SSE";
    }
    else if (h < 192.25 && h > 168.75) {
        return "S";
    }
    else if (h < 213.75 && h > 192.25) {
        return "SSW";
    }
    else if (h < 236.25 && h > 213.75) {
        return "SW";
    }
    else if (h < 258.75 && h > 236.25) {
        return "WSW";
    }
    else if (h < 281.25 && h > 258.75) {
        return "W";
    }
    else if (h < 303.75 && h > 281.25) {
        return "WNW";
    }
    else if (h < 326.25 && h > 303.75) {
        return "NW";
    }
    else if (h < 348.75 && h > 326.25) {
        return "WNW";
    }
    else {
        console.log("else");
    }

    
}

//var orientation = dataCurrent['wind']['deg'];
            
