// // фокусировка для input
// // получаем форму
// let frm = document.forms[0];
// // добавляем обработчик события для события onfocus - элемента input name='user'
// frm.user.onfocus = function(event) {
// 	console.log('Получение фокуса');
// }
// // добавляем обработчик события для события onblur - элемента input name='user'
// frm.user.onblur = function(event) {
// 	console.log('Потеря фокуса');
// }



// // Делаем проверку в полее воода имени пользователя (запрещаем символ #)
// // получаем форму
// let frm = document.forms[0];
// // добавляем обработчик события для события onfocus - элемента input name='user'
// frm.user.onfocus = function(event) {
// 	console.log('Получение фокуса');
// }

// // проверяем # при вводе, если есть меняем стиль
// // это обработчик события при потери фокуса
// frm.user.onblur = function(event) {
// 	if(frm.user.value.includes('#')) { // если поле содержит #
// 		frm.user.classList.add('error'); // добавляем стиль 'error'
// 	} else {
// 		frm.user.classList.remove('error') // иначе убираем стиль error
// 	}
// }


// // добавляем обработчик при вокусе, так что если даже в поле ошибка - стиля error не будет
// frm.user.onfocus = function(event) { // событие фокус
// 	frm.user.classList.remove('error'); // убираем class error для элемента
// }




// // focusin - фокус со всплытием
// // берём всю форму
// let frm = document.forms[0];

// // добавляем обработчик события, для события вокус(со всплытием), для всей формы
// frm.addEventListener('focusin', function() {
// 	console.log('Для всей формы: focusin, фокус со всплытием');
// });



// // ставим фокус автоматичекски на элемент textarea
// // берём всю форму
// let frm = document.forms[0];

// // ставим фокус
// // form -> textarea name='about'
// frm.about.focus();


// // всплывающее окно
// alert('Окно')

// // всплывающее окно для ввода данных
// prompt('Окно с полем ввода')

// // всплывающее окно с кнопками, ок и отмена
// confirm('Окно с кнопками ок и отмена')


// получение текущего элемента с фокусировкой
let active = document.activeElement;
console.log(active);