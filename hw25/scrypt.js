///1. Створити кубік 50х50px червоного кольору із текстом Hello через js.

let general = document.getElementById('general');

let square = document.createElement('div');
square.style.width = '50px';
square.style.height = '50px';
square.style.background = '#fc0303';
square.textContent = 'Hello';
square.style.display = 'flex';
square.style.justifyContent = 'center';
square.style.alignItems = 'center';
square.style.color = 'white';
square.style.fontFamily = 'system-ui';
general.appendChild(square);

///2. Створити кубік 100х100px який буде кожного разу рандомного кольору,який буде містити текст який написав юзер в prompt.

const cube = document.createElement('div');

cube.style.width = '100px';
cube.style.height = '100px';
cube.textContent = prompt('Enter you message to cube');
cube.style.display = 'flex';
cube.style.justifyContent = 'center';
cube.style.alignItems = 'center';
cube.style.color = 'white';
cube.style.fontFamily = 'system-ui';
cube.style.marginTop = '20px';


setInterval(() => {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    cube.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

}, 2000)


general.appendChild(cube);

//3. Створити круг який при відкритті буде кожні 2сек робити відступ з ліва на 15px (лише 10 разів).
const circle = document.createElement('div');
circle.style.width = '200px';
circle.style.height = '200px';
circle.style.borderRadius = '50%';
circle.style.background = 'black';
let marginLeft = 0;


let moveCount = 0;

let sdf = setInterval(() => {

    if (moveCount <= 10) {
        marginLeft += 15;
        circle.style.marginLeft = marginLeft + 'px'


    } else {
        marginLeft -= 15;
        circle.style.marginLeft = marginLeft + 'px'
        if (marginLeft === 0) {
            /*  clearInterval(sdf); */
            moveCount = 0;
        }

    }
    moveCount++;

}, 3000);


general.appendChild(circle);

/* 4. Створити 3 HTML елемента, отримати їх в js, засетати класи та id які завчасно простилізовані в css.
  Кожні 3сек видаляти/додавати класи та id в елементиw
*/




document.addEventListener('elements', () => {
    const element1 = document.getElementById('element1');
    const element2 = document.getElementById('element2');
    const element3 = document.getElementById('element3');

    setInterval(() => {
        toggleClassesAndIds(element1, 'class1', 'newClass1', 'element1', 'newElement1');
        toggleClassesAndIds(element2, 'class2', 'newClass2', 'element2', 'newElement2');
        toggleClassesAndIds(element3, 'class3', 'newClass3', 'element3', 'newElement3');
    }, 3000);
});

function toggleClassesAndIds(element, oldClass, newClass, oldId, newId) {
    if (element.classList.contains(oldClass) && element.id === oldId) {
        element.classList.remove(oldClass);
        element.classList.add(newClass);
        element.id = newId;
    } else {
        element.classList.remove(newClass);
        element.classList.add(oldClass);
        element.id = oldId;
    }
}