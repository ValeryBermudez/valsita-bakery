const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analizar cuerpos de solicitudes
app.use(bodyParser.json());
app.use(cors());

let products = [
    { id: 1001, name: 'Red Velvet Cake', description: 'This is the best Red Velvet Cake', price: 10.99, image: 'https://handletheheat.com/wp-content/uploads/2013/04/red-velvet-cake-recipe-SQUARE.jpg'},
    { id: 1002, name: 'Strawberry Bundt Cake', description: 'Strawberry Bundt Cake', price: 19.99,image: 'https://handletheheat.com/wp-content/uploads/2018/04/strawberry-bundt-cake-SQUARE-1536x1536.png'},
    { id: 1003, name: 'Guinness Chocolate Cake with Irish Buttercream', description: 'Guinness Chocolate Cake with Irish Buttercream', price: 20.99, image: 'https://handletheheat.com/wp-content/uploads/2015/12/Chocolate-Peanut-Butter-Caramel-Mousse-Pie-SQUARE.png'},
    { id: 1004, name: 'Chocolate Chips Cookie', description: 'This is the best cookie', price: 5.99, image: 'https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg'},
    { id: 1005, name: 'White Chocolate Chips Cookie', description: 'This is the best Colombian Cookie', price: 19.99, image: 'https://handletheheat.com/wp-content/uploads/2010/03/White-Chocolate-Macadamia-Nut-Cookies-SQUARE-2-1536x1536.png'},
    { id: 1006, name: 'Iced Latte', description: 'Iced latte made by 100% Colombian coffee', price: 9.99, image: 'https://www.acouplecooks.com/wp-content/uploads/2021/08/Iced-Latte-003.jpg' },
    { id: 1009, name: 'Hot Latte', description: 'Hot latte made by 100% Colombian coffee', price: 8.99, image: 'https://handletheheat.com/wp-content/uploads/2013/10/Pumpkin-Spice-Lattes-Square-1536x1536.jpg' },
    { id: 1014, name: 'Water', description: 'Mineral Water', price: 2.99, image: 'https://exitocol.vteximg.com.br/arquivos/ids/22259314/Agua-Mineral-Natural-HATSU-300-ml-3176047_a.jpg'},

];

let aditions = [
    { id: 1007, name: 'Caramel', description: 'This is caramel adition', price: 1.99},
    { id: 1008, name: 'Whipped Cream', description: 'This is whipped cream adition', price: 19.99,},
    { id: 1010, name: 'Milk', description: 'Milk', price: 0 },
    { id: 1011, name: 'Almond Milk', description: 'This is Almond Milk adition', price: 1.99 },
    { id: 1012, name: 'Oat Milk', description: 'This is Oat Milk adition', price: 1.99 },
    { id: 1013, name: 'Soy Milk', description: 'This is Soy Milk adition', price: 1.99 },
];

// Obtener todos los productos
app.get('/products', (req, res) => {
    res.json(products);
});

// Obtener todas las adiciones
app.get('/aditions', (req, res) => {
    res.json(aditions);
});

// Obtener un producto por ID
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

// Agregar un nuevo producto
app.post('/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Actualizar un producto existente
app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedProduct = req.body;
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index] = updatedProduct;
        res.json(updatedProduct);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

// Eliminar un producto
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    products = products.filter(p => p.id !== id);
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
