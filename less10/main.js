// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
//     При натисканні на кнопку зчитати данні з полів,
//     та вивести об'єкт в документ. Іншими словами : ' +
// 'заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let firstForm = document.forms.firstForm;
firstForm.onsubmit = function (ev) {
    ev.preventDefault();
    let usersinputBlock = document.createElement('div');
    usersinputBlock.innerText = `Username: ${this.inputName.value} Userssurname: ${this.inputsurName.value}; Age: ${this.inputAge.value}`
    firstForm.appendChild(usersinputBlock)

};

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
//     який при кожному перезавантажені сторінки буде додавати до неї +1

let numblock = document.getElementsByClassName('numberBlock')[0];
let savenumb = JSON.parse(localStorage.getItem('numbr')) || parseFloat(numblock.outerText);
savenumb += 1;
numblock.innerText = savenumb;
localStorage.setItem('numbr', JSON.stringify(savenumb));

// ------------------------------------------------ тут я шось перемудрував :)----------------------------
// document.onreadystatechange = function () {
//     if (document.readyState === 'interactive') {
//         let savenumb = JSON.parse(localStorage.getItem('numbr')) || parseFloat(numblock.outerText);
//         savenumb += 1;
//         numblock.innerText = savenumb;
//         localStorage.setItem('numbr', JSON.stringify(savenumb));
//     }
//     ;
// };
// ------------------------------------------------ тут я шось перемудрував ----------------------------


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


let newarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
console.log(newarr);

let listblock = document.getElementsByClassName('list')[0];
let step = JSON.parse(localStorage.getItem('stepnumber')) || 0;
console.log(step)

let actualnumber = step*10;

let stepArr = newarr.splice(actualnumber, 10);
stepArr.forEach(value =>  {
    let listelement = document.createElement('h3')
        listelement.innerText = value;
        listblock.appendChild(listelement)
});
// -------------------------------------------------------| not actual |------------------------------------------------------------
// if (actualnumber < newarr.length && actualnumber >= 0) {
//     for (i = actualnumber; i < actualnumber + 10; i++) {
//         let listelement = document.createElement('h3')
//         listelement.innerText = newarr[i];
//         listblock.appendChild(listelement)
//     };
// }
// -------------------------------------------------------| not actual |------------------------------------------------------------

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

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи
// JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let shutYourmouthe = document.getElementById('text');
let shutButton = document.getElementById('shutbutton');
shutButton.onclick =  () => {shutYourmouthe.classList.add('shut')};


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити
// вік чи меньше він ніж 18, та повідомити про це користувача

let secInp = document.forms.secondForm;

secInp.onsubmit = function (e) {
    e.preventDefault();
    this.inputAge.value<18 ? alert('друже тобі краще сюди: https://www.kiddle.co/') : alert('Ok')
};

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і
//     rowNumформується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)




let rowgapblock = document.getElementsByClassName('rowgapblock')[0];
rowgapblock.style.display = 'flex';
rowgapblock.style.flexDirection = 'column';
rowgapblock.style.rowGap = '10px';

let threeForm = document.forms.threeForm;
threeForm.onsubmit = function (e) {
    e.preventDefault();

    let gapNumber = parseFloat(this.gapNumber.value);
    let rowNumber = parseFloat(this.rowNumber.value);
    for (let i = 0; i < rowNumber; i++) {
        let rowBlock = document.createElement('div');
        rowBlock.classList.add('rowBlock');
        rowBlock.style.display = 'flex';
        rowgapblock.appendChild(rowBlock);

        for (let a = 0; a < gapNumber; a++) {
            let singleEll = document.createElement('div');
            singleEll.classList.add('singleEll');
            singleEll.innerText = this.textonTablet.value;
            singleEll.style.height = '20px';
            singleEll.style.width = '50px';
            singleEll.style.background = 'cornflowerblue'
            rowBlock.appendChild(singleEll);
        };
    };
};

// *** (подібне було вище, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження,
//     які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд -
// нічого не відбувається

// Завдання виконане в документі sessions.html





