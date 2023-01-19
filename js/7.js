// // какие классы подключены к элементу
// // получаем ссылку на элемент
// let elem = document.querySelector('div.msg');
// // выводим все классы в консоль
// console.log(elem.className);


// // получаем все стили элемента
// // находим ссылку следующего элемента после elem
// let elem2 = elem.nextElementSibling;
// // получаем все стили элемента elem2
// console.log(elem2.style);

// // получаем значение одного стиля top
// console.log(elem2.style.top);



// // меняем имя класса
// // получаем ссылку на div class='msg2'
// let elem = document.querySelector('div.msg2');
// // изменяем имя класса
// elem.className = "message";



// // добавляем расширение класса
// // получили нужный div с классам message
// let div = document.querySelector('div.message');
// // добавляем класс ex (html - div class = 'message ex'/ css - .message.ex)
// div.classList.add('ex');



// // двигающийся элемент! динамическое изменение координат
// // получаем ссылку на объект
// let elem = document.querySelector('div.msg');
// let coordY = 0; // создали переменную координат, сама по себе она ничего не означает

// let idMove = setInterval(function() {
// 	coordY += 5;  // увеличение значение на 5 каждый запуск функции
// 	elem.style.top = coordY+'px'; // присваиваем top - ЧИСЛОpx
// }, 50);  // запуск функции каждые 50мс

// setTimeout(()=>clearInterval(idMove), 3000); // через 3 секунды функция остановится




// // мигание с помощью сбрасывания
// // получаем div class='msg'
// let elem = document.querySelector('div.msg');

// let idMowe = setInterval(function() {
// 	if(!elem.style.display) { // если свойства dysplay не пустое
// 		elem.style.display = 'none';  // dysplay: none (не показывается)
// 	} else { // иначе 
// 		elem.style.display = "";  // сбрасываем свойство (просто пустая строка) - показывает контент
// 	}
// }, 100);  // вызываем анонимную функцию каждые 100мс

// setTimeout(()=>clearInterval(idMowe), 3000);  // через 3 секунды мигание остановится




// // присваивание нескольких свойств css к элементу
// // получение ссылки на элемент
// let elem = document.querySelector('div.msg');
// // добавляем несколько свойств css для элемента
// elem.style.cssText = 'color:red; font-size: 18px; background-color: green'



// // получение информации по любым стилям (даже внутри классов)
// // ссылка на div class='msg'
// let elem = document.querySelector('div.msg');
// // создаём объект со всеми стилями
// let objStyles = getComputedStyle(elem);

// // вывод всех стилей (только названия) - список огромный
// for(let st of objStyles) {
// 	console.log(st);
// }

// // вывод высоты
// console.log(objStyles.width);