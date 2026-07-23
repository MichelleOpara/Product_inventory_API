const express = require('express');
const router = express.Router();
let products = require('../data/products.js');

// Test route
router.get("/", (req, res) => {
  res.send("Products route is working!");
});

// PATCH 
router.patch('/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: `Product with id ${id} not found` });
  }

  const { name, price, quantity } = req.body;

  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;
  if (quantity !== undefined) product.quantity = quantity;

  res.status(200).json({
    message: "Product updated successfully",
    product
  });
});

// DELETE 
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: `Product with id ${id} not found` });
  }

  const deletedProduct = products.splice(index, 1);

  res.status(200).json({
    message: "Product deleted successfully",
    product: deletedProduct[0]
  });
});

module.exports = router;