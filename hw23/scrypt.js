document.write('Виконати повністю 3 рівень цього задачника по JS: https://code.mu/ru/javascript/tasker/stager/');

//3.1.1 Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
let num311 = 123456;
let arr311 = String(num311).split('').map(elem => Number(elem)).sort().join('');
let res311 = num311 == arr311;
console.log(res311);



//3.1.2 Дан массив: [1, '', 2, 3, '', 5] Удалите из массива все пустые строки.

arr312 = [1, '', 2, 3, '', 5];
let res312 = arr312.filter(elem => {
    if (elem != '') {
        return true;
    } else {
        return false;
    }

});

console.log(res312);


//3.1.3 Дан массив:

// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.

const arr313 = [
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
];

let res313 = arr313.map(subArray => subArray.sort((a, b) => a - b));
console.log(res313);


//3.1.4 Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
let arr314 = [1, 2, 3];

let arr3141 = [1, 2, 3, 4, 5];
arr3141.splice(arr314.length);
console.log(arr314);
console.log(arr3141);

//3.2.1 Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

let arr321 = [];
for (let i = 10; i <= 1000; i++) {
    arr321.push(i);
}

arr321.forEach(function (elem) {
    if (String(elem)[String(elem).length - 2] % 2 == 0) {
        console.log(elem);
    }
})


//3.2.2 Дан массив. Удалите из него каждый пятый элемент.

const arr322 = [];
for (let i = 1; i <= 50; i++) {
    arr322.push(i);
};


let res322 = arr322.filter(function (elem, index) {
    if ((index + 1) % 5 !== 0) {
        return true;
    }
});
console.log(res322);

//3.2.3

// Дана некоторая переменная с числом:

// let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:

// '00000'

let num323 = 5;
const arr323 = [];
for (let i = 0; i < num323; i++) {
    arr323.push(0);
}
console.log(arr323.join(''));


//3.2.4

// Дана некоторая строка со словами:

// 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:

// 'aaa ccc fff'

function removeWords(str324) {
    let words = str324.split(' ');
    let result = words.filter((words, index) => index % 2 === 0).join(' ');
    return result;
}

let str324 = 'aaa bbb ccc eee fff';
let newStr = removeWords(str324);
console.log(newStr);

//3.2.5

// Дан массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива.

let arr325 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let sum325 = arr325.reduce(function (total, subArray) {
    return total + subArray.reduce(function (sum325, elem) {
        return sum325 + elem;
    }, 0);
}, 0);
console.log(sum325);





//3.3.1 Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
let colors = ['orange', 'black', 'red', 'blue', 'yellow'];
let newColors = colors.filter(elem => elem.length <= 3);
console.log(newColors);


//3.3.2
// Дано некоторое число: 1357
// Проверьте, что все цифры этого числа являются нечетными.
let num332 = 1357;
let res332 = String(num332).split('').every(elem => elem % 2 != 0);
console.log(res332);

//3.3.3

// Дано некоторое слово:

// 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.

const word = 'abcba';
const reverseWord = word.split('').reverse().join('');
if (reverseWord == word) {
    console.log(true);
} else {
    console.log(false);
}



//3.3.4

// Дан массив:

// [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]
// Найдите сумму элементов этого массива.


let arr334 = [
    [
        [11, 12, 13],
        [14, 15, 16],
        [17, 17, 19],
    ],
    [
        [21, 22, 23],
        [24, 25, 26],
        [27, 27, 29],
    ],
    [
        [31, 32, 33],
        [34, 35, 36],
        [37, 37, 39],
    ],
];

//1 вар.
let sum334 = arr334.reduce((sum334, elem) => {
    return sum334 += elem.reduce((innerSum, subelem) => {
        return innerSum += subelem.reduce((totalSum, num334) => {
            return totalSum += num334;
        }, 0)
    }, 0)
}, 0)
console.log(sum334);

//2 вар.
sum3342 = 0;
for (let i = 0; i < arr334.length; i++) {
    for (let j = 0; j < arr334[i].length; j++) {
        for (let k = 0; k < arr334[j].length; k++) {
            sum3342 += arr334[i][j][k];
        }
    }
}
console.log(sum3342);





//3.4.1 Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

let arr341 = [];
for (let i = 10; i <= 1000; i++) {
    arr341.push(i);
};

arr341.forEach(function (elem) {
    if (String(elem)[String(elem).length - 3] % 2 == 0) {
        console.log(elem);
    }
});


