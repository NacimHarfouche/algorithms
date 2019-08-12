/**
 * Write an algorithm that checks if the passed number is an prime number.
 */
var n = 89;

function isPrimeNumber(n) {
    for (let i = 1; i <= n; i++) {
        if (i === 1 || i === n) {
            if (n === 1) {
                return `${n} is not a prime number`;
            }
            continue;
        } else if ((/\.{1}/.test((n / i))) === false) {
            return `${n} is not a prime number`;
        }
    }
    return `${n} is a prime number`;
}

console.log(isPrimeNumber(n));