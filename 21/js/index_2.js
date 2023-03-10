'use strict';
// заставляет код JavaScript работать в строгом режиме, 
// что в основном означает, что все должно быть определено перед использованием. 
// Основная причина использования строгого режима заключается в том, 
// чтобы избежать случайного глобального использования неопределенных методов.


// функция предзагрузки изображения
function LoadingImages() {
	// коллекцияиз изображений, которые надо загрузить
	// Set - коллекция состоящая из уникальных значений 
	//(т.е при двух одмнаковых второй не добавится)
	this.urls = new Set(); 
	// в этот массив будут добавлятся все загруженные изображения
	this.listImages = [];

	// метод добавляет коллекцию urls - текущий url
	this.addItem = function(url) {
		this.urls.add(url);
	}

	// метод возвращает общее количество изображений которые нужно загрузить
	this.getTotalItems = function() {
		return this.urls.size;
	}


	// метод для создания изображения или загрузки
	this.load = function(callback_progress) { // callback_progress - обработчик в качестве аргумента
		for(let url of this.urls) { // перебираем коллекцию urls
			let img = new Image(); // создаём объекты изобрадения
			this.listImages.push(img); // В массив listImages, добавляем созданное изображение

			img.onload = callback_progress; // обработчик для события onload
			img.src = url; // устанавливаем свойство src - на то изображение которое нужно загрузить
		}
	}
}