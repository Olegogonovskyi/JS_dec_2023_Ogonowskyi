// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
//     При натисканні на кнопку зчитати данні з полів,
//     та вивести об'єкт в документ. Іншими словами : ' +
// 'заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let firstForm = document.forms.firstForm;
firstForm.onsubmit = function (ev) {
    ev.preventDefault();
    let usersinputBlock = document.createElement('div');
    usersinputBlock.innerText = `Username: ${this.inputName.value} Userssurname: ${this.inputsurName.value}; Age: ${this.inputAge.value}`
    document.body.appendChild(usersinputBlock)

};

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
//     який при кожному перезавантажені сторінки буде додавати до неї +1

let numblock = document.getElementsByClassName('numberBlock')[0];
document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        let savenumb = JSON.parse(localStorage.getItem('numbr')) || parseFloat(numblock.outerText);
        savenumb += 1;
        numblock.innerText = savenumb;
        localStorage.setItem('numbr', JSON.stringify(savenumb));
    }
    ;
};
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
//     в масив sessions зберігається інформація про дату та час відвідування сторінки.
//     Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати
// всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати
// дом структуру під кожну сессію


let sesionLast = `${new Date()}`

let dateSesions = JSON.parse(localStorage.getItem('dateSesions')) || [];
dateSesions.push(sesionLast);
localStorage.setItem('dateSesions', JSON.stringify(dateSesions));


// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


// let newarr = () => {
//     let arr = [];
//     for (let i = 0; i < 100; i++) {
//         arr.push(i+1);
//     };
//     return arr
// };
let newarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
console.log(newarr);

let listblock = document.getElementsByClassName('list')[0];
let step = JSON.parse(localStorage.getItem('stepnumber')) || 0;
console.log(step)

let actualnumber = step*10;
if (actualnumber < newarr.length && actualnumber >= 0) {
    for (i = actualnumber; i < actualnumber + 10; i++) {
        let listelement = document.createElement('h3')
        listelement.innerText = newarr[i];
        listblock.appendChild(listelement)
    };
}


let nextButton = document.getElementsByClassName('nextbutton')[0];
let previosbutton = document.getElementsByClassName('previosbutton')[0];

nextButton.onclick = function () {
    location.reload();
    step += 1;
    step <= (newarr.length/10) ? localStorage.setItem('stepnumber', JSON.stringify(step)) : step = newarr.length/10;
    localStorage.setItem('stepnumber', JSON.stringify(step))
    };

previosbutton.onclick = function () {
    location.reload();
    step -= 1;
    step>=0 ? localStorage.setItem('stepnumber', JSON.stringify(step)) : step = 0;

   };






