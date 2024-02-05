/* eslint-disable max-len */

// Написать функцию, которая на вход принимает целое число и возвращает факториал этого числа.
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

// Написать функцию, которая на вход принимает строку и возвращает длину самого длинного слова в этой строке.
function findLongestWord(str) {
  const words = str.split(' ');
  let maxLength = 0;

  words.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  });

  return maxLength;
}

console.log(findLongestWord('рыба апельсин дом'));

// Написать функцию, которая на вход принимает массив, состоящий из массивов целых
// чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий из
// наибольшего числа каждого предоставленного подмассива
function largestNumbers(array) {
  return array.map((numArray) => Math.max(...numArray));
}

console.log(
  largestNumbers([
    [1, 2, 3],
    [4, 5],
    [10, 6, 7, 8, 9],
  ]),
);

// Написать функцию, которая на вход принимает строку и целое число и обрезает строку
// (первый аргумент), если она длиннее заданной максимальной длины строки (второй
//   аргумент) и возвращает обрезанную строку с «…» в конце.
function trimString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  return `${str.slice(0, maxLength)}...`;
}

console.log(trimString('hello world', 7));

// Написать функцию, которая на вход принимает строку и возвращает эту строку в
// формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре.
function normalizeWord(word) {
  return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;
}

function normalizeString(string) {
  const wordsArr = string.split(' ');

  const normalizedArr = wordsArr.map(normalizeWord);

  return normalizedArr.join(' ');
}

console.log(normalizeString('АаАаААааААааА бБбБббБ'));

// Написать функцию, которая на вход принимает два массива и целое число n. Функция
// должна скопировать каждый элемент первого массива во второй по порядку начиная с
// индекса n второго массива и вернуть полученный массив. Входные массивы не должны
// изменяться. (например: при входных данных ([1, 2, 3], [4, 5], 1) должно вернуться [4, 1, 2,
// 3, 5]
function copyArray(arr1, arr2, n) {
  const result = arr2.slice();

  arr1.forEach((elem, i) => result.splice(n + i, 0, elem));

  return result;
}

console.log(copyArray([1, 2, 3], [4, 5], 1));

// Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные
// значения" (https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%
// B0%D1%80%D1%8C/Falsy)
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

console.log(removeFalsyValues(['hello', false, undefined, 0, NaN, 23]));

// Написать функцию, которая на вход принимает массив, состоящий из двух строк. Функция
// должна вернуть true, если строка в первом элементе массива содержит все буквы строки
// во втором элементе массива (регистр игнорируется).
function containsAllLetters(arr) {
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();

  for (let i = 0; i < str2.length; i += 1) {
    if (str1.indexOf(str2[i]) === -1) {
      return false;
    }
  }

  return true;
}

console.log(containsAllLetters(['abcdegr', 'abcde']));

// Написать функцию, которая на вход принимает масссив и целое число. Функция должна
// разбить массив (первый аргумент) на группы длиной size (второй агрумент) и вернуть их в
// виде двумерного массива
function chunkArray(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

// Используя рекурсию (без использования циклов). Написать функцию, которая принимает
// массив и целое число (n) и заполняет массив числами от n до 1.
function fillArray(array, n) {
  if (n === 0) return array;

  array.push(n);

  if (n < 0) return fillArray(array, n + 1);
  return fillArray(array, n - 1);
}

console.log(fillArray([1, 2, 3, 4, 5], 10));
console.log(fillArray([1, 2, 3, 4, 5], -5));
