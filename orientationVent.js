
export function orientationVent(x) {
    
    if (x > 348.75) {
        return "N";
    }
    if (x < 11.25) {
        return "N";
    }
    else if (x < 33.75 && x > 11.25) {
        return "NNE";
    }
    else if (x < 56.25 && x > 33.75) {
        return "NE";
    }
    else if (x < 78.75 && x > 56.25) {
        return "ENE";
    }
    else if (x < 101.25 && x > 78.75) {
        return "E";
    }
    else if (x < 123.75 && x > 101.25) {
        return "ESE";
    }
    else if (x < 146.25 && x > 123.75) {
        return "SE";
    }
    else if (x < 168.75 && x > 146.25) {
        return "SSE";
    }
    else if (x < 192.25 && x > 168.75) {
        return "S";
    }
    else if (x < 213.75 && x > 192.25) {
        return "SSW";
    }
    else if (x < 236.25 && x > 213.75) {
        return "SW";
    }
    else if (x < 258.75 && x > 236.25) {
        return "WSW";
    }
    else if (x < 281.25 && x > 258.75) {
        return "W";
    }
    else if (x < 303.75 && x > 281.25) {
        return "WNW";
    }
    else if (x < 326.25 && x > 303.75) {
        return "NW";
    }
    else if (x < 348.75 && x > 326.25) {
        return "WNW";
    }    
}

//var orientation = dataCurrent['wind']['deg'];
            
