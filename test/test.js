var assert = require('assert');
const performance = require('perf_hooks').performance;
// const zero = require('../src/index');
//comment
describe('zero', function () {
    var testCase1 = [
        {value_n: 3, arr: [777777732, 777777769, 777777707], expected: 'YES' },
        {value_n: 3, arr: [429728747, 773363571, 580543238], expected: 'YES' },
        {value_n: 3, arr: [10224, 4237, 5987], expected: 'YES' },
        {value_n: 4, arr: [673102149, 496813081, 561219907, 702209411], expected: 'YES' },
        {value_n: 6, arr: [7926, 6259, 770, 7448, 25457, 3054], expected: 'YES' },
        {value_n: 4, arr: [1, 1, 2, 2], expected: 'YES' },
        {value_n: 4, arr: [2, 3, 3, 4], expected: 'YES' },
        {value_n: 8, arr: [400, 3333, 222, 565, 565, 222, 3333, 400], expected: 'YES' }
    ];
    var testCase2 = [
        {value_n: 2, arr: [641009859, 641009859], expected: 'YES' },
        {value_n: 2, arr: [9859, 9859], expected: 'YES' },
        {value_n: 2, arr: [1, 1], expected: 'YES' }
    ];
    var testCase3 = [
        {value_n: 5, arr: [6, 6, 6, 6, 6], expected: 'YES' },
        {value_n: 5, arr: [1000000000, 1000000000, 1000000000, 1000000000, 1000000000], expected: 'YES' }
    ];
    var testCase4 = [
        {value_n: 3, arr: [3, 3, 3], expected: 'NO' },
        {value_n: 1, arr: [2], expected: 'NO' },
        {value_n: 6, arr: [1, 2, 3, 4, 5, 6], expected: 'NO' },
        {value_n: 2, arr: [1, 2], expected: 'NO' },
        {value_n: 2, arr: [10051, 9859], expected: 'NO' },
        {value_n: 2, arr: [5412, 7455], expected: 'NO' },
        {value_n: 3, arr: [772674020, 797853944, 81685387], expected: 'NO' },
        {value_n: 3, arr: [10406, 5987, 4237], expected: 'NO' },
        {value_n: 3, arr: [1653, 8745, 3643], expected: 'NO' },
        {value_n: 5, arr: [564718673, 365329221, 412106895, 291882089, 585325539], expected: 'NO' },
        {value_n: 7, arr: [2532, 23007, 2387, 4898, 4636, 5422, 2988], expected: 'NO' },
        {value_n: 8, arr: [3343, 33870, 9537, 1563, 709, 8515, 5451, 4713], expected: 'NO' },
        {value_n: 9, arr: [9486, 407, 8791, 38849, 4191, 197, 5807, 8030, 1939], expected: 'NO' },
        {value_n: 2, arr: [999999954, 999999992], expected: 'NO' },
    ];
    var testCase5 = [
        {value_n: 2, arr: [1000000034000, 1000000045000, 1000000000045, 1000000000020, 10000000000063, 10000000000045, 10000000000033, 1000000000000, 1000000000000, 1000000000000], expected: 'NO' },
        {value_n: 1, arr: [999999954, 999999992], expected: 'NO' },
        {value_n: 1, arr: [1], expected: 'NO' },
    ];

    describe('testCase1', function () {
        testCase1.forEach(function (testCase1) {
            it(`should turn ${testCase1.value_n}, [${testCase1.arr}]  to ${testCase1.expected}`, function () {
                let start = performance.now()
                // You can change the name of function:
                let result = zero(testCase1.value_n, testCase1.arr);
                let end = performance.now()
                console.log('This took ' + (end - start) + 'ms to complete:');
                assert.equal(result, testCase1.expected);
            });
        });
    });

    describe('testCase2', function () {
        testCase2.forEach(function (testCase2) {
            it(`should turn ${testCase2.value_n}, [${testCase2.arr}]  to ${testCase2.expected}`, function () {
                let start = performance.now()
                // You can change the name of function:
                let result = zero(testCase2.value_n, testCase2.arr);
                let end = performance.now()
                console.log('This took ' + (end - start) + 'ms to complete:');
                assert.equal(result, testCase2.expected);
            });
        });
    });

    describe('testCase3', function () {
        testCase3.forEach(function (testCase3) {
            it(`should turn ${testCase3.value_n}, [${testCase3.arr}]  to ${testCase3.expected}`, function () {
                let start = performance.now()
                // You can change the name of function:
                let result = zero(testCase3.value_n, testCase3.arr);
                let end = performance.now()
                console.log('This took ' + (end - start) + 'ms to complete:');
                assert.equal(result, testCase3.expected);
            });
        });
    });

    describe('testCase4', function () {
        testCase4.forEach(function (testCase4) {
            it(`should turn ${testCase4.value_n}, [${testCase4.arr}]  to ${testCase4.expected}`, function () {
                let start = performance.now()
                // You can change the name of function:
                let result = zero(testCase4.value_n, testCase4.arr);
                let end = performance.now()
                console.log('This took ' + (end - start) + 'ms to complete:');
                assert.equal(result, testCase4.expected);
            });
        });
    });

    describe('testCase5', function () {
        testCase5.forEach(function (testCase5) {
            it(`should turn ${testCase5.value_n}, [${testCase5.arr}]  to ${testCase5.expected}`, function () {
                let start = performance.now()
                // You can change the name of function:
                let result = zero(testCase5.value_n, testCase5.arr);
                let end = performance.now()
                console.log('This took ' + (end - start) + 'ms to complete:');
                assert.equal(result, testCase5.expected);
            });
        });
    });
});



