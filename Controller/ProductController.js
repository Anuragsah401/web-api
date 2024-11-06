// controllers/ProductController.js
const ProductService = require('../services/ProductService');

class ProductController {
  getAllProducts(req, res) {
    const products = ProductService.getAllProducts();
    res.json(products);
  }

  addProduct(req, res) {
    const newProduct = ProductService.addProduct(req.body);
    res.json(newProduct);
  }

  deleteProduct(req, res) {
    const id = parseInt(req.params.id);
    const success = ProductService.deleteProduct(id);
    if (success) {
      res.json({ message: 'Product deleted' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  }
}

module.exports = new ProductController();
