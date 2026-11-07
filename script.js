// JSON data from data-minifed

import config from './data/data-minified.json' with { type: 'json' };


document.addEventListener('DOMContentLoaded', function() {

    const products = config.products;
    const prodContainer = document.querySelector('#prodlist'); // Used to add all container info from JS using products 

    // Dynamically displaying first 20 products in product array from provided JSON file/

    for (let p = 0; p < 20; p++) {

        // Const variable for each item within product array from JSON.
        const prod = products[p];

        // Creates div that each attribute will eventually goes into.
        const prodDiv = document.createElement('li');

            // Creating PRODUCT IMAGE
            const prodImage = document.createElement('img');
            prodImage.src = prod.thumbnail;

                // Displays product ID when clicked.
                prodImage.addEventListener('click', function() {
                    alert('Product ID: ' + prod.id);
                });

            // Creating PRODUCT TITLE
            const prodTitle = document.createElement('h2');
            prodTitle.textContent = prod.title;

            // Creating PRODUCT PRICE
            const prodPrice = document.createElement('p');
            prodPrice.textContent = 'Price: $' + prod.price;

            // Creating ADD TO CART button
            const addToCart = document.createElement('button');
            addToCart.textContent = 'Add to Cart';

                // Displays product ID and title when clicked.
                addToCart.addEventListener('click', function() {
                    alert('Product ID: ' + prod.id + '\nProduct Title: ' + prod.title);
                });

        // APpending all required aspects to prodDiv.
        prodDiv.appendChild(prodImage);
        prodDiv.appendChild(prodTitle);
        prodDiv.appendChild(prodPrice);
        prodDiv.appendChild(addToCart);

        // Add the product to the webpage.
        prodContainer.appendChild(prodDiv);
    }

});

/*

JSON:

{
    "id": 
    "title":
    "price":
    "thumbnail":
}
    */
