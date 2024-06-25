document.write('Уровень 1.2 задачника JavaScript');

///Рівень 1.2     
//№1

///Дано число. Выведите в консоль первую цифру этого числа.
let num = 785231;
let firstNum = parseInt(num.toString()[0]);
console.log(firstNum);



//№2

//Дано число. Выведите в консоль последнюю цифру этого числа.
let num2 = 785231;
let lastNum = num2 % 10;
console.log(lastNum);

//№3

//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
let sum = firstNum + lastNum;
console.log(sum);



//№4

//Дано число. Выведите количество цифр в этом числе.
let num3 = 785231;
let lengthNum = String(num3);
console.log(lengthNum.length);


//№5

//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let num5 = 56;
let firstNum2 = parseInt(num5.toString()[0]);
console.log(firstNum2);

let num6 = 59;
let firstNum3 = parseInt(num6.toString()[0]);
console.log(firstNum3);

if (firstNum2 == firstNum3) {
    console.log(firstNum2 + ' співпадає з ' + firstNum3);
} else {
    console.log('спробуйте ще раз')
};


//Рівень 1.3
//№1

//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

let string = 'monday';
console.log(string[string.length - 2]);


//№2
//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

let a = prompt('input', '');
let b = prompt('input', '');

let result = a / b;

if (result % 1 === 0) {
    console.log(result);
} else {
    console.log(a + " не поділяється на " + b + ' без остатку');
};

//1.4

//№1
//Выведите в консоль все целые числа от 1 до 100.


for (let i = 1; i <= 100; i++) {
    console.log(i);
};

//№2
//Выведите в консоль все целые числа от -100 до 0.
for (let i = -100; i <= 0; i++) {
    console.log(i);
};


//№3
//Выведите в консоль все целые числа от 100 до 1.
for (let i = 100; i >= 1; i--) {
    console.log(i);
};

//№4

//Выведите в консоль все четные числа из промежутка от 1 до 100.

for (let i = 1; i <= 100; i += 2) {
    console.log(i);


};


//№5

//Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0) {
        console.log(i);
    }
};


//1.5
//Найдите сумму всех целых чисел от 1 до 100.
let sum3 = 0;
for (let i = 1; i <= 100; i++) {
    sum3 += i;


};
console.log(sum3);

//Найдите сумму всех целых четных чисел в промежутке от 1 до 100.



let sum4 = 0;
for (let i = 1; i <= 100; i += 2) {
    sum4 += i;
};
console.log(sum4);

//Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
let sum5 = 0;

for (let i = 1; i <= 100; i++) {

    if (i % 2 == 1) {
        sum += i
    }
};
console.log(sum);


//Даны два целых числа. Найдите остаток от деления первого числа на второе.

let xa = 13;
let xb = 10;

let res = xa % xb;

console.log(res);


//Переберите и выведите в консоль по очереди все символы с конца строки.
let newStr = 'qwerty';

for (let i = newStr.length - 1; i >= 0; i--) {
    console.log(newStr[i]);
};



///1.6

///1 Дан массив с числами. Найдите сумму квадратов элементов этого массива.

let arrNum = [1, 2, 3, 4, 5, 6, 7, 8];
let squares = 0;

for (let i = 0; i < arrNum.length; i++) {
    squares += arrNum[i] * arrNum[i];
};

console.log('Cума квадратів елементів масиву = ' + squares);

//2 Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

let arrNum2 = [1, 2, 3, 4, 5, 6, 7, 8];
let squareRots = 0;

for (let i = 0; i < arrNum2.length; i++) {
    squareRots += Math.sqrt(arrNum2[i]);
};

console.log('cума квадратних коренів елементів масиву = ' + squareRots);

//3 Дан массив с числами. Найдите сумму положительных элементов этого массива.

let arrNum3 = [1, -2, 3, -4, 5, -6, 7, -8];
let sumNum = 0;

for (let i = 0; i < arrNum3.length; i++) {
    if (arrNum3[i] > 0) {
        sumNum += arrNum3[i];
    };
};

console.log('сума позитивних чисел = ' + sumNum);

//4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

let arrNum4 = [1, 2, 3, 14, 5, 16, 7, 18];

let sumNum2 = 0;

for (let i = 0; i < arrNum4.length; i++) {
    if (arrNum4[i] > 0 && arrNum4[i] < 10) {
        sumNum2 += arrNum4[i];
    };
};

console.log(sumNum2 + ' сума елементів більше 0 і менше 10');


///1.7 
//1 Дана строка:'abcde' Получите массив букв этой строки.

let str2 = 'abcde';

let strToArr = str2.split("");

console.log(strToArr);

//2 12345 Получите массив цифр этого числа.
let num8 = 12345,
    arr = ('' + num8).split('');

console.log(arr.map(Number))



//3 Дано некоторое число: 12345 Переверните его: 54321

let num9 = 12345;

let revNum = parseInt(String(num9).split('').reverse().join(''));

console.log(revNum);

//4 Дано некоторое число: 12345 Найдите сумму цифр этого числа.

let numbers = 12345;
let sum8 = 0;

while (numbers) {
    sum8 += numbers % 10;
    numbers = Math.floor(numbers / 10);
}

console.log(sum8);

//1.8
//Заполните массив целыми числами от 1 до 10.
//1
let arrNew = [];

for (i = 1; i <= 10; i++) {
    arrNew.push(i);
}
console.log(arrNew);

//2
//Заполните массив четными числами из промежутка от 1 до 100.

let arrNew2 = [];

for (i = 2; i <= 100; i += 2) {

    arrNew2.push(i);

}
console.log(arrNew2);

//3
//Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34] Округлите эти дроби до одного знака в дробной части.

let arrNew3 = [1.456, 2.125, 3.32, 4.1, 5.34];

let rndArrNew3 = arrNew3.map(num => Math.round(num * 10) / 10); 

console.log(rndArrNew3);