import React, { useEffect } from 'react';
import Card from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './catalogue.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { paginacion } from '../../actions/action'

const Catalogue = () => {

    const products1 = useSelector(state => state.products);
    const products2 = useSelector(state => state.products1);
    const filtrado = useSelector(state => state.filtrado);
    const paginacion1 = useSelector(state => state.paginacion);
    //const paginacion2 = useSelector(state => state.paginacion1);
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

        if (filtrado === true) {
           return dispatch(paginacion(products2, 1, i))
        }

        dispatch(paginacion(products1, j1, i));
    }

    const dispatch = useDispatch()
    useEffect(() => {

        console.log(filtrado)
        if (filtrado === true) {
            dispatch(paginacion(products2, 1, i))
        }else {
            dispatch(paginacion(products1, 1, i))
        }

    }, [products1,dispatch,i,filtrado,products2])

    return (
        <>
            <div className={styles.catalogue}>
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