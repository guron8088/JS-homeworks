document.write('Розділяти всі завдання коментарями і писати що треба робити в завданні');

//1. Через функцію конструктор створити об'єкт People з полями: name, f_name, old, isMarried, hasPossition, childre. Вивести об'єкт в консоль.

function People(name, f_name, old, isMarried, hasPossition, children) {
    this.name = name;
    this.f_name = f_name;
    this.old = old;
    this.isMarried = isMarried;
    this.hasPossition = hasPossition;
    this.children = children;

}

let human = new People('Jack', 'Johnson', 35, 'no', 'Manager', 'yes');

console.log(human);

//2. Через прототайп створити власні методи масивів: filter, find, includes, join, slice



let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//filter
Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};


console.log(numbers.myFilter(num => num > 5));

//find

Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

console.log(numbers.myFind(num => num === 5));


//includes

Array.prototype.myIncludes = function (value) {
    return this.indexOf(value) !== -1;
};
console.log(numbers.myIncludes(2));

//join

Array.prototype.myJoin = function (joinSepa) {
    let result = '';
    for (let i = 0; i < this.length; i++) {
        result += this[i];
        if (i !== this.length - 1) {
            result += joinSepa;
        }
    }
    return result;
};
console.log(numbers.myJoin('--'));

//slice 
Array.prototype.arrSlice = function(start, end) {
    let newArr = [];
    let length = this.length;

    let relativeStart = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
    let relativeEnd = end === undefined ? length : end < 0 ? Math.max(length + end, 0) : Math.min(end, length);

    for (let i = relativeStart; i < relativeEnd; i++) {
        newArr.push(this[i]);
    }
    return newArr;
};

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];


console.log(numbers1.arrSlice(3, 7));


//3. Через функцію конструктор створити об'єкт Car з полями: name, model, year, isNew, cost, wheels. Вивести об'єкт в консоль.

function Car(name, model, year, isNew, cost, wheels) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.isNew = isNew;
    this.cost = cost;
    this.wheels = wheels;

}

let car = new Car('Audi', 'SQ7', 2024, 'isNew', '120 000$', 'r20');

console.log(car);

//4. Через функцію конструктор створити об'єкт Animal, створити мінімум 3 поля, та додати через прототайп поведінку для об'єкту (мінімум 2 методи).

function Animal(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
};

Animal.prototype.greetings = function() {
    return `Hi! My Name is ${this.name}, I am ${this.age} years old and I am a ${this.species}.`;
};

Animal.prototype.makeSound = function(sound) {
    return `${this.name} says ${sound}!`;
};

let myAnimal = new Animal("Snikers", 3, "Dog");

console.log(myAnimal.greetings());      
console.log(myAnimal.makeSound("barks"));


//5. Створити об'єкт Dog, через прототип унаслідувати поведінку від об'єкту Animal та додати власну поведінку (мінімум 2 методи).


function Dog(name, age) {
    Animal.call(this, name, age, "dog");
};
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.isPlaying = function() {
    return `${this.name} plays every day`;
};

Dog.prototype.isSleeping = function(item) {
    return `${this.name} sleeps all day`;
};

let secondDog = new Dog("Twix(a friend of Snikers)", 2);

console.log(secondDog.greetings());
console.log(secondDog.makeSound('rrrrrrrr'));
console.log(secondDog.isPlaying());
console.log(secondDog.isSleeping());

