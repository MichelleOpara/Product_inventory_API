
const express = require('express');
const routesForProducts = require('./routes/routesForProducts.js');
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT;

//Products 
let products = [
  {
    id: 1,
    name: "Laptop",
    price: 3500,
    quantity: 5
  },
  {
    id: 2,
    name: "Smartphone",
    price: 1500,
    quantity: 10
  },
  {
    id: 3,
    name: "Keyboard",
    price: 200,
    quantity: 15
  },
  {
    id: 4,
    name: "Mouse",
    price: 100,
    quantity: 20
  },
  {
    id: 5,
    name: "Monitor",
    price: 1200,
    quantity: 8
  }
];

//the middleware
app.use(express.json());

//home route
app.get('/home', (req, res) => {
    res.send("Welcome to Our Inventory API");
});


//products routes
app.use("/api/products", routesForProducts);


//starting server
app.listen(PORT, () =>{
console.log(`Server is running on http://localhost:${PORT}/home`);
});
