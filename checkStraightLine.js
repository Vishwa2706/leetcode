function checkStraightLine(coordinates) {
    if (coordinates.length <= 2) {
        return true;
    }

    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];

    // Handle vertical line
    if (x2 - x1 === 0) {
        for (let i = 2; i < coordinates.length; i++) {
            const [x, y] = coordinates[i];
            if (x !== x1) {
                return false;
            }
        }
    } else {
        const slope = (y2 - y1) / (x2 - x1);
        for (let i = 2; i < coordinates.length; i++) {
            const [x, y] = coordinates[i];
            if ((y - y1) / (x - x1) !== slope) {
                return false;
            }
        }
    }

    return true;
}

// Example usage:
const coordinates1 = [[1,2],[2,3],[3,4],[4,5],[5,6]];
console.log(checkStraightLine(coordinates1)); // Output: true

const coordinates2 = [[1,1],[2,2],[3,4],[4,5],[5,6]];
console.log(checkStraightLine(coordinates2)); // Output: false

const coordinates3 = [[0,0],[0,1],[0,-1]];
console.log(checkStraightLine(coordinates3)); // Output: true
