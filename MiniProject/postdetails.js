// ----------------------------------------|creator Dom|-------------------------------------------------------
function createDom(text, classname, tag, appendPlace) {
    this.element = document.createElement(`${tag}`);
    this.element.classList.add(`${classname}`)
    this.element.innerText = text;
    appendPlace.appendChild(this.element)
    return this.element;
}
// ----------------------------------------|creator Dom|-------------------------------------------------------
let url = new URL(location.href);
let postId = url.searchParams.get('postId');

let mainWrap = new createDom('', 'mainWrap', 'div', document.body);

let post = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(post => post.json());

let comments = fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(post => post.json());

Promise.all([post, comments])
    .then(resolt => {
        let [post, comments] = resolt;

        let mainPostblock = new createDom('', 'mainPostblock', 'div', mainWrap);

        let mainPostinfo = new createDom(`iD: ${post.id} - ${post.title}`, 'mainPostinfo', 'h3', mainPostblock);

        let postbody = new createDom(`${post.body}`, 'mainPostblock', 'p', mainPostblock);

        let commentsblock = new createDom('', 'commentsblock', 'div', mainWrap);

        for (let comment of comments) {
            let commenttext = new createDom('', 'mainPostblock', 'p', commentsblock);
            commenttext.innerHTML = `<span>${comment.email} - ${comment.name}</span>:<br> ${comment.body}`

        }


    })

// ----------------------------------------|audio Block|-------------------------------------------------------
let audioBlock = new createDom('', 'audioBlock', 'div', document.body);

let audioText = new createDom('Push to Play!', 'audiotext', 'h5', audioBlock);

let audioblokimg = document.createElement('img');
audioblokimg.src = 'Expert_Leadership.png'

audioBlock.appendChild(audioblokimg);

let audiomuss = document.getElementsByTagName("audio")[0];

audioBlock.onclick = () => {audiomuss.play();}
// ----------------------------------------|audio Block|-------------------------------------------------------