import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Search/Search';
import { Dropdown } from 'react-bootstrap'

const NavBar = () => {
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
                                <Dropdown.Item href="#/action-2">Precio ascendete</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Precio descendente</Dropdown.Item>
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
        </nav>
    );
}

export default NavBar;