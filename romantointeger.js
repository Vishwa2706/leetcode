var romanToInt = function(s){
    //Integer mapping
    const romanMap = {
        'I': 1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };

    let result = 0;
    for(let i = 0; i < s.length; i++){
        const currentSymbol = s[i];
        const currentValue = romanMap[currentSymbol];
        const nextSymbol = s[i+1];
        const nextValue = romanMap[nextSymbol];

        if(nextValue > currentValue){
            result += (nextValue - currentValue);
        }else {
            result += currentValue; 
        }
    }
    return result;
}

//example
const s = "LCMDVIX";
const result = romanToInt(s);
console.log(result);