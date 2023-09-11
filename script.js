//1
/*let a=20;
alert(a); */

//2
/*alert(`Год выпуска первого IPhone`);
let b=2007;
alert(b);*/

//3
/*let name=('Brendon Eich');
alert(name);*/

//4
/*let a = 10;
let b = 2;
alert(`Сумма ${a + b}`);
alert(`Разность ${a - b}`);
alert(`Произведение ${a * b}`);
alert(`Частное ${a / b}`);*/


//4.1
/*let a = 10;
let b = 2;
let sum = a + b;
alert(sum)
let difference = a - b;
alert(difference);
let multiplication = a * b;
alert(multiplication);
let division = a / b;
alert(division);*/

//5
/*let a = 2;
let result = a**5;
alert(result);*/

//6
/*let a = 9;
let b = 2;
let result = 9 % 2;
alert(result);*/

//7
/*let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);*/

//8
/*let age = prompt('Сколько вам лет?');
alert(age);*/

//9.0
/*let user {
    name: 'Alina',
    age: '20',
    isAdmin: true,
}
//9.1
let user["city of residence"] = 'Moscow';
//9.2
let age = 21;
//9.3
delete user["city of residence"];
//9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
console.log([info]);
alert(user);*/

//10
/*let userName = prompt('Введите Ваше имя');
alert(`Привет, ${userName} !`);*/





//2.3 Условное ветвление

//Задание 1
/*
let password = 'пароль';
let a = prompt ('Введите пароль');
if (a === 'пароль') {
    console.log ('Пароль введен верно');
} else {
    console.log ('Пароль введен неверно');
} */

//Задание 2

/*let c = Number (prompt('Введите число'));
if (c > 0 && c < 10) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}*/

//Задание 3

/*let d = Number (prompt('Введите число')) ;
let e = Number (prompt('Введите число')) ;
if (d > 100 || e > 100) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}*/

//Задание 4
/*let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert('a' + 'b');*/

//Задание 5
/*let monthNumber = Number (prompt('Write number of month'));
switch (monthNumber) {
    case 12 :
    case 1 :
    case 2 :
        console.log ('Winter');
        break;
    case 3 :
    case 4 :
    case 5 :
        console.log ('Spring');
        break;
    case 6 :
    case 7 :
    case 8 :
        console.log ('Summer');
        break;
    case 9 :
    case 10 :
    case 11 :
        console.log ('Autumn');
        break;
    default:
        console.log ('Incorrect')
        break;
}*/
//Задание 6
//Задание 7
//Задание 8 
//Задание 9



//2.4 Циклы

//Задание 1

/*
let a = 0;
while (a < 2 ) {
    console.log ('Hello');
    a++;
}
*/
//Задание 2
/*
let b = 1;
do {
    console.log(b);
    b++;
} while (b < 6);
*/

//Задание 3
/*
let b = 7;
do {
    console.log(b);
    b++;
} while (b < 23);
*/
//Задание 4
/*
const object = { Коля: 200, Вася: 300, Петя: 400 };

for (const name in object) {
    console.log(`${name}: - зарплата ${object[name]} долларов`);
}
*/
//Задание 5
/*
for (let n = 1000, num = 0; n > 50; num++) {
    n /= 2;
        console.log( n );
    }
*/
//Задание 6 
/*
let firstFriday = 1;

for (let i = firstFriday; i <= 31; i+= 7) {
    console.log(`Сегодня пятница, ${i}  -е число. Необходимо подготовить отчет.`)
}
*/



//2.5 Функции 

//ЗАДАНИЕ №1

