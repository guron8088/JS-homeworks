document.write('Створити js файлик в якому будуть використані всі: Методи масивів, методи стрічок, методи чисел, методи обєктів. Які ми вивчали на останніх лекціях');


//методи масивів
let arr = [1, 2, true, false, 'audi', 'John', 'black'];

////
arr.push(1000) 
arr.push(9999, null, 'Cola'); //додає елементи у кінець

console.log(arr);
/////
arr.unshift('qwerty', 'lenovo'); //додає елементи на початок
console.log(arr); 
/////

arr.pop(); //видаляє останній елемент
console.log(arr);

/////
arr.shift(); //видаляє перший елемент
console.log(arr);

////
arr.splice(3, 6); //видаляє елементи всередені від ... - до ...
console.log(arr);
///

let newArr = arr.slice(2, 5); //створює новий масив з скопійованими даними зі старого масиву 
console.log(arr, newArr);

//
//arr.forEach(function (data) {
//    console.log(data);
//});

arr.forEach((data) => {});
console.log(arr);

//фільтр

let arr11 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];

let filterArr = arr11.filter(elem => elem < 10 || elem > 50);

console.log(filterArr);

//Перевірка

let arr12 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];

let checkArr = arr12.every(elem => elem > 0);

console.log(checkArr);

let arr14 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];

let sortArr = arr14.slice().sort((a, b) => a - b); //за зростанням
let sortArr2 = arr14.slice().sort((a, b) => b - a); //за спаданням


console.log(sortArr);
console.log(sortArr2);

//пошук індексу

let arr15 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];

let index14 = arr15.indexOf(14);
let lastIndex14 = arr15.lastIndexOf(14);

let index11 = arr15.indexOf(11);
let lastIndex11 = arr15.lastIndexOf(11);

let index66 = arr15.indexOf(66);
let lastIndex66 = arr15.lastIndexOf(66);

console.log(index14);
console.log(lastIndex14);
console.log(index11);
console.log(lastIndex11);
console.log(index66);
console.log(lastIndex66);

//пошук елементів 

let arr10 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];

let elements = [3, 1, 100];

let findItems = arr10.filter(elem => elements.includes(elem));

console.log(findItems);


///методи стрічок 
//split 

let str = 'Hello world and my dear friend ...';

strSplit = str.split('');

console.log(strSplit);

//trim 
let str2 = 'Hello world and my dear friend ...';

strTrim = str.trim();

console.log(strTrim);

//toLocaleUpperCase

let str3 = 'Hello world and my dear friend ...';

strUp = str3.toLocaleUpperCase();


console.log(strUp);

//toLocaleLowerCase

let str4 = 'Hello world and my dear friend ...';

strLow = str4.toLocaleLowerCase();


console.log(strLow);

//charAt

let str5 = 'Hello world and my dear friend ...';

strChar = str5.charAt();



console.log(strChar);

//charCodeAt

let str6 = 'Hello world and my dear friend ...';

strChar2 = str6.charCodeAt();

console.log(strChar2);

//includes
let str7 = 'Hello world and my dear friend ...';

strChar3 = str7.includes('world');

console.log(strChar3);


//concat

let str8 = 'Hello world and my dear friend ...';
let str9 = 'Hello concat';

strChar4 = str8.concat('' ,str9);

console.log(strChar4);

//str.search([regexp])

let str10 = 'Hello world and my dear friend ...';

strChar5 = str10.search();

console.log(strChar5);

//startsWith

let str11= 'Hello world and my dear friend ...';

strChar6 = str11.startsWith('Hello');

console.log(strChar6);

//endsWith

let str12= 'Hello world and my dear friend ...';

strChar7 = str12.endsWith('friend ...');

console.log(strChar7);

//indexOf
let str13 = 'Hello world and my dear friend ...';

strChar8 = str13.indexOf('my');

console.log(strChar8);

// lastIndexOf

let str14 = 'Hello world and my dear friend ...';

strChar9 = str14.lastIndexOf('and');

console.log(strChar9);

//replace 

let str15 = 'Hello world and my dear friend ...';

change = str15.replace('Hello', 'Вітаю');

console.log(change);

/////////методи об^#єктів 

//об'єкт:
//{
//car: false,
//name: 'Bugatti'
//model: 'Veyron',
//year: 2010,
//wheel: 4,
//engine: 5.5,
//parents: ['Q5', 'Q7', 'Acvv']
//}


//1.  ключі об'єкту.

let obj = {
    car: false,
    name: 'Bugatti',
    model: 'Veyron',
    year: 2010,
    wheel: 4,
    engine: 5.5,
    parents: ['Q5', 'Q7', 'Acvv']
};

