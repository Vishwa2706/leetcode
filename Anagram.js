var isAnagram = function(s,t){

    //remove numbers and convert string to lowercase
    const cleanStr1 = s.replace(/[^\w]/g,'').toLowerCase();
    const cleanStr2 = t.replace(/[^\w]/g,'').toLowerCase();

    
    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');


}

//example

const s = "anagram";
const t = "nagarm";
const result = isAnagram(s,t);
console.log(result);