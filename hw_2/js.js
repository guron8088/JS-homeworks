document.write('Приведення типів даних');

// 1. Перевести тип і в консоль вивести результат через typeof:

// - стрічку в булевий

let str = 'Hello';
str = Boolean(str);
console.log(str, typeof str);
//---

let a = 'hello how are you';
let b = Boolean(a) + true;
console.log(b, typeof b);
a = Boolean(a);
console.log(a, typeof a);

//---- 
console.log(Boolean('1')); //typeof boolean


//- число в булевий

let num = 23;
let b2 = Boolean(num) + false;
console.log(num);
console.log(b2, typeof b2);
//----
num = Boolean(num);
console.log(num, typeof num);

//----

console.log(Boolean(123123123)); //typeof boolean


//- стрічку в число


let qw = '888';
qw = Number(qw);
console.log(qw, typeof qw);
/////
console.log(Number('888'));

//- нул в булевий

let zero = null;
zero = Boolean(zero);
console.log(zero, typeof zero);

/////
console.log(Boolean(null));



//- андефайнед в булевий
let un = undefined + '3';

un = Boolean(un);
console.log(un, typeof un);


//2. Створити об'єкт* user із 3 рівнями вкладеностей (на кожному рівні не менше 3 поля)
//2.1  Вивести на 2 рівні 1 поле, та на 3 рівні 2 поля в консоль

let user = {
    name: 'Ivan',
    surname: 'Ivanon',
    age: 22,
    sister: {
        age: 18,
        name: 'Ivanna',
        surname: 'Ivanon',
        sport: {
            type: 'Tennis',
            city: 'Kharkiv',
            days: 'Monday, wednesday, saturday',
            time: '20:00-21:30'
        }
    }
    
}

console.log(user.sister.age, user.sister.sport.type, user.sister.sport.time); // 18 'Tennis' '20:00-21:30';


//3. Створити масив* list із 3 рівнями вкладеності (на кожному рівні не менше 3 елементів)
//3.1 Вивести на 2 рівні 1 елемент, та на 3 рівні 2 елемента в консоль


let list = ['Parking', ['Igor', ['Scooter']], ['Ivan', ['Audi']], ['John', ['Bmw']]];
console.log(list[1][0]);
console.log(list[2][1][0]);
console.log(list[3][1][0]);


// 4. Через prompt взяти вік та виконати наступні умови в if else:
//- Якщо вік більше 1 і менше 12 вивести: you are child
let age1 = prompt('how old are you ?');

if (age1 > 1 && age1 < 12) {
    alert('you are child');
} else {
    alert('Bye Bye!');
}

//- Якщо вік більше 12 і менше 18 вивести: you are teenager

let age2 = prompt('how old are you ?');

if (age2 > 12 && age2 < 18) {
    alert('you are teenager');
} else {
    alert('Bye Bye!');
}

//- Якщо вік більше 18 і менше 60 вивести: you are adult person

let age3 = prompt('how old are you ?');

if (age3 > 18 && age3 < 60) {
    alert('you are adult persone');
} else {
    alert('Bye Bye!');
}

//- Якщо вік більше 60 вивести: you are so old

let age4 = prompt('how old are you ?');

if (age4 > 60) {
    alert('you are so old');
} else {
    alert('Bye Bye!');
};

//5. Через prompt взяти імя та виконати наступні умови в switch case:

//- Якщо ім'я є 'Admin' вивести: I have full access
//- Якщо ім'я є 'Student' вивести: Im student
//- Якщо ім'я є 'Teacher' вивести: Im teacher
//- Якщо ім'я є 'Young' вивести: I young and ready to party
//- Всі інші імена вивести: You entered own name

let box = prompt('What is your name?');

switch(box) {
    case 'Admin':
        alert('I have full access');
        break;

    case 'Student':
        alert('Im student');
        break;
    case 'Teacher':
        alert('Im teacher');
        break;
    case 'Young':
        alert('I young and ready to party');
        break;
    default:
        alert('You entered own name');
        break;
        
}












