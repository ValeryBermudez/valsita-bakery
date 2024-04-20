fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => {
        const productList = document.getElementById('productList');
        const drinksList = document.getElementById('drinksList'); // Obtener la lista de bebidas

        products.forEach(product => {
            const listItem = document.createElement('li');
            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;
            listItem.appendChild(productImage);

            const productName = document.createElement('a');
            productName.textContent = product.name;
            listItem.appendChild(productName);

            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
            listItem.appendChild(productPrice);

            listItem.addEventListener('click', () => showProductDetails(product));

            if (product.name === 'Iced Latte' || product.name === 'Hot Latte' || product.name === 'Water') {
                drinksList.appendChild(listItem); // Agregar productos de bebidas a la lista de bebidas
            } else {
                productList.appendChild(listItem); // Agregar otros productos a la lista principal
            }
        });
    })
    .catch(error => console.error('Error al obtener la lista de productos:', error));
// Función para buscar productos
function searchProducts() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    const filteredDrinks = drinks.filter(product => product.name.toLowerCase().includes(searchInput));

    // Mostrar los productos filtrados
    showProducts(filteredProducts, "productList");
    showProducts(filteredDrinks, "drinksList");
}

// Mostrar los productos inicialmente al cargar la página
showInitialProducts();
