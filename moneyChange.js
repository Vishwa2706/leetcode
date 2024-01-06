var moneyChange = function(bills){
    let fiveCount = 0;
    let tenCount = 0;

    for ( let bill of bills){
        if( bill === 5){
            fiveCount++;
        } else if ( bill === 10){
            if( fiveCount === 0){
                 return false;
            }
            fiveCount--;
            tenCount++;
        } else {
            if (tenCount > 0 && fiveCount > 0) {
                tenCount--;
                fiveCount--;
            } else if (fiveCount >= 3) {
                fiveCount -= 3;
            } else {
                return false; // Unable to provide change
            }
        }
       
    }
    return true;

}

// Example usage:
const bills = [5, 5, 5, 10, 20];
const result = moneyChange(bills);
console.log(result);  // Output: true