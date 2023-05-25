/*Recibir toda la información de nuestra base de datos*/
const listaProducto = async () => 
    fetch("https://papel-y-cristal.onrender.com/productos")
        .then( (response) => response.json())
        .catch((error) => alert("Ocurrio un error"));


export const productosServices = {
    listaProducto,
};   
