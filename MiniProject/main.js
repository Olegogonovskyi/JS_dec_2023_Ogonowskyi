
let usersWrap = document.createElement('div');
usersWrap.classList.add('usersWrap');
document.body.appendChild(usersWrap)

// ----------------------------------------|audio Block|-------------------------------------------------------
let audioBlock = document.createElement('div');
audioBlock.classList.add('audioBlock');
document.body.appendChild(audioBlock)

let audioText = document.createElement('h5');
audioText.innerText = 'Push to Play!';

let audioblokimg = document.createElement('img');
audioblokimg.src = 'Expert_Leadership.png'

audioBlock.append(audioText, audioblokimg);
let audiomuss = document.getElementsByTagName("audio")[0];

audioBlock.onclick =  () => {audiomuss.play();
}
// ----------------------------------------|audio Block|-------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {

        for (let user of users) {
            let userBlock = document.createElement('div');
            userBlock.classList.add('userBlock');
            usersWrap.appendChild(userBlock);

            let mainInfouser = document.createElement('a');
            userBlock.appendChild(mainInfouser);
            mainInfouser.href = `user-details.html?user=${JSON.stringify(user)}`
            mainInfouser.innerHTML = `&#9876; Name: ${user.name} & id: ${user.id}`;


        }
    });

