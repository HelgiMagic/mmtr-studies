/* eslint-disable import/extensions */
import assert from 'assert';
import * as myArrFunction from './stage2.js';

const numberArray = [0, 1, 2, 3, 4, 5, 6];
const cleanArray = [];
const smallNumberArray = [0, 1, 3];

console.log(numberArray.myMap((num) => num + 2));

assert.deepEqual(myArrFunction.myMap(numberArray, (num) => num + 2), [2, 3, 4, 5, 6, 7, 8]);
assert.deepEqual(myArrFunction.myMap(cleanArray, (num) => num + 2), []);
assert.deepEqual(myArrFunction.myMap(smallNumberArray, (num, i) => num + i), [0, 2, 5]); // i working

assert.deepEqual(myArrFunction.myFilter(numberArray, (num) => num > 4), [5, 6]);
assert.deepEqual(myArrFunction.myFilter(cleanArray, (num) => num + 2), []);
assert.deepEqual(myArrFunction.myFilter(smallNumberArray, (num, i) => num === i), [0, 1]); // i working

assert.deepEqual(myArrFunction.myFind(numberArray, (num) => num > 4), 5);
assert.deepEqual(myArrFunction.myFind(cleanArray, (num) => num > 4), undefined);
assert.deepEqual(myArrFunction.myFind(smallNumberArray, (num, i) => num !== i), 3); // i working

assert.deepEqual(myArrFunction.mySome(numberArray, (num) => num > 3), true);
assert.deepEqual(myArrFunction.mySome(cleanArray, (num) => num > 4), false);
assert.deepEqual(myArrFunction.mySome(smallNumberArray, (num, i) => num > i), true); // i working

assert.deepEqual(myArrFunction.myEvery(numberArray, (num) => num > 3), false);
assert.deepEqual(myArrFunction.myEvery(cleanArray, (num) => num > 4), true);
assert.deepEqual(myArrFunction.myEvery(smallNumberArray, (num, i) => num > i), false); // i working

// array prop working
assert.deepEqual(myArrFunction.myMap(smallNumberArray, (num, i, array) => array), [smallNumberArray, smallNumberArray, smallNumberArray]);
assert.deepEqual(myArrFunction.myFilter(smallNumberArray, (num, i, array) => num === array[i]), smallNumberArray);
assert.deepEqual(myArrFunction.myFind(smallNumberArray, (num, i, array) => num === array[i]), 0);
assert.deepEqual(myArrFunction.mySome(smallNumberArray, (num, i, array) => num === array[i]), true);
assert.deepEqual(myArrFunction.myEvery(smallNumberArray, (num, i, array) => num === array[i]), true);


console.log('Все тесты пройдены!');
