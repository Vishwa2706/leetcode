class RecentCounter {
    constructor() {
        this.requests = [];
    }

    ping(t) {
        this.requests.push(t);
        while (this.requests[0] < t - 3000) {
            this.requests.shift();
        }
        return this.requests.length;
    }
}

// Example usage:
const counter = new RecentCounter();
console.log(counter.ping(100)); // Output: 1
console.log(counter.ping(300)); // Output: 2
console.log(counter.ping(1000)); // Output: 3
console.log(counter.ping(3000)); // Output: 4
console.log(counter.ping(3002)); // Output: 3