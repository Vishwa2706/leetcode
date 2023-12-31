var lengttOfLastWord = function(s){

    //trim extra spaces
    s = s.trim();

    //split words
    const words = s.split(" ");

    //return 0
    if(words.length === 0){
        return 0;
    }

    //extract last word
   const lastWord = words[words.length - 1];
   return lastWord.length;
}

//example
const input = "hello"
const result = lengttOfLastWord(input);
console.log(result);