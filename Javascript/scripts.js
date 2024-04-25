// Obtener la lista de productos del servidor
// Obtener la lista de productos del servidor
fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => {
        const productList = document.getElementById('productList');
        const drinksList = document.getElementById('drinksList'); 

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
                drinksList.appendChild(listItem);
            } else {
                productList.appendChild(listItem);
            }
        });
    })
    .catch(error => console.error('Error al obtener la lista de productos:', error));
//Shopping cart

    let shoppingCart = [];

    function showShoppingCart() {
        const totalPrice = calculateTotalPrice();
        let cartContent = '<h3>Shopping Cart</h3>';
    
        if (shoppingCart.length === 0) {
            cartContent += '<p>No items in the cart</p>';
        } else {
            shoppingCart.forEach(item => {
                cartContent += `
                    <div>
                        <img src="${item.product.image}" alt="${item.product.name}" style="max-width: 100px; height: auto;">
                        <p>${item.product.name} - $${item.product.price.toFixed(2)}</p>
                        <button onclick="decreaseQuantity(${shoppingCart.indexOf(item)})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseQuantity(${shoppingCart.indexOf(item)})">+</button>
                    </div>`;
            });
        }
    
        cartContent += `<p>Total: <span id="totalPrice">$${totalPrice.toFixed(2)}</span></p>`;
        cartContent += '<button class="btn btn-primary" onclick="proceedToPayment()">Proceed to Payment</button>';
        cartContent += '<button class="btn btn-secondary" onclick="closeShoppingCart()">Close</button>';
    
        Swal.fire({
            title: 'Shopping Cart',
            html: cartContent,
            showCloseButton: false,
            showCancelButton: false,
            showConfirmButton: false
        });
    }
    
    function calculateTotalPrice() {
        let totalPrice = 0;
        shoppingCart.forEach(item => {
            totalPrice += item.product.price * item.quantity;
        });
        return totalPrice;
    }
    
    function decreaseQuantity(index) {
        if (shoppingCart[index].quantity > 1) {
            shoppingCart[index].quantity--;
            recalculateTotalPrice(); 
            showShoppingCart();
        }
    }
    
    function increaseQuantity(index) {
        shoppingCart[index].quantity++;
        recalculateTotalPrice();
        showShoppingCart(); 
    }
    
    function recalculateTotalPrice() {
        let totalPrice = 0;
        shoppingCart.forEach(item => {
            totalPrice += item.product.price * item.quantity;
        });
        document.getElementById('totalPrice').textContent = `$${totalPrice.toFixed(2)}`; 
    }
    
    function proceedToPayment() {
        closeShoppingCart(); 
        showPaymentModal(); 
    }
    
    function showPaymentModal() {
        // Contenido de la ventana emergente de pago
        const paymentContent = `
            <div id="paymentModal" class="modal">
                <div class="modal-content">
                    <span class="close" onclick="closePaymentModal()">&times;</span>
                    <h2>Payment Details</h2>
                    <label for="paymentMethod">Select Payment Method:</label>
                    <select id="paymentMethod">
                        <option value="debit">Debit Card</option>
                        <option value="credit">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                    <button onclick="completePayment()">Complete Payment</button>
                </div>
            </div>`;
    
        // Mostrar la ventana emergente de pago
        Swal.fire({
            title: 'Payment',
            html: paymentContent,
            showCloseButton: false,
            showCancelButton: false,
            showConfirmButton: false
        });
    }
    
    function closeShoppingCart() {
        Swal.close();
    }
    
    function completePayment() {
        // Lógica para completar el pago
        console.log('Payment completed successfully!');
    }
    
    function addToCart(product, additions, quantity) {
        const cartItem = {
            product: product,
            additions: additions,
            quantity: quantity
        };
    
        shoppingCart.push(cartItem);
    }
    
    function showProductDetails(product) {
        let availableAdditions = [];
        let additionsPrices = {};
        if (product.name === "Iced Latte") {
            availableAdditions = ["Caramel", "Whipped Cream", "Milk", "Almond Milk", "Oat Milk", "Soy Milk"];
            additionsPrices = {
                "Caramel": 1.99,
                "Whipped Cream": 0.99,
                "Milk": 0,
                "Almond Milk": 1.99,
                "Oat Milk": 1.99,
                "Soy Milk": 1.99
            };
        } else if (product.name === "Hot Latte") {
            availableAdditions = ["Whipped Cream", "Milk", "Almond Milk", "Oat Milk", "Soy Milk"];
            additionsPrices = {
                "Whipped Cream": 0.99,
                "Milk": 0,
                "Almond Milk": 1.99,
                "Oat Milk": 1.99,
                "Soy Milk": 1.99
            };
        }
    
        let additionsOptionsHTML = '';
        Object.entries(additionsPrices).forEach(([addition, price]) => {
            additionsOptionsHTML += `
                <input type="checkbox" name="additions" value="${addition}">
                    ${addition} - $${price.toFixed(2)}
                <br>`;
        });
    
        // Llenar las opciones de adiciones en el select
        Swal.fire({
            title: product.name,
            html: `
                <img src="${product.image}" style="max-width: 100%; height: auto;">
                <h2 style="color:rgb(0, 66, 54);">${product.name}</h2> <!-- Cambiar el color según sea necesario -->
                <p>${product.description}</p>
                <p>Additions:</p>
                <select id="additions" class="swal2-input" multiple>
                    ${additionsOptionsHTML}
                </select>
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" class="swal2-input" value="1" min="1">`,
            showCancelButton: true,
            confirmButtonText: 'Add to Cart',
            cancelButtonText: 'Close',
            preConfirm: () => {
                const selectedAdditions = [...document.querySelectorAll('input[name="additions"]:checked')].map(checkbox => checkbox.value);
                const quantity = parseInt(document.getElementById('quantity').value);
        
                // Agregar el producto al carrito
                addToCart(product, selectedAdditions, quantity);
                console.log('Producto agregado al carrito:');
                console.log('Nombre:', product.name);
                console.log('Descripción:', product.description);
                console.log('Adiciones:', selectedAdditions);
                console.log('Cantidad:', quantity);
            },
            customClass: {
                container: 'custom-swal-container',
                popup: 'custom-swal-popup',
                header: 'custom-swal-header',
                title: 'custom-swal-title',
                closeButton: 'custom-swal-close-button',
                content: 'custom-swal-content',
                actions: 'custom-swal-actions',
                confirmButton: 'custom-swal-confirm-button',
                cancelButton: 'custom-swal-cancel-button',
                footer: 'custom-swal-footer'
            }
        });
    }        
        
    // Llenar las opciones de adiciones en el select
    const additionsSelect = document.getElementById('additions');
    aditions.forEach(addition => {
        const option = document.createElement('option');
        option.value = addition.name;
        option.textContent = addition.name + ' - $' + addition.price.toFixed(2);
        additionsSelect.appendChild(option);
        });
