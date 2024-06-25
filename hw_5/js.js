document.write('Homework');




//- Створіть програму, яка визначає тип даних змінної.


let arr = ['blue', '33', 'Javascript', true, 29];


for (let i = 0; i <= arr.length - 1; i++) {
	console.log(typeof (arr[i]));
}


//- Напишіть програму, яка конвертує рядок в число і виводить результат.

let stringToNumber = '185484561';
stringToNumber = Number(stringToNumber);
console.log(stringToNumber, typeof stringToNumber);
/////
console.log(Number('185484561'));


//- Розробіть програму, яка визначає, чи є число парним чи непарним.

let double = prompt('enter any number');
if (double % 2 == 0) {

	console.log('число парне: ' + double);
} else {

	console.log('число не парне: ' + double);
}

//- Створіть програму, яка перевіряє, чи є введене число додатним, від'ємним чи нулем.

let positiveNumber = prompt('enter number');
if (positiveNumber > 0) {

	console.log('число є додатним: ' + positiveNumber);

} else if (positiveNumber < 0) {

	console.log('число є відємним: ' + positiveNumber);
} else if (positiveNumber == 0) {

	console.log('нуль: ' + positiveNumber);
} else {
	alert('гарного дня')
}

//- Напишіть програму, яка обчислює суму чисел від 1 до N, де N вводиться користувачем.


let N = Number(prompt('enter number N to calculate amount'));
let sum = 0;

for (let i = 1; i <= N; i++) {
	sum += i;

}

console.log('result sum: ' + sum);

//- Створіть програму, яка перевіряє, чи є рік високосним.

//Які роки вважаються високосними:
//Діляться на 400.
//Не діляться на 100
//Діляться на 4 без залишку.

let year = prompt('enter Year please');
if ((year % 400 == 0 && year % 100 != 0) || year % 4 == 0) {
	console.log('рік ' + year + ' високосний');
} else {
	console.log('рік ' + year + ' не високосний');
}



//- Розробіть програму, яка обчислює факторіал числа.


let inputNumber = Number(prompt('calculate factorial'));


let factorial = 1;

for (let i = 1; i <= inputNumber; i++) {
	factorial *= i;
}

console.log(factorial);

//- Напишіть програму, яка повертає максимальний елемент масиву.

let array = [10, 11, 12, 14, 25, 100, 159];

let maxArr = array[0];
for (let i = 1; i < array.length; i++) {
	if (array[i] > maxArr) {
		maxArr = array[i];
	}
}
console.log(maxArr);

//- Розробіть програму, яка перетворює температуру з Цельсія в Фаренгейт і навпаки.

let celsius = Number(prompt('enter temperature in celsius'));
let fahrenheit = (celsius * 9 / 5) + 32;

console.log(fahrenheit + ' degrees fahrenheit');

//fahrenheit => celsius

let fahrenheit_c = Number(prompt('enter temperature in fahrenheit'));
let celsius_f = (fahrenheit_c - 32) * 5 / 9;

console.log(celsius_f + ' degrees celsius');

//- Напишіть програму, яка визначає кількість днів у місяці (враховуючи роки, якщо потрібно).

let month = Number(prompt('enter month number'));
let year2 = Number(prompt('enter year'));
let days;

switch (month) {
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:

		days = 31;
		break;

	case 4:
	case 6:
	case 9:
	case 11:

		days = 30;
		break;

	case 2:
		if ((year2 % 4 == 0 && year2 % 100 != 0) || year2 % 400 == 0) {
			days = 29;
			console.log('Високосний');
		} else {
			days = 28;
			console.log('Невисокосний');
		}
		break;

	default: console.log('incorrect month entered');
}
console.log('days in month: ' + days);


//- Створіть програму, яка виводить всі прості числа в заданому діапазоні.


let startNumber = Number(prompt('start number of range'));
let endNumber = Number(prompt('end number of range'));

console.log('prime numbers ranging from ' + startNumber + ' to' + endNumber);

for (let i = startNumber; i <= endNumber; i++) {

	let primeNum = true;
	if (i === 1) {
		primeNum = false;
	} else if (i === 2) {
		primeNum = true;
	} else {
		for (let j = 2; j <= Math.sqrt(i); j++) {
			if (i % j === 0) {
				primeNum = false;
				break;
			}
		}
	}

	if (primeNum) {
		console.log(i);
	}

}

//- Розробіть програму, яка визначає суму цифр введеного числа.

let numbers = (prompt('enter the number'));
let sum1 = 0;

for (let i = 0; i < numbers.length; i++) {
	sum1 += parseInt(numbers[i]);
}

console.log('sum of digits of a number: ' + numbers + ' equals: ' + sum1);