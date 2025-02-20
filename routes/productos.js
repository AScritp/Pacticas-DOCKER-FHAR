const DATABASELESS=`https://zingybalance-us.backendless.app/api/data/Productos`

async function Obtenerlistaproductos() {
    try {
        const response = await fetch(DATABASELESS);
        if (!response.ok) {
            throw new Error('Error al obtener la lista de productos');
        }
        const productos = await response.json();
        return productos.map(producto=>({
            id:producto.ID,
            name:producto.ProductName,
            description:producto.ProductDescrip,
            price:producto.ProductPrice,
        }));
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}

module.exports = { 
    Obtenerlistaproductos
}