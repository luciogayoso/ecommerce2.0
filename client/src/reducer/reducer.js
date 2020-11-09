import { BUSCAR_PRODUCTOIDS, DETALLE_PRODUCTO, PAGINACION,ORDENA_DESENDETE,ORDENA_ASCENDETE,FILTRAR_USADO,FILTRAR_NUEVO } from "../actions/action";

const initalStore = {
    products: [],
    products1: [],
    detalle_producto: [],
    paginacion: [],
    paginaActual: 0,
    antes: 0,
    despues: 0, 
    filtrado: false
}

const reducer = (state = initalStore, actions) => {
    switch (actions.type) {

        case BUSCAR_PRODUCTOIDS: {
            return {
                ...state,
                products: actions.producto.data,
                products1: actions.producto.data
            }
        }

        case DETALLE_PRODUCTO: {
            return {
                ...state,
                detalle_producto: actions.products

            }
        }

        case PAGINACION: {

            let inicio;
            let fin;

            if (actions.page > 0 && actions.page <= actions.limit) {
                inicio = 30 * (actions.page - 1);
                fin = 30 * actions.page;
            }else if (actions.page <= 0){
                inicio = 0;
                fin = 30;
            }else if (actions.page > actions.limit){
                inicio = 30 * (actions.limit - 1);
                fin = 30 * (actions.limit);
            }
            
            return {
                ...state,
                paginacion:  actions.products.slice(inicio, fin),
                paginaActual: actions.page,
                antes: actions.page === 0 ? 1 : actions.page - 1,
                despues: actions.page === 3 ? 2 : actions.page - 1 + 2
            }
        }

        case ORDENA_DESENDETE: {

            return {
                ...state,
                paginacion: actions.products.sort((a,b) =>{
                
                    if (b.price > a.price) {
                        return 1;
                    }
                    if (a.price > b.price) {
                        return -1;
                    }
                    return 0;
                }).slice(0,30)
            }
        }
        

        case ORDENA_ASCENDETE: {
        
            return {
                ...state,
                paginacion: actions.products.sort((a,b)=> {
                    if (a.price > b.price) {
                        return 1;
                      }
                    if (a.price < b.price) {
                        return -1;
                      }
                        return 0;
                }).slice(0,30)
            }
        }

        case FILTRAR_USADO: {
            return {
                ...state,
                products: actions.products.filter(producto => producto.condition === 'used'),
                filtrado:true
            }
        }

        case FILTRAR_NUEVO: {
            return {
                ...state,
                products: actions.products.filter(producto => producto.condition === 'new'),
                filtrado:true
            }
        }


        default: return state
    }
}

export default reducer;