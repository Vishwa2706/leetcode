var removeStars = function(s) {
    const stack = [];
    const chars = s.split('');

    for (let char of chars) {
        if (char === '*') {
            if (stack.length > 0) {
                stack.pop(); // Remove closest non-star character to the left
            }
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
}