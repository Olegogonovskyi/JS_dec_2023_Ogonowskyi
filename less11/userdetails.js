// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
function СreateDom(tag, classname, appendPlace, text) {
    element = document.createElement(`${tag}`);
    element.classList.add(`${classname}`)
    element.innerHTML = text;
    appendPlace.appendChild(element)
    return element;
};
function recursobj(objkt) {

    function owwa(objkt) {
        for (let objktKey in objkt) {
            typeof objkt[objktKey] !== 'object' && objkt[objktKey] !== null ? СreateDom('h3', `${objktKey}`, document.body, `${objktKey} - ${objkt[objktKey]}`) : owwa(objkt[objktKey]);
        }
    };
    owwa(objkt);
    // в залежності від задач можна і return додати, але тут його ніби не тре
};

let userid = new URL(location.href).searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
.then(user => user.json())
.then(user => {recursobj(user)});
