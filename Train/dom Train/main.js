// function domCreator(nameblock, tagname) {
//     this.nameblock = document.createElement(`${tagname}`);
//     this.nameblock.classList.add(`${nameblock}`);
//     this.nameblock.innerText = 'ddgdgdgd'
// return nameblock;
//     };
//
// let qqq = new domCreator('hdhd', 'div');
// document.body.append(qqq)


function createDom(text, classname, tag, appendPlace){
    this.element = document.createElement(`${tag}`);
    this.element.classList.add(`${classname}`)
    this.element.innerText = text;
    appendPlace.appendChild(this.element)
    return this.element;
}
let title = new createDom("Hello", 'qqqq','div', document.body);
