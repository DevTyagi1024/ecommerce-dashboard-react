import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Header = function () {

    const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate(); // ✅ correct

    function logout() {
        localStorage.clear();

        navigate("/Register");
    }


    return (
        <header className="header">

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>

                    <div className="header_logo">
                        <Link to="/" className="brand"> <img src="/images/Logo.avif" alt="Dev Tyagi Logo" className="logo" /></Link>
                    </div>


                    <Nav
                        className="nav_wrap"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        {
                            localStorage.getItem('user') ?

                                <>                             <NavLink to="/UpdateProduct">Update Product</NavLink>
                                    <NavLink to="/AddProduct">Add Product</NavLink>
                                    <NavLink to="/productlist">Product List</NavLink>
                                    <NavLink to="/UserList">Users List</NavLink>
                                    <NavLink to="/Search">Search</NavLink>
                                </>

                                : <>
                                    <NavLink to="/Login">Login</NavLink>
                                    <NavLink to="/Register">Register</NavLink>

                                </>
                        }


                    </Nav>
                    {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}



                    {
                        localStorage.getItem('user') ?

                            <>                             <Nav>
                                <NavDropdown title={user && user.name}>

                                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            </Nav>
                            </>

                            : <>


                            </>
                    }



                </Container>
            </Navbar>
        </header>

    )
}

export default Header;