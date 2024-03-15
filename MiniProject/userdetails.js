let url = new URL(location.href);

let singleUser = JSON.parse(url.searchParams.get('user'))

let mainUserInfowrap = document.createElement('div');
mainUserInfowrap.classList.add('mainUserInfowrap');
document.body.appendChild(mainUserInfowrap);

let usersMaininfo = document.createElement('h3');
usersMaininfo.classList.add('usersMaininfo');
usersMaininfo.innerText = `${singleUser.name}, id: ${singleUser.id} (username: ${singleUser.username})`

let userEmail = document.createElement('h4');
userEmail.classList.add('userEmail');
userEmail.innerText = `email: ${singleUser.email}`

let userAdresinfo = document.createElement('p');
userAdresinfo.classList.add('userAdresinfo');
userAdresinfo.innerText = `street: ${singleUser.address.street}, suite: ${singleUser.address.suite} 
in town:${singleUser.address.city}, zipcode: ${singleUser.address.zipcode}; location: ${singleUser.address.geo.lat} & ${singleUser.address.geo.lng}`

let userPostbutton = document.createElement('button')
userPostbutton.classList.add('userPostbutton');
userPostbutton.innerText = `post of current use`;

let titlesWrap = document.createElement('div');
titlesWrap.classList.add('titlesWrap')

mainUserInfowrap.append(usersMaininfo, userEmail, userAdresinfo, userPostbutton, titlesWrap);

userPostbutton.onclick = function (e) {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${singleUser.id}`)
        .then(posts => posts.json())
        .then(posts => {
            for (let post of posts) {
                let titlesNames = document.createElement('a');
                titlesNames.innerText = `${post.title}`;
                titlesNames.href = `post-details.html?postId=${post.id}`
                titlesWrap.appendChild(titlesNames);

            }

        })
}