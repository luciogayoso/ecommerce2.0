import React, { useEffect } from 'react';
import Card from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { paginacion } from '../../actions/action'

const Catalogue = () => {
    
    //const [paginasLi, setPaginaLi] = useState([]);
    const products1 = useSelector(state => state.products );
    const paginacion1 = useSelector(state => state.paginacion );

    const i = Math.round(products1.length / 30);
    let j = 1;
    let liPage = [];

    while (j <= i) {    
            liPage[liPage.length] = <li class="page-item"><a class="page-link" id={j} onClick={(e) => pagina(e)} href="#!">{j}</a></li>;
        j++;
    }

    const pagina = (e) => {
        const j1 = e.target.id
        console.log(j1)
        dispatch(paginacion(products1,j1,i));
    }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(paginacion(products1,1,0))
    },[products1])

    return (
        <>  
    <div style={{display:'flex',flexWrap: 'wrap',justifyContent:'space-around',alignItems: 'center'}}>
        {
        paginacion1 ? paginacion1.map(product => {
            return <Card key={product.id} product={product} />
        })
        : 
        <h3 className='mt-3'>Nececita buscar algun producto</h3>
        }
    </div>
     <nav aria-label="Page navigation example">
     <ul class="pagination">
            <li class="page-item">
         <a class="page-link" href="#!" aria-label="Previous">
           <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
         </a>
       </li>
       {
          liPage.map(li => {
              return li
          })
       }
       <li class="page-item">
         <a class="page-link" href="#!" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
   </nav>
</>
    );
}
 
export default Catalogue;