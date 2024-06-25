/*
    1. Зміна стилю елементу: Створіть HTML-сторінку з декількома елементами, такими як кнопки або тексти.
   Використовуючи JavaScript, змініть стиль одного або декількох елементів 
   (наприклад, колір фону або розмір шрифту).
*/

const knopka = document.getElementById('btn');


knopka.onclick = function () {
   alert('Hello World');
};
knopka.textContent = 'Tap me!';
knopka.setAttribute('style', 'color: #0af069; width: 150px; height: 55px; fontSize: 24px; background: #8b02b5; cursor: pointer; border: none; margin: 20px;');
knopka.style.borderRadius = '150px';
knopka.style.fontSize = '25px';



const text = document.getElementById('txt');
text.textContent = 'Зміна стилю елементу: Створіть HTML-сторінку з декількома елементами, такими як кнопки або тексти. Використовуючи JavaScript, змініть стиль одного або декількох елементів (наприклад, колір фону або розмір шрифту).';

text.style.fontSize = '24px';
text.style.color = '#730cfa';
text.style.margin = '20px';
text.style.background = '#f6ff00';




/* 2. Зміна текстового вмісту: Створіть елементи, які містять текст. 
   За допомогою JavaScript, змініть текстовий вміст одного або декількох елементів. 
*/

const textLorem = document.getElementById('lorem');
textLorem.textContent = 'New Lorem';

const textSecondLorem = document.getElementById('secondLorem');
textSecondLorem.textContent = 'New SecondLorem';

/* 3. Додавання нового елементу: За допомогою JavaScript,
   додайте 3 нові елемент до DOM-структури. 
*/

let firstAddition = document.createElement('div');
firstAddition.className = 'lorem';

firstAddition.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
firstAddition.style.marginTop = '20px';

document.body.append(firstAddition);

////////////////////////////////////

let secondAddition = document.createElement('div');
secondAddition.className = 'loremSecond';
secondAddition.textContent = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';
secondAddition.style.margin = '20px 0';

document.body.append(secondAddition);

////////////////////////////////////

let thirdAddition = document.createElement('div');
thirdAddition.className = 'loremThird';
thirdAddition.textContent = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn"t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.';

document.body.append(thirdAddition);

//4. Видалення елементу: За допомогою JavaScript, видаліть декілька елементів з DOM.

secondAddition.remove();
textSecondLorem.remove();

/* 5. Зміна атрибутів: Створіть елементи, які мають атрибути 
   (наприклад, "src" для зображення або "href" для посилання).
   За допомогою JavaScript, змініть атрибути цих елементів.
*/

const srcAttribute = document.getElementById('img');

srcAttribute.src = '../hw24/img/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg';
srcAttribute.alt = 'new Attribute';
srcAttribute.style.width = '500px';


const linkAttribute = document.getElementById('link');


linkAttribute.href = 'https://doodles.google/doodle/celebrating-lake-toba/';
linkAttribute.textContent = 'Today’s Doodle celebrates Lake Toba, or Danau Toba, in Sumatra island of Indonesia! It’s the world’s largest crater lake and one of the deepest lakes in the world. Lake Toba  is a natural result of a massive volcanic eruption from Toba Caldera thousands of years ago. Lake Toba also boasts beautifully scenic sights and is home to a UNESCO Global Geopark. On this day in 2020, Lake Toba was designated as UNESCO Global Geopark.';
linkAttribute.style.margin = '20px';
linkAttribute.style.display = 'flex';
linkAttribute.style.flexDirection = 'column';
linkAttribute.style.background = '#36e069';
linkAttribute.style.color = '#194bff';




/* 6. Сортування списку: Створіть список (наприклад, список <ul>) з декількома пунктами. 
   Використовуючи JavaScript, відсортуйте цей список в алфавітному порядку.
*/


function sortList() {

   const list = document.getElementById("myList");
   const items = Array.from(list.getElementsByTagName("li"));


   items.sort((a, b) => a.textContent.localeCompare(b.textContent));


   list.innerHTML = "";


   items.forEach(item => list.appendChild(item));
}


sortList();


/* 7. Зміна порядку елементів: Створіть декілька елементів. За допомогою JavaScript,
   змініть порядок цих елементів в DOM. 
*/




const container = document.getElementById('container');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
container.appendChild(item3);
container.appendChild(item1);
container.appendChild(item2);

/* 8. Видалення дочірніх елементів: Створіть батьківський елемент, який містить декілька дочірніх елементів.
Використовуючи JavaScript, видаліть всі дочірні елементи цього батьківського елемента. 
*/

const deleteChild = document.getElementById('parentElement');
const deleteChild2 = document.getElementById('child');
const deleteChild3 = document.getElementById('andChild');

deleteChild.removeChild(deleteChild2);

deleteChild.removeChild(deleteChild3);


/* 9. Зміна класів: Створіть сторінку з елементами, які мають CSS-класи. За допомогою JavaScript, змініть класи цих елементів без використання подій. */

const element = document.getElementById('change');
const element2 = document.getElementById('changeClass');
element.className = 'new class Name';
element2.className = 'and one more new class Name';

/* 10. Зміна HTML-структури: Створіть сторінку з деревом DOM-структури. 
    Використовуючи JavaScript, змініть HTML-структуру шляхом додавання нових елементів,
    переміщення або видалення існуючих елементів. */

let newAddition = document.createElement('div');


newAddition.textContent = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don"t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn"t anything embarrassing';

newAddition.style.background = 'red';



const myElement = document.getElementById('myElement');
const parentElement = document.getElementById('parentElement');

myElement.style.color = 'red';
parentElement.style.color = 'pink';

parentElement.append(myElement);