// // считываем то что написано в поле после потере фокуса
// // change - для input
// // берём форму
// let frm = document.forms[0];

// // пишим обработчкик события для события onchange
// // onchange - возникает при потере фокуса
// // элемент input name='user'
// frm.user.onchange = function() {
// 	// считываем значение поля input (то что написано в поле)
// 	console.log(frm.user.value);
// }



// // меняем чекбоксы, и выводим информацию в консоль
// // onchange для input radio (чекбоксы)

// // берём форму
// let frm = document.forms[0];

// // обработчик для onchange - для первого чекбокса
// frm.sex[0].onchange = function() {
// 	console.log('sex 0: ' + frm.sex[0].checked);
// }
// // sex 0: true - при выборе

// // обработчик для onchange - для второго чекбокса
// frm.sex[1].onchange = function() {
// 	console.log('sex 1: ' + frm.sex[1].checked);
// }
// // sex 1: true - при выборе


// // то же самое с checbox - окно с галочкой
// // input type="checkbox" name="agree"
// frm.agree.onchange = function() {
// 	console.log('agree: ' + frm.agree.checked);
// }
// // agree: true - при выборе, т.е галочка стоит
// // agree: false - при отсутствии галочки




// // onchange - для для элемента selected, вывод в консоль выбранное значение option
// // берём форму
// let frm = document.forms[0];

// frm.city.onchange = function() {
// 	console.log(frm.city.selectedIndex);
// }



// // событие input [oninput] для поля input - срыбатывает сразу, как только что то меняется
// // берём форму
// let frm = document.forms[0];

// // в консоле будет инормация о значениии в поле Input, при либом изменении
// frm.user.oninput = function() {
// 	console.log(frm.user.value);
// }



// // Пример обработки событий, при вырезании, копировании и вставке
// // cut, copy, paste (oncut/oncopy/onpaste)
// // берём форму
// let frm = document.forms[0];

// // обработчики событий поля input
// frm.user.oncut = function(event) {
// 	console.log('Событие cut - вырезание');
// }
// frm.user.oncopy = function(event) {
// 	console.log('Событие copy - копирование');
// }
// frm.user.onpaste = function(event) {
// 	console.log('Событие paste - вставка');
// }


// // отправка данных на сервер
// // нажатие кнопки отправить - событие submit
// // берём форму
// let frm = document.forms[0];

// // обработчик события при отправке данных на сервер
// frm.onsubmit = function(event) {
// 	alert('Отправка формы');
// }



// // Если поле user пустое, то прерываем отправку и вызываем ошибку
// // берём форму
// let frm = document.forms[0];

// // проверка поля, если поле некорректно - вызываем ошибку
// frm.onsubmit = function(event) {
// 	if(!frm.user.value) { // если поле input name='user' - пустое
// 		event.preventDefault(); // отменяем отправку данных на сервер
// 		console.log('Поле user - пустое!'); // выводим сообщение

// 	}
// }




// создаём форму в js GET, и вызываем метод form.submit() - при нажатии на текст
// берём форму
let frm = document.forms[0];

// обработчик
function sendForm() {
	let form = document.createElement('form');  // создаём форму
	form.method = 'GET'; // метод передачи данных GET
	form.innerHTML = '<input name="q" value="test"'; // в форму вставляем элемент input
	document.body.append(form); // добавляем форму в HTML документ, в body
	form.submit(); // вызываем метод submit
}