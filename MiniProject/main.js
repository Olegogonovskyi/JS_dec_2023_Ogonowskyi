function createDom(text, classname, tag, appendPlace) {
    this.element = document.createElement(`${tag}`);
    this.element.classList.add(`${classname}`)
    this.element.innerText = text;
    appendPlace.appendChild(this.element)
    return this.element;
}

let usersWrap = new createDom('', 'usersWrap', 'div', document.body);

// ----------------------------------------|audio Block|-------------------------------------------------------

let audioBlock = new createDom('', 'audioBlock', 'div', document.body);

let audioText = new createDom('Push to Play!', 'audiotext', 'h5', audioBlock);

let audioblokimg = document.createElement('img');
audioblokimg.src = 'Expert_Leadership.png'

audioBlock.appendChild(audioblokimg);

let audiomuss = document.getElementsByTagName("audio")[0];

audioBlock.onclick =  () => {audiomuss.play();
}
// ----------------------------------------|audio Block|-------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {

        for (let user of users) {

            let userBlock = new createDom('', 'userBlock', 'div', usersWrap)

            let mainInfouser = document.createElement('a');
            userBlock.appendChild(mainInfouser);
            mainInfouser.href = `user-details.html?user=${JSON.stringify(user)}`
            mainInfouser.innerHTML = `&#9876; Name: ${user.name} & id: ${user.id}`;


        }
    });

