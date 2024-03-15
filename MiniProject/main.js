let usersWrap = document.createElement('div');
usersWrap.classList.add('usersWrap');
document.body.appendChild(usersWrap)

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
                mainInfouser.innerText = `Name: ${user.name} & id: ${user.id}`;

            }

        }
    )