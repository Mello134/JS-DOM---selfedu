// // узнать класс элемента
// console.log( document.body.constructor.name );
// // HTMLBodyElement



// // проверка принаджежности элемента к определённому JS классу
// console.log(document.body instanceof HTMLBodyElement); // true
// console.log(document.body instanceof HTMLBodyElement); // true
// console.log(document.body instanceof Element); // true
// console.log(document.body instanceof Text); // false



// // вывод структуры элемента
// console.dir(document.body);



// let comm = document.body.firstChild;  // весь текст комментария

// // имя узла
// console.log(comm.nodeName); // #comment
// console.log(document.body.nodeName); // BODY

// // имя тэга
// console.log(comm.tagName); // undefined
// console.log(document.body.tagName); // BODY


// // общараемся к заголовку (в body взяли первый дочерний элемент комментарий, и через него следующий элемент заголовок)
// let h1 = document.body.firstChild.nextSibling;
// console.log(h1.innerHTML); // покажет только содержимое! без тегов
// // Заголовок страницы


// // общараемся к заголовку
// console.log(h1.innerHTML); // Заголовок страницы

// // изменяем собердимое между тегов <h1>содержимое</h1>
// h1.innerHTML = 'Изменённый заголовок';
// // В браузере после этой строчки будет уже изменённый заголовок!



// // Заголовок страницы
// let h1 = document.body.firstChild.nextSibling;
// // изменяем собердимое между тегов <h1>содержимое</h1>
// h1.innerHTML = 'Изменённый <u>заголовок</u>';



// // Заголовок страницы
// let h1 = document.body.firstChild.nextSibling;
// // изменяем собердимое 
// h1.innerHTML = 'Изменённый <u>заголовок</u>'; // Изменённый <u>заголовок</u>

// h1.innerHTML += ' с добавленным текстом!'; // Изменённый <u>заголовок</u> с добавленным текстом!



// // el = <h1>Заголовок страницы</h1>
// let el = document.querySelector('body > h1');
// console.log(el); // <h1>Заголовок страницы</h1>

// // изменяем теги h1 на теги p
// el.outerHTML = '<p>Изменили заголовок на простой абзац</p>'


// // это комментарий
// let comm = document.body.firstChild;
// console.log(comm); // <!-- комментарий -->
// console.log(comm.data);  // комментарий

// // изменяем содержимое комментария
// comm.data = 'Изменённый комментарий'; 
// // Изменённый комментарий



// // отображение всего body - без тегов
// console.log(document.body.textContent);
// // Заголовок страницы



// // добавление комментария от пользователя + игнорирование теггов, экранирование
// let msg = prompt('Ваш комментарий:', '');

// // comm  - это div class comm
// // textContent - игнорирование вводных тегов
// // msg - это вводимое пользователем сообщение
// comm.textContent = msg;




// // добавление комментария от пользователя + игнорирование теггов, экранирование
// let msg = prompt('Ваш небезопасный комментарий:', '');

// // comm  - это div class comm
// // innerHTML - можно писать комменатрии и вставлять теги
// // msg - это вводимое пользователем сообщение
// comm.innerHTML = msg;



// скрывание содержимого и отображение, то есть мигание!
// получаем ссылка на элемент по id
let shadow = document.getElementById('shadow');

// скрываем содерджимое divа
shadow.hidden = true;

// отображать и скрывать элемент каждые 500 мс
setInterval(()=> shadow.hidden = !shadow.hidden, 500);