//Створіть функцію яка при вводі числа повертає квадрат цього числа (квадрат із 4 = 4 * 4)


function squareNumber(number) {
    return number * number;
}

let number = Number(prompt('введіть число для приведення у квадрат'));
let result = squareNumber(number);
console.log(result);
alert(result);

//Створіть функцію яка при вводі двох чисел повертає степінь другого числа
//(якщо n1 = 2, n2 = 4, то повернути результат 2 в степені 4)

function twoNumbers(a, b) {
    return Math.pow(a, b);
}

let aNum = Number(prompt('перше число яке потрібно повернути у степені'));
let bNum = Number(prompt('друге число для приведення першого у степінь'));

let result2 = twoNumbers(aNum, bNum);
console.log(result2);
alert(result2);

//3. Створіть функцію калькулятор із діями +, -, *, /

function calculator(operator, num2, num3) {
    switch (operator) {
        case '+':
            return num2 + num3;
        case '-':
            return num2 - num3;
        case '*':
            return num2 * num3;
        case '/':
            if (num3 !== 0) {
                return num2 / num3;
            } else {
                return "Error: на нуль поділити неможливо";
            }
        default:
            return "неможливо обчислити, перевірте введені дані";


    }
}


let num2 = Number(prompt('калькулятор: перше число'));
let num3 = Number(prompt('калькулятор: друге число'));
let action = prompt('+, -, *, /');
let res = calculator(action, num2, num3);
console.log(res);
alert(res);


//4. Створіть функцію яка заокруглює дробові числа

function roundNumber(number3) {
    return Math.round(number3);
}

let number3 = prompt('введіть число для округлення');
console.log(roundNumber(number3));
alert(roundNumber(number3));

//Створіть функцію яка аргументом приймає масив і як результат повертає масив із продубльованими значеннями (тими що повторюються в масиві)

//переробити
function funk5(a, b, c , d, ...arguments) {
    console.log(arguments);
    console.log(a + b + c + d);
    
    
}

funk5(1, 2, 3, 4);
funk5(1, 2, 3, 4, 5, 6, 7, 8, 9);
