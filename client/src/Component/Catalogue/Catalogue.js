import React from 'react';
import Card from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

const Catalogue = () => {
    
    const products1 = useSelector(state => state.products );
    
    // useEffect(() => {
    //     setProducts(value);
    // },[value])
    return (  
    <div>
        {
        products1 ? products1.map(product => {
            return <Card  product={product} />
        })
        : 
        'Nececita buscar algun producto'
        }
    </div>
    );
}
 
export default Catalogue;