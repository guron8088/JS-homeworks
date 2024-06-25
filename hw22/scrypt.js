document.write('test test test');


// 1. Створити клас калькурятор на геттерах і сеттерах з діями *, /, +, -, вираховувати степінь, факторіал, корінь
//    Клас повинен містити поле date яке буде обновляти конкретну дату і час використання калькулятора.

class Calculator {
    constructor() {
        this._a = 0;
        this._b = 0;
        this._operator = '';
        this._date = new Date();


    }

    get a() {
        return this._a;
    }

    get b() {
        return this._b;
    }

    get operator() {
        return this._operator;
    }

    get date() {
        return this._date;
    }


    set a(value) {
        return this._a = value;
    }


    set b(value) {
        return this._b = value;
    }

    set operator(value) {
        return this._operator = value;
    }


    _factorial(n) {
        if (n < 0) {
            return 'err';
        }
        if (n === 0 || n === 1) {
            return 1;
        }

        let result = 1;
        for (let i = 2; i <= n; i++) {
            result += i;
        }

        return result;

    }


    get result() {
        switch (this._operator) {
            case '+':
                return this._a + this._b;
            case '-':
                return this._a - this._b;

            case '*':
                return this._a * this._b;

            case '/':
                return this._a / this._b;

            case '^':
                return Math.pow(this._a, this._b);

            case '√':
                return this._a >= 10 ? Math.sqrt(this._a) : 'Error';

            case '!':
                return this._factorial(this._a);
        }
    }
}




const count = new Calculator();

count._a = prompt('Enter the first number');
count._b = prompt('Enter the second number');

count._operator = '+';
console.log(count.result);

count._operator = '-';
console.log(count.result);

count._operator = '*';
console.log(count.result);

count._operator = '/';
console.log(count.result);

count._operator = '^';
console.log(count.result);

count._operator = '√';
console.log(count.result);

count._operator = '!';
console.log(count.result);

console.log(count.date);

// 2. Запишіть створений об'єкт створений в класі з дати і числа в localStorage, sessionStorage.

class Calculator2 {
    constructor() {
        this._a = 0;
        this._b = 0;
        this._operator = '';
        this._date = new Date();


    }
}



count._a = prompt('Enter the first number');
count._b = prompt('Enter the second number');


localStorage.setItem('constructor_a', this._a);
localStorage.setItem('constructor_b', this._a);
localStorage.setItem('operator', this._operator);
localStorage.setItem('date', this._date);


localStorage.getItem('constructor_a');
localStorage.getItem('constructor_b');
localStorage.getItem('operator');
localStorage.getItem('date');




sessionStorage.setItem('constructor_a', this._a);
sessionStorage.setItem('constructor_b', this._a);
sessionStorage.setItem('operator', this._operator);
sessionStorage.setItem('date', this._date);


sessionStorage.getItem('constructor_a');
sessionStorage.getItem('constructor_b');
sessionStorage.getItem('operator');
sessionStorage.getItem('date');


// 3. Самостійно попрактикуйте використання JSON, localStorage, sessionStorage.

const obj = {
    name: 'Barsik',
    type: 'cat'
}

localStorage.setItem('animal', JSON.stringify(obj));
console.log(localStorage.getItem('animal'));


sessionStorage.setItem('animal', JSON.stringify(obj));
console.log(sessionStorage.getItem('animal'));