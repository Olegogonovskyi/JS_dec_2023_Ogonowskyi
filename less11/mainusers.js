function СreateDom(tag, classname, appendPlace, text) {
    element = document.createElement(`${tag}`);
    element.classList.add(`${classname}`)
    element.innerHTML = text;
    appendPlace.appendChild(element)
    return element;
};

fetch('http://jsonplaceholder.typicode.com/users')
.then(users => users.json())
.then(users => {
    let ulwrap = СreateDom('ul', 'ulwrap', document.body, '')
    for (const user of users) {
        let infoUserli = СreateDom('li', 'infoUserli', ulwrap, `${user.id} - ${user.name} ` )
        let alink = СreateDom('a', 'alink', infoUserli, 'тицяй сюди')
        alink.href = `user-details.html?id=${user.id}`
    }
})