// // находим ширину и длину клиентсного окна (diva)
// // ссылка на нужный div
// let elem = document.querySelector('div.message');
// // выводим значение ширины и высоты дива в консоль
// console.log(elem.clientWidth, elem.clientHeight);



// // примеры просмотра высоты и ширины вместе со скролингом
// // ссылка на элемент
// let elem = document.querySelector('div.message');

// // функция будет показывать в консоле, значения прокрутки и габаритов каждую секунду
// setInterval(function() {
// 	console.log(elem.scrollTop, elem.scrollLeft, elem.scrollWidth, elem.scrollHeight);
// }, 1000);



// // изменение сколлинга
// // ссылка на объект
// let elem = document.querySelector('div.message');
// // задаём вертикальному скроллингу значение 10px
// elem.scrollTop = 10;
// // добавляем к текущему горизонтальному скроллингу значение +20px
// elem.scrollLeft += 20;



// получаем смещение элемента
// ссылка на объект
let elem = document.querySelector('div.message');
// значение родителя (относительно чего отступы)
console.log(elem.offsetParent);
// смещения блока
console.log(elem.offsetLeft, elem.offsetTop);

// смещения внутренней частия (по сути ширина рамкм border)
console.log(elem.clientLeft, elem.clientTop);

// ширина и высота с учётом всех отступов
console.log(elem.offsetWidth, elem.offsetHeight);