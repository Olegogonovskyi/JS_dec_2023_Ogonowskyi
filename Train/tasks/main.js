// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
//     Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
//     Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
//     Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
//     Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу -
// Працююєте - Пообідали - Працюєте - Випили кави - Працюєте - Поїхали до дому - Повчились - Лягли спати.
//
//     Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції доїхати
// на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.
let myDay = ['Прокинулись', 'Поснідали', 'Зібрались', 'dhdhdh', 'eeyeyeye'];
let badDay = ['Затор', 'Забив']

// let dayPrint =  (arr, problem) => {
//
//     new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log(arr.shift());
//             if (problem.includes(arr.shift())) {
//                 reject('ну всьо день зіпсутий')
//             } else {
//                 console.log(arr)
//                 resolve(arr)
//             }
//
//         }, 1000)
//     })
//         .then(arr => {
//             return new Promise((resolve, reject) => {
//                 setTimeout(function () {
//                     console.log(arr.shift());
//                     if (problem.includes(arr.shift())) {
//                         reject('ну всьо день зіпсутий')
//                     } else {
//                         console.log(arr)
//                         resolve(arr);
//                     }
//                 }, 2000)
//             })
//
//         })
//         .then(arr => {
//              new Promise((resolve, reject) => {
//                 setTimeout(function () {
//                     console.log(arr.shift());
//                     if (problem.includes(arr.shift())) {
//                         reject('ну всьо день зіпсутий')
//                     } else {
//                         console.log(arr)
//                     };
//
//                 }, 3000)
//             })
//         })
//         .catch(reason => {
//             console.log(reason)
//         })
//
//
// }
// dayPrint(myDay, badDay);
let time = new Date();
new Promise((resolve, reject) => {
    setTimeout(function () {
        let timeinMilisec = time.getTime()
        daywork = 'Прокинулись'
        if (daywork === 'проспав') {
            reject('ну всьо день зіпсутий')
        } else {
            console.log(`${new Date(timeinMilisec)} - ${daywork}`)
            timeinMilisec += 10000;
            resolve(timeinMilisec);
        }

    }, 1000)
}).then(timeinMilisec => {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                daywork = 'проспав'
                if (daywork === 'проспав') {
                    reject('ну всьо день зіпсутий')
                } else {
                    console.log(`${new Date(timeinMilisec)} - ${daywork}`)
                    timeinMilisec += 10000
                    resolve(timeinMilisec)
                }
            }, 2000)
        })

    }).then(timeinMilisec => {
        new Promise((resolve, reject) => {
            setTimeout(function () {
                daywork = 'Зібрались'
                if (daywork === 'проспав') {
                    reject('ну всьо день зіпсутий')
                } else {
                    console.log(`${new Date(timeinMilisec)} - ${daywork}`)
                    timeinMilisec += 10000

                };

            }, 3000)
        })
    })
    .catch(reason => {
        console.log(reason)
    })

// Баночка варенья, [19-Apr-20 17:51]
// [Переслано от Витя Кмин]
// Маєш 2 масива з цифрами.
//     Любими.
//     Треба знайти чи перший масив має в собі
// квадрати іншого масиву. Порядок циферок не важливий.
//     І якщо це так, то вивести true, якщо ні, вивести false
// Наприклад
//     [1,2,3] [9,1,4] —> TRUE
//     [2,1,2] [1,1,4] —-> FALSE
//     [1,2,3,5] [25, 9, 1, 4, 4] ——> FALSE

let strOne = [2,1,3, 4];
let strTwo = [9,1,4, 16];

function bbr(arrone, arrtwo) {
    let resarr = [];
    arrone.length === arrtwo.length ? resarr.push(0) : resarr.push(1);
    for (const argument of arguments) {
        argument.sort((a, b) => a-b);
        }

    for (let i = 0; i < arrone.length; i++) {
        arrone[i]*arrone[i] === arrtwo[i] || arrtwo[i]*arrtwo[i] === arrone[i] ? resarr.push(0) :  resarr.push(1);

    }
    resarr.includes(1) ? resultoption = false : resultoption = true
    console.log(resultoption)

};

bbr(strOne, strTwo);
//
// Потрібно знайти чи одне слово складається з тих самих букв шо друге. Букви перевикорситосуватись не можуть.
//     Ніяких пробілів, цифер і так далі. Тільки букви малого регістру
//
// okten -> token ——> TRUE
// dima -> aimd —-—> TRUE
// test -> rest ——> FASLE
// ***

function wordpar(wordone, wordtwo) {
    let resoltarr = [];

    wordone.length === wordtwo.length ? resoltarr.push(0) : resoltarr.push(1);

    for (let i = 0; i < wordone.length; i++) {
        wordtwo.includes(wordone[i]) ? resoltarr.push(0) : resoltarr.push(1)
    }

    resoltarr.includes(1) ? resultoption = false : resultoption = true

    console.log(`${wordone} - ${wordtwo} ${resultoption}`)

}
wordpar('aimd', 'dima');


