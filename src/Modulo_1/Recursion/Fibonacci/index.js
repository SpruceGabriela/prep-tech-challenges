"use strict";
/**
 * @param {number} n
 * @return {number}
 */
//recursive O(2^N)
const fib = function (n) {
    if (n === 0 || n === 1)
        return n;
    return fib(n - 1) + fib(n - 2);
};
//iterative O(N)
// var fib = function(n) {
//if (n === 0 || n === 1) return n;
//let fibonacci = [0, 1];
//for (let i = 2; i <= n; i++) {
//   fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
//}
//return fibonacci[n];
//};
