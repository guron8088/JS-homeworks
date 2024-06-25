document.write('Даний масив: [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20 11, [11, [true]]<br><br>');

document.write('Даний рядок: "Hello world and my dear friend ..."');

//Застосувати наступні методи:
//reverse, flat, includes, join, map, reduce

//1. reverse

const arr = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];

arr.reverse();

console.log(arr);

//2. flat 

const arr2 = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];
arrFlat = arr2.flat();

console.log(arrFlat);


//3. includes 

const arr3 = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];
arrIncl = arr3.includes(15);

console.log(arrIncl);

//4. join 

const arr4 = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];

arrJoin = arr4.join('__');

console.log(arrJoin);


//5. map 

const arr5 = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];

arrMap = arr5.map(Math.sqrt);

console.log(arrMap);

//6. reduce 

const arr6 = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];

const initialValue = 0;
const sumWithInitial = arr6.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);



//Даний рядок: 'Hello world and my dear friend ...' Застосувати наступні методи:
//split, trim, toLocaleUpperCase, toLocaleLowerCase, charAt, charCodeAt, includes,
//concat, search, startsWith, endsWith, indexOf, lastIndexOf, replace


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