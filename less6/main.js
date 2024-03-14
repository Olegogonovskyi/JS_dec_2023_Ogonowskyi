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

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
const sortbyMonth = (arr) => {
    return arr.sort((courseone, coursetwo) => coursetwo.monthDuration-courseone.monthDuration );

}
console.log(sortbyMonth(coursesAndDurationArray));

// відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

const filterbyMounth = (arr) => {
    return arr.filter(({monthDuration}) => monthDuration>5);
}
console.log(filterbyMounth(coursesAndDurationArray));

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const addIdrocourses = coursesAndDurationArray.map((value, index) => ({id: index+1, title: value.title, monthDuration:value.monthDuration }));
console.log(addIdrocourses);
console.log(coursesAndDurationArray);

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'club', value: '6', color: 'black'},
    {cardSuit: 'club', value: '7', color: 'black'},
    {cardSuit: 'club', value: '8', color: 'black'},
    {cardSuit: 'club', value: '9', color: 'black'},
    {cardSuit: 'club', value: '10', color: 'black'},
    {cardSuit: 'club', value: 'jack', color: 'black'},
    {cardSuit: 'club', value: 'queen', color: 'black'},
    {cardSuit: 'club', value: 'king', color: 'black'},
    {cardSuit: 'club', value: 'ace', color: 'black'},

];

// - знайти піковий туз

let finderace = cards.find(({value, cardSuit}) => value === 'ace' && cardSuit === 'spade');
console.log(finderace);
// - всі шістки

let allsix = cards.filter(({value}) => value === '6');
console.log(allsix);

// всі червоні карти

let allred = cards.filter(({color}) => color === 'red');
console.log(allred);

// всі буби
let alldiamond =  cards.filter(({cardSuit}) => cardSuit === 'diamond');
console.log(alldiamond);

// - всі трефи від 9 та більше

let allclubs = cards.filter(({cardSuit, value}) => value === '10' && cardSuit === 'club' || cardSuit === 'club'&& value>'8');
console.log(allclubs);

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let jokerFocus = cards.reduce((filteredcards, card) => {
if (card.cardSuit === 'spade') {
    filteredcards.spades.push(card)
} else if (card.cardSuit === 'diamond') {
    filteredcards.diamonds.push(card)
} else if (card.cardSuit === 'heart') {
    filteredcards.hearts.push(card);
} else {
    filteredcards.clubs.push(card);
}
return filteredcards;
}, {spades:[], diamonds:[],  hearts:[], clubs:[]});
console.log(jokerFocus);

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let filterSaas = coursesArray.filter(({modules}) => modules.includes('sass'));
console.log(filterSaas);

// --написати пошук всіх об'єктів, в який в modules є docker
let filterDocker = coursesArray.filter(({modules}) => modules.includes('docker'));
console.log(filterDocker);