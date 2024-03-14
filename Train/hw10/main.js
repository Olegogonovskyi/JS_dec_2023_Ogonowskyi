// // 1.Отримати відповідь з цього ресурсу відповідь,
// //     та вивести в документ об'єкти. Застилізувати, ' +
// // 'за допомоги css, щоб отримати 5 елементів в рядку.' +
// // 'Для кожного елементу свій блок div.postВсі характеристики повинні ' +
// // 'мати свої блоки всередені div.post https://jsonplaceholder.typicode.com/fetch

//  let functionFetch = (ellName) => {
//      fetch(`https://jsonplaceholder.typicode.com/${ellName}`)
//         .then((ellName )=> ellName.json());
// }
//
// let usersFetch = functionFetch('users');
// let postsFetch = functionFetch('posts');

let usersFetch = fetch(`https://jsonplaceholder.typicode.com/users`)
.then((users) => users.json());
console.log(usersFetch);

let postsFetch = fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((posts) => posts.json());
console.log(usersFetch);


Promise.all([usersFetch, postsFetch]).then(result => {
    let [users, posts] = result;
    console.log(users);
    console.log(posts)
});


// let xxx = (o) => {
//     for (const oElement of o) {
//         console.log(oElement)
//     }
// }
