var judgeCircle = function(moves){
    let x=0;
    let y=0;

    for(let move of moves){
        switch(move){
            case 'R':
                x++;
                break;
            case 'L':
                x--;
                break;
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;       
        }
    }
    return x === 0 && y === 0 ;
}

//example
const moves = "LLRR";
const result = judgeCircle(moves);
console.log(result);