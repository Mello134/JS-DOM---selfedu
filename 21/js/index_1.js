// Здесь список необходимых загрузок, работа счётчика, изменение стиля полосы загрузки, показ изображений
//
let loader = null; // изначально равно null
// на событие onload - обработчик ready
// для проверки что документ полностью загружен со всемми внешними ссылками
document.body.onload = ready;

// обработчик, сработает только после полной загрузки документа (вместе с внешними документами)
function ready(event) {
	loader = new LoadingImages(); // объект отвечающий за предзагрузку изображений
	// добавляем все url изображений, которые хотим предзагрузить
	// прежде чем будем их использовать
	loader.addItem('images/1.jpg');
	loader.addItem('images/2.jpg');
	loader.addItem('images/3.jpg');
	loader.addItem('images/4.jpg');
	loader.addItem('images/5.jpg');
	loader.addItem('images/5.jpg'); // для нагладности Set() - то есть второе изображение не загрузится


	// Вспомогательные эелементы
	// переменная которая будет заполнять полосу синим
	let progress = document.getElementById('load_status');
	// общее количество изображений которые нужно загрузить
	let nTotal = loader.getTotalItems();
	// количество текущех загруженных изображений
	let nCount = 0;

	// вызываем метод load - объекта LoadingImages (из index_2.js)
	// в качестве callback_progress - анонимная функция ниже
	loader.load(function() {
		// увеличиваем счётчик загруженных изображений
		nCount++;
		// изменяем ширину полосы загрузки
		// 1 изображение = 20%, 5 = 100%
		progress.style.width = nTotal / nCount * 100 + '%';
		console.log(nCount);

		// проверка если все изображения загружены
		if(nCount == nTotal) { // если все изображения загружены
			finishLoading(); // вызов функции которая отобразит изображения
		}
	});
}

// функция которая отобразит изобраения
function finishLoading() {
	if(loader == null) { // если изображения не загружены
		return; // ничего не делаем, прерывес функцию
	}

	
	for(let img of loader.listImages) { // перебираем все изображения
		document.body.append(img); // добавляем изображение в html в body
	}
}