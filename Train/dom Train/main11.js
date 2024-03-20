function СreateDom(text, classname, tag, appendPlace) {
    element = document.createElement(`${tag}`);
    element.classList.add(`${classname}`)
    element.innerText = text;
    appendPlace.appendChild(element)
    return element
    }

СreateDom('hhhhhhhh', 'tyt', 'h1', document.body);
let iii = СreateDom('hhhh3333hhhh', 'tyt', 'h1', document.body);
console.log(iii)
let pppp = СreateDom('hyyyyyhhhh', 'tyt', 'h1', iii);

function abs(x) {
    x++
    console.log(x)
    }

abs(2)
let ccc = abs(1);
let vv