const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const Obtenerlistaproductos = require('./routes/productos');

//PRUEBA "CARGAR INDEX.HTML"
const path = require('path');
app.use(express.static(path.join(__dirname, 'FRONTEND')));

app.use(bodyParser.json())
app.get(('/'), (req,res)=>{
    res.sendFile(path.join(__dirname, 'FRONTEND', 'index.html'));
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