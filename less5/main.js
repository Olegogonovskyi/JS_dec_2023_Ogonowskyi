// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squander = (a,b)=> a*b;
console.log(squander(20,5));
// - створити функцію яка обчислює та повертає площу кола з радіусом r

let round = (r) => Math.PI*Math.pow(r, 2);
console.log(round(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (r,h) => 2*Math.PI*r*h;
console.log(cylinder(10,5));

// - створити функцію яка приймає масив та виводить кожен його елемент
let coursesTitleArray = [
    'JavaScript Complex',
    'Java Complex',
    'Python Complex',
    'QA Complex',
    'Fullstack',
    'Frontend'
];
let arraysPost = (arr) => {for (let arrElement of arr) {
    console.log(arrElement)
};}

arraysPost(coursesTitleArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let articlPost = (articletxt) => document.write(`<h1>${articletxt}</h1>`);

articlPost(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, neque?`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let liPosrelement = (litext) => {
    document.write(`
        <ul>
        <li>${litext}</li>
        <li>${litext}</li>
        <li>${litext}</li>       
        
    </ul>`)
};
liPosrelement(`Lorem ipsum dolor.`);

// створити функцію яка створює ul з трьома елементами li.
//     Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим
// (тут використовувати цикл)

let liWriter = (textLielement, x) => {
    document.write(`<ul>`);
    for (let i = 0; i < x; i++) {
        document.write(`<li>${textLielement}</li>`)
    };
    document.write(`</ul>`);
    };
liWriter(`Lorem ipsum.`, 5);

// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список
 let arrwriter = (arr) => {
     document.write(`<ul>`);
     for (let arrElement of arr) {
         document.write(`<li>${arrElement}</li>`);
     };
     document.write(`</ul>`);
 };
 arrwriter(coursesTitleArray);
let arrwriter2 = (...x) => console.log(x);
arrwriter2('Neo', 2, 'pils', 'blue', true);

// створити функцію яка приймає масив
// об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.

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
let userblockPrinter = (usersArr) => {
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
let numberarrFinder = (arrofnumbers) => {
    let littlenumber = arrofnumbers[0];
    for (let i = 0; i < arrofnumbers.length; i++) {
        if (littlenumber >= arrofnumbers[i]) {
            littlenumber = arrofnumbers[i];
        };
    };
    return littlenumber;
};
let arrnums = [104, 5661, 1881, -909, 82919, 0, -100, 19191, -99];
console.log(arrnums);
console.log(numberarrFinder(arrnums));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення
// елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let addNums1 = (arrofnumbers) => {
    let commonsum = 0;
    for (let i = 0; i < arrofnumbers.length; i++) {
        commonsum=commonsum+arrofnumbers[i];
    };
    return commonsum
};
console.log(addNums1(arrnums));

// - створити функцію swap(arr,index1,index2).
//     Функція міняє місцями заняення у відаовідних індексах
let swap = (arr,index1,index2) => {
    const num = arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=num;
    return arr
}

console.log(swap(arrnums, 2, 1));

// Написати функцію обміну валюти exchange
// (sumUAH,currencyValues,exchangeCurrency)
let actualexchange = [{currency:'USD',value:40},{currency:'EUR',value:42}];
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let sumres
    for (let i = 0; i < currencyValues.length; i++) {
        let currencyValue = currencyValues[i];
        if (currencyValue.currency===exchangeCurrency) {
            sumres=sumUAH/currencyValue.value;
        };
    };
    return sumres
}
console.log(exchange(10000, actualexchange,'EUR'))