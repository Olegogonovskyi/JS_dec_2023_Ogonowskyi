// ----------------------------------------|creator Dom|-------------------------------------------------------
function СreateDom(text, classname, tag, appendPlace) {
    element = document.createElement(`${tag}`);
    element.classList.add(`${classname}`)
    element.innerText = text;
    appendPlace.appendChild(element)
    return element;
}
// ----------------------------------------|creator Dom|-------------------------------------------------------
let url = new URL(location.href);

let singleUser = JSON.parse(url.searchParams.get('user'));

let mainUserInfowrap = СreateDom(null, 'mainUserInfowrap', 'div', document.body);

let usersMaininfo = СreateDom(null, 'usersMaininfo', 'h3', mainUserInfowrap);
usersMaininfo.innerHTML = `&#9814; ${singleUser.name}, id: ${singleUser.id} (username: ${singleUser.username})`

let userEmail = СreateDom(`emaill: ${singleUser.email}`, 'userEmail', 'h4', mainUserInfowrap);

let userAdresinfo = СreateDom(`street: ${singleUser.address.street}, suite: ${singleUser.address.suite} in town:${singleUser.address.city}, zipcode: ${singleUser.address.zipcode}; location: ${singleUser.address.geo.lat} & ${singleUser.address.geo.lng}`, 'userAdresinfo', 'p', mainUserInfowrap);

let userPostbutton = СreateDom(null, 'userPostbutton', 'button', mainUserInfowrap);
userPostbutton.innerHTML = `&#9884; post of current user &#9884;`;

let titlesWrap = СreateDom(null, 'titlesWrap', 'div', mainUserInfowrap);

userPostbutton.onclick = function (e) {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${singleUser.id}`)
        .then(posts => posts.json())
        .then(posts => {
            for (let post of posts) {
                let titlesNames = СreateDom(`${post.title}`, 'astyle', 'a', titlesWrap);
                titlesNames.href = `post-details.html?postId=${post.id}`

            }

        })
}

// ----------------------------------------|audio Block|-------------------------------------------------------
let audioBlock = СreateDom(null, 'audioBlock', 'div', document.body);

let audioText = СreateDom('Push to Play!', 'audiotext', 'h5', audioBlock);

let audioblokimg = СreateDom(null, 'audioblokimg', 'img', audioBlock);
audioblokimg.src = 'Expert_Leadership.png'

let audiomuss = document.getElementsByTagName("audio")[0];

audioBlock.onclick = () => {audiomuss.play();}
// ----------------------------------------|audio Block|-------------------------------------------------------