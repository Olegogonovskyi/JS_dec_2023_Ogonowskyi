function createDom(text, classname, tag, appendPlace) {
    this.element = document.createElement(`${tag}`);
    this.element.classList.add(`${classname}`)
    this.element.innerText = text;
    appendPlace.appendChild(this.element)
    return this.element;
}

let url = new URL(location.href);

let singleUser = JSON.parse(url.searchParams.get('user'));

let mainUserInfowrap = new createDom('', 'mainUserInfowrap', 'div', document.body);

let usersMaininfo = new createDom('', 'usersMaininfo', 'h3', mainUserInfowrap);
usersMaininfo.innerHTML = `&#9814; ${singleUser.name}, id: ${singleUser.id} (username: ${singleUser.username})`

let userEmail = new createDom(`emaill: ${singleUser.email}`, 'userEmail', 'h4', mainUserInfowrap);

let userAdresinfo = new createDom(`street: ${singleUser.address.street}, suite: ${singleUser.address.suite} in town:${singleUser.address.city}, zipcode: ${singleUser.address.zipcode}; location: ${singleUser.address.geo.lat} & ${singleUser.address.geo.lng}`, 'userAdresinfo', 'p', mainUserInfowrap);

let userPostbutton = new createDom('', 'userPostbutton', 'button', mainUserInfowrap);
userPostbutton.innerHTML = `&#9884; post of current user &#9884;`;

let titlesWrap = new createDom('', 'titlesWrap', 'div', mainUserInfowrap);

userPostbutton.onclick = function (e) {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${singleUser.id}`)
        .then(posts => posts.json())
        .then(posts => {
            for (let post of posts) {
                let titlesNames = new createDom(`${post.title}`, 'astyle', 'a', titlesWrap);
                titlesNames.href = `post-details.html?postId=${post.id}`

            }

        })
}

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