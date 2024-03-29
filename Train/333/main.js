fetch('https://dummyjson.com/carts')
    .then(res => res.json())
.then({products} => {
    console.log({products});

})