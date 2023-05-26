import { productosServices} from "../service/product-service.js"

const crearNuevaCardProduct = (id, imagen, nombre, precio) =>{

    const div = document.createElement("div");
    div.classList.add("producto");
    
    const contenido = ` 
        <div class="producto-ctn_img">
            <img src="${imagen}" alt="${nombre}" class="producto__img">
        </div>

        <div class="producto_contenido">
            <h3 class="producto__titulo">${nombre}</h3>
            <p class="producto__precio">${precio}</p>

            <div class="producto-ctn__button">
                <a href="descripcion_producto.html?id=${id}" class="producto__link">
                    ver más
                </a>

                <button class="button button--small button--link">
                    <i class="uil uil-shopping-cart button__icon"></i>
                </button>
            </div>

        </div>    
    `
    div.innerHTML = contenido;

    return div;
}

const contenedor_Productos = document.querySelector("[data-product-container]");

productosServices
    .listaProducto()
        .then( (data) => {
            data.forEach( ({id, imagen, nombre, precio}) => {
                const nuevaCardProduct = crearNuevaCardProduct(id, imagen, nombre, precio);
                contenedor_Productos.appendChild(nuevaCardProduct);
            });
        }).catch((error) => alert("Ocurrió un error"));