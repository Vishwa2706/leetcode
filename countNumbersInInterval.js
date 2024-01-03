var countOdds = function(low,high){
    //when low is even means increase one count to make it odd
    if(low % 2 === 0){
        low++;
    }
    //intialize
    let count = 0;

    //loop by incresing 2steps

    for(let i = low; i <= high; i+=2){
        count++;
    }

    return count;
}

//example
const low = 3;
const high = 7;
 const count = countOdds(low, high);
 console.log(count);