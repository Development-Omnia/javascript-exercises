const leapYears = function(year) {

    let isLeapYear;

    if(year % 4 === 0) isLeapYear = true;
    if( year % 100 === 0 ) isLeapYear = false;
    if( year % 400 === 0 ) isLeapYear = true;
    if(typeof isLeapYear == "undefined") isLeapYear = false
    return isLeapYear;
};

console.log(leapYears(1997))

// Do not edit below this line
module.exports = leapYears;
