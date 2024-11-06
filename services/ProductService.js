// services/ProductService.js
const Product = require('../models/Product');

class ProductService {
  constructor() {
    this.products = [
      new Product(1, 'Laptop', 1200),
      new Product(2, 'Phone', 800),
    ];
  }

  getAllProducts() {
    return this.products;
  }

  addProduct(productData) {
    const newProduct = new Product(this.products.length + 1, productData.name, productData.price);
    this.products.push(newProduct);
    return newProduct;
  }

  deleteProduct(id) {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
      return true;
    }
    return false;
  }
}

module.exports = new ProductService();
