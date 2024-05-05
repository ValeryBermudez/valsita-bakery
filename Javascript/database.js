let productos = [
    { id: 1001, 
    name: 'Red Velvet Cake', 
    description: 'This is the best Red Velvet Cake', 
    price: 10.99, 
    url_img: './img/red-velvet.jpg'},


    { id: 1002,
    name: 'Strawberry Bundt Cake', 
    description: 'Strawberry Bundt Cake', 
    price: 19.99,
    url_img: './img/strawberry-bundt-cake.jpg'},

    { id: 1003, 
    name: 'Guinness Chocolate Cake with Irish Buttercream', 
    description: 'Guinness Chocolate Cake with Irish Buttercream', 
    price: 20.99, 
    url_img: './img/Chocolate-Peanut-Butter-Caramel-Mousse.jpg'},

    { id: 1004, 
    name: 'Chocolate Chips Cookie', 
    description: 'This is the best cookie', 
    price: 5.99, 
    url_img: './img/CHOCOLATE-CHIP-COOKIES.jpg'},

    { id: 1005, 
    name: 'White Chocolate Chips Cookie', 
    description: 'This is the best Colombian Cookie', 
    price: 19.99, 
    url_img: './img/White-Chocolate-Cookie.jpg'},

    { id: 1006, 
    name: 'Iced Latte', 
    description: 'Iced latte made by 100% Colombian coffee', 
    price: 9.99, 
    url_img: './img/Ice-latte.jpg'},

    { id: 1007, 
    name: 'Hot Latte', 
    description: 'Hot latte made by 100% Colombian coffee', 
    price: 8.99, 
    url_img: './img/Hot-latte.jpg'},

    { id: 1008, 
    name: 'Water', 
    description: 'Mineral Water', 
    price: 2.99, 
    url_img: './img/Agua-Mineral-Natural.jpg'},

];

let aditions = [
    { id: 1009, 
    name: 'Caramel', 
    description: 'This is caramel adition', 
    price: 1.99},

    { id: 1010, 
    name: 'Whipped Cream', 
    description: 'This is whipped cream adition', 
    price: 19.99,},

    { id: 1011, 
    name: 'Milk', 
    description: 'Milk', 
    price: 0 },

    { id: 1012, 
    name: 'Almond Milk', 
    description: 'This is Almond Milk adition', 
    price: 1.99 },

    { id: 1013, 
    name: 'Oat Milk', 
    description: 'This is Oat Milk adition', 
    price: 1.99 },

    { id: 1014,
    name: 'Soy Milk', 
    description: 'This is Soy Milk adition', 
    price: 1.99 },
];

productos.forEach(productos =>{
	//creamos cada elemento HTML

    const card = document.createElement("div");
    card.classList.add("card");
    const contenido = document.createElement("div");
    contenido.classList.add("contenido");
    const name = document.createElement("h3");
    name.classList.add("name");
    const description = document.createElement("p");
    description.classList.add("description");
    const price = document.createElement("h2");
    price.classList.add("price");
    const imagen = document.createElement("div");
    imagen.classList.add("imagen");
    const img = document.createElement("img");
    img.classList.add("cake");	


	//Agregamos los valores que traimos de la DB y dejamos en un JSON
    name.textContent = productos.name;
    description.textContent = productos.description;
    price.textContent = productos.price;
    img.src = productos.url_img;
    img.alt = "cake";

    //inyectamos los elementos al DOM
    contenido.appendChild(name);
    contenido.appendChild(description);
    contenido.appendChild(price);
    imagen.appendChild(img);
    card.appendChild(contenido);
    card.appendChild(imagen);

    tarjetas.appendChild(card);

});