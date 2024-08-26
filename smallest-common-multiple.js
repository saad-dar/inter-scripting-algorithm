function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    console.log(min, max);
    const numberDivisors = max - min + 1;
    console.log(numberDivisors)
    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
        upperBound *= i;
        console.log(upperBound)
    }
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        // Check if every value in range divides 'multiple'
        let divisorCount = 0;
        for (let i = min; i <= max; i++) {
            // Count divisors
            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount === numberDivisors) {
            console.log("multiple", multiple)
            return multiple;
        }
    }
}


// same algorithm but with filter, ruduce, map and filter

function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const range = Array(max - min + 1)
        .fill(0)
        .map((_, i) => i + min);
    // Largest possible value for SCM
    const upperBound = range.reduce((prod, curr) => prod * curr);
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        // Check if every value in range divides 'multiple'
        const divisible = range.every((value) => multiple % value === 0);
        if (divisible) {
            return multiple;
        }
    }
}

console.log(smallestCommons([1, 5]));