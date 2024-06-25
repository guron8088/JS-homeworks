document.write('hello world');


//* Результат виконання кожного алгоритму вивести в консоль по принципу: <назва алгоритму>: <масив даних>

//1. Реалізувати алгоритм: лінійний пошук для наступного масиву ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів']

//2. Реалізувати алгоритм: бінарний пошук для наступного масиву [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110]

//3. Реалізувати алгоритм: сортування бульбашкою для наступного масиву [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19]


//1
let arrCities = ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів'];

let wantFound = 'Київ';

for (let i = 0; i < arrCities.length; i++) {
    if (wantFound === arrCities[i]) {
        console.log('лінійний пошук', arrCities);
        console.log(arrCities[i]);
        break;
    }
}

//2
let counter = 0;
let binSearch = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110];

let found = 100;
let start = 0;
let end = binSearch.length - 1;
let mid = 0;



while  (start < end) {
    counter++;
    mid = Math.round((start + end) / 2);
    
    if (binSearch[mid] === found) {
        console.log(' бінарний пошук', binSearch);
        console.log('i found it', binSearch[mid]);
        break;
    } else if (binSearch[mid] > found) {
        end = mid;
    } else if (binSearch[mid] < found) {
        start = mid;
    }
}
console.log(counter);

//3 

let arrBuble = [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19];

for (let j = 0; j <= arrBuble.length - 1; j++) {

    for (let i = 0; i <= arrBuble.length - 1; i++) {

        if (arrBuble[i] > arrBuble[i +1]) {
            let temp =  arrBuble[i+1];
            arrBuble[i + 1] = arrBuble[i];
            arrBuble[i] = temp;
        }
    }
    
}


console.log('сортування бульбашкою для наступного масиву [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19]');
console.log(arrBuble);

