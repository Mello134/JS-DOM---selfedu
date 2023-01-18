// // добавление своего нового свойства к объекту body
// // получаем ссылку на объект body
// let body = document.body;

// // создаём новое свойство объекта.
// body.myStyle = 'color: red';

// console.log(body.myStyle);
// // color: red



// // добавление своего нового свойства к объекту body - в виде объекта
// // получаем ссылку на объект body
// let body = document.body;

// // создаём новое свойство = объекта.
// body.myStyle = {
// 	color: 'red',
// 	fontSize: 20
// };

// // выводим свойства в консоли
// console.log(body.myStyle);  // {color: 'red', fontSize: 20}
// console.log(body.myStyle.color);  // red
// console.log(body.myStyle.fontSize);  // 20

// // добавляем свойство в body - в виде нового метода (функции)
// body.getFontSize = function() {  // мовый метод получения в консоли шрифта
// 	return this.myStyle.fontSize;  // возвращаем шрифт
// }

// // вывываем в консоли своё свойство, свой метод
// console.log(body.getFontSize()); // 20




// // получение и изменение значения нестандартных (собственных) аттрибутов
// // получаем ссылку на div по id comm
// let div = document.getElementById('comm');
// // получаем значение собственного аттрибута deflt (указан в html)
// console.log( div.getAttribute('deflt')); // значение
// // изменяем значение собственного аттрибута
// div.setAttribute('deflt', 'Новое значение');
// // читаем новое значение собственного атрибута
// console.log( div.getAttribute('deflt')); // Новое значение



// // Чтение всех аттрибутов написанных в теге html
// // получаем ссылку на div по id comm
// let div = document.getElementById('comm');

// // перебираем атрибуты
// for (let val of div.attributes)
// 	// выводим в консоль аттрибуты и их значения
// 	console.log(val);




// // перекрашиваем все значения элементов по определённому собственному аттрибуту
// //[cell-red] - выбираем все элементы у которых есть нестандартный аттрибут cell-red
// for(let cell of document.querySelectorAll('[cell-red]')) {
// 	let attr = cell.getAttribute('cell-red'); // здесь значение аттрибута
// 	cell.style.background = attr; // присваиваем в css (цвет фона) значение нашего аттрибута (там указан цвет)
// }



// // задаём фон с учётом подготовленного CSS
// let flSkip = false;
// for(let cell of document.querySelectorAll('[data-cell-red]')) {
// 	if (!flSkip) // аттрибут будет меняться через 1
// 		cell.setAttribute('data-cell-red', 'lightRed'); // меняем  значение аттрибута
// 		flSkip = !flSkip; // на кждой итерации будет меняться true/false/true/false
// }



// // задаём фон с учётом подготовленного CSS
// let flSkip = false;
// for(let cell of document.querySelectorAll('[data-cell-red]')) {
// 	if (!flSkip) // аттрибут будет меняться через 1
// 		cell.setAttribute('data-cell-red', 'lightRed'); // меняем  значение аттрибута
// 		flSkip = !flSkip; // на кждой итерации будет меняться true/false/true/false
// }


// задаём фон с учётом подготовленного CSS - при помощи коллекции dataset
let flSkip = false;
for(let cell of document.querySelectorAll('[data-cell-red]')) {
	if (!flSkip) // аттрибут будет меняться через 1
	
		// строчку поменяли
		cell.dataset.cellRed = 'lightRed'; // меняем  значение аттрибута
		// cellRed = data-cell-red - JS меняет автоматом!

		flSkip = !flSkip; // на кждой итерации будет меняться true/false/true/false
}