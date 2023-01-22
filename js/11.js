// // функция обработчик событий
// function showMessage() {
// 	alert('Hello!');
// }



// // создание и обработка событий
// // получаем ссылку на input button
// let inp = document.querySelector('input');
// // создаём событие onclick, т.е берём аттрибут onclick и присваиваем на этот инпут ссылку на функцию (обработчик события)
// inp.onclick = showMessage;

// // функция обработчик событий
// function showMessage() {
// 	alert('Hello!');
// }

// // удаляем обработчик
// inp.onclick = null;



// // Получение имени Тэга, в качестве обработчика события
// // получаем элемент
// let inp = document.querySelector('input');
// // присваиваем к тэгу функцию обработчик
// inp.onclick = showMessage;

// // функция обработчик, показывающая имя тэга
// function showMessage() {
// 	alert(this.tagName);
// }




// //Получение имени тега, например у ссылки где событие 
// //присваивается в html в качестве аргумента
// // функция обработчик для получение тэга у ссылки
// function showMessageTwo(event) {
// 	alert(event.currentTarget.tagName);
// }



// // присвоение трёх! обработчиков для одного события одного элемента
// let inp = document.querySelector('input');
// // обработчик 1 (присовение обработчика к событию)
// inp.addEventListener('click', showMessage);
// // обработчик 2 (присвоение и сразу вызов обработчика события)
// inp.addEventListener('click', function(event) {  // анонимная функция
// 	console.log(event.clientX, event.clientY);   // координаты мыши в момент нажатия кнопки
// });

// // обработчик 3 (но обычно используют ЛИБО addEventListener ЛИБО inp.onclick)
// inp.onclick = function() {
// 	console.log('Обработчик onclick 3');
// }

// // обработчик события 1
// function showMessage(event) {
// 	alert(event.currentTarget.tagName);
// }



// // увеличение кнопки и вызов функции после увеличения
// // ссылка на элемент/ кнопку input class='zoom'
// let inp = document.querySelector('input.zoom');


// // добавление обраблтчика к событию transitionend
// inp.addEventListener('transitionend', showMessage);

// // функция обработчик
// function showMessage() {
// 	alert('Кнопка увеличена!')
// }


// назначение объекта в качестве обработки события
// // увеличение кнопки и вызов функции после увеличения
// // ссылка на элемент/ кнопку input class='zoom'
// let inp = document.querySelector('input.zoom');


// // добавление обраблтчика к событию click
// inp.addEventListener('click', { // для событяю click назаначаем объект
// 	handleEvent(event) {  // метод внутри объекта который автоматически вызывается внутри
// 		console.log('Собыите: ' + event.type); // вывод имени события
// 	}
// });





// назначение класса в качестве обработчика события
// создали класс с методом
class MyHandler { 
	handleEvent(event) {
		console.log('Собыите: ' + event.type);
	}
}

// ссылка на элемент/ кнопку input class='zoom'
let inp = document.querySelector('input.zoom');

// добавление обраблтчика к событию click
inp.addEventListener('click', new MyHandler() ); // создали новый класс в качестве обработчика события

