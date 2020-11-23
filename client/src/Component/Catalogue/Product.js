import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './catalogue.module.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { detalleProduct } from '../../actions/action';
import { Button } from 'react-bootstrap';

const Product = ({ product }) => {

    const dispatch = useDispatch();

    return (

        <div className={styles.contaliner}>
            <div className={styles.card}>
                <img src={product.thumbnail} className={styles.cardImg} alt="soy una imagen" />
            </div>
            <div className={styles.cardText}>
                <p>{product.title}</p>
                <p>${product.price}</p>
                <Link to={'/detalle'}><Button variant="primary" type="button" onClick={() => dispatch(detalleProduct(product))}>Ver mas</Button></Link>
            </div>
        </div>
    );
}

export default Product;