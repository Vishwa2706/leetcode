
var equalPairs = function(grid) {
    const n = grid.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const row = grid[i];
            const column = Array.from({ length: n }, (_, k) => grid[k][j]);

            if (arraysEqual(row, column)) {
                count++;
            }
        }
    }

    return count;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}



    