import axios from 'axios';
export const BUSCAR_PRODUCTOIDS = "BUSCAR_PRODUCTOIDS";

   
export function mostrarBusqueda(search){
    return function(dispatch){
        return axios.get(`http://localhost:3000/search/?query=${search}`)

                .then(json=>{   
                    dispatch({
                        type:BUSCAR_PRODUCTOIDS,
                        producto:json
                    })
                })
                .catch(err=>{console.log(err)})

    }
}
