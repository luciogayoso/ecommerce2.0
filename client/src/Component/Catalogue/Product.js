import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({product}) => {
    return (

        <div className="card" style={{width: "18rem"}}>
            <img src={product.thumbnail} className="card-img-top" alt="esta es una imagen" />
                <div className="card-body">
                    <p className="card-text">{product.title}</p>
                    <p className="card-text">{product.price}</p>
                    <button>Ver mas</button>
                </div>
        </div>
    
    );
}

export default Product;