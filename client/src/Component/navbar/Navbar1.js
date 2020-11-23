import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Search/Search';
import styles from './navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, Navbar, Form } from 'react-bootstrap'
import { orenarAendente, orenarDesendete, filtrarUsado, filtarNuevo} from '../../actions/action'
import { Link } from 'react-router-dom';


const NavBar1 = () => {

    const products1 = useSelector(state => state.products1);
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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand style={{color:'white'}} className={styles.title} href="#!">Mercado LGf</Navbar.Brand>
            <Form inline><Search /></Form>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#!"><Link style={{textDecoration:"none",color:"white"}} to={'/filtro'} onClick={() => dispatch(orenarAendente(products1))}>Precio ascendete</Link></Nav.Link>
                    <Nav.Link href="#!"><Link style={{textDecoration:"none",color:"white"}} to={'/filtro'} onClick={()=> dispatch(orenarDesendete(products1))}>Precio descendente</Link></Nav.Link>
                    <Nav.Link href="#!"><Link style={{textDecoration:"none",color:"white"}} to={'/filtro'} onClick={()=> dispatch(filtarNuevo(products1))}>Condicion nuevo</Link></Nav.Link>
                    <Nav.Link href="#!"><Link style={{textDecoration:"none",color:"white"}} to={'/filtro'} onClick={()=>dispatch(filtrarUsado(products1))}>Condicion usado</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <button onClick={topFunction} id="myBtn" className={styles.myBtn} title="Go to top"><i className="fas fa-chevron-up"></i></button>
        </Navbar>

        
    )
}

export default NavBar1;