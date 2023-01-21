// // распологаем элемент по центру клиентсвого окна
// // получсаем ссылку на наш элемент (то что хотим разместить по центру)
// let wnd = document.getElementById('wnd');

// // получаем координаты центра клиентского окна
// // получаем центр окна по оси X
// let centerX = document.documentElement.clientWidth/2;
// //получаем центр окна по оси Y
// let centerY = document.documentElement.clientHeight/2;

// // получаем центра нашего элемента
// // центр элемента по ширине
// let wndCenterX = wnd.offsetWidth/2;
// // центр элемента по высоте
// let wndCenterY = wnd.offsetHeight/2;

// // располагаем элемент по центру окна
// // по большому счёту меняем или добавляем стили css отступы сверху и слева
// // css #wnd { left: числоpx;}
// wnd.style.left = centerX - wndCenterX + 'px';
// // css #wnd { top: числоpx;}
// wnd.style.top = centerY - wndCenterY + 'px';



// // получение координат элемента расположенного в центре
// let coords = wnd.getBoundingClientRect()
// console.log(coords);




// получение координат относительно документа ( правильно работает при position: absolute)

// ссылка на элемент
let wnd = document.getElementById('wnd');

// выводим результат работы нижеуказанной функции вышеуказанного элемента
console.log( getCoordFromDocument(wnd) );

// создаём функцию, на входе которой ссылка на документ - на выходе её координаты
function getCoordFromDocument (elem) {
	let coords = elem.getBoundingClientRect(); // получсем координаты
	return { // возвращаем координаты top и left
		top: coords.top + window.pageYOffset, // top + смещение скролинга
		left: coords.left + window.pageXOffset  // left + смещение скролинга
	};
}