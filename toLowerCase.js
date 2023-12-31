var toLowerCase = function(s){
    return s.replace(/[A-Z]/g, function(match){
        return match.toLowerCase();
    });
}

///example
const s = "HelLo";
const result = toLowerCase(s);
console.log(result);
