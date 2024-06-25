//1. Створити 2 кубіка, при кліку на перший: другий повинен змінювати свій колір на рандомний.


let b = document.getElementById('cubeOne');
let c = document.getElementById('cubeTwo');

b.style.border = '2px solid black';
b.style.width = '100px';
b.style.height = '100px';
b.style.display = 'block';

c.style.border = '2px solid black';
c.style.width = '100px';
c.style.height = '100px';
c.style.marginTop = '20px';



b.onclick = function () {

    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    c.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

};

document.body.appendChild(b);
document.body.appendChild(c);

//2. Створити текстовий блок, при спробі його скопіювати покажіть користувачу вікно "Текст неможливо скопіювати!!".
let txt = document.getElementById('text');
txt.style.backgroundColor = 'yellow';
txt.style.margin = '20px';

txt.oncopy = ($event) => {

    $event.preventDefault();
    console.log('COPY', $event, $event.target.toString());
    console.log($event.target.value);
    console.log(document.getSelection(), toString());
    alert("You can't copy this text !");
    return

}

/* 3. Створити кубік 100х100 який міняє свій колір в залежності від того на яких координатах ви знаходитесь 
   (r - X координата, g - Y координата, b - середнє арифметичне X+Y/2). */

const k3 = document.getElementById('cubeThree');

k3.onmouseover = (event) => {
    console.log('onemouseover');

    const x = event.clientX;
    const y = event.clientY;

    
    const red = Math.round(x, 255);
    const green = Math.round(y, 255);
    const blue = Math.round(((x + y) / 2), 255);

    k3.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

//4. Створіть 3 кубіка один в одному які будуть при кліку виводити щось про себе в консоль (аналогічно лекції).


let kub1 = document.getElementById('kub1');



 {
    event.stopPropagation();
    console.log(event, "Hello, I'm kub");
    
}


let kub2 = document.getElementById('kub2');

kub2.onmousedown = (event) => {
    event.stopPropagation();
    console.log(event, "do you see me?");
    
}



let kub3 = document.getElementById('kub3');

kub3.onmousedown = (event) => {
    event.stopPropagation();
    console.log(event,'If no, bye bye !');
};



