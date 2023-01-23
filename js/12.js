// // функция вывода имени элемента, при нажатии на него
// function showTag(event) {
// 	console.log(event.currentTarget.tagName);
// }
// // эта функция будет всегда показывать внешний элемент в котором прописана функция oncklick - даже если тыкать на дочерние



// // функция показывает от какого элемента началось собитие
// function showTag(event) {
// 	console.log(event.currentTarget.tagName +
// 		' от элемента ' + event.target.tagName);
// }
// // например
// // SPAN от элемента SPAN
// // P от элемента SPAN
// // DIV от элемента SPAN



// // Функция покажет имя элемента, конкретно на который был клик
// // Прерывание всплытия
// function showTag(event) {
// 	console.log(event.currentTarget.tagName +
// 		' от элемента ' + event.target.tagName);
// 	event.stopPropagation();
// }
// // SPAN от элемента SPAN
// // P от элемента P
// // DIV от элемента DIV



// отслеживания фазы события, его погружения и всплытия
// добавляем обработчики событий (first..third - это id элементов div/p/span)
// здесь третий параметр true означенет что обработчик идёт на погружение (а не на всплытие)
// elem.addEventListener('событие', обработчик события, на погружение)
first.addEventListener('click', showTag, true);
second.addEventListener('click', showTag, true);
third.addEventListener('click', showTag, true);


// функция обработчик событий
// будет выводить номер фазы событий и имена элементов
function showTag(event) {
	console.log("Фаза = " + event.eventPhase + ': ' +  // фаза события!
		event.currentTarget.tagName + 
		' от ' + event.target.tagName);
}
// Фаза = 1: DIV от SPAN
// Фаза = 1: P от SPAN
// Фаза = 2: SPAN от SPAN
// Фаза = 2: SPAN от SPAN
// Фаза = 3: P от SPAN
// Фаза = 3: DIV от SPAN


// удаление обработчика события на погружение
first.removeEventListener('click', showTag, true);