//3.4.2 
// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива:

// [2, 1, 4, 3, 6, 5]



let arr342 = [1, 2, 3, 4, 5, 6];
let newArr342 = arr342.reduce((sum342, elem, index, arr342) => {
    if (index % 2 == 0) {
        if (index == arr342.length - 1) {
            sum342.push(elem);
        } else {
            sum342.push(arr342[index + 1], elem)
        }
    }
    return sum342;
}, [])
console.log(newArr342);


//3.4.3 Дан следующий объект: Найдите сумму элементов этого объекта.
let obj343 = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
}

let sum343 = 0;
for (let key in obj343) {
    for (let subkey in obj343[key]) {
        sum343 += obj343[key][subkey];
    }
}
console.log(sum343);



//3.5.1 Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

let text = 'avocado apple book tv radio';
let arrayText = text.split(' ').filter(elem => (elem[0] == 'a'));
console.log(arrayText);

//3.5.2 Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

let arr352 = [];
for (let i = 0; i <= 200; i++) {
    arr352.push(i);
};

let newArray352 = arr352.filter(elem => elem % 5 == 0);

console.log(newArray352);

//3.5.3 Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.



let arr353 = [0, 10, 6, 201, 20, 3];
let num353 = arr353.filter(elem => {
    let str353 = String(elem);
    if (str353.split('').some(elem => elem == 0)) {
        return true;
    }
})
console.log(num353);

//3.5.4 Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.

let arr354 = [123, 333, 512, 10];
let res354 = arr354.some(elem => String(elem).includes('3'));
console.log(res354);

//3.5.5
// Дано некоторое число:

// 35142
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее:

// 12345

const num355 = 35142;
let arr355 = String(num355).split('');

arr355.sort(function (a, b) {
    return a - b;
});

console.log(arr355.join(''));


//3.5.6 Напишите программу, которая сформирует следующую строку:

// '-1-2-3-4-5-'

let string = '';
for (let i = 1; i <= 5; i++) {
    string += '-' + [i];
}
console.log(string + '-');


//3.5.7 Дан следующий объект. Найдите сумму элементов этого объекта.


let obj357 = {
    1: {
        1: {
            1: 111,
            2: 112,
            3: 113,
        },
        2: {
            1: 121,
            2: 122,
            3: 123,
        },
    },
    2: {
        1: {
            1: 211,
            2: 212,
            3: 213,
        },
        2: {
            1: 221,
            2: 222,
            3: 223,
        },
    },
    3: {
        1: {
            1: 311,
            2: 312,
            3: 313,
        },
        2: {
            1: 321,
            2: 322,
            3: 323,
        },
    },
}

let sum357 = 0;
for (let key in obj357) {
    for (let subKey in obj357[key]) {
        for (let subSubKey in obj357[key][subKey]) {
            sum357 += obj357[key][subKey][subSubKey];
        }
    }
}

console.log(sum357);




//3.6.1 Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.

let arr361 = [111, 111111, 55, 9999, 777];
let newArr361 = arr361.filter(elem => {
    let str361 = String(elem);
    return str361.length <= 3;
});
console.log(newArr361);

//3.6.2 Дано число, например, вот такое:

//Проверьте, что все цифры этого числа больше нуля.

let num362 = 12345;
let arr362 = Array.from(String(num362), Number);
let result362 = arr362.every(elem => elem > 0);
console.log(result362);


//3.6.3 Дан некоторый массив, например, вот такой:

//[123, 456, 789]
//Слейте все элементы этого массива в один массив, разбив их посимвольно:

//[1, 2, 3, 4, 5, 6, 7, 8, 9]

let drainElements = [123, 456, 789];

let newArray363 = drainElements.map(elem => {
    let num363 = String(elem).split('');
    return num363.map(Number);
}).flat();
console.log(newArray363);


//3.6.4 Данa следующая структура:

// let data = [
//     {
//         1: 11,
//         2: 12,
//         3: 13,
//     },
//     {
//         1: 21,
//         2: 22,
//         3: 23,
//     },
//     {
//         1: 24,
//         2: 25,
//         3: 26,
//     },
// ];
//Найдите сумму элементов этой структуры.


let data364 = [
    {
        1: 11,
        2: 12,
        3: 13,
    },
    {
        1: 21,
        2: 22,
        3: 23,
    },
    {
        1: 24,
        2: 25,
        3: 26,
    },
];

