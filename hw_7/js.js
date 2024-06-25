document.write('hello');
//* Розділяйте кожний пункт домашнього в коді коментарями.

//1. Створіть функцію для обчислення факторіалу числа.
//   Створіть функцію calculateFactorial(n), яка приймає аргумент n (ціле число)
//   і виводить в консоль факторіал цього числа. Використовуйте цикл для обчислення факторіалу.

//2. Підрахунок кількості слів у рядку.
//   Створіть функцію countSymb(sym), яка приймає рядок через prompt
//   і виводить в консоль кількість букв у цьому рядку.
//   Використовуйте умови та цикли для підрахунку букв.
//   ** Підказка стрічку також можна ітерувати, використваши .length

//3. Створіть функцію для визначення простого числа (ціле число це число без коми: 1, 44, 100 ітд).
//   Створіть функцію isPrime(number), яка приймає аргумент number і повертає (return) true,
//   якщо число є простим, і false, якщо не є.
//   ** Просте число це 3, 56, 23
//      Не просте це 1.33, 4.1, 55.222

//4. Запит на пароль.
//   Створіть функцію passwordPrompt(), яка приймає пароль і повторення паролю через prompt().
//   Після цього викликайте цю функцію, якщо паролі співпадають має вивестись (console): Успіх, а в іншому випадку: Невдача.

//5. Факторіал чисел в діапазоні.
//   Створіть функцію factorialRange(num1, num2, num3),
//   яка приймає 2 числа.
//   Функція має обчислити факторіали всіх чисел і повернути (return) результат у вигляді об'єкта {num1: num2, num3: } і вивести

//6. Калькурятор.
//   Створіть функцію calc(num1, num2, action), яка приймає 2 числа з prompt
//   та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)
//   Результат повернути (return) і вивести


//1

//function factorialCalculate(n) {

//for (let result = 1; n > 1; n--) {
//result = result * n;

//console.log(result);
//}
//}

//factorialCalculate(6);

//2
//function countSymb(sym) {
//let counter = 0;
//for (let i = 0; i < sym.length; i++) {

//if (sym[i] !== " ") {
//counter++
//}
//}
//console.log(`symbols count: ${counter}`)
//}

//const symbols = prompt('Input string');


//countSymb(symbols)


//3 


//function isPrime(n) {
//for (let i = 2; i < n; i++) {
//if (n % i === 0) return false;
//}
//return n !== 1;
//}

//function printPrimes(max) {
//for (let i = 2; i <= max; i++) {
//if (isPrime(i)) console.log(i);
//}
//}

//printPrimes(100);

//4 

// function passwordPrompt() {
//     if (pass1 === pass2) {
//         console.log('Успіх');
//     } else {
//         console.log('Невдача');
//     }

// }

// const pass1 = prompt('Input psssword', '');
// const pass2 = prompt('repeat psssword', '');
// passwordPrompt();




//5

//function factorialRange(num1, num2, num3) {
    //let result = {};

    //for (let i = num1; i <= num3; i++) {//
       // let factorial = 1;
        //for (let j = 1; j <= i; j++) {
           // factorial *= j;
       // }
       // result[i] = factorial;
    //}
    //return result;
//}

//let num1 = 5;
//let num2 = 6;
//let num3 = 9;

//let result = factorialRange(num1, num2, num3);
//console.log(result);

//6

let num1 = +prompt('input first number');
let num2 = +prompt('input second number');
let act = prompt('Action: +, -, /, *');


function calc(num1, num2, action) {
    if (action == '+') {
        return num1 + num2;
    } else if (action == '-') {
        return num1-num2;
    }  else if (action == '/') {
        return num1/num2;
    }  else if (action == '*') {
        return num1*num2;
    } else {
        return Error;
    }
   
}

let resultCalc = calc(num1, num2, act);
console.log(resultCalc);


