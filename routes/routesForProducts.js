const express = require('express');
const router = express.Router();
let products = require('../data/products.js');

// GET all products
router.get("/", (req, res) => {
  res.status(200).json(products);
});

// POST create product
router.post("/", (req, res) => {
  const { name, price, quantity } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    quantity
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created successfully",
    product: newProduct
  });
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
