// Thanks to https://gist.github.com/endel/dfe6bb2fbe679781948c

/* 
 * modified from http://www.voidware.com/moon_phase.htm 
 */

function getMoonPhase(year, month, day) {
    var c = e = jd = b = 0;

    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;

    c = 365.25 * year;

    e = 30.6 * month;

    jd = c + e + day - 694039.09; //jd is total days elapsed

    jd /= 29.5305882; //divide by the moon cycle

    b = parseInt(jd); //int(jd) -> b, take integer part of jd

    jd -= b; //subtract integer part to leave fractional part of original jd

    b = Math.round(jd * 8); //scale fraction from 0-8 and round

    if (b >= 8) {
        b = 0; //0 and 8 are the same so turn 8 into 0
    }

    // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon

    return b;
}

var date = new Date();
let link = document.createElement('link');
let head = document.getElementsByTagName('HEAD')[0];

if (date.getDate() == "8" && date.getMonth() == "0") {
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/newyear.css';
}
else if (getMoonPhase(date.getFullYear(), date.getMonth(), date.getDate()) == 4 && date.getHours() > 21) {
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/moon.css';
}
else {
    switch (date.getDay()) {
        case 0:
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/freedom.css';
            break;
        case 1:
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/contract.css';
            break;
        case 2:
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/eternity.css';
            break;
        case 3:
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/wisdom.css';
            break;
        case 4:
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/justice.css';
            break
        case 5:
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/war.css';
            break;
        case 6:
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/love.css';
            break;
        default:
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'css/default.css';
    }
}
head.appendChild(link);
