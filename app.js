'use strict';

let cost = [223, 9800, 211]
let sum = 0;
let discount = 0;

for (let value of cost) {
    sum += value;
};

if (sum > 10000) {
    discount = Math.trunc(sum * 0.05);
};
console.log(discount);
