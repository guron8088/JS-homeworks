
//1
// let str = 'hallo world';
// document.write(str);
// document.write('br')

// /////2

// let str1 = 'hello';
// let str2 = ' world';
// let c = str1 + str2;
// document.write('br')
// document.write(c)


// /////3

// let name = 'Mykyta';

// document.write('br');
// document.write('Hello, ' + name + ' !');

// //4
// let age = 29;
// document.write('br');
// document.write('I have ' + age + ' years!');

// ///5 
// let name1 = prompt('Enter name');
// let yourName = 'Your name' + name1;
// alert(yourName);


// //6
// //віводим число в квадрат 
// let num = Number(prompt('Enter number'));

// // let sq = num + num;
// let sq = num**2;
// alert(sq);

// ///7 
// //звернення до символів рядка

// let myStr = 'abcde' //переменная srt со знавением abcde

// cosole.log(myStr[0], myStr[2], myStr[myStr.length - 1]);

// //проітерувати 
// for (let i= 0; i < myStr.length; i ++) {
//     if (myStt[a] === 'a' || myStr[i] === 'c' || myStr[i] === 'e');
//     console.log(myStr[i]);
// }

//8

//Робота з if-else

//  1.Якщо змінна a дорівнює нулю, то виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте роботу скрипта при a, що дорівнює 1, 0, -3.

//  2.Якщо змінна a більше нуля, то виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте роботу скрипта при a, що дорівнює 1, 0, -3.

//  3.Якщо змінна a менше нуля, то виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте роботу скрипта при a, що дорівнює 1, 0, -3.

// let a1 = Number(prompt('Enter number'));
// let isTrue = a1 === 0 ? true : false; //тернарній оператор 
// сonsole.log(isTrue);


// let a2 = Number(prompt('Enter number'));
// let isTrue1 = a1 > 0 ? true : false; //тернарній оператор 
// сonsole.log(isTrue1);


// let a3 = Number(prompt('Enter number'));
// let isTrue2 = a3 < 0 ? true : false; //тернарній оператор 
// сonsole.log(isTrue2);

///11

// let test = prompt('enter');
// if (test === 'true') {
//     console.log(true);
// } else {
//     console.log('not true');
// }

//12

// let test1 = prompt('enter');
// if (test1 === 'true') {
//     console.log(true);
// } else {
//     console.log('not true (but yes)');
// }

//13

// let a = Number(prompt('Enter number'));

// let isTrue3 = a > 0 && a < 5
// ? console.log(true)
// : console.log(false)
//

//14
// 2.Якщо змінна a дорівнює нулю або дорівнює двом, то додайте до неї 7, інакше поділіть її на 10. Виведіть нове значення змінної на екран. Перевірте роботу скрипта при a, що дорівнює 5, 0, -3, 2.]

// let numb = Number(prompt('Enter number'));

// if (numb === 0 || numb === 2) {
//     numb += 7;
// } else { 
//     numb /= 10;
// }

// console.log(numb);

// //15

// let numnum = Number(prompt('Enter number'));
// let numbnumb = Number(prompt('Enter number'));

// if (numnum <= 1 && bb >= 3) {
//     console.log(numnum + numbnumb);
// } else {
//     console.log(numnum - numbnumb);
// }


///16

// let a5 = Number(prompt('Number'));
// let result;

// switch (a5) {
//     case 1: 
//         result = 'spring';
//         break;
//     case 2: 
//         result = 'summer';
//         break;
//     case 3: 
//         result = 'autumn';
//         break;
//     case 4: 
//         result = 'winter';
//         break;
//     default:
//         result = 'error';
//         break;
// }

//17

let a6 = Number(prompt('number'));

switch (a6) {
    case 1: console.log(1);
    break;
    case 2: console.log(1);
    break;
    case 3: console.log(2);
    break;
    case 4: console.log(2);
    break;
    case 5: console.log(3);
    break;
    case 6: console.log(3);
    break;
    default: console.log('none');
    break;
}

//18
let a7 = Number(prompt('number'));

switch (a7) {
    case 1: console.log('spring');
    break;
    case 2: console.log('spring');
    break;
    case 3: console.log('spring');
    break;
    case 4: console.log('summer');
    break;
    case 5: console.log('summer');
    break;
    case 6: console.log('summer');
    break;
    case 7: console.log('autumn');
    break;
    case 8: console.log('autumn');
    break;
    case 9: console.log('autumn');
    break;
    case 10: console.log('winter');
    break;
    case 11: console.log('winter');
    break;
    case 12: console.log('winter');
    break;
    default: console.log('none');
    break;
}


///19

let i1 = 1;

while (i1 <= 100) {
    console.log(i1);
    i1++;
}

for (let i1 = 1; i <= 100; I++) {
    console.log(i);
}

//20

let i2 = 11; 
while (i2 <= 33) {
    console.log(i2);
} 

//21

let i3 = 0; 

while (i3 <= 100) {
    i3 += 2;
    console.log(i3);
}

for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}
//22

let i4 = 1;
let sum = 0;

while (i4 <= 100) {
    sum += i4;
    i4++;
}
console.log(sum);

//23 for для масивів 

let arr1 = [1, 2, 3, 4, 5];

for (let item of arr1) {
    document.write(item);
    document.write('hr');
}




 

//25 
let obj = {green: 'зелений', red: 'червоний', blue: 'блакитний'};

for (let key in obj) {
    console.log(key, obj[key]);
}


//26