let sum364 = 0;
for (let obj of data364) {
    for (let key in obj) {
        sum364 += obj[key]
    }
}

console.log(sum364);




//3.7.1 Дана строка со словами. Отсортируйте слова в алфавитном порядке.

let string371 = 'apple orange banane watermelone kiwi';
let arr371 = string371.split(' ');
let newString0 = arr371.sort().join(' ');

console.log(newString0);

//3.7.2 Дано число. Получите массив делителей этого числа.

let num372 = 25;
let arr372 = [];

for (let i = 0; i <= num372; i++) {
    if (num372 % i === 0) arr372.push(i);
}

console.log(arr372);

//3.7.3 Даны два числа. Получите массив общих делителей этих чисел.

let numFirst = 60;
let numSecond = 40;
let arrGeneral = [];
let smallestNum = Math.min(numFirst, numSecond);

for (let i = 0; i <= smallestNum; i++) {
    if (numFirst % i === 0 && numSecond % i === 0) arrGeneral.push(i);
}

console.log(arrGeneral);

//3.7.4 Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

let num374 = 7;
let arr374 = [];

for (let i = 0; i <= num374; i++) {
    if (num374 % num374 === 0 && num374 % 1 === 0 && num374 % i === 0) {
        arr374.push(i);
    };
}

console.log(arr374.length === 3 ? true : false);



//3.7.5 Через запятую написаны числа. Получите максимальное из этих чисел.


let numbers = '1, 23, 45, 854, 932, 901, 0';
let arr375 = numbers.split(', ');
let arrNum375 = arr375.map((strNum) => parseInt(strNum));

console.log(Math.max(...arrNum375));

//3.7.6 Дан массив с числами. После каждого однозначного числа вставьте еще такое же.


const arr376 = [7, 15, 55, 8];
let newArr376 = [];
for (let i = 0; i < arr376.length; i++) {
    if (arr376[i] > 0 && arr376[i] < 10) {
        newArr376.push(arr376[i], arr376[i]);
    } else {
        newArr376.push(arr376[i]);
    };
};
console.log(newArr376);

//3.7.7  Дана строка. Удалите из нее все гласные буквы.


const string2 = 'java script';
let sortString = [];
const wovel = ['a', 'o', 'i', 'y', 'u', 'e'];
const stringArr = string2.split('');

for (let i = 0; i < stringArr.length; i++) {

    if (!wovel.includes(stringArr[i])) {
        sortString.push(stringArr[i]);
    }
}
console.log(sortString.join(''));


//3.7.8 Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

const strBig = 'java script';
const strArrBig = strBig.split(' ');
let newStr2 = [];
for (let i = 0; i < strArrBig.length; i++) {
    newStr2.push(strArrBig[i].slice(0, -1) + strArrBig[i].slice(-1).toUpperCase());
}
console.log(newStr2.join(' '));

//3.7.9 Дан следующая структура:

// let data = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// ];


// Найдите сумму элементов этой структуры.

let data379 = [
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
    {
        1: [1, 2, 3],
        2: [1, 2, 3],
        3: [1, 2, 3],
    },
];

let arrCount = [];
let sum379 = 0;
for (let i = 0; i < data379.length; i++) {
    let arr379 = [];
    for (key in data379[i]) {
        arr379.push(data379[i][key]);
    }
    arrCount = arr379.join(',').split(',');
    for (let i = 0; i < arrCount.length; i++) {
        sum379 += parseInt(arrCount[i])
    }
}
console.log(sum379);


//3.8.1 Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

let arr381 = [232, 333, 5312, 130];

for (let i = 0; i < arr381.length; i++) {
    if (arr381[i].toString().includes('3')) {
        console.log(true);
    } else {
        console.log(false);
    }
};


//3.8.2 Дана строка в формате: 'kebab-case';
// Преобразуйте ее в формат: 'snake_case'


const kebab = 'kebab-case';
const snake = kebab.split('-').join('_');
console.log(snake);


//3.8.3 Дана строка в формате: 'snake_case' Преобразуйте ее в формат: 'camelCase'


const snake2 = 'snake_case';
const camelCase = snake2.split('_');
console.log(camelCase[0] + camelCase[1].split('').shift().toUpperCase() + camelCase[1].slice(1));

// 3.8.4 Дана строка в формате:

// Преобразуйте ее в формат:
// 'snake_case'


