import React, { useState } from 'react';
import styles from './Search.module.css';
import { ImSearch } from "react-icons/im";
import {Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { mostrarBusqueda } from '../../actions/action';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {

    const dispatch = useDispatch();
    const [search,setSearch] = useState();

    const handlerSerch = (e) => {
         let value = e.target.value;
         setSearch(value);
    }

    const buscador = () => {
        console.log(search)
        if (search !== '') {
            dispatch(mostrarBusqueda(search));
        }else {
        //dispatch(mostrarProductos());
        }
    }

    return (

        <div className={styles.container}>
            <Button type="submit" className={styles.boton} variant="light" onClick={buscador}><ImSearch/></Button>
            <input className={styles.buscador} type="text" placeholder="Buscar productos"
                onChange={handlerSerch} />
        </div>

    )
}

export default Search;