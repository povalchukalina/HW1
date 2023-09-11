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