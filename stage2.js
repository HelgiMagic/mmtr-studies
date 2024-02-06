// Написать свою реализацию функций: map, filter, find, some, every.
function myMap(cb) {
  const newArray = [];

  for (let i = 0; i < this.length; i += 1) {
    newArray.push(cb(this[i], i, this));
  }

  return newArray;
}

Array.prototype.myMap = myMap;

console.log([1, 2, 3, 4, 5].myMap((num, i) => num * 100 + i));

function myFilter(cb) {
  const newArray = [];

  for (let i = 0; i < this.length; i += 1) {
    if (cb(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
}

Array.prototype.myFilter = myFilter;

console.log([1, 2, 3, 4, 5, 6].filter((num) => num % 2 !== 0));

function myFind(cb) {
  for (let i = 0; i < this.length; i += 1) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
}

Array.prototype.myFind = myFind;

console.log([0, 1, 2, 3, 4, 5, 6].myFind((num) => num > 3));

function mySome(cb) {
  for (let i = 0; i < this.length; i += 1) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }

  return false;
}

Array.prototype.mySome = mySome;

const numberArray = [0, 1, 2, 3, 4, 5, 6];

console.log(numberArray.mySome((num) => num > 3));

function myEvery(cb) {
  for (let i = 0; i < this.length; i += 1) {
    if (!cb(this[i], i, this)) {
      return false;
    }
  }

  return true;
}

Array.prototype.myEvery = myEvery;

console.log(numberArray.myEvery((num) => num > 3));
console.log(numberArray.myEvery((num) => num > -1));

export {
  myMap, myFilter, myFind, mySome, myEvery,
};
