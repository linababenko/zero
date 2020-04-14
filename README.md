[![Coverage Status](https://coveralls.io/repos/github/linababenko/zero/badge.svg?branch=master)](https://coveralls.io/github/linababenko/zero?branch=master)

## Task:

You are given an array a1,a2,…,an.

In one operation you can choose two elements ai and aj (i≠j) and decrease each of them by one.

You need to check whether it is possible to make all the elements equal to zero or not.

#### Input
The first line contains a single integer n (2≤n≤10^5) — the size of the array.

The second line contains n integers a1,a2,…,an (1≤ai≤10^9) — the elements of the array.

#### Output
Print "YES" if it is possible to make all elements zero, otherwise print "NO".

## How to test:

Test case 1: 

    WHEN the sum of all elements in the array is even, 
    AND the largest element of the array <= the sum of all other elements.
    THEN result should be 'YES'.

Test case 2: 

    WHEN size of array 2, 
    AND all elements in array are the same 
    THEN result should be 'YES'.

Test case 3: 

    WHEN size of array is even, 
    AND all elements in array are the same 
    THEN result should be 'YES'.    

Test case 4: 

    WHEN the sum of all elements in the array is odd,
    AND the largest element of the array >= the sum of all other elements.
    THEN result should be 'NO'.

Test case 5: 

    WHEN the size of array < 2 or size of array < then count of elements in array,
    THEN result should be 'NO'.
   

- In the file with your function `module.exports = name_function;`
- `$ npm install`
- Then run tests with `$ npm test`

#### Test coverage:
The command `nyc` in front of your existing test command will show code coverage percentage.

