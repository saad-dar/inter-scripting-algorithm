function sumPrimes(num) {
    let primeNum = getPrimes(num);
    let sum = 0;
    for (let i = 0; i < primeNum.length; i++) {
        sum += primeNum[i];
    }
    return sum;
}

function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

console.log(sumPrimes(10));