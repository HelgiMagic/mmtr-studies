/* eslint-disable import/extensions */
import assert from 'assert';
import * as myArrFunction from './stage2.js';

const numberArray = [0, 1, 2, 3, 4, 5, 6];

assert.deepEqual(myArrFunction.myMap(numberArray, (num) => num + 2), [2, 3, 4, 5, 6, 7, 8]);

assert.deepEqual(myArrFunction.myFilter(numberArray, (num) => num > 4), [5, 6]);

assert.deepEqual(myArrFunction.myFind(numberArray, (num) => num > 4), 5);

assert.deepEqual(myArrFunction.mySome(numberArray, (num) => num > 3), true);

assert.deepEqual(myArrFunction.myEvery(numberArray, (num) => num > 3), false);

console.log('Все тесты пройдены!');
