function СreateDom(tag:string, appendPlace:HTMLElement, classname?:string, text?:string): HTMLElement {
    let element:HTMLElement = document.createElement(`${tag}`);
    element.classList.add(`${classname}`)
    element.innerHTML = text;
    appendPlace.appendChild(element)
    return element;
};
let usersWrap = СreateDom('div', document.body, 'usersWrap', null);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {

        for (let user of users) {

            let userBlock = СreateDom('div', usersWrap,  'userBlock', null);

            let mainInfouser = СreateDom('a', userBlock, 'mainInfouser') as HTMLAnchorElement;
            mainInfouser.href = `user-details.html?user=${JSON.stringify(user)}`;
            mainInfouser.innerHTML = `&#9760; Name: ${user.name} & id: ${user.id}`;

        }
    });
// ----------------------------------------|audio Block|-------------------------------------------------------
let audioBlock = СreateDom('div', document.body, 'audioBlock', null);

let audioText = СreateDom('h5', audioBlock, 'audioblokimg', 'Push to Play!');

let audioblokimg = СreateDom('img', audioBlock, 'audioblokimg', null) as HTMLImageElement;

audioblokimg.src = 'Expert_Leadership.png';

let audiomuss = document.getElementsByTagName("audio")[0];

audioBlock.onclick = () :void => {audiomuss.play();}
// ----------------------------------------|audio Block|-------------------------------------------------------