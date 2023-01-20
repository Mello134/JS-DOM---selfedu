// // полчение высоты и ширины клиентского окна
// // получаем ссылку на весь html документ
// let html = document.documentElement;
// // вывод ширины и высоты всего окна браузера
// console.log(html.clientWidth, html.clientHeight);


// // полчение полной ширины и высоты окна с учётом скроллинга
// // выводим в консоль высоту и ширину (полную - с учётом скроллинга)
// console.log(window.innerWidth, window.innerHeight);



// // получение ширигы и высоты html документа
// // ссылка на html Документ
// let html = document.documentElement;
// // выводим ширину и высоту html документа
// console.log(html.scrollWidth, html.scrollHeight);



// // получение текущей прокрутки документа 
// let html = document.documentElement;
// // получение значений прокрутки (горизонтальная/вертикальная)
// console.log(html.scrollLeft, html.scrollTop);

// // необходимо образаться к body
// console.log(document.body.scrollLeft, document.body.scrollTop);

// // самый новый и правильный вариант получения проекрутки
// console.log(window.pageXOffset, window.pageYOffset);



// // прокрутка (скроллинг) документа
// // setInterval - будет интервально запускать нашу анонимную функцию
// setInterval(function() {
// 	window.scrollBy(0, 5); // изменение/увеличени скроллинга на 5 по оси y (прокрутка вниз)
// }, 100);  // запуск анонимной функции каждые 100 мс



// // открытие страницы с фокусом на какойто элемент
// setTimeout(function() {
//     header_1.scrollIntoView();
// });



// // запрет скроллинга
// // запрет
// document.body.style.overflow = 'hidden';
// // отмена запрета
// document.body.style.overflow = '';