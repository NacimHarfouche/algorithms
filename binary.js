/**
 * Write an algorithm that prints the binary numbers up to the upper limit. 
 */
let upperLimit = 10000;

(function binaryNumbers(n) {
    let arrayBinary = [];
    for (let i = 0; i <= n; i++) {
        if (i === 1 || i === 2) {
            arrayBinary.push(i);
        } else if ((arrayBinary[arrayBinary.length - 1] % 2) === 0 && (i / 2) === arrayBinary[arrayBinary.length - 1]) {
            arrayBinary.push(i);
        }
        i !== 0 ? console.log(arrayBinary[arrayBinary.length - 1]) : undefined;
    }
})(upperLimit);