## Valsita's Bakery
Visit deployed site here https://valerybermudez.github.io/valsita-bakery/

# Valsita's Bakery API

## Description
The Valsita's Bakery API provides access to a range of resources related to the products available at Valsita's Bakery. This API allows users to retrieve detailed information about products, including prices, descriptions, and categories.

## Usage
To get started with the API, follow these steps:
1. **Authentication**: The API does not require authentication.
2. **Requests**: Use the available endpoints to make requests and retrieve information about the products.
3. **Responses**: API responses include detailed data about the products, such as name, description, price, and category.

## Available Resources
- `/products`: Get the complete list of products available at Valsita's Bakery.
- `/products/{id}`: Get a specific product by its ID.
- `/recipes`: Get the list of recipes available at Valsita's Bakery.

## Examples
Here are some examples of how to use the API:

```javascript
// Example GET request to retrieve all products
fetch('http://localhost:3000/products'))
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Example GET request to retrieve a specific product by its ID
fetch('http://localhost:3000/products'))
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