console.log(Object.keys(obj));

//2. значення об'єкту.

let obj2 = {
    car: false,
    name: 'Bugatti',
    model: 'Veyron',
    year: 2010,
    wheel: 4,
    engine: 5.5,
    parents: ['Q5', 'Q7', 'Acvv']
};

console.log(Object.values(obj2));

//3. [ключ, значення]

let obj3 = {
    car: false,
    name: 'Bugatti',
    model: 'Veyron',
    year: 2010,
    wheel: 4,
    engine: 5.5,
    parents: ['Q5', 'Q7', 'Acvv']
};

console.log(Object(obj3));

//4.  Скопіювати об'єкт в новий об'єкт.

let obj4 = {
    car: false,
    name: 'Bugatti',
    model: 'Veyron',
    year: 2010,
    wheel: 4,
    engine: 5.5,
    parents: ['Q5', 'Q7', 'Acvv']
};

let clone = Object.assign(obj4);

console.log(clone);

//5.  Створити свій об'єкт і об'єднати із об'єктом вище.

let obj5 = {
    car: false,
    name: 'Bugatti',
    model: 'Veyron',
    year: 2010,
    wheel: 4,
    engine: 5.5,
    parents: ['Q5', 'Q7', 'Acvv']
};

let myObj = {
    country: 'Ukraine',
    city: 'Kharkiv',
    size: 'big',
    number: 21
};
let twoObjects = Object.assign(obj5, myObj);
console.log(twoObjects);

//6.  Перевірка 


let obj6 = {
    car: false,
    name: 'Bugatti',
    model: 'Veyron',
    year: 2010,
    wheel: 4,
    engine: 5.5,
    parents: ['Q5', 'Q7', 'Acvv']
};

let checkCar = 'car' in obj6;
let checkAge = 'age' in obj6;
let checkWheel = 'wheel' in obj6;
let checkData = 'data' in obj6;
let checkParents = 'parents' in obj6;

console.log('car:', checkCar);
console.log('age:', checkAge);
console.log('wheel:', checkWheel);
console.log('data:', checkData);
console.log('parents:', checkParents);


//7.  Заборонити об'єкту створювати та змінювати поля.
let obj7 = {
    car: false,
    name: 'Bugatti',
    model: 'Veyron',
    year: 2010,
    wheel: 4,
    engine: 5.5,
    parents: ['Q5', 'Q7', 'Acvv']
};


let freeze = Object.freeze(obj7);

console.log('обєкт заморожено' + freeze);

//8. proxy 


let obj8 = {
    car: false,
    name: 'Bugatti',
    model: 'Veyron',
    year: 2010,
    wheel: 4,
    engine: 5.5,
    parents: ['Q5', 'Q7', 'Acvv']
};

const forbidden = {
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value;
        } else {
            console.error('cannot add new property to the object.');
        }
        return true;

    }
};

const proxyObject = new Proxy(obj8, forbidden);
proxyObject.car = 'Honda';
proxyObject.age = 6;
proxyObject.wheel = 4;

console.log(proxyObject);

//9.  новий об'єкт  Object.create.


let obj9 = {
    car: false,
    name: 'Bugatti',
    model: 'Veyron',
    year: 2010,
    wheel: 4,
    engine: 5.5,
    parents: ['Q5', 'Q7', 'Acvv']
};

let obj10 = Object.create(obj9);



obj10.name = 'Bmw';
obj10.color = 'Black';
obj10.age = 3;
obj10.car = true;
obj10.km = 10000;
obj10.country = 'Germany';

console.log(obj10);

//Створення об'єкт із масиву .

const arr19 = [[true, 2], ['student', true], [null, null], [12, 'hello']];

const obj21 = {};

for (let i = 0; i < arr19.length; i++) {

    const item = arr19[i];

    obj21[i] = item;

}

console.log(obj21);



///////////////////////методи чисел 

let a = 9.656;
console.log(a.toExponential(1));

//

let b = 123;
console.log(b.toString());

//

let c = 9.1234235245213424;
console.log(c.toFixed(6));

//

let d = 10.12312312313;

console.log(d.toPrecision(4));


//

let e = 312;
console.log(e.valueOf());

//
let p = parseFloat('10 20 30');

console.log(p);

//

let g = parseInt("10.33");
console.log(g);

///

let y = Number("10 33");
console.log(y);

///

let l = Number.MAX_VALUE;

console.log(l);

let l1 = Number.MIN_VALUE;

console.log(l1);


/////

let xd = 10 / "hello";
console.log(xd);



let vb = -3 / 0;
console.log(vb);



let vb1 = +3 / 0;
console.log(vb1);








