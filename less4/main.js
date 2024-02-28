let Pi = 3.141592654;

// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squander(a, b) {
    return a * b;
}

console.log(squander(30, 5));

// створити функцію яка обчислює та повертає площу кола з радіусом r
function round(r) {
    return Pi * Math.pow(r, 2);
}

console.log(round(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder(r, h) {
    return 2 * Pi * r * h
}

console.log(cylinder(10, 5))

// - створити функцію яка приймає масив та виводить кожен його елемент

let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];

function arraysPost(arr) {
    for (let arrElement of arr) {
        console.log(arrElement)
    }
};
console.log(arraysPost(coursesTitleArray));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function articlPost(articletxt) {
    document.write(`<h1>${articletxt}</h1>`)

};
articlPost('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, recusandae?');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function liPosrelement(litext) {
    document.write(`
        <ul>
        <li>${litext}</li>
        <li>${litext}</li>
        <li>${litext}</li>       
        
    </ul>`)
};
liPosrelement(`Lorem ipsum dolor.`);

// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function liWriter(textLielement, x) {
    document.write(`<ul>`);
    for (let i = 0; i < x; i++) {
        document.write(`<li>${textLielement}</li>`)
    };
    document.write(`</ul>`);
};
liWriter(' a choice between two pills: red and blue', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function arrwriter(arr) {
    document.write(`<ul>`);
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    };
    document.write(`</ul>`);
};
arrwriter(coursesTitleArray);
// або, якщо я неправильно зрозумів)

function arrwriter2 (...x) {
    console.log(x);
}
console.log(arrwriter2(356363536, 'djhd', false, true, NaN));

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];

function userblockPrinter(usersArr) {
    for (const usersArrElement of usersArr) {
        document.write(`<div class="userblock">`);
        for (let usersArrElementKey in usersArrElement) {
            document.write(`<h3> ${usersArrElementKey}: ${usersArrElement[usersArrElementKey]}</h3>`);
            };
        document.write(`</div>`);

    };
};

userblockPrinter(users);
// - створити функцію яка повертає найменьше число з масиву
let newArr = [];
newArr[0] = Math.floor(Math.random()*1000);
newArr[1] = Math.floor(Math.random()*1000);
newArr[2] = Math.floor(Math.random()*1000);
newArr[3] = Math.floor(Math.random()*1000);
newArr[4] = Math.floor(Math.random()*1000);
newArr[5] = Math.floor(Math.random()*1000);
newArr[6] = Math.floor(Math.random()*1000);
newArr[7] = Math.floor(Math.random()*1000);
newArr[8] = Math.floor(Math.random()*1000);
newArr[9] = Math.floor(Math.random()*1000);
newArr[4] = Math.floor(Math.random()*1000);
newArr[5] = Math.floor(Math.random()*1000);
newArr[6] = Math.floor(Math.random()*1000);
newArr[7] = Math.floor(Math.random()*1000);
newArr[8] = Math.floor(Math.random()*1000);
newArr[9] = Math.floor(Math.random()*1000);
// let arrnums = [104, 5661, 1881, -909, 82919, 0, -100, 19191, -99];


function numberarrFinder(arrofnumbers) {
    let littlenumber = arrofnumbers[0];
    for (let i = 0; i < arrofnumbers.length; i++) {
        if (littlenumber >= arrofnumbers[i]) {
            littlenumber = arrofnumbers[i];
        };
    };
    return littlenumber;

};
console.log(newArr)
console.log(numberarrFinder(newArr));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function addNums (arrofnumbers) {
    let commonsum = 0;
    for (let i = 0; i < arrofnumbers.length; i++) {
        commonsum=commonsum+arrofnumbers[i];
    };
    return commonsum
}
console.log(newArr)
console.log(addNums(newArr));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap (arr,index1,index2) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        let arrElement = arr[i];
        if (i===index1) {
            newarr[index2] = arrElement;
            newarr[index1] = arr[index2]
        } else if (i===index2) {
        } else {
            newarr[i] = arrElement
        };
    };
    return newarr
}

// признаюсь чесно, ото нижче код то мій друг написав
function swap2 (arr,index1,index2) {
    let newarr = arr;
    for (let i = 0; i < arr.length; i++) {
        let arrElement = arr[i];
        if (i===index1) {
            newarr[index1] = arr[index2];
            newarr[index2] = arrElement;
        }
    }
    return newarr
}

console.log(newArr)
console.log(swap(newArr, 9, 5));
console.log(swap2(newArr, 9, 5));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let actualexchange = [{currency:'USD',value:40},{currency:'EUR',value:42}];
function exchange (sumUAH,currencyValues,exchangeCurrency) {
    let sumres
    for (let i = 0; i < currencyValues.length; i++) {
        let currencyValue = currencyValues[i];
        if (currencyValue.currency===exchangeCurrency) {
            sumres=sumUAH/currencyValue.value;
        };
    };

return sumres
};
console.log(exchange(10000, actualexchange,'EUR'))


