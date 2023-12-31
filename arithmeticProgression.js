var canMakeArithmeticProgression = function(arr){

    //sort arrays
    arr.sort((a,b)=> a-b);

    //find common difference
    const commonDifference = arr[1] - arr[0];
     
    for(let i = 2 ; i< arr.length ; i++){
        if(arr[i] - arr[i-1] !== commonDifference){
    return false;
        }
    }
    return true;

}

//examples
const arr = [5,1,7];
const result = canMakeArithmeticProgression(arr);
console.log(result);