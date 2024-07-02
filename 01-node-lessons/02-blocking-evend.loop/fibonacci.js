//! Not optimal

// setTimeout(() => console.log('Timeout 1'), 0);
// const fib_not_optimal = (n) => {
//     if (n === 0 || n === 1) {
//         return n;
//     }
//     return fib_not_optimal(n - 1) + fib_not_optimal(n - 2);
// }
// console.log(fib_not_optimal(10));

//! Not optimal not blocking
// setTimeout(() => console.log('Timeout 1'), 0);
// const fib_not_optimal_not_blocking = (n) => {
//     return new Promise((resolve, reject) => {
//         if (n === 0 || n === 1) {
//             return resolve(n);
//         }

//         setImmediate(() =>
//             Promise.all([fib_not_optimal_not_blocking(n - 1), fib_not_optimal_not_blocking(n - 2)]).then((values) => {
//                 resolve(values[0] + values[1])
//             })
//         );
//     });
// }
// console.log(await fib_not_optimal_not_blocking(10));

//! Almost Optimal solution
// const cache = new Map();
// setTimeout(() => console.log('Timeout 1'), 0);
// const fib_not_optimal_not_blocking = (n) => {
//     return new Promise((resolve, reject) => {
//         if (n === 0 || n === 1) {
//             return resolve(n);
//         }
//         if (cache.has(n)) {
//             return resolve(cache.get(n));
//         }
//         setImmediate(() =>
//             fib_not_optimal_not_blocking(n - 1).then(value1 => fib_not_optimal_not_blocking(n - 2).then(value2 => {
//                 cache.set(n, value1 + value2)
//                 resolve(value1 + value2)
//             }))
//         );
//     });
// }
// console.log(await fib_not_optimal_not_blocking(1100));

//! Optimal solution

const fib = (n) => {
    if (n === 0 || n === 1) {
        return n;
    }
    let fib1 = 0;
    let fib2 = 1;
    let sum;
    for (let i = 2; i <= n; i++) {
        sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = sum;
    }
    return sum;
};

console.log(fib(1100));
