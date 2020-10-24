const checkPrime = number => {
    for (i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

const generateArray = lastNumber => {
    let array = [];
    for (j = 2; j < Math.sqrt(lastNumber); j++) {
        
        if (checkPrime(j)) {
            array.push(j)
        }
    }
    return array;
}

const primeFactorization = (number) => {
    let result = [];
    let primes = generateArray(number);
    for (k = primes.length - 1; k >= 0; k--) {
        if (number % primes[k] === 0) {
            while (number % primes[k] === 0) {
                number = number / primes[k];    
                result.push(primes[k])
            }
        }
    }
    return result.join(", ");
};



console.log(primeFactorization(1023120));

console.log(29*7*7*5*3*3*2*2*2*2)