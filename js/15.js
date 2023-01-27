// // это обработчик события. в html input onkeydown="keyHandler(event)" onkeyup="keyHandler(event)"
// // при нажатии кнопки в консоле keydown, при отпускании keyup
// function keyHandler(event) {
// 	console.log(event.type);  // keydown/keyup
// 	console.log('repeat: ' + event.repeat); // true если автоповтор (кнопку зажали), false если нажали отпустили, нажали отпустили
// }


// // определяем символ и код нажатой клавиши
// function keyHandler(event) {
// 	console.log('key/символ клавиши: ' + event.key +
// 		', code/ код клавиши: ' + event.code);
// }



// выводим значение позиции фиксированоого в окне документа (бег со скроллингом)
// доабвляем обработчик для события scroll
window.addEventListener('scroll', function(event) {
	// inp - это наш input, id='inp'
	// value - это значение, то что записано в окошке
	inp.value = pageYOffset;
})
// этот обработчик будет в окно input записывать значения координат при скорллинге