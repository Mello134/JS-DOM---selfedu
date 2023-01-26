// // оброаботчик события, для события mouseup
// // Добавляем обработчик для события отпускание мышки
// document.addEventListener('mouseup', ()=>console.log('mouseup - отпускание мышки'));

// // Добавляем обработчик для события нажатие мышки
// document.addEventListener('mousedown', ()=>console.log('mousedown - нажатие мышки'));

// //Добавляем собработчик для события click (нажать + отпустить кнопку мышы)
// document.addEventListener('click', ()=>console.log('click = нажать+отсустить кн.мышки'));

// // Лобавляем обработчик для события dbclick = click x 2
// document.addEventListener('dblclick', ()=>console.log('dblclick - двойной клик'));



// // К событиям мыши добавлем обработчики события которые показывают, какая кнопка мыши была нажата
// document.addEventListener('mouseup', 
// 	(event)=>console.log('mouseup - отпускание мышки кнопка номер: ' + event.which));

// document.addEventListener('mousedown', 
// 	(event)=>console.log('mouseup - нажатие мышки кнопка номер: ' + event.which));




// Отслеживанеи нажатия кнопки shift, ctrl  - для события click
// добавляем обработчик события для события click
document.addEventListener('click', // событие
	(event) => { // обработчик событие, по сути кратко function(event) {...}
		if(event.shiftKey && event.ctrlKey) { //если зажат shift+ctrl
			console.log('CTRL+SHIFT+click');
		}
	})


// // выводим координаты мыши в консоль, при перемещении
// // добавляем обработчик для события mousemove
// // обработчик будет выводить координаты относительно клиентского окна (окна браузера)
// document.addEventListener('mousemove',
// 	(event)=>console.log('mousemove=перемещение мыши, координаты относительно окна ' + event.clientX + ', ' + event.clientY));



// // обработчик для события mouseover (наведение мыши на элемент)
// document.addEventListener('mouseover', (event)=>{

// 	// prop строка, которая будет отображать имя тэга terget
// 	let prop = 'target = ' + event.target.tagName;

// 	if(event.relatedTarget != null)
// 		prop += ', relatedTarget = ' + event.relatedTarget.tagName;

// 	console.log('mouseover: ' + prop);
// });

// // relatetTarget - объект, откуда пришли
// // target - объект, куда пришли





// События при наведении курсора на какойто элемент
// получаем div class='parent'
let div = document.querySelector('div.parent');
//добавляем обработчик события для объекта div, для события mouseenter
div.addEventListener('mouseenter', showInfo);

// сам обработчик события (функция)
function showInfo(event) {
     let prop = "target = "+event.target.tagName;
     if(event.relatedTarget != null)
          prop+=", relatedTarget = "+event.relatedTarget.tagName;
 
     let name = event.currentTarget.tagName;
     console.log(name+" mouseover: "+prop);
}
