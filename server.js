const express = require('express');
const routesForProducts = require('./routes/routesForProducts.js');
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT;

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
console.log(`Server is running on http://localhost:${PORT}`);
});