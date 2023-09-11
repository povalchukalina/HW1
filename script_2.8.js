//2.8 Callback, setTimeout, setInterval

//Задание №1
/*
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
});
console.log(people);
*/



//Задание №2

/*
function isPositive(value) {
    if (value > 0) {
        return true;
    } else {
        return false
    }
}

function isMale(value) {
    if (value.gender === 'male') {
        return true;
    } else {
        return false;
    }
}
    function filter(arr, callback) {
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    const people = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

*/

//Задание №3
/*
let counter = 0;
const intervalId = setInterval(() => {
    console.log(new Date());
    counter += 3;
    if (counter >= 30) {
        clearInterval(intervalId);
        console.log('30 секунд прошло.');
    }
}, 3000);
*/
//Задание №4
/*
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log(`Привет, Глеб!`);
})
*/
//Задание №5
/*
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
	    if(cb) {
     	     cb(); 
    }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Нужно изменить код ниже:
function myCallback() {
    sayHi('Глеб')
}
delayForSecond(myCallback)
*/