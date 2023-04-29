/**
 * Generates the first n Fibonacci numbers in an array using iteration.
 *
 * @param {number} n - The number of Fibonacci numbers to generate.
 * @returns {number[]} An array containing the first n Fibonacci numbers.
 */
function fibs(n) {
    const arr = [0, 1];
    if (n === 0) return [0];
    if (n === 1) return arr;
    for (let i = 2 ; i <= n ; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}


/**
 * Generates the first n Fibonacci numbers in an array using recursion.
 *
 * @param {number} n - The number of Fibonacci numbers to generate.
 * @returns {number[]} An array containing the first n Fibonacci numbers.
 */
function fibsRec(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 1] + fibsRec(n - 1)[n - 2]];
}


for (let i = 0 ; i <= 10 ; i++) {
    console.log(i, fibsRec(i));
}
