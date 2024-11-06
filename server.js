
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ProductController = require('./controllers/ProductController');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/products', (req, res) => ProductController.getAllProducts(req, res));
app.post('/api/products', (req, res) => ProductController.addProduct(req, res));
app.delete('/api/products/:id', (req, res) => ProductController.deleteProduct(req, res));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
