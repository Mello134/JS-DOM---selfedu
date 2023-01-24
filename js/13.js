// // обработчик для li - внутри ul ol (само событие в ul ol)
// // id_элемента.addEventListener('событие', обработчик в виде функции)
// main_menu.addEventListener('click', function(event) {
// 	let li = event.target; // c помощью всплытия определяем куда кликнули, получаем ссылку, записываем в переменную li
// 	console.log(li.innerHTML);  // получаем содержимое между li /li
// });


// // тот же обработчик но без бага
// main_menu.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');  // closest('li') - ближайшее элементы к элементу li
	
// 	// проверка - если такого элемента не сушествует
// 	if (li == null) {
// 		return // ничего не выводим, просто выполняем функцию
// 	} else {
// 		console.log(li.innerHTML);  // выводим содержимое элемента
// 	}

// });



// // тот же обработчик но читаем значение аттрибута data-set
// main_menu.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');  // closest('li') - ближайшее элементы к элементу li
	
// 	// проверка - если такого элемента не сушествует
// 	if (li == null) {
// 		return // ничего не выводим, просто выполняем функцию
// 	} else {
// 		console.log(li.dataset.command);  // выводим значение data-command='open/save/...'
// 	}

// });



// тот же обработчик но команды будут методами
// создаём объект, внутри методы open/save и тд
let menuActs = {
	open() {alert('open - Открываем');},
	save() {alert('save - Сохраняем');},
};

// добавляем обработчик для ul id='main_menu', то есть при клике на пункте меню
main_menu.addEventListener('click', function(event) {
	let li = event.target.closest('li'); // получаем значение собственного аттрибута
	if (li==null) { // если элемента не существует
		return // ничего не выводим
	};



	// вызываем методы open, save и тд
	let act = li.dataset.command; // получаем название метода
	// (если название метода не пустая строка  и оно существует в объекте menuActs)
	if (act && menuActs[act] !== undefined) {
		menuActs[act](); // вызываем метод из объекта menuActs
	};
});




// Отображаем или скрываем элементы в браузере
// обработчки для кнопки скрыть/показать, его повесим на объект document
document.addEventListener('click', function(event) {
	// получаем id элемента которое нужно скрыть или показать, и смотрим его свойство toggleId
	// то есть здесь проверяем input data-toggle-id
	let id = event.target.dataset.toggleId;
	if (!id) { //если свойства toggleId нету
		return; // просто return - то есть ничего
	} else {  // иначе toggleId существует

		// здесь получаем ul id='main_menu'
		let elem = document.getElementById(id); // получаем элемент по id
		// проверка существует ли элемент по id
		if (!elem) { // если элемента по id не существует
			return // ничего не делаем
		} else { // иначе элемент нашли
			elem.hidden = !elem.hidden; // добавляем убираем свойство hidden 
		}
	}

})



// Убираем у ссылок свойство onclock
// получаем все эелементы с тегами 'a' - то есть ссылки
let a = document.querySelector('a');
a.onclick = function(event) {
	event.preventDefault(); // отключаем станадртное событие. Отменяем действие браузера по умолчанию
} 



// // контекстное меню для документа
// // кликаем правой кнопкой мыши, и отменяем стандартное меню браузера
// document.addEventListener('contextmenu', function(event) {
// 	console.log('Контекстное меню документа')
// 	event.preventDefault(); // отменяем дейстрие браузера по умолчанию
// })


// // добавляем своё контекстное меню для своего элемента ul
// // ul id='main_menu'
// main_menu.oncontextmenu = function(event) {
// 	console.log('Контекстное меню ul');
// 	event.stopPropagation(); // отменяеи вспылтие (чтобы не отображалось контекстное меню документа)
// 	event.preventDefault(); // отменяем станадтное контекстрое меню браузера
// }


// контекстное меню для документа
document.addEventListener('contextmenu', function(event) {
	if (event.preventDefault) return; // если вызывалось контекстрое меню ранее (всплытие) - ничего не делать, и прерываем действие обработчика событий
	console.log('Контекстное меню документа')
	event.preventDefault(); // отменяем дейстрие браузера по умолчанию
});


// контекстное меню пкм для ul
main_menu.oncontextmenu = function(event) {
	console.log('Контекстное меню ul');
	event.preventDefault(); // отменяем станадтное контекстрое меню браузера
}



// // контекстное меню для документа
// document.addEventListener('contextmenu', function(event) {
// 	if (event.preventDefault) return; // если вызывалось контекстрое меню ранее (всплытие) - ничего не делать, и прерываем действие обработчика событий
// 	console.log('Контекстное меню документа')
// 	event.preventDefault(); // отменяем дейстрие браузера по умолчанию - СТРОЧКА НЕ СРАБОТАЕТ!
// }, {passive:true});