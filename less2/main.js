// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let randomarr = [128, 'iii8', false, true, {name: 'vasya'}, 31, 44, 'yhe', 0, 56778 ];
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
let x = +prompt('введи число');
if (x != 0) {
    console.log('вірно')
} else {
    console.log('Невірно')
}