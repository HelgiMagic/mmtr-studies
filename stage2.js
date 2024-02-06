// Написать свою реализацию функций: map, filter, find, some, every.

function myMap(array, cb) {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    newArray.push(cb(array[i], i, array));
  }

  return newArray;
}

console.log(myMap([1, 2, 3, 4, 5], (num, i) => num * 100 + i));

function myFilter(array, cb) {
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (cb(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(myFilter([1, 2, 3, 4, 5, 6], (num) => num % 2 !== 0));

function myFind(array, cb) {
  for (let i = 0; i < array.length; i += 1) {
    if (cb(array[i], i, array)) {
      return array[i];
    }
  }

  return undefined;
}

console.log(myFind([0, 1, 2, 3, 4, 5, 6], (num) => num > 3));

function mySome(array, cb) {
  for (let i = 0; i < array.length; i += 1) {
    if (cb(array[i], i, array)) {
      return true;
    }
  }

  return false;
}

const numberArray = [0, 1, 2, 3, 4, 5, 6];

console.log(mySome(numberArray, (num) => num > 3));

function myEvery(array, cb) {
  for (let i = 0; i < array.length; i += 1) {
    if (!cb(array[i], i, array)) {
      return false;
    }
  }

  return true;
}

console.log(myEvery(numberArray, (num) => num > 3));
console.log(mySome(numberArray, (num) => num > -1));

export {
  myMap, myFilter, myFind, mySome, myEvery,
};
