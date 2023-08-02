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