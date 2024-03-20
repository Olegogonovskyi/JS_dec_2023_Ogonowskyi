// - взяти https://dummyjson.com/docs/carts та
// // вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

function СreateDom(tag, classname, appendPlace, text) {
    element = document.createElement(`${tag}`);
    element.classList.add(`${classname}`)
    element.innerHTML = text;
    appendPlace.appendChild(element)
    return element;
}

fetch('https://dummyjson.com/carts')
.then(cards => cards.json())
.then(cards => {

        for (const listcard of cards.carts) {
        let wrapCards = СreateDom('div', 'wrapCards',  document.body, '');
        let cardBlock = СreateDom('div', 'cardBlock',  wrapCards, '');
        let mainCardinfo = СreateDom('h3', 'mainCardinfo',  cardBlock,
            `user: ${listcard.userId}, id: ${listcard.id}, total ${listcard.total}, discountedTotal: ${listcard.discountedTotal},
            &#9755; you save ${listcard.total - listcard.discountedTotal} &#9754;, totalProducts: ${listcard.totalProducts}, totalQuantity: ${listcard.totalQuantity}`);
        let productslist = СreateDom('ul', 'productslist',  cardBlock, '');
        for (const productslistElement of listcard.products) {
            let productli = СreateDom('li', 'productli',  productslist, `${productslistElement.title}: ${productslistElement.price} $`);
        }
    }

    let newtask = СreateDom('hr', 'newtask',  document.body, '');
});


// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// // Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(recepisall => recepisall.json())
    .then(recepisall => {

        for (const listrecipe of recepisall.recipes) {
            let recipeCards = СreateDom('div', 'recipeCards',  document.body, '');
            let recipeBlock = СreateDom('div', 'recipeBlock',  recipeCards, '');
            let mainrecipeinfo = СreateDom('h2', 'mainrecipeinfo',  recipeBlock, `id: ${listrecipe.id}, name: ${listrecipe.name}`);
            let ingredientslist = СreateDom('ul', 'ingredientslist',  recipeBlock, '');
            for (let i = 0; i < listrecipe.ingredients.length; i++) {
                let ingredientslistli = СreateDom('li', 'ingredientslistli',  ingredientslist, `${listrecipe.ingredients[i]}`);
            }
            }
        }
    );
