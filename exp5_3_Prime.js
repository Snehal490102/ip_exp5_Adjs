function* generatePrimes(limit) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num; // Yielding the prime number
        }
    }
}

// Example usage
const limit = 50; // Specify the limit
const primeGenerator = generatePrimes(limit);

console.log(`Prime numbers up to ${limit}:`);
for (let prime of primeGenerator) {
    console.log(prime);
}
