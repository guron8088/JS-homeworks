document.write('JS_JS_JS');

//Функції:
//Створіть функцію, яка приймає два числа і повертає їхню суму.

function sum5(num1, num2) {

    return num1 + num2;

}

num1 = Number(prompt('Number'));
num2 = Number(prompt('Number'));
console.log(sum5(num1, num2));
alert(sum5(num1, num2));

//Напишіть функцію, яка перевіряє, чи є переданий рядок паліндромом.

function checkPalindrome(str) {
    let strLen = str.length,
        strReverse = str.split('').reverse().join('');
    if (strReverse == str) {
        return 'Palindrom';
    } else {
        return 'not palindrom';
    }
}

test = checkPalindrome('abba');
test2 = checkPalindrome('qwerty');

console.log(test);
console.log(test2);


//Методи масивів:
//Створіть масив і додайте до нього елементи, використовуючи метод push.

const arr12 = [];
arr12.push('football', 'basketball', 'black', 'red', true, 3);

console.log(arr12);

//Видаліть останній елемент з масиву за допомогою методу pop.


const arr13 = ['football', 'basketball', 'black', 'red', true, 3];
arr13.pop();

console.log(arr13);

//Створіть масив і видаліть перший елемент за допомогою методу shift.

const arr14 = ['football', 'basketball', 'black', 'red', true, 3];
arr14.shift(1);

console.log(arr14);

//Додайте новий елемент в початок масиву за допомогою методу unshift.


const arr15 = ['football', 'basketball', 'black', 'red', true, 3];
arr15.unshift('new');

console.log(arr15);


//Створіть копію підмасиву масиву за допомогою методу slice.

const arr16 = ['football', 'basketball', 'black', 'red', true, 3];
const newArr = arr16.slice();

console.log(newArr);


//Видаліть елементи з масиву за допомогою методу splice.

const arr17 = ['football', 'basketball', 'black', 'red', true, 3];
arr17.splice(2, 3);

console.log(arr17);


//Метод forEach:
//Створіть масив об'єктів і використовуйте метод forEach для виведення значень певного властивості.

const cars = [
    {name: 'bmw', price: 40000},
    {name: 'nissan', price: 30000},
    {name: 'range rover', price: 50000}
]

cars.forEach(car => {
    console.log(car.name, car.price);
});





//Застосуйте функцію до кожного елемента масиву за допомогою методу forEach.
const arr19 = ['football', 'basketball', 'black', 'red', true, 3];

arr19.forEach(function (item, index, array) {
    ['football', 'basketball', 'black', 'red', true, 3].forEach((item, index, array) => {
        alert(`${item} має позицію ${index} в масиві ${array}`);
    });
    return;
});