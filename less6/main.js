// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arrString = ['hello world', 'lorem ipsum', 'javascript is cool'];
const stringCount = (string) => console.log(string.length);

for (let i = 0; i < arrString.length; i++) {
    stringCount(arrString[i]);
    }

// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
const toUpperstr = (string) => console.log(string.toUpperCase());
for (let i = 0; i < arrString.length; i++) {
    toUpperstr(arrString[i]);
};
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let firststr = 'HELLO WORLD';
let secoundstr = 'LOREM IPSUM';
let thirdstr = 'JAVASCRIPT IS COOL'
console.log(firststr.toLowerCase());
console.log(secoundstr.toLowerCase());
console.log(thirdstr.toLowerCase());

// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtstr = ' dirty string   ';
console.log(dirtstr.trim());

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
const stringToarray = (str) => str.split(' ');
console.log(stringToarray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
//     за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0]
let strnums = numbers.map(value => String(value));
console.log(strnums);

// створити функцію sortNums(direction), яка прймає масив чисел,
//     та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
const sortNums = (numbers, direction) => {
    switch (direction) {
        case 'descending':
            nums.sort((numone, numtwo) => numtwo-numone);
            break;
        case 'ascending':
            nums.sort((numone, numtwo) => numone-numtwo);
            break;
        default:
            console.log('Вася, ти можеш ввести тільки "descending" чи "ascending"')
    }
    return numbers
};
console.log(sortNums(nums, 'descending'))


