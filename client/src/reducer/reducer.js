import { BUSCAR_PRODUCTOIDS } from "../actions/action";

const initalStore ={
    products:[]
}

export default (state=initalStore, actions) =>{
    switch(actions.type){
        
        case BUSCAR_PRODUCTOIDS:{
            return{
               products:actions.producto.data
            }
        }
        

        default: return state
    }
}