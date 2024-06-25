document.write('hw21');

//1. Через клас створити об'єкт People який всі дані отримує ззовні з полями: name, f_name, old, isMarried, hasPossition, children Вивести об'єкт в консоль.

class People {
    constructor(name, f_name, old, isMarried, hasPossition, children) {
        this.name = name;
        this.f_name = f_name;
        this.old = old;
        this.isMarried = isMarried;
        this.hasPossition = hasPossition;
        this.children = children;
    }
}


const manager = new People('Charlie', 'Amerikanowich', 43, 'married', 'manager', 'two children');

console.log(manager);


//2. Через клас shortWork створити власні методи масивів всередині класу: filter, find, includes, join, slice

class ShortWork {
    constructor(array) {
        this.array = array;
    }

    filter(callback) {
        let result = [];
        for (let i = 0; i < this.array.length; i++) {
            //if (callback(this.array[i], i, this.array)) {
            //    result.push(this.array[i]);
            //}


            let isGoodItem = callback(this.array[i], i, this.array);

            if (isGoodItem) {
                result.push(this.array[i]);
            }


            //PS Я правильно зрозумів ваш коментар до попередньої домашньої, з приводу того що тут краще робити не через If, a через змінну ? Так повинно бути ?
        }
        return result;
    }


}
const arr = new ShortWork([10, -10, 29, -32]);
console.log(arr.filter(num => num < 0));


//3. Через клас створити об'єкт Car який всі дані отримує ззовні  з полями: name, model, year, isNew, cost, wheels Вивести об'єкт в консоль.

class Car {
    constructor(name, model, year, isNew, cost, wheels) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.isNew = isNew;
        this.cost = cost;
        this.wheels = wheels;
    }
}

let vw = new Car('Volkswagen', 'Passat', 2024, 'new', '40000$', 'R19');

console.log(vw);

//4. Через клас створити об'єкт Animal який отримує дані ззвоні, створити мінімум 3 поля,та додати через прототайп поведінку для об'єкту (мінімум 2 методи).

class Animal {

    constructor(name, weight, kindOfAnimal, color) {
        this.name = name;
        this.weight = weight;
        this.kindOfAnimal = kindOfAnimal;
        this.color = color;

    };

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} біжить їсти зі швидкістю ${this.speed}.`);
    }

    eating(kiticat) {
        console.log(`${this.name} їсть дуже багато ${kiticat} і його вага ${this.weight}`);
    }



};

let animal = new Animal('Zhorik', '10kg', 'Cat', 'gray');
console.log(animal);

animal.run('5 м/с')
animal.eating('kiticat');


//5. Створити клас Dog, через прототип унаслідувати поведінку від класу Animal та додати власну поведінку (мінімум 2 методи).

class Dog extends Animal {

    sleeping() {
        console.log(`${this.name} спить на коврику!`);
    }

    isPlaying() {
        console.log(`${this.name} грає з кісточкою`);
    }
}

let dog = new Dog("Big Dog");

dog.sleeping();
dog.isPlaying();



//6. Створити клас Poli Який в консоль буде виводити короткий опис того що таке поліморфізм.


class Poli {

    constructor(name) {
        this.name = name;
    }

    description() {
        console.log(`${this.name} це здатність викликати той самий метод для різних обєктів, і при цьому кожен обєкт реагує по-своєму`);
    }

}

let descr = new Poli('Поліморфізм - ');

descr.description();


//7. Привести приклад поліморфізму 

class Auto {
    constructor(model) {
      this.model = model;
    }
  
    say() {
      console.log (`Hello, i have ${this.model}, I like travelling`);
    }
  }
  
  class Bmw extends Auto {
    constructor(model) {
      super(model)
    }
  }
  
  class Gti extends Auto {
    constructor(model) {
      super(model)
    }
  
    say() {
      console.log(`Hello, I have ${this.model}, I like driving`);
    }
  }
  
  const alex = new Bmw('Bmw');
  const vasya = new Gti('Porsche');
  
  alex.say();
  vasya.say();


  //8. Створити клас Inc Який в консоль буде виводити короткий опис того що таке інкапсуляція.


  class Inc {

    constructor(name) {
        this.name = name;
    }

    description() {
        console.log(`${this.name} приховувує/ та показує властивості функцій.`);
    }

}

let descri = new Inc('Інкапсуляція');

descri.description();