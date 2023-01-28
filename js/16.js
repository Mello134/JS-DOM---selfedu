// // получаем доступ к форме
// // ВАРИАНТ 1 - доступ к форме по индексу
// // let frm = document.forms[0];

// // ВАРИАНТ 2 - доступ к форме по имени (указыватся в html)
// let frm = document.forms.reg

// // вывод ифнормации о форме в консоль
// console.dir(frm)



// // получаем доступ к элементу формы
// // доступ к самой форме по имени (указыватся в html)
// let frm = document.forms.reg

// // получаем доступ к элементу по индексу
// // let user = frm.elements[0];
// // ИЛИ получаем доступ к элементу формы по имени
// let user = frm.elements.user

// // инфа в консоль
// console.dir(user)



// // короткая запись, для доступа к элемнту формы

// // Доступ к форме
// let frm = document.forms.reg

// // краткий доступ к элементам
// let user = frm[0]; // по индексу
// let sex = frm.sex; // по имени



// // доступ к fieldset
// // получсаем форму
// let frm = document.forms.reg;

// // полуаем доступ к элементам внутри fieldset
// let info = frm.info
// // элемент fieldset - 1
// console.dir(info.elements[0]);
// // эемент fieldset - 2
// console.dir(info.elements.about);



// // получение ссылки на форму из подформы
// // получсаем форму
// let frm = document.forms.reg;

// // полуаем доступ к  fieldset
// let info = frm.info

// // из fieldset обращаемся к самой форме
// console.dir(info.form);



// // получение значение input и textarea
// // получвем форму
// let frm = document.forms.reg;

// // получение ссылок на элементы
// let user = frm.user;
// let sex = frm.sex;
// let about = frm.about;

// // вывод значений элементов формы
// console.log(user.value, sex[0].checked, about.value);



// // получение значение selected
// // получвем форму
// let frm = document.forms.reg;
// // получение ссылки на элемент selected
// let city = frm.city;

// // получение значений
// console.dir(city.options); // HTMLOptionsCollection(3)
// console.log(city.value); // Москва
// console.log(city.selectedIndex); //0



// // меняем значение selected - то есть меняем флажок на чекбоксе
// // получвем форму
// let frm = document.forms.reg;
// // получение ссылки на элемент select
// let city = frm.city;

// // Изменяем значение флажка на Тверь
// city.value = 'Тверь'

// // получение значений
// console.log(city.value); // Тверь
// console.log(city.selectedIndex); // 2

// // ИЛИ Изменяем значение флажка на СПБ
// city.selectedIndex = 1;
// console.log(city.value); // Санкт-Петербург
// console.log(city.selectedIndex); // 1



// // выбираем несколько значений ottions в select
// // получвем форму
// let frm = document.forms.reg;
// // получение ссылки на элемент select
// let city = frm.city;

// // выбираем СПБ и ТВЕРЬ
// city.options[1].selected = true;
// city.options[2].selected = true;



// //Перебираем все элементы(option) списка select
// // получвем форму
// let frm = document.forms.reg;
// // получение ссылки на элемент select
// let city = frm.city;

// // выбираем СПБ и ТВЕРЬ
// city.options[1].selected = true;
// city.options[2].selected = true;


// // преобразовываем коллекцию options в массив
// // .fileter -> в массив добавляем только те элементы которые установлены в true
// let selected = Array.from(city.options).filter(option => option.selected)

// // перебор и вывод всех true options
// for (let c of selected) {
// 	console.log(c); // выводим элемент в консоль
// }




//Перебираем все элементы(option) списка select (вывод только значений без тегов)
// получвем форму
let frm = document.forms.reg;
// получение ссылки на элемент select
let city = frm.city;

// выбираем СПБ и ТВЕРЬ
city.options[1].selected = true;
city.options[2].selected = true;


// преобразовываем коллекцию options в массив
// .fileter -> в массив добавляем только те элементы которые установлены в true
// .map -> только значения без тегов
let selected = Array.from(city.options)
	.filter(option => option.selected)
	.map(option => option.value)

// перебор и вывод всех true options
for (let c of selected) {
	console.log(c); // выводим элемент в консоль
}



