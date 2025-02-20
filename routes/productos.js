const productos=[
    {id:1, nombre:'producto1', precio:100},
    {id:2, nombre:'producto2', precio:200},
    {id:3, nombre:'producto3', precio:300},
]

async function Obtenerlistaproductos() {
return productos
}

module.exports = { 
    Obtenerlistaproductos
}