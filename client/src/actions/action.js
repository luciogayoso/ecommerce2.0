import axios from 'axios';
export const BUSCAR_PRODUCTOIDS = "BUSCAR_PRODUCTOIDS";
export const DETALLE_PRODUCTO = "DETALLE_PRODUCTO";
export const PAGINACION = 'PAGINACION';
export const ORDENA_DESENDETE = 'ORDENA_DESENDETE';
export const ORDENA_ASCENDETE = 'ORDENA_ASCENDETE';

export function mostrarBusqueda(search){
    return function(dispatch){
        return axios.get(`http://localhost:3000/search?query=${search}`)

                .then(json=>{   
                    dispatch({
                        type:BUSCAR_PRODUCTOIDS,
                        producto:json
                    })
                })
                .catch(err=>{console.log(err)})

    }
}

export function detalleProduct(products) {
    return {
        type: DETALLE_PRODUCTO,
        products: products
    }
}

export function paginacion(products, page,limit) {
    return {
        type: PAGINACION,
        products: products,
        page: page,
        limit: limit,
    }
}

export function orenarDesendete(products) {
    return {
        type: ORDENA_DESENDETE,
        products: products
    }
}

export function orenarAendente(products) {
    return {
        type: ORDENA_ASCENDETE,
        products: products
    }
}