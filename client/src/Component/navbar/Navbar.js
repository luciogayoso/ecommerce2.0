import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Search/Search';
import styles from './navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap'
import { orenarAendente, orenarDesendete } from '../../actions/action'
import { Link } from 'react-router-dom';


const NavBar = () => {

    const products1 = useSelector(state => state.products);
    const dispatch = useDispatch();

    document.addEventListener("DOMContentLoaded", function () {
        let mybutton = document.getElementById("myBtn");

        
        window.onscroll = function () { scrollFunction() };


        function scrollFunction() {
            
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
        
    });
   
    function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    }



    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3 className="navbar-brand">Mercado LGf</h3>
            <div>
                <ul style={{display:'flex',listStyle:'none'}}>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                                Orenar
                        </Dropdown.Toggle>

                            <Dropdown.Menu>
                                
                                    <Dropdown.Item href="#!"><Link to={'/catalogue'} onClick={() => dispatch(orenarAendente(products1))}>Precio ascendete</Link></Dropdown.Item>
                                    <Dropdown.Item href="#!"><Link to={'/catalogue'} onClick={()=> dispatch(orenarDesendete(products1))}>Precio descendente</Link></Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary ml-2 mr-2" id="dropdown-basic">
                                Filtrar
                        </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-2">Condicion nuevo</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">condicion usado</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <Search />
                    </li>
                </ul>
            </div>
            <button onClick={topFunction} id="myBtn" className={styles.myBtn} title="Go to top"><i className="fas fa-chevron-up"></i></button>
        </nav>
    )
}

export default NavBar;