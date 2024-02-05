/* eslint-disable max-len */
const numberArray = [0, 1, 2, 3, 4, 5, 6];

// Написать функцию, которая принимает на вход массив из двух чисел и возвращает сумму
// этих двух чисел плюс сумму всех чисел между ними. Наименьшее число не всегда будет
// на первом месте. (Например sumAll([4, 1]) должен возвращать 10)
function sumBetween(numArray) {
  const min = Math.min(...numArray);
  const max = Math.max(...numArray);

  let sum = 0;

  for (let i = min; i <= max; i += 1) {
    sum += i;
  }

  return sum;
}

console.log(sumBetween([4, 1]));

// Написать функцию, которая на вход принимает два массива и возвращает новый массив
// с элементами найденными только в одном массиве, но не в обоих.
function findUniq(arr1, arr2) {
  const arr = [...arr1, ...arr2];

  return arr.filter((value) => {
    if (arr2.includes(value) && arr1.includes(value)) return false;

    return true;
  });
}

console.log(findUniq([1, 2, 3], [3, 4, 5]));

// Написать функцию, которая на вход принимает массив и еще один или несколько
// аргументов (точное количество не известно). Удалить из массива все элементы, которые
// имеют то же значение, что и эти аргументы.
function removeElements(array, ...elements) {
  return array.filter((value) => !elements.includes(value));
}

console.log(removeElements(numberArray, 4, 3, 1));

// Создайте функцию, которая просматривает массив объектов (первый аргумент) и
// возвращает массив всех объектов, имеющих совпадающие пары имя и значение (второй
// аргумент). Например: whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat":
// 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) должен вернуться [{ "apple": 1, "bat": 2 }, {
// apple": 1, "bat": 2, "cookie":2 }]
function findMatchingObjects(objArray, exampleObj) {
  const keys = Object.keys(exampleObj);

  return objArray.filter((obj) => keys.every((key) => obj[key] === exampleObj[key]));
}

console.log(
  findMatchingObjects(
    [
      { apple: 1, bat: 3, banana: 2 },
      { apple: 1, bat: 3 },
    ],
    { apple: 1, banana: 2 },
  ),
);

// Написать функцию, которая конвертирует строку в spinal-case регистр.
function makeSpinalCase(str) {
  const words = str.split(' ');

  const lowerCaseWords = words.map((word) => word.toLowerCase());
  return lowerCaseWords.join('-');
}

console.log(makeSpinalCase('heLlo World Bla bla'));

// Написать функцию, которая осуществляет поиск и замену в предложении. Первый
// аргумент - это строка, в которой осуществляется поиск и замена. Второй аргумент - это
// слово, которое нужно заменить, третий аргумент - слово, на которое нужно заменить. При
// замене сохраняйте регистр первого символа в исходном слове.
function replaceWord(sentence, oldWord, newWord) {
  const words = sentence.split(' ');

  let firstNewLetter = newWord[0];

  if (oldWord[0].toUpperCase() === oldWord[0]) firstNewLetter = firstNewLetter.toUpperCase();
  else firstNewLetter = firstNewLetter.toLowerCase();

  const index = words.findIndex((word) => word === oldWord);
  words[index] = firstNewLetter + newWord.slice(1);
  return words.join(' ');
}

console.log(replaceWord('hello World apple', 'World', 'banana'));

// Написать функцию, которая на вход принимает последовательность букв и ищет
// пропущенные буквы. Если все буквы присутствуют в диапазоне, то возвращается
// undefined. Например: fearNotLetter("abce") должна вернуть "d"
function findMissingLetter(str) {
  const lowerString = str.toLowerCase();

  for (let i = 0; i < str.length - 1; i += 1) {
    if (lowerString.charCodeAt(i + 1) - lowerString.charCodeAt(i) > 1) {
      return String.fromCharCode(lowerString.charCodeAt(i) + 1);
    }
  }
  return undefined;
}

console.log(findMissingLetter('aBCe'));

// Написать функцию, которая принимает два или более массивов и возвращает новый
// массив уникальных значений. Значения должны быть отсортированы по их
// первоначальному порядку.
function uniq(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(uniq([1, 2, 3, 4, 5], [0, -1, 3, 4, 5, 6, 7]));

// Написать функцию, которая заменяет символы &, <, >, "(двойные кавычки), и ‘(апостроф)
// в строке их соответствующим HTML - кодом.
function replaceChars(str) {
  const replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  const split = str.split('');

  const mapped = split.map((char) => replacements[char] ?? char);
  return mapped.join('');
}

console.log(replaceChars('< > " bla bla'));

// Написать функцию, которая суммирует все простые числа до n (аргумент функции)
function sumUpTo(number) {
  const normalizedNumber = Math.abs(number);
  let sum = 0;

  for (let i = 0; i <= normalizedNumber; i += 1) {
    sum += i;
  }

  return number > 0 ? sum : -sum;
}

console.log(sumUpTo(5));
console.log(sumUpTo(-5));

// Написать функцию, которая принимает массив и функцию и удаляет каждый элемент
// массива начиная с первого, пока функция не вернет true, а затем возвращает оставшуюся
// часть массива. Например: dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) должна
// вернуть [3, 4].
function removeUntilTrue(array, cb) {
  const result = [];
  let cbReturnedTrue = false;

  array.forEach((elem) => {
    if (cb(elem)) cbReturnedTrue = true;
    if (cbReturnedTrue) result.push(elem);
  });

  return result;
}

console.log(removeUntilTrue([1, 2, 3, 4], (n) => n >= 3));

// Написать функцию, которая принимает массив различной вложенности и возвращает
// одномерный массив. Например: steamrollArray([1, [2], [3, [[4]]]]) должна вернуть [1, 2, 3, 4].
function deepFlat(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) result = result.concat(deepFlat(arr[i]));
    else result.push(arr[i]);
  }

  return result;
}

console.log(deepFlat([1, [2], [3, [[4]]]]));

// Написать функцию, которая суммирует два аргумента вместе. Если указан только один
// аргумент, то возвращает функцию, которая ожидает второй аргумент и возвращает сумму.
function improvedSum(num1, num2) {
  if (num2 === undefined) return (remainingNum) => num1 + remainingNum;

  return num1 + num2;
}

console.log(improvedSum(1, 6));
console.log(improvedSum(1)(10));
