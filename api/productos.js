const express = require("express");
const axios = require("axios");
const router = express.Router();

// router.get('/', (req,res) => {
//     fetch('https://fakestoreapi.com/products')
//         .then(response=>response.json())
//         .then(products=>res.send(products))
// })

router.get("/", async (req, res) => {
  const resp = await axios.get("https://fakestoreapi.com/products");
  console.log(resp);
  const { data } = resp;
  const products = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image,
    };
  });
  res.send(products);
});

module.exports = router;
