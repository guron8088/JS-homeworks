document.write('* Кожне завдання виділяти коментарями');


//Дано об'єкт:
//{
//car: false,
//name: 'Bugatti'
//model: 'Veyron',
//year: 2010,
//wheel: 4,
//engine: 5.5,
//parents: ['Q5', 'Q7', 'Acvv']
//}


//1.  Вивести в консоль всі ключі об'єкту.

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

//2.  Вивести в консоль всі значення об'єкту.

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

//3.  3.  Вивести в консоль пару [ключ, значення] всіх полів.

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

//4.  Скопіювати об'єкт вище в новий об'єкт.

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

//6.  Перевірити чи об'єкт вище має наступні поля: 'car', 'age', 'wheel', 'data', 'parents'.


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

//8.  Заборонити об'єкту лише створювати нові поля.


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

//9.  Створити новий об'єкт через Object.create (мінімум 6 полів).


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

//10. Дано масив: [[true, 2], ['student', true], [null, null], [12, 'hello']] Створити із масиву об'єкт.

const arr = [[true, 2], ['student', true], [null, null], [12, 'hello']];

const obj21 = {};

for (let i = 0; i < arr.length; i++) {

    const item = arr[i];

    obj21[i] = item;

}

console.log(obj21);


