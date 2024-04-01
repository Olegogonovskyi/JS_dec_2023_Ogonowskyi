// ----------------------------------------|creator Dom|-------------------------------------------------------
function СreateDom(text, classname, tag, appendPlace) {
    element = document.createElement(`${tag}`);
    element.classList.add(`${classname}`)
    element.innerText = text;
    appendPlace.appendChild(element)
    return element;
}
// ----------------------------------------|creator Dom|-------------------------------------------------------
// ------------------------------------|recursion function|-------------------------------------------------------
function recursobjfetch(objkt, placetoadd) {

    function owwa(objkt) {
        for (let objktKey in objkt) {
            typeof objkt[objktKey] !== 'object' && objkt[objktKey] !== null ? СreateDom(`${objktKey} - ${objkt[objktKey]}`, `${objktKey}`, 'div', placetoadd) : owwa(objkt[objktKey]);
        }
    };
    owwa(objkt);
    // в залежності від задач можна і return додати, але тут його ніби не тре
};
// ----------------------------------------|recursion function|-------------------------------------------------------
// ---------------------------------------------|main code|-----------------------------------------------------------



let url = new URL(location.href);

let singleUser = JSON.parse(url.searchParams.get('user'));

let mainUserInfowrap = СreateDom('', 'mainUserInfowrap', 'div', document.body);

recursobjfetch(singleUser, mainUserInfowrap)

let userPostbutton = СreateDom('', 'userPostbutton', 'button', mainUserInfowrap);
userPostbutton.innerHTML = `&#9884; post of current user &#9884;`;

let titlesWrap = СreateDom('', 'titlesWrap', 'div', mainUserInfowrap);

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
// ---------------------------------------------|main code|-----------------------------------------------------------
// ---------------------------------------------|audio Block|-------------------------------------------------------
let audioBlock = СreateDom('', 'audioBlock', 'div', document.body);

let audioText = СreateDom('Push to Play!', 'audiotext', 'h5', audioBlock);

let audioblokimg = СreateDom('', 'audioblokimg', 'img', audioBlock);
audioblokimg.src = 'Expert_Leadership.png'

let audiomuss = document.getElementsByTagName("audio")[0];

audioBlock.onclick = () => {audiomuss.play();}
// ----------------------------------------|audio Block|-------------------------------------------------------