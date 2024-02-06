/* eslint-disable import/extensions */
import assert from 'assert';
import * as myArrFunction from './stage2.js';

Array.prototype.myMap = myArrFunction.myMap;
Array.prototype.myFilter = myArrFunction.myFilter;
Array.prototype.myFind = myArrFunction.myFind;
Array.prototype.mySome = myArrFunction.mySome;
Array.prototype.myEvery = myArrFunction.myEvery;

const numberArray = [0, 1, 2, 3, 4, 5, 6];
const cleanArray = [];
const smallNumberArray = [0, 1, 3];

console.log(numberArray.myMap((num) => num + 2));

assert.deepEqual(numberArray.myMap((num) => num + 2), [2, 3, 4, 5, 6, 7, 8]);
assert.deepEqual(cleanArray.myMap((num) => num + 2), []);
assert.deepEqual(smallNumberArray.myMap((num, i) => num + i), [0, 2, 5]); // i working

assert.deepEqual(numberArray.myFilter((num) => num > 4), [5, 6]);
assert.deepEqual(cleanArray.myFilter((num) => num + 2), []);
assert.deepEqual(smallNumberArray.myFilter((num, i) => num === i), [0, 1]); // i working

assert.deepEqual(numberArray.myFind((num) => num > 4), 5);
assert.deepEqual(cleanArray.myFind((num) => num > 4), undefined);
assert.deepEqual(smallNumberArray.myFind((num, i) => num !== i), 3); // i working

assert.deepEqual(numberArray.mySome((num) => num > 3), true);
assert.deepEqual(cleanArray.mySome((num) => num > 4), false);
assert.deepEqual(smallNumberArray.mySome((num, i) => num > i), true); // i working

assert.deepEqual(numberArray.myEvery((num) => num > 3), false);
assert.deepEqual(cleanArray.myEvery((num) => num > 4), true);
assert.deepEqual(smallNumberArray.myEvery((num, i) => num > i), false); // i working

// array prop working
assert.deepEqual(smallNumberArray.myMap((num, i, array) => array), [smallNumberArray, smallNumberArray, smallNumberArray]);
assert.deepEqual(smallNumberArray.myFilter((num, i, array) => num === array[i]), smallNumberArray);
assert.deepEqual(smallNumberArray.myFind((num, i, array) => num === array[i]), 0);
assert.deepEqual(smallNumberArray.mySome((num, i, array) => num === array[i]), true);
assert.deepEqual(smallNumberArray.myEvery((num, i, array) => num === array[i]), true);

console.log('Все тесты пройдены!');
