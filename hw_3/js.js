document.write('JS Homework 3');

// 1. Напишіть цикл for, який виводить всі парні числа від 2 до 20.

// 2. Створіть масив зі списком вашого улюбленого фрукту, вашого улюбленого кольору, і вашого віку.
//    Виведіть цей масив на консоль і визначте його тип даних.

// 3. Напишіть 2 prompt які приймають два числа. виведіть більше з них. Використайте конструкцію if-else.

// 4. Напишіть цикл for який виводить всі непарні числа від 1 до 15.

// 5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи

// 6. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи

// 7. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.

// 8. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.

// 9. Дано 2 prompt, Один дізнається ім'я, а інший число.
//    - Якщо імя Admin а число більше 100 вивести: good job
//    - Якщо імя System а число рівне 10 вивести: admin job
//    - Якщо імя World а число більше 200 вивести: good world
//    - Якщо імя Smth а число менше 0 вивести: minus num
//////////////////////////////111111/////////////////////////////////////


for (let a = 2; a <= 20; a++) {
    if (a % 2 == 0) {
        console.log(a);
    }
    
};

///////////////2222222///////////////////

let array = ['juice', 'black', 29];
console.log(array);
console.log(typeof array);

///////////////33333333///////////////////

let x = prompt('input first number');
let y = prompt('input second number');

if (x > y) {
    alert(x);
} else {
    alert('Game Over!');
};
    

////////444444/////////////////


for (let b = 1; b <= 15; b++) {
    console.log(b);
    
};


////////////////5555555///////////////
//

let task5 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let i = 0; i < task5.length; i++) {
	if ((task5[i] % 2) === 0) {
  	    console.log(task5[i]);
    }
}


///////////////////////////////////

let task6 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let i = 0; i < task6.length; i++) {
	if ((task6[i] % 1) === 0) {
  	    console.log(task6[i]);
    }
}


//////////////////////////////////

let numbers = [1, 2, 4, 2, 3, 55, 66, 777, 12]; //922

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);


//////////////////////////////////////

let numbers2 = [1, 2, 4, 2, 3, 5, 6, 7, 1];

let sum1 = 1;

for (let i = 0; i < numbers2.length; i++) {
    sum1 *= numbers[i];
}

console.log(sum1);

/////////////////////////////////////////

// 9. Дано 2 prompt, Один дізнається ім'я, а інший число.
//    - Якщо імя Admin а число більше 100 вивести: good job
//    - Якщо імя System а число рівне 10 вивести: admin job
//    - Якщо імя World а число більше 200 вивести: good world
//    - Якщо імя Smth а число менше 0 вивести: minus num
let infoName = prompt('enter your name','');
let infoNumber = prompt('enter your number','');
//- Якщо імя Admin а число більше 100 вивести: good job
if (infoName == 'Admin') {
    alert('good job');

} else if (infoNumber > 100) {
    alert ('good job');
} else {
    alert('not right');
}
//- Якщо імя System а число рівне 10 вивести: admin job

let infoName2 = prompt('enter your name','');
let infoNumber2 = prompt('enter your number','');

if (infoName2 == 'System') {
    alert('admin job');

} else if (infoNumber2 == 10) {
    alert ('admin job');
} else {
    alert('not right');
}

//- Якщо імя World а число більше 200 вивести: good world


let infoName3 = prompt('enter your name','');
let infoNumber3 = prompt('enter your number','');

if (infoName3 == 'World') {
    alert('good world');
} else if (infoNumber3 > 200) {
    alert ('good world');
} else {
    alert('not right');
}

//- Якщо імя Smth а число менше 0 вивести: minus num

let infoName4 = prompt('enter your name','');
let infoNumber4 = prompt('enter your number','');

if (infoName4 == 'Smth') {
    alert('minus num');
} else if (infoNumber4 < 0) {
    alert ('minus num');
} else {
    alert('not right');
}
//////////////////