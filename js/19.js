// // выводим в консоле размеры изображения (раньше его загрузки)
// // к событию DOMContentLoaded - добавляем обрадотчик ready
// document.addEventListener('DOMContentLoaded', ready);

// // сам обработчик - ready
// function ready(event) {
// 	console.log('Событие - DOMContentLoaded, обработчик - ready');
// 	// размеры катинки img id='imege'
// 	console.log(`Размеры изображения: ${image.offsetWidth}x${image.offsetHeight}`)
// }

// // этот год выполнится раньше чем обработчик события и событие DOMContentLoaded
// console.log('События до DOMContentLoaded')



// // событие Load возникает уже после загрузки всех стилеи и изображение
// // для элемента window, для события onload (load) - добавляем обраблтчик анонимный
// window.onload = function(event) {
// 	console.log('Событие load - после загрузки всех файлов');
// 	// размеры изображения
// 	console.log(`Размеры изображения: ${image.offsetWidth}x${image.offsetHeight}`)
// }


// // событие unload - когда пользователь покинул страницу, так же при перезагрузки
// // к документу, для события unload - добавляем обработчик
// window.addEventListener('unload', function() {
// 	console.log('Отправка данных на сервер');
// });


// // Пример отправке данных на сервер
// window.addEventListener('unload', function() {
// 	// '/analytics.php' - скрипт который обрабатывает данные
// 	// JSON.stringify(myData)) - данные в формате JSON
// 	navigator.sendBeacon('/analytics.php', JSON.stringify(myData));
// })

// // -Передача данных осуществляется по POST-запросу
// // -Размер данных ограницен 64 КБ



// // при перезагрузки страницы спрашиваем пользователя - действительно ли перезагрузить страницу
// window.onbeforeunload = function() {
// 	return false;
// };



// удаление изображения если документ полностью загружен
// вызываем функцию
removeImage();

// сама функция
function removeImage() {
	if (document.readyState == 'loading') { // если жокумент на стадии загрузки
		console.log('Документ грузится, вешаем обработчик');
		// добавляем обработчик, который будет вызывать функцию ещё раз но в момент когда DOM дерево уже построено
		document.addEventListener('DOMContentLoaded', removeImage);
	} else { // иначе, если DOM дерево уже полностью загружено
		console.log('удаляем изображение');
		document.body.remove(image); // удаляем изображение
	}
}