import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { detalleProduct } from '../../actions/action';
import { Button, Card } from 'react-bootstrap';

const Product = ({ product }) => {

    const dispatch = useDispatch();

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
                <Card.Text>
                    {product.title}
                    ${product.price}
                    Condición:{product.condition}
                </Card.Text>
                <Link to={'/detalle'}><Button variant="primary" type="button" onClick={() => dispatch(detalleProduct(product))}>Ver mas</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default Product;