const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const Obtenerlistaproductos = require('./routes/productos');

app.use(bodyParser.json())
app.get(('/'), (req,res)=>{
    res.send(`Hello World I'm a Docker Container`);
})

app.route('/productos')
.get(async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    try {
        const listaProductos = await Obtenerlistaproductos.Obtenerlistaproductos();
     res.json(listaProductos);
} catch (err) {
console.error(err.message);
res.status(500).send('Error al obtener la lista de productos');
}
})

// .post((req, res) => {
// })

app.listen(9000, '0.0.0.0',()=>{
    console.log('Server is running on port 3000');
    console.log('http://localhost:9000');
})