import React, { useEffect } from 'react';
import Card from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { paginacion } from '../../actions/action'

const Catalogue = () => {

    const products1 = useSelector(state => state.products);
    console.log(products1)
    const paginacion1 = useSelector(state => state.paginacion);
    const antes = useSelector(state => state.antes);
    const despues = useSelector(state => state.despues);

    let i = Math.round(products1.length / 30);
    let j = 0;
    let pageNum = 1;
    let liPage = [];

    while (j < i) {
        liPage[liPage.length] = <li key={j} className="page-item"><a className="page-link" id={pageNum} onClick={(e) => pagina(e)} href="#!">{pageNum}</a></li>;
        pageNum++;
        j++;
    }

    const pagina = (e) => {
        const j1 = e.target.id;
        dispatch(paginacion(products1, j1, i));
    }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(paginacion(products1, 1, i))
    }, [products1,dispatch,i])

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
                {
                    !paginacion1 ? <h3 className='mt-3'>Nececita buscar algun producto</h3>
                    :
                    paginacion1.map(product => {
                        return <Card key={product.id} product={product} />
                    })
                
                }
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#!" aria-label="Previous" onClick={() => dispatch(paginacion(products1,antes, i))}>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {
                        liPage.map(li => {
                            return li
                        })
                    }
                    <li className="page-item">
                        <a className="page-link" href="#!" aria-label="Next" onClick={() => dispatch(paginacion(products1,despues, i))}>
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Catalogue;