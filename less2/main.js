// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let randomarr = [128, 'iii8', false, true, {name: 'vasya'}, 31, 44, 'yhe', 0, 56778];
console.log(typeof randomarr[0], randomarr[0]);
console.log(typeof randomarr[1], randomarr[1]);
console.log(typeof randomarr[2], randomarr[2]);
console.log(typeof randomarr[3], randomarr[3]);
console.log(typeof randomarr[4], randomarr[4]);
console.log(typeof randomarr[5], randomarr[5]);
console.log(typeof randomarr[6], randomarr[6]);
console.log(typeof randomarr[7], randomarr[7]);
console.log(typeof randomarr[8], randomarr[8]);
console.log(typeof randomarr[9], randomarr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let bookOne = {
    title: "Aquinas's Sources",
    pageCount: 480,
    genre: 'Timothy L. Smith'
};

let bookTwo = {
    title: "The Winning Side",
    pageCount: 1480,
    genre: 'Charles E. Rice'
};

let bookThree = {
    title: "The Age of Nightmare",
    pageCount: 240,
    genre: ' Jeremy Black'
};

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//     Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let bookFour = {
    title: "Electras",
    pageCount: 172,
    genre: 'Aeschylus, Sophocles, and Euripides',
    authors: [{name: 'Michael Davis', age: 45}, {name: 'Timothy L. Smith', age: 26}]
};

let bookFive = {
    title: "That Which Is Just in the Church: An Introduction to Canon Law",
    pageCount: 185,
    genre: 'Consonant with its commitment to publish',
    authors: [{name: 'Carlos José Errázuriz', age: 33}, {name: 'Saverio Gaeta', age: 56}]
};

let bookSix = {
    title: "Who Believes Is Not Alone",
    pageCount: 274,
    genre: 'My Life Beside Benedict XVI',
    authors: [{name: 'Georg Gänswein', age: 38}, {name: 'Anne Drury Hall', age: 66}]
};

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. ' +
// 'Вивести в консоль пароль кожного користувача

let usersarray = [
    {name: 'Laurence Fishburne ', username: 'Morpheus', password: 'Morpheus1999'},
    {name: 'Julian Arahanga', username: 'Apoc', password: 'Apoc1999'},
    {name: 'Paul Goddard', username: 'Agent Brown', password: 'AgentBrown1999'},
    {name: 'Robert Taylor', username: 'Agents Jones', password: 'AgentsJones1999'},
    {name: 'Hugo Weaving', username: 'Agent Smith', password: 'AgentSmith1999'},
    {name: 'Marc Gray', username: 'Cypher', password: 'Cypher1999'},
    {name: 'Anthony Ray Parker', username: 'Dozer', password: 'Dozer1999'},
    {name: 'Keanu Reeves', username: 'Neo', password: 'Neo1999'},
    {name: 'Gloria Foster', username: 'Oracle', password: 'Oracle1999'},
    {name: 'Carrie-Anne Moss', username: 'Trinity', password: 'Trinity1999'}
];
console.log(usersarray[0].password);
console.log(usersarray[1].password);
console.log(usersarray[2].password);
console.log(usersarray[3].password);
console.log(usersarray[4].password);
console.log(usersarray[5].password);
console.log(usersarray[6].password);
console.log(usersarray[7].password);
console.log(usersarray[8].password);
console.log(usersarray[9].password);

// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = 1;
if (x != 0) {
    document.write(`<h1> x = ${x} Вірно</h1>`);
} else {

    document.write(`<h1>x = ${x} Невірно</h1>`)
}
;
x = 0;
if (x != 0) {
    document.write(`<h1> x = ${x} Вірно</h1>`);
} else {

    document.write(`<h1>x = ${x} Невірно</h1>`)
}
;
x = -3;
if (x != 0) {
    document.write(`<h1> x = ${x} Вірно</h1>`);
} else {

    document.write(`<h1>x = ${x} Невірно</h1>`)
}
;

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = Math.ceil(Math.random() * 59);
if (time > 0 && time <= 15) {
    document.write(`<h1>Time = ${time} перша чверть</h1>`);
} else if (time > 15 && time <= 30) {
    document.write(`<h1>Time = ${time} друга чверть</h1>`);
} else if (time > 30 && time <= 45) {
    document.write(`<h1>Time = ${time} третя чверть</h1>`);
} else {
    document.write(`<h1>Time = ${time} четверта чверть</h1>`);
}
;

// - У змінній day дано якесь число від 1 до 31. По
// трібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = Math.ceil(Math.random() * 31);
if (day > 0 && day <= 10) {
    document.write(`<h2>Day = ${day} перша декада </h2>`);
} else if (day > 11 && day <= 20) {
    document.write(`<h2>Day = ${day} Друга декада </h2>`);
} else {
    document.write(`<h2>Day = ${day} Третя декада </h2>`);
}
;
// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
//     що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
let WhatDay = prompt('Номер дня тижня');
switch (WhatDay) {
    case '1':
        document.write(`<h3>Day = ${WhatDay} Навчатись </h3>`);

        break;
    case '2':
        document.write(`<h3>Day = ${WhatDay} Працювати </h3>`);

        break;
    case '3':
        document.write(`<h3>Day = ${WhatDay} Робити вигляд що працюю </h3>`);

        break;
    case '4':
        document.write(`<h3>Day = ${WhatDay} Напитись </h3>`);

        break;
    case '5':
        document.write(`<h3>Day = ${WhatDay} Будуняка </h3>`);

        break;
    case '6':
        document.write(`<h3>Day = ${WhatDay} Вихідний </h3>`);

        break;
    case '7':
        document.write(`<h3>Day = ${WhatDay} Блін, завтра на роботу </h3>`);

        break;
    default:
        document.write(`<h3>Day = ${WhatDay} То в наші плани не входило </h3>`);

}
;
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let numone = Math.ceil(Math.random() * 100);
let numtwo = Math.ceil(Math.random() * 100);

if (numone > numtwo) {
    document.write(`<h3>numone (${numone}) is bigger then numtwo (${numtwo})</h3>`);
} else if (numone < numtwo) {
    document.write(`<h3>numtwo (${numtwo}) is bigger then numone (${numone})</h3>`);
} else {
    document.write(`<h3>numone (${numone}) is single to numtwo (${numtwo})</h3>`);
}
;

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let xx = [1, 2, 3, 4,79];
xx = xx || 'default'
document.write(`<h3>${typeof xx} ${xx}</h3>`);
xx = 56777;
xx= xx || 'default'
document.write(`<h3>${typeof xx} ${xx}</h3>`);
xx = undefined;
xx= xx || 'default'
document.write(`<h3>${typeof xx} ${xx}</h3>`);
xx=null;
xx= xx || 'default'
document.write(`<h3>${typeof xx} ${xx}</h3>`);
xx=false;
xx= xx || 'default'
document.write(`<h3>${typeof xx} ${xx}</h3>`);