class SquareIterator {
    constructor(numbers) {
        this.numbers = numbers;
        this.index = 0;
    }

    next() {
        if (this.index < this.numbers.length) {
            // Get the square of the current number
            const value = this.numbers[this.index] ** 2;
            this.index++;
            return { value, done: false };
        } else {
            return { value: undefined, done: true }; // Iteration is complete
        }
    }
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const squareIterator = new SquareIterator(numbers);

// Using the iterator
console.log("Squares of the numbers:");
let result = squareIterator.next();
while (!result.done) {
    console.log(result.value);
    result = squareIterator.next();
}
