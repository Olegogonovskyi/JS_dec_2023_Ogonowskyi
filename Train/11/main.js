fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(carts => {
        for (const cart of carts.carts) {


            let divCarts = document.createElement('div');
            divCarts.classList.add('product');
            document.body.appendChild(divCarts);

            for (let cartElement of cart.products) {

                let infoProd = document.createElement('h2')
                infoProd.innerText = `${cartElement.title} - ${cartElement.price}`
                document.body.appendChild(infoProd)
            }
        }

    });