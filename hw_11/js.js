document.write('* Використовувати методи масивів');

//1. Проітерувати масив [1, 5, true, 'hello', false, null, 'iiii', 54, null]

let arr = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
arr.forEach(function(item, i, arr) {
    console.log(i + ": " + item + " (массив: " + arr + ")" );
});


//2. Дано масив [1, 'iiii', 54, false], додати в кінець масиву 433

let arr2 = [1, 'iiii', 54, false];

arr2.push(433);

console.log(arr2);


//3. Дано масив [1, 'iiii', 54, false], додати в початок масиву 'Hello  ay'

let arr3 = [1, 'iiii', 54, false];

arr3.unshift('Hello  ay');

console.log(arr3);


//4. Дано масив [1, 'iiii', 54, false], видалити останній елемент з масиву

let arr4 = [1, 'iiii', 54, false];

arr4.pop();

console.log(arr4);

//5. Дано масив [1, 'iiii', 54, false], видалити перший елемент з масиву


let arr5 = [1, 'iiii', 54, false];

arr5.shift();

console.log(arr5);

//6. Дано масив [5, 44, true, 'he', true, 5, 6] вирізати *в новий масив* з 2 по 5 індекс
 
let arr6 = [5, 44, true, 'he', true, 5, 6]; 

arrCopy = arr6.slice(2, 6); 

console.log(arrCopy);


//7. Дано масив [5, 44, true, 'he', true, 5, 6] вирізати з 2 по 5 індекс дані

let arr7 = [5, 44, true, 'he', true, 5, 6];

arr7.splice(2, 4);

console.log(arr7);

//8. Дано масив [5, 44, true, 'he', true, 5, 6] вирізати з 3 по 5 індекс та вставити 11, 101, 224

let arr8 = [5, 44, true, 'he', true, 5, 6];

arr8.splice(3, 3, 11, 101, 224);

console.log(arr8);

//Дано масив [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];
//9. Знайти елементи 3, 1, 100

let arr10 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];

let elements = [3, 1, 100];

let findItems = arr10.filter(elem => elements.includes(elem));

console.log(findItems);

//10. Відфільтрувати елементи менше 10 і більше 50

let arr11 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];

let filterArr = arr11.filter(elem => elem < 10 || elem > 50);

console.log(filterArr);

//11. Перевірити чи всі елементи більше 0

let arr12 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];

let checkArr = arr12.every(elem => elem > 0);

console.log(checkArr);

//12. Перевірити чи будь який елемент менше 0

let arr13 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];

let checkArr2 = arr13.every(elem => elem < 0);

console.log(checkArr2);

//13. Відсортувати масив за зростанням і спаданням

let arr14 = [3, 54, 1, 14, 66, 11, 100, 44, 12, 11];

let sortArr = arr14.slice().sort((a, b) => a - b); //за зростанням
let sortArr2 = arr14.slice().sort((a, b) => b - a); //за спаданням


console.log(sortArr);
console.log(sortArr2);

//14. Знайти індекс і останній індекс числа: 14, 11, 66

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








