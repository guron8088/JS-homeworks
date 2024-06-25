document.write('test');


//1.Напишіть цикл, який виводить всі парні числа від 20 до 32.

let arrNum = [];
for (let i = 20; i <= 32; i++) {
    arrNum.push(i);
}

arrNum.forEach(number => {
    if (number % 2 === 0) {
        console.log(number);
    }
});

//2. Створіть масив зі списком:

//вашого улюбленого фрукту,
//вашого улюбленого кольору,
//ім'я,
//рандомного числа,
//вашого віку.

//Виведіть цей проітерований масив на консоль і визначте його тип даних.

let arrInfo = ['banane', 'black', 'Jack', true, 29];

arrInfo.forEach(element => {
    console.log(element);
    console.log(typeof element);


});


//3. Напишіть цикл який виводить всі непарні числа від 17 до 39.

let arrNum1 = [];
for (let i = 17; i <= 39; i++) {
    arrNum1.push(i);
}

arrNum1.forEach(number => {
    if (number % 2 === 1) {
        console.log(number);
    }
});

//4.Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи

let array = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

array.forEach(element => {
    if (typeof element === 'number' && element % 2 === 0) {
        console.log(element);
    }
});

//5.Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи


let array2 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

array2.forEach(element => {
    if (typeof element === 'number' && element % 2 === 1) {
        console.log(element);
    }
});

//6.Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.

let arraySum = [1, 2, 4, 2, 3, 55, 66, 777, 12];

let sum = 0;

arraySum.forEach(element => {
    sum += element;

});

console.log(sum);


//Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.

let arrayMultiplication = [1, 2, 4, 2, 3, 55, 66, 777, 12];

let multiolication = 1;

arrayMultiplication.forEach(element => {
    multiolication *= element;

});

console.log(multiolication);

//8. Створіть prompt в якому потрібно проітерувати число з 0. 
//Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.
//Якщо це числа 100 і більше, завершити ітерацію.

const numEnter = prompt('Введіть числа через кому, як у масиві').split(',').map(Number);

numEnter.forEach(number => {
    if ((number >= 0 && number <= 4) || number > 10) {
        console.log(number);
    } else if (number >= 100) {
        return;
    }
}
);

//* Використовуємо Math

//9. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до меншого числа і повертає значення.

function roundNumber(number2) {
    return Math.floor(number2);
}

let number2 = prompt('введіть дробове значення для округлення до меншого числа ');
console.log(roundNumber(number2));
alert(roundNumber(number2));

//10. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до більшого числа і повертає значення.

function roundNumber(number3) {
    return Math.ceil(number3);
}

let number3 = prompt('введіть дробове значення для округлення до більшого числа ');
console.log(roundNumber(number3));
alert(roundNumber(number3));

//11. Створіть функцію яка генерує рандомне число (випадкове) від 0 до 1000 і повертає його.

function numRandom() {
    return Math.floor(Math.random() * 1000);
}

const generateNumRandom = numRandom(); 
console.log(generateNumRandom);



//12. Створіть функцію яка приймає 2 числа та виодить степіть перше число основне, друге сама степіть.


function twoNumbers(a, b) {
    return Math.pow(a, b);
}

let aNum = Number(prompt('перше число яке потрібно повернути у степені'));
let bNum = Number(prompt('друге число для приведення першого у степінь'));

let result2 = twoNumbers(aNum, bNum);
console.log(result2);
alert(result2);

//13. Створіть функцію яка приймає число, виводить з нього корінь, заокруглює його і повертає.


function roundSqrt(c) {
    let sqrt = Math.sqrt(c);
    let round = Math.round(sqrt);
    return round;
}

const enterNumber = prompt('введіть число для виведення корню та заокруглення');
const result3 = roundSqrt(enterNumber);
console.log(result3);


//* Використовувати методи масивів

//14. Дано масив [1, 5, true], додати в кінець масиву 'Hello'

const arr = [1, 5, true];
arr.push('Hello');

console.log(arr);

//15. Дано масив [1, 5, true], додати в початок масиву 'HelloArray'

const arr2 = [1, 5, true];

arr2.unshift('HelloArray');

console.log(arr2);

//16. Дано масив [1, 5, true], видалити останній елемент з масиву


const arr3 = [1, 5, true];

arr3.pop();

console.log(arr3);

//17. Дано масив [1, 5, true], видалити перший елемент з масиву

const arr4 = [1, 5, true];

arr4.shift();

console.log(arr4);

//18. Дано масив [5, true, 'hello', false, null, 5] вирізати *в новий масив* з 1 по 5 індекс

let arr5 = [5, true, 'hello', false, null, 5];

let copy_arr5 = arr5.slice(0,5);
console.log(arr5);
console.log(copy_arr5);

//19.Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс дані

let arr6 = [5, true, 'hello', false, null, 5];

let cutArr6 = arr6.splice(5, 5);

console.log(cutArr6);

//20. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс та вставити 10, 100, 111, 222

let arr7 = [5, true, 'hello', false, null, 5];

arr7.splice(5, 5, "10", "100", "111", "222");

console.log(arr7);

