// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arrString = ['hello world', 'lorem ipsum', 'javascript is cool'];
let stringCount = (string) => console.log(string.length);

for (let i = 0; i < arrString.length; i++) {
    stringCount(arrString[i]);
    }

// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
let toUpperstr = (string) => console.log(string.toUpperCase());
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
let dirtstr