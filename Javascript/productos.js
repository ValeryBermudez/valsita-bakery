let products = [];
let drinks = [];

fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        products = data.filter(product => !['Iced Latte', 'Hot Latte', 'Water'].includes(product.name));
        drinks = data.filter(product => ['Iced Latte', 'Hot Latte', 'Water'].includes(product.name));
        showInitialProducts();
    })
    .catch(error => console.error('Error al obtener la lista de productos:', error));

function searchProducts() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    const filteredDrinks = drinks.filter(product => product.name.toLowerCase().includes(searchInput));

    const productList = document.getElementById('productList');
    const drinksList = document.getElementById('drinksList');

    clearList(productList);
    clearList(drinksList);

    filteredProducts.forEach(product => appendProduct(product, productList));
    filteredDrinks.forEach(product => appendProduct(product, drinksList));
}

function showInitialProducts() {
    const productList = document.getElementById('productList');
    const drinksList = document.getElementById('drinksList');

    clearList(productList);
    clearList(drinksList);

    products.forEach(product => appendProduct(product, productList));
    drinks.forEach(product => appendProduct(product, drinksList));
}

function clearList(list) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function appendProduct(product, list) {
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

    list.appendChild(listItem);
}

function scrollToContact() {
    window.location.href = 'contact.html';
}

