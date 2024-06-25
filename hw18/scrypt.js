document.write('Розділяти всі завдання коментарями і писати що треба робити в завданні');

//1. Через функцію конструктор створити об'єкт Car з полями:name, model, old, price, wheels Вивести об'єкт в консоль.

function Car(name, model, old, price, wheels) {
    this.name = name;
    this.model = model;
    this.old = old;
    this.price = price;
    this.wheels = wheels;
}

let auto = new Car('Hyundai', 'ionic', 2021, '19000 usd', 'R17');
console.log(auto);

// 2. Через прототайп створити власні методи масивів: some, every, reduce, splice



// some
Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

let numArr = [11, 22, 23, 26, 31, 45, 55, 77, 83, 256];

let result = numArr.mySome(num => num > 26);
console.log(result);


// every
Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};


const result2 = numArr.myEvery(num => num === 0);
console.log(result2);

//reduce
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};


const numbers = [33, 21, 34, 45, 25, -1, -2, 2, 7];

const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
console.log(sum);



//3. Через функцію конструктор створити об'єкт dog з полями: name, model, year, cost Вивести об'єкт в консоль.`

function Dog(name, model, year, cost) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.cost = cost;



}

let dog = new Dog('Jack', 'French-Bulldog', '3 month', '1000$');
console.log(dog);

//4 

//Через функцію конструктор створити об'єкт Parent, створити мінімум 3 поля, та додати через прототайп поведінку для об'єкту (мінімум 2 методи).


function Parent(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}


Parent.prototype.makeBreakfast = function (preparesFood) {
    return `My name is ${this.name}, I make ${preparesFood}`;
}

Parent.prototype.school = function (takesToSchool) {
    return `${this.name} ${takesToSchool}`;
}


let father = new Parent('Jack', '35', 'Man');


console.log(father);
console.log(father.makeBreakfast('Breakfast'));
console.log(father.school('takes the child to school'));


//5. Створити об'єкт Son, через прототип унаслідувати поведінку від об'єкту Parent та додати власну поведінку (мінімум 2 методи).

function Son(name, age, gender) {
    Parent.call(this, name, age, gender);
    this.position = 'child';
}

Son.prototype = Object.create(Parent.prototype);

Son.prototype.isPlaying = function () {
    return `${this.name} writes code all day`;
};

Son.prototype.isSleeping = function () {
    return `${this.name} sleeps all day`;
};

const son = new Son('Karl', 18, 'Boy');

console.log(son);
console.log(son.makeBreakfast('Breakfast'));
console.log(son.school('takes the child to school'));
console.log(son.isPlaying());
console.log(son.isSleeping());


//6. Створити КЛАС People із полями: name, age, isMarried, isChilds, job створити 3 інстанси класу People і вивести їхні поля в консоль.

class People {
    constructor(name, age, isMarried, isChilds, job) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
        this.isChilds = isChilds;
        this.job = job;
    }
}

//створюємо інстанси
const instance1 = new People('Дмитро', 30, 'одружений', 'є діти', 'Програміст');
const instance2 = new People('Аркадій', 55, 'одружений', 'є діти', 'Викладач');
const instance3 = new People('Діана', 20, 'не одружена', 'немає дітей', 'Студент');
//виводимо поля інстансів в консоль 
console.log('Person 1:', instance1);
console.log('Person 2:', instance2);
console.log('Person 3:', instance3);

//7. Створити КЛАС Tiger із полями: name, kind, age, speed, wight, height Додатково створити методи: changeName, addAge, changeSpeed, run Вивести поля класу в консоль та використати методи.

class Tiger {
    constructor(name, kind, age, speed, weight, height) {
        this.name = name;
        this.kind = kind;
        this.age = age;
        this.speed = speed;
        this.weight = weight;
        this.height = height;
    }

    changeName(newName) {
        this.name = newName;
    }

    addAge(newAge) {
        this.age = newAge;
    }

    changeSpeed(newSpeed) {
        this.speed = newSpeed;
    }

    run() {
        console.log(`${this.name} біжить зі швидкістю ${this.speed} км/год`);
    }
}


const tiger = new Tiger('Sharhan', 'White Tiger', 3, 97, 200, 100);

// Виведення полів класу в консоль
console.log('Ім', tiger.name);
console.log('Вид:', tiger.kind);
console.log('Вік:', tiger.age);
console.log('Швидкість:', tiger.speed);
console.log('Вага:', tiger.weight);
console.log('Висота:', tiger.height);

// Використання методів
tiger.changeName('Rich');
tiger.addAge(5);
tiger.changeSpeed(80);
tiger.run();



//Перевірити всі створені об'єкти на те чи вони походять від кожного класу (чи ф-ції конструктора),вивести результат в консоль.


console.log('auto походить від класу Car', auto instanceof Car);
console.log('dog походить від класу Dog', dog instanceof Dog); 
console.log('father походить від класу Parent', father instanceof Parent);
console.log('son походить від класу Parent', son instanceof Parent);
console.log('person1 походить від класу People:', instance1 instanceof People);
console.log('person2 походить від класу People:', instance2 instanceof People);
console.log('person3 походить від класу People:', instance3 instanceof People);
console.log('tiger походить від класу Tiger:', tiger instanceof Tiger);