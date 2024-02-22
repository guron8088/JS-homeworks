'use strict';

document.write('hello');

/////for
for (let i = 20; i<= 32; i += 2) {
    
    console.log(i);
    
}
/////for of 

let numbers = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];

for (let XnumbersX of numbers) {
   
    if (XnumbersX % 2 == 0)  {
        console.log(numbers[XnumbersX]);
    }

    
}

///for in 

let numbers2 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];


for (let YnumbersX in numbers2) {
    if (YnumbersX % 2 == 0) {
        console.log(numbers2[YnumbersX]);
    }
}

//while 


let i1 = 18; 

while (i1 <= 30) {
    i1 += 2;
    console.log(i1);
}


//do while 

let number3 = 20;

do {
    console.log(number3);
    number3 += 2;
} while (number3 <= 32); 


////

// 2. Створіть масив зі списком:

//    вашого улюбленого фрукту,
//    вашого улюбленого кольору,
//    ім'я,
//    рандомного числа,
//    вашого віку.

//    Виведіть цей проітерований масив на консоль і визначте його тип даних.

let arr = ['orange', 'black', 'Mykyta', 88, 29];


for (let i = 0; i <= arr.length - 1; i++) {
	console.log(typeof(arr[i]));
}

/////// for of 

let arr2 = ['orange', 'black', 'Mykyta', 88, 29];

for (let res of arr2) {
   
    console.log(typeof(res));
    
}

/////// for in 

let arr3 = ['orange', 'black', 'Mykyta', 88, 29];

for (let res1 in arr3) {
   
    console.log(typeof(arr3[res1]));
    
}


/////// while 

let arr5 = ['orange', 'black', 'Mykyta', 88, 29];

let i5 = 0; 
while (i5 < arr5.length) {
    console.log(typeof(arr5[i5]));
    i5++;
}

/////// do while 

let arr6 = ['orange', 'black', 'Mykyta', 88, 29];

let i6 = 0; 

do {
    console.log(typeof(arr6[i6]));
    i6++;
} while (i6 < arr6.length);


//3. Напишіть цикл який виводить всі непарні числа від 17 до 39.

for (let i7 = 17; i7<= 39; i7 += 2) {

    console.log(i7);
    
}
/////// for of 


let arr8 = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];

for (let i8 of arr8) {

    if (i8 % 2 == 1)  {
        console.log(i8);
    }
    
}   
/////// for in

let arr9 = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];

for (let i9 in arr9) {

    if (i9 % 2 == 1)  {
        console.log(i9);
    }
    
}   

/////// while 

let it = 17;

while (it <= 39) {
	console.log(it);
	it+=2;
}

//////// do while

let it1 = 17 

do {
    console.log(it1);
    it1+=2;
} while (it1 < 39);

//////// 4. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи

    
///// for 
let array1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let i = 0; i < array1.length; i+=2) {
    console.log(i);  //індекси 0,2,4,6,8
}

///// for of 
let array3 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let lp of Object.keys(array3)) {
    if (lp % 2 === 0) {
        console.log(lp);
    }
    
}

/////// for in
let array4 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let l in array4) {
    if (l % 2 == 0) {
        console.log(l);
    }
    
}


//////// while

let array5 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

let h = 0; 
while (h < array5.length) {

    if (h % 2 == 0) {
        console.log(h);
    }
    h++;
    
}


/////do while


let arrayy1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

let h3 = 0; 

do {
    if (h3 % 2 == 0) {
        console.log(h3);
    }
    h3++;
} while (h3 < arrayy1.length)

///////5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи

//for 
let odd = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let od = 1; od < array1.length; od+=2) {
    console.log(od); 
}

////////for of 
let odd1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let od1 of Object.keys(odd1)) {
    if (od1 % 2 === 1) {
        console.log(od1);
    }
    
}

//////for in 

let odd2 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

for (let od2 in odd2) {

    if (od2 % 2 == 1)  {
        console.log(od2);
    }
    
}

/////while 

let odd3 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

let od3 = 0; 

while (od3 < odd3.length) {

    if (od3 % 2 == 1) {
        console.log(od3);
    }
    od3++;
    
}

//////do while 

let odd4 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

let od4 = 0;

do {
    if (od4 % 2 == 1) {
        console.log(od4);
    }
    od4++;
} while (od4 < odd4.length);


////////6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.
//for

let numbers5 = [1, 2, 4, 2, 3, 55, 66, 777, 12]; //922

let sum3 = 0;

for (let b = 0; b < numbers5.length; b++) {
    sum3 += numbers5[b];
}

console.log(sum3);

/////// for of

let numbers6 = [1, 2, 4, 2, 3, 55, 66, 777, 12];

let sum = 0;

for (let lj of numbers6) { 
    sum += lj;
}

console.log(sum);
/// for in 

let numbers7 = [1, 2, 4, 2, 3, 55, 66, 777, 12];

let sum2 = 0;

for (let lj1 in numbers7) { 
    sum2 += numbers7[lj1];
}

console.log(sum2);


//while 

let numbers8 = [1, 2, 4, 2, 3, 55, 66, 777, 12];

let sum33 = 0;

while (sum33 <= numbers8) {
    sum = sum33 + numbers8;
}

console.log(sum);

///do while 

let numbers9 = [1, 2, 4, 2, 3, 55, 66, 777, 12];

let sum34 = 0;

do {
    console.log(sum2);
    sum2 = sum34 + numbers9;
} while (sum34 <= numbers9);


///7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.

//for 

let multipl = [1, 2, 4, 2, 3, 5, 6, 7, 1];

let mul = 1;

for (let f = 0; f < numbers5.length; f++) {
    mul *= multipl[f];
}

console.log(mul);

//for of 


let multipl1 = [1, 2, 4, 2, 3, 5, 6, 7, 1];

let mul1 = 1;

for (let lf1 of multipl1) { 
    mul1 *= lf1;
}

console.log(mul1);

//for in

let multipl2 = [1, 2, 4, 2, 3, 5, 6, 7, 1];

let mul2 = 1;

for (let lj1 in multipl2) { 
    mul2 *= multipl2[lj1];
}

console.log(mul2);

//while 

let multipl3 = [1, 2, 4, 2, 3, 5, 6, 7, 1];

let mul3 = 1;

while (mul3 <= multipl3) {
    mul = mul3 * multipl3;
}

console.log(mul);


//do while 

let multipl4 = [1, 2, 4, 2, 3, 5, 6, 7, 1];

let mul4 = 1;

do {
    console.log(mul2);
    mul2 = mul4 * multipl4;
} while (mul4 <= multipl4);

//////8. Створіть prompt в якому потрібно проітерувати число з 0. 
//    Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.
// Якщо це числа 100 і більше, завершити ітерацію.


let userNumbers = prompt('Enter number','');

for (let num = 0; num <= userNumbers; num++) {
    
    if (num >= 5 && num <= 10) {
        console.log('ok');
        continue;

    } else if (num >= 10 && num <= 100) {
        console.log(num);

    } else if (num > 100) {
        alert('sorry, too much')
        break;
    }

}

