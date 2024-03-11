// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

};
let arr = [];
arr[arr.length] = new User(0, 'Oleg', 'Ogon', 'ol@gmail.com', +380630311455);
arr[arr.length] = new User(10, 'Nata', 'Nitoy', 'olt@gmail.com', +380630311456);
arr[arr.length] = new User(31, 'Zlata', 'Pitoy', 'olzst@gmail.com', +380630311457);
arr[arr.length] = new User(3456, 'Ira', 'les', 'olsst@gmail.com', +380630311458);
arr[arr.length] = new User(44, 'Nadiya', 'Dores', 'olw3t@gmail.com', +380630871345);
arr[arr.length] = new User(535, 'Stepan', 'Maskiv', 'ol323t@gmail.com', +380630311465);
arr[arr.length] = new User(96, 'Olena', 'Paskiv', 'olt23e@gmail.com', +380630311444);
arr[arr.length] = new User(78, 'Ivan', 'Lask', 'olt233@gmail.com', +380630311423);
arr[arr.length] = new User(845, 'Bogdan', 'Merd', 'oew3lt@gmail.com', +380630311456);
arr[arr.length] = new User(954, 'Lesya', 'Perd', 'ol23t@gmail.com', +3806303114345);
console.log(arr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let newUserarr = arr.filter(({id}) => id%2 === 0);
console.log(newUserarr);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUserarr = arr.sort((a, b) => a.id-b.id);
console.log(sortUserarr);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
};
let clasArr;
clasArr = [
    new Client(2627, 'lesko', 'Re', 'psd@ukr.net', 911, ['water', 'ice - cream', 'bread', 'coffee']),
    new Client(263227, 'leska', 'Lolip', 'p89sd@ukr.net', 112, ['milk', 'coffee']),
    new Client(27, 'Marta', 'Masla', 'wwpsd@ukr.net', 113, ['bread']),
    new Client(7, 'Bianka', 'Kasla', 'psdye7@ukr.net', 121, ['coffee', 'beer', 'candys', 'kovbasa', 'mayonez', 'wiski']),
    new Client(217, 'Piter', 'Faska', 'ousd@ukr.net', 931, ['beer', 'hotdog']),
    new Client(26, 'Bonie', 'Wenka', 'ir7d@ukr.net', 912, ['pizza', 'beer']),
    new Client(33, 'Adic', 'Popil', 'imd6@ukr.net', 913, ['milk', 'chocolate', 'flowers', 'candys']),
    new Client(98, 'Lenka', 'Kiva', 'pop9@ukr.net', 914, ['vegetables', 'ice - cream']),
    new Client(74, 'Manks', 'Mycyk', 'po9@ukr.net', 915, ['bread']),
    new Client(988, 'Turbo', 'Orew', 'ell3@ukr.net', 961, ['flowers', 'candys'])
];

console.log(clasArr);

let sortbyOrder = clasArr.sort((a, b) => a.order.length-b.order.length);
console.log(sortbyOrder);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Constructor (model, brand, year, maxspeed, engine) {
this.model = model;
this.brand = brand;
this.year = year;
this.maxspeed = maxspeed;
this.engine = engine;
this.drive = () => console.log(`їдемо зі швидкістю ${maxspeed} км на годину`);
this.info = () => console.log(`model - ${this.model}; brand - ${this.brand}; year - ${this.year}; maxspeed - ${this.maxspeed}; engine - ${this.engine};`);
this.increaseMaxSpeed = (newSpeed) => this.maxspeed = newSpeed;
this.changeYear = (newValue) => this.year = newValue;
this.addDriver = (driver) => this.drivers = driver;
}
let carone = new Constructor('Tank', 'Panzer', 1939, 60, 1.0);
carone.drive();
carone.info();
carone.increaseMaxSpeed(200);
carone.changeYear(1916);
carone.info();
carone.addDriver({name: 'Leo Pon'});
console.log(carone.drivers);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Constructorclass {
        constructor(model, brand, year, maxspeed, engine) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engine = engine;
    }
    drive = () => console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    info = () => console.log(`model - ${this.model}; brand - ${this.brand}; year - ${this.year}; maxspeed - ${this.maxspeed}; engine - ${this.engine};`)
    increaseMaxSpeed = (newSpeed) => this.maxspeed = newSpeed;
    changeYear = (newValue) => this.year = newValue;
    addDriver = (driver) => this.drivers = driver;
};
let cartwo = new Constructorclass('911', 'Porshe', 1967, 180, 3.0);
cartwo.drive();
cartwo.info();
cartwo.increaseMaxSpeed(300);
cartwo.info();
cartwo.changeYear(1990);
cartwo.info();
cartwo.addDriver({name: 'Piter Pen'})
console.log(cartwo.drivers);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, leg) {
        this.name = name;
        this.age = age;
        this.leg = leg;
    }

};

let chicks = [
    new Cinderella('Sasha Grey',36, 35),
    new Cinderella('Cicciolina', 63, 42),
    new Cinderella('Tori Black', 36, 39),
    new Cinderella('Sunny Leone', 43, 38),
    new Cinderella('Gina Ryder', 45, 41),
    new Cinderella('Teagan Presley', 39, 36),
    new Cinderella('Roxy Reynolds', 41, 37),
    new Cinderella('Kimberly Kane', 41, 43),
    new Cinderella('Eva Angelina', 39, 40),
    new Cinderella('Jenny Hendrix', 38, 40)
]
console.log(chicks);

class Prince {
        constructor(name, age, shooes) {
        this.name = name;
        this.age = age;
        this.shooes = shooes;
    }
};
let prince = new Prince('joeBaiden', 82, 42);
console.log(prince);
for (const chick of chicks) {
    if (chick.leg === prince.shooes) {
        console.log(chick)
    }

};
let lovePair = chicks.find(({leg}) =>leg === prince.shooes);
console.log(lovePair);