const str2 = 'camelCase'
// Преобразуйте ее в формат:
// 'snake_case'
let snake3 = str2.split(/(?=[A-Z])/).join('_').toLowerCase();
console.log(snake3);


// 3.8.5 Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]

let arr385 = [];
let res385 = [];
for (let i = 1; i <= 3; i++) {
    arr385.push(i);
}
for (let j = 0; j <= 4; j++) {
    res385.push(arr385);
}
console.log(res385);


//3.9.1 Дана строка.Проверьте, что эта строка состоит только из цифр.
const str391 = '5984фів6';
const arrStr391 = str391.split('');
let count391 = 0;
arrStr391.forEach((numb) => {
    if (!isNaN(numb)) {
        count391 += 1;
    };
});
count391 === arrStr391.length ? console.log(true) : console.log(false);

//3.9.2 Дана строка.Проверьте, что эта строка состоит только из четных цифр.
const str392 = '2468';
let arrStr392 = str392.split('');
let count392 = 0;
for (let i = 0; i < arrStr392.length; i++) {
    if (arrStr392[i] % 2 === 0) {
        count392 += 1
    }
}
if (count392 === arrStr392.length) {
    console.log(true);
} else {
    console.log(false);
}
let res392 = arrStr392.map((count) => {
    return count % 2 === 0;
})
console.log(res392);

//3.9.3 Дан массив со числами.Удалите из него числа, имеющие два и более нуля.
const arr393 = [1000, 30000, 77, 650];
const filteredArr = arr393.filter(num => {
    const numStr = num.toString();
    let zeroCount = 0;
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === '0') {
            zeroCount++;
            if (zeroCount >= 2) {
                return false;
            }
        }
    }
    return true;
});

console.log(filteredArr);

//3.9.4 Найдите все числа от 1 до 1000, сумма цифр которых равна 13.
let arr394 = [];
for (let i = 0; i <= 1000; i++) {
    if (i.toString().split('').reduce((acc, item) => (+acc + +item), 0) === 13) {
        arr394.push(i);
    };
};
console.log(arr394);

//3.9.5 Сформируйте с помощью циклов следующий массив:

// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]
let arr395 = [];
for (let i = 0; i < 3; i++) {
    arr395.push([]);
    for (let j = 1; j <= 9; j++) {
        if (arr395[i].length < 3) {
            arr395[i].push(j)
        };
    };
};
console.log(arr395);

//3.10.1 Дан массив.Сделайте так, чтобы в нем каждый элемент повторился два раза.
const arr301 = [7, 8, 15, 23];
let newArr301 = [];
arr301.forEach((item) => {
    newArr301.push(item, item);
});
console.log(newArr301);

//3.10.2 Дан массив и число.Оставьте в массиве только те числа, которые являются делителями заданного числа.
const arr302 = [3, 9, 12, 15, 200, 109, 23, 90];
const number = 3;
let resArr302 = [];
arr302.map((item) => {
    if (item % number === 0 && item !== 0) {
        resArr302.push(item);
    };
});
console.log(resArr302);

//3.10.3 Даны два числа.Получите массив цифр, которые есть и в одном, и во втором числе.
let num1 = 1267493;
let num2 = 176136575;

function getSameDigits(number1, number2) {
    let str1 = number1.toString();
    let str2 = number2.toString();
    let sameDigits = [];

    for (let i = 0; i < str1.length; i++) {
        if (str2.includes(str1[i])) sameDigits.push(str1[i]);
    }

    return sameDigits;
}

console.log(getSameDigits(num1, num2));

//3.10.4 Дано число.Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.
const num304 = 987654321;
const arrNum304 = num304.toString().split('');
arrNum304.pop();
arrNum304.shift();
let resArr = [];
arrNum304.map((item, index) => {
    if (item === '3') {
        resArr.push(index);
    };
});
console.log(resArr);

//3.10.5 Дан массив со числами.Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.
const arr305 = [777, 8899, 856, 19, 789];
let diffArr = [];
const str305 = arr305.toString();
arr305.forEach((item) => {
    if (item.toString().length === new Set(item.toString()).size) {
        diffArr.push(item);
    };
});
console.log(diffArr);

//3.10.6 Дан массив:

const arr306 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
// Слейте элементы этого массива в один одномерный массив:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newArr306 = [];
resArr306 = [];
newArr306 = arr306.toString().split(',');
newArr306.forEach((item) => {
    resArr306.push(+item);
})
console.log(resArr306);