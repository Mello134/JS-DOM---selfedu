// // получение ссылок на объекты DOM
// let html = document.documentElement; // ссылка на объект html
// let body = document.body; // ссылка на body
// let head = document.head; // ссылка на head

// console.log(html, body, head);



// // перебор всех дочених элементов
// for (let i = 0; i < document.body.childNodes.length; i++) {
// 	console.log( document.body.childNodes[i] ); 
// }



// // перебор всех дочених элементов
// for (let cild of document.body.childNodes) {
// 	console.log( cild ); 
// }



// // просмотр первого и последнего дочернего элемента для html
// let html = document.documentElement; // объект html
// let first = html.firstChild;  // первый дочерний html
// let last = html.lastChild;  // последний дочерний html

// console.log(first); // head
// console.log(last); // body

// console.log(html.childNodes[0]); //head
// console.log(html.childNodes[html.childNodes.length-1]);  // body



// // существуют ли дочерние элементы
// let html = document.documentElement; // объект (родитель)
// console.log( html.hasChildNodes() ); // true - дочерние элементы есть



// let html = document.documentElement;
// // перебираем все элементы children для body
// for (let child of document.body.children) {
// 	console.log( child );
// 	// p, ul, scpipt
// }



// // слeдующий и предыдущий элемент
// console.log(document.head.nextSibling); // #text
// console.log(document.body.previousSibling); // #text
// // #text - потому что учитываются все пробелы, табуляции и тд

// // слeдующий и предыдущий элемент без учёта #text и тд
// console.log(document.head.nextElementSibling); // body
// console.log(document.body.previousElementSibling); // head



// // получение родительского элемента
// console.log(document.body.parentNode); // html



// работа с таблицей
// получение значения, id - таблицы, номер сроки, номер столбца
// ID.строка1.столбец2.innerHTML
console.log( table_digs.rows[0].cells[1].innerHTML ); 
// два