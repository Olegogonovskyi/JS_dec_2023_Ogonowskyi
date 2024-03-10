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
};
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


let newarr = () => {
    for (let i = 0; i < 101; i++) {
         let arr = [];
        arr.push(i);
    };
    return arr
};
console.log(newarr())`