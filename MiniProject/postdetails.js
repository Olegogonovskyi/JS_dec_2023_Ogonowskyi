let url = new URL(location.href);
let postId = url.searchParams.get('postId');

let mainWrap = document.createElement("div");
mainWrap.classList.add('mainWrap');
document.body.appendChild(mainWrap)

let post = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(post => post.json());

let comments = fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(post => post.json());

Promise.all([post, comments])
    .then(resolt => {
        let [post, comments] = resolt;

        let mainPostblock = document.createElement('div');
        mainPostblock.classList.add('mainPostblock');

        let mainPostinfo = document.createElement('h3');
        mainPostinfo.innerText = `id: ${post.id} - ${post.title}`;

        let postbody = document.createElement('p');
        postbody.innerText = `${post.body}`

        let commentsblock = document.createElement('div');
        commentsblock.classList.add('commentsblock');

        mainPostblock.append(mainPostinfo, postbody);
        mainWrap.append(mainPostblock, commentsblock)

        for (let comment of comments) {
            let commenttext = document.createElement('p');
            commenttext.innerHTML = `<span>${comment.email} - ${comment.name}</span>:<br> ${comment.body}`

            commentsblock.appendChild(commenttext)
        }


    })

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

audioBlock.onclick =  () => {audiomuss.play();}
// ----------------------------------------|audio Block|-------------------------------------------------------