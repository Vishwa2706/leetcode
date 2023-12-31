var maximunWealth = function(accounts){
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++){
        let wealth = accounts[i].reduce((acc,val)=>acc + val , 0);
          maxWealth = Math.max(maxWealth,wealth);
    }
    return maxWealth;
}

// example

const accounts = [ [1,2],[1,3]];
const result = maximunWealth(accounts);
console.log(result);