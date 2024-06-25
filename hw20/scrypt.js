document.write('Напишіть функцію 🤪🤪🤪');

//Напишіть функцію, яка приймає два числа в якості параметрів і повертає їх суму.
function returnSum(a, b) {
    return a + b;

}

let result = returnSum(5, 10);
console.log(result);

//Напишіть функцію, яка приймає рядок як параметр і повертає обернений рядок.
function reversedStr(string) {
    return string.split('').reverse();
}

const originString = 'Hello world!';

const reverseStr = reversedStr(originString);

console.log(reverseStr);

//Напишіть функцію, яка приймає рядок як параметр і повертає кількість голосних літер у цьому рядку.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let size of str) {
        if (vowels.includes(size)) {
            count++;
        }
    }

    return count;
}


const newString = 'what are you douing ? ';
const vowsCount = countVowels(newString);
console.log('Кількість голосних літер у цьому рядку: ', newString, 'дорівнює', vowsCount);

//Напишіть функцію, яка приймає масив чисел і повертає середнє значення цих чисел.
function numbersAverage(array) {
    let sum = array.reduce((a, b) => a + b, 0);

    let average = sum / array.length;

    return average;

}

let myArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

let result2 = numbersAverage(myArray);

console.log(result2);



//Напишіть функцію, яка приймає масив рядків і повертає новий масив,  в якому кожен рядок перетворений у верхній регістр.

function newArray(array) {
    let arrUpper = array.map(string => string.toUpperCase());


    return arrUpper;
}

let newMyArray = ['Lorem lorem lorem'];
let result3 = newArray(newMyArray);

console.log(result3);

//Напишіть функцію, яка приймає масив чисел і число,  а потім повертає індекс першого елемента в масиві, який дорівнює заданому числу.  Якщо такого елемента немає, поверніть -1.

function arrAndNum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1; 
    
}

let array = [5, 3, 7, 1, 4];

let number = 7;


console.log(arrAndNum(array, number));


//Напишіть функцію, яка приймає рядок і повертає новий рядок, в якому всі слова починаються з великої літери.

function capitalLetter(string) {
    return string.replace(/\b\w/g, function(letter) {
        return letter.toUpperCase();
    });
}

let myString = "this is an example string to capitalize words";
let newString2 = capitalLetter(myString);
console.log(newString2);

//Напишіть функцію, яка приймає масив рядків і повертає новий масив, в якому кожен рядок складається з перших трьох символів оригінального рядка.
function firstThreeCharacters(arr) {
    return arr.map(function(str) {
        return str.substring(0, 3);
    });
}

let myArray5 = ['car', 'infinity', 'bmw', 'nissan'];
let newArray3 = firstThreeCharacters(myArray5);
console.log(newArray3);



//Напишіть функцію, яка приймає масив чисел і повертає новий масив, в якому всі додатні числа помножені на 2.

function doubleNumbers(arr) {
    return arr.map(function(num) {
        if (num > 0) {
            return num * 2;
        } else {
            return num;
        }
    });
}

let myArray6 = [133, -32, 36, 5];
let newArray4 = doubleNumbers(myArray6);
console.log(newArray4);