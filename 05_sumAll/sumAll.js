const sumAll = function(a,b) {


    if(typeof a != "number" || typeof b != "number") return "ERROR";
    if(a < 0 || b < 0) return "ERROR"
    
    let sum = 0
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    
    for (i = min; i < max; i++){
        sum = sum + i
    }
    sum = sum+max
    return sum;
    

};


// Do not edit below this line
module.exports = sumAll;