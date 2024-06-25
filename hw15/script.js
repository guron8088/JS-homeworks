document.write('* Кожне завдання виділяти коментарями');

//1. Створити функцію яка проітерує масив ['hello', 1, 7, true, 99]

function iterArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let arr = ['hello', 1, 7, true, 99];
iterArr(arr);

//2. Створити функцію яка проітерує число від 0 до 10

function iterNumber(num) {
    for (let i = 0; i < num; i++) {
        console.log(num);
    }
}

let num = 10;
iterNumber(num);

//3. Створити функцію на замиканнях яка буде містти число і вміти:
//додавати
//віднімати
//ділити
//множити

function createCalculator(number) {
    return {
        add: function (x) {
            return number + x;
        },

        subtract: function (x) {
            return number - x;
        },

        divide: function (x) {
            if (x !== 0) {
                return number / x;
            } else {
                return 'error';
            }
        },

        multiply: function (x) {
            return number * x;
        }



    };
}

let calculator = createCalculator(10);
console.log(calculator.add(13));
console.log(calculator.subtract(13));
console.log(calculator.divide(2));
console.log(calculator.multiply(3));



//4. Створити кол бек функцію (по прикладу леції), яка працює як наступні методи масиву:
//filter
//find
//some
//every
//forEach



//filter
function myFilter(arr, fn) {
    let filteredArray = [];

    for (let i = 0; i <= arr.length; i++) {
        let isGoodItem = fn(arr[i], i);
        console.log(isGoodItem);

        if (isGoodItem) {
            filteredArray.push(arr[i])
        }
    }
    return filteredArray;
}

let arrN = [2, -5, -25, 3, 5, 199, 238, -101];

let filArrN = myFilter(arrN, (el) => {
    console.log(el);

    return el > 0;

})

console.log(filArrN);





//find

const arr2 = [0, -25, 23, 34, 'hello', 'world', 30, 55];

const found = arr2.find((element) => element == 'hello');

console.log(found);

//some

const array2 = [10, 15, 30, 40, 5];

const even = (element) => element % 3 === 0;

console.log(array2.some(even));

//every

function isBigEnough(element, index, array) {
    return element >= 140;
}

[12, 5, 8, 130, 44].every(isBigEnough); 

console.log([12, 5, 8, 130, 44].every(isBigEnough));

//forEach 

const colors = ['black', 'white', 'blue', 'red'];

colors.forEach((element) => console.log(element));





