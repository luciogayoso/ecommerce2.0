import { BUSCAR_PRODUCTOIDS, DETALLE_PRODUCTO, PAGINACION } from "../actions/action";

const initalStore ={
    products:[],
    detalle_producto: [],
    paginacion: []
}

const reducer = (state=initalStore, actions) =>{
    switch(actions.type){
        
        case BUSCAR_PRODUCTOIDS:{
            return{
               products:actions.producto.data
            }
        }

        case DETALLE_PRODUCTO: {
            return {
                ...state,
                detalle_producto: actions.products

            }
        }

        case PAGINACION: {

            let fin = 30 * actions.page;
            let inicio = 0;
            if(actions.page === 1){
                inicio = 30 * (actions.page -1);
            }else {
                inicio = 30 * (actions.page -1);
            }
            if (actions.page !== 1 && actions.page > actions.limit) {
                fin = 0;
                fin = actions.products.length -1;
            }
            console.log(inicio+" "+fin)
            return {
                ...state,
                paginacion: actions.products.slice(inicio,fin)
                
            }
        }
        
        default: return state
    }
}

export default reducer;