/*
function min (a, b) {
    if (a < b) {
    return a;
    } else {
        return b;
    }
}
*/
//ЗАДАНИЕ №2
/*
function evenOrOdd(n) {
    if(n % 2 === 0)
    {
        return'Even';
    } else {
        return'Odd';
    }
};
*/
//ЗАДАНИЕ №3.1
/*
function func(n) {
	console.log(n ** 2);
}
*/
//ЗАДАНИЕ №3.2
/*
function func(n) {
	return n ** 2;
}
*/
//ЗАДАНИЕ №4
/*
function age () {
    let userAnswer = prompt ('Сколько Вам лет?')
        if (userAnswer >= 13) {
            console.log ('Welcome!') ;
        }
        if (userAnswer <= 12) {
            console.log ('Hi, my friend!') ;
        } else {
            console.log ('Incorrect value') ;
        }
}
*/
//ЗАДАНИЕ №5
/*
function number () {
    let a = Number(prompt(''));
    let b = Number(prompt(''));
    if (isNaN(a, b)) {
        return a * b;
    } else {
        return "Одно или оба значения не являются числом."
    }
}    
*/
//ЗАДАНИЕ №6

/*
    function cubeNumber() {
        const userInput = prompt("Введите число");
        const number = Number(userInput);

        if (isNaN(number)) {
        return "Переданный параметр не является числом";
        }
        const cube = Math.pow(number, 3);
        return `${number} в кубе равняется ${cube}`;
}

for (let i = 0; i <= 10; i++) {
        console.log(cubeNumber(i));
}
*/
//ЗАДАНИЕ №7
/*не разобралась*/




//2.6 Массивы
//ЗАДАНИЕ №1
/*
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}
*/
//ЗАДАНИЕ №2
/*
const numbs = [1, 5, 4, 10, 0, 3];
const i = numbs.indexOf(4);
console.log(i);
*/
//ЗАДАНИЕ №3
/*
let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join(' ');
console.log(numbers);
*/
//ЗАДАНИЕ №4
/*
let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let k = 0; k < 3; k++) {
        arr[i].push(1);
    }
}
console.log(arr);
*/


//ЗАДАНИЕ №5
/*
const numb = [1, 1, 1];
numb [3] = 2;
numb [4] = 2;
numb [5] = 2;
console.log(numb);
*/
//ЗАДАНИЕ №6
/*
let numbs = [9, 8, 7, 'a', 6, 5];
numbs = numbs.sort();
console.log(numbs.pop());
console.log(numbs);
*/
//ЗАДАНИЕ №7
/*
let numbs = [9, 8, 7, 6, 5];
let userInput = Number(prompt('Угадай число'));

if (numbs.includes(userInput)) {
    alert('Угадал');
} else {
    alert('Не  угадал');
}
*/
//ЗАДАНИЕ №8
/*
const linea = 'abcdef';
const reverse = linea.split('').reverse().join('');
console.log(reverse);
*/
//ЗАДАНИЕ №9
/*
let numbs = [[1, 2, 3,],[4, 5, 6]];
let newNumbs = numbs.flat(Infinity);
console.log(newNumbs);
*/
//ЗАДАНИЕ №10
/*
let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length - 1; i++) {
    let sum = arr[i] + arr[i + 1];
    console.log(sum);
}
*/
//ЗАДАНИЕ №11
/*
const nums = [1, 2, 3, 4]

const squares = nums.map(function (num) {
  return num * num
})

console.log(squares)
*/
//ЗАДАНИЕ №12
/*
let words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
function getLengthWords(params) {
    
}
*/
//ЗАДАНИЕ №13
/*
var myArray = [-1, 0, 5, -10, 56];        //([-25, 25, 0, -1000, -2])
function filterPositive(array) {
    var negatives = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i]);
                }
    }
    return negatives;
}
console.log (filterPositive(myArray));
*/

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

let currentDate = new Date(); 
let fullDate = "Сегодня: " + currentDate.getDate() + 
" " + months[currentDate.getMonth()] + 
" " + currentDate.getFullYear() + 
", " + days[currentDate.getDay()];

let hour = currentDate.getHours(); 
let minute = currentDate.getMinutes(); 
let second = currentDate.getSeconds();

    if (minute < 10) {     
    minute = "0" + minute; 
}
    if (second < 10) { 
    second = "0" + second; 
}
console.log(fullDate +   hour + ":" + minute + ":" + second);
*/
//Задание №11
/*
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
*/