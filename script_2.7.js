//2.7 Встроенные объекты
//Задание №1
/*
const string = 'js';
console.log(string.toUpperCase());
*/
//Задание №2
/*
function searchStart(str, search) {
    
    str.forEach((product) => {
        if (product.toLowerCase().startsWith(search.toLowerCase())) {
            console.log(product);
        }
    });
    return str;
};
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');// ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []
*/
//Задание №3
/*
//1
console.log(Math.floor(32.58884))
//2
console.log(Math.ceil(32.58884));
//3
console.log(Math.round(32.58884));
*/
//Задание №4
/*
const numbers = [52, 53, 49, 77, 21, 32];

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log(`Наименьшее число: ${min}`);
console.log(`Наибольшее число: ${max}`);
*/
//Задание №5
/*
function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}
*/
//Задание №6
/*
function getRandomArrNumbers(num) {
    let array =[];
    let halfArray = Math.floor(num/2);
    for (let i = 0; i < halfArray.length; i++) {

array.push(Math.ceil(Math.random(num)*num));        
    }
    return array;
};
console.log(getRandomArrNumbers(7));
*/
//Задание №7
/*
function randomInt(min,max) {

    var min = +prompt( "Enter a number" );
    var max = +prompt( "Enter another number" );
    var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randNum;
    
}
    console.log(randomInt());
*/
//Задание №8
/*
let currentDate = new Date();
*/
//Задание №9
/*
let dateNow = new Date();
dateNow.setDate(dateNow.getDate() + 73);
console.log(dateNow);
*/
//Задание №10
/*
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];



    if (minute < 10) {     
    minute = "0" + minute; 
}
    if (second < 10) { 
    second = "0" + second; 
}
console.log(fullDate +   hour + ":" + minute + ":" + second);
*/
//Задание №11
function getWord() {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);

    alert(list);

    let UserAnswer1 = prompt('Чему равнялся первый элемент массива?');
    let UserAnswer2 = prompt('Чему равнялся последний элемент массива?');

    if (UserAnswer1 === list[0]) {
        if (UserAnswer2 === list[6]) {
            alert('Поздравляю, вы угадали оба элемента!');
        } else {
            alert('Вы были близки к победе!')
        }
    } else {
    if (UserAnswer2 === list[6]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы не угадали!');
    }
}
}
