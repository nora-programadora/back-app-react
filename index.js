const express = require("express");
const dontenv = require('dotenv');
dontenv.config();
const cors = require("cors");
const app = express();

console.log(process.env.HOLA)

app.use(cors());

const { usuariosRouter, productsRouter } = require("./api");

// app.get('/api', (req, res) =>{
//     res.send({"users":["usuario 1", "usuario 2", "usuario 3", "usuario 4"]})
// })

//  app.use('/api', usuariosRouter)
app.use("/productos", productsRouter);

app.listen(process.env.port, () => {
  console.log("Servidor conmectado en puerto 4001");
});
