// // получить элемент по id (ссылку на элемент)
// let divElem = document.getElementById('div_id');
// console.log( divElem ); // вывод в консоль всего div-а

// // получить элемент по id в одну строку (лучше не пользоваться)
// console.log( div_id );



// // работа со списком
// // взять маркированный список ul и выбрать все дочерние элементы li
// let list = document.querySelectorAll('ul > li');

// // перебор и вывод всех значений нужного списка
// for(let value of list)
// 	console.log(value);
// 	// в консоле только li - из списка ul


// // взять первый элемент из нужного списка
// let list = document.querySelectorAll('ul > li:first-child');

// // можно без цикла, т.к элемент 1 
// console.log(list[0]);
// // li 'Солнце' /li



// // взять один элемнт (первый подходящий)
// let list = document.querySelector('ol > li');
// console.log(list);
// // li 'Сириус' /li



// // вывод элементов списка, определённого класса
// // берём список ul с классом 'star-list' > в этом списке берём элементы списка li
// let list = document.querySelectorAll('ul.star-list > li');
// // перебираем все элементы переменной List
// for(let item of list) {
// 	if (item.matches('li.star')) { // если у li сlass = 'star' (т.е matches == true)
// 		console.log(item); // выводим в консоль
// 	}
// }


// // выбрали первый попавшийся элемент li c классом 'star' т.е о сириусе
// let li = document.querySelector('li.star');

// // Относительно нашего ли ищем ближайшего предка с классом star-list
// console.log(li.closest('.star-list')); // весь наш список ul
// // Относительно нашего li, ищем ближайшего предка с класом 'content-teble'
// console.log(li.closest('.content-teble')); // весь div
// // для нашего элемента li, патаемся найти предок с тегом h1
// console.log(li.closest('h1')); // null



// является ли элемент дочерним к другому (нагодится ли внутри тега)
let div = document.querySelector('div.content-teble'); // ссылка на div, с классом content-teble
let ul = document.querySelector('ul.star-list');  // ссылка на ul, с классом 'star-list'

if (div.contains(ul)) { // если ul дочерний к div (т.е conteins == true)
	console.log('ul внутри div'); // выводим в консоль
}