// // Выводим в консоль раземер изображения
// // image = img id='image'
// // Берём изображение, на событие load (onload), вышкаем анонимный обработчик
// image.onload = function(event) {
// 	console.log(`Размеры изображения: ${image.offsetWidth} на ${image.offsetHeight}`);
// }


// // обработчик для обработчик скрипта 19.js
// function execute() {
// 	console.log('Скрипт 19.js - загружен');
// }


// // Запускаем фунцию (обработчик из другого скрипта, после загрузки)
// function execute() {  // это обработчик на onload 19.js - объяевлен в html
// 	__fromJS();  // эта функция находится внутри 19.js
// }



// // Создание динамического скрипта
// // т.е добавляем ссылку на другой файл js в html документ
// // Полностью: создаём ссылку на 19.js и вешаем обработчик[ execute() ] на событие onload

// // создаём элемент <script>
// let script = document.createElement('script');
// script.src = 'js/19.js';  // добавляем src="js/19.js"
// // вешаем обработчик на событие onload для элемента script
// script.onload = execute;  // onload='exetute()'
// // добавляем весь элемент со всеми аттрибутами в head - в html документ
// document.head.append(script);


// // сам бработчик для события onload элемента sctipt src='js/19.js'
// // запускаем функцию из 19.js
// function execute() {
// 	__fromJS();
// }




// // обработка ошибок при подгрузки елементов, в нашем случае скрипта

// // создаём элемент <script>
// let script = document.createElement('script');
// script.src = 'js/199.js';  // добавляем src="js/19.js" - С ОШИБКОЙ СПЕЦИАЛЬНО
// script.onload = execute;  // onload='exetute()' - вешаем обработчик на событие onload для элемента script

// // добавлеем обработчик события, для события onerror
// script.onerror = execute_error;  // onerror = execute_error()

// document.head.append(script);  // добавляем весь элемент со всеми аттрибутами в head - в html документ

// // сам обработчик для события onerror элемента sctipt src='js/19.js'
// // запустится если будет ошибка загрузки файла 19.js
// // В этом обработчике, обычно прописывают, действи для минимизации вреда для программы
// // Например другое место для подгрузки файла, либо вообще не выполнять скрипт, либо запосной скрипт
// function execute_error() {
// 	console.log('Ошибка при загрузки файла 19.js');
// }


// // запускаем функцию из 19.js - если 19.js загрузился без ошибок
// function execute() {
// 	__fromJS();
// }


// проверка - когда выполнится внешний js
// должен выполнится до DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
	console.log("Событие - DOMContentLoaded");
})