const checkIfPrime = num => {
    for (k = 2; k <= Math.sqrt(num); k++) {
        if (num % k === 0) {
            return false;
        }
    }
    return true;
}

const generatePrimeArray = upperBound => {
    let array = [2];
    for (i = 3; i <= upperBound; i++) {
       if (checkIfPrime(i)) {
            array.push(i)
        }
    }
    return array;
}

const getPrimeFactors = (number) => {
    if (checkIfPrime(number)){
        return number
    }
    const primeArr = generatePrimeArray(number)
    const factors = []
    let dividedNum = number
    while(dividedNum !== 1) {
        for (j = primeArr.length ; j >= 0; j-- ){
            const primeCandidate = primeArr[j];
            if (dividedNum % primeCandidate === 0){
              factors.push(primeCandidate);
              dividedNum = dividedNum / primeCandidate;
              break;
            }
        }
    }
    return factors;
}

console.log(getPrimeFactors(123123))