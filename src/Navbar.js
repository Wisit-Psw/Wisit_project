import React,{Component} from 'react'
import {Navbar,Container ,Nav,Dropdown  } from 'react-bootstrap';
import {Link} from 'react-router-dom';

var brandstyles ={
    color:'#61dafb',
    fontSize: '120%',
    fontFamily:'Bakbak One',
    // paddingTop: '50px'
};
const divStyle ={
    display: 'flex',
    alignItems: 'center'
};
class NavBar extends Component{
    render() {
  return (
    <Navbar bg="dark"  sticky="top" expand="md">
        <Container>
            <Navbar.Brand bg="dark" variant="dark" href="/" > 
            
            <div style={divStyle}>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="React" height="20"/>
                <babel style={brandstyles} >Wisit Numerical Project</babel>
            </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse>
                <Nav>
                <Dropdown className="Dropdownbtn">
                <Dropdown.Toggle  variant="dark" id="dropdown-basic">
                    Root of equation
                </Dropdown.Toggle>
                <Dropdown.Menu>
                        <Nav.Link as={Link} to="/Bisection">Bisection</Nav.Link>
                        <Nav.Link as={Link} to="/FalsePosition">FalsePosition</Nav.Link>
                        <Nav.Link as={Link} to="/Onepoint">Onepoint Iteration</Nav.Link>
                        <Nav.Link as={Link} to="/Newtonraphson">Newtonraphson</Nav.Link>
                        <Nav.Link as={Link} to="/SecantMethod">Secant Method</Nav.Link>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="Dropdownbtn">
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Linear algebra
                </Dropdown.Toggle>
                <Dropdown.Menu>
                        <Nav.Link as={Link} to="/CramersRules">Cramers Rules</Nav.Link>
                        <Nav.Link as={Link} to="/GaussElm">Gauss Elimination</Nav.Link>
                        <Nav.Link as={Link} to="/Matrixinvertion">Matrixinvertion</Nav.Link>
                        <Nav.Link as={Link} to="/Jacobi">Jacobi Iteration</Nav.Link>
                        <Nav.Link as={Link} to="/GaussSeidel">Gauss Seidel</Nav.Link>
                        <Nav.Link as={Link} to="/Conjugate">Conjugate Gradient</Nav.Link>
                        
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="Dropdownbtn">
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Interporation
                </Dropdown.Toggle>
                <Dropdown.Menu>
                        <Nav.Link as={Link} to="/Newton_Div">Newton Divided</Nav.Link>
                        <Nav.Link as={Link} to="/Lagrange">Lagrange Interporation</Nav.Link>
                        
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="Dropdownbtn">
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Extraporation
                </Dropdown.Toggle>
                <Dropdown.Menu>
                        
                </Dropdown.Menu>
            </Dropdown>
                </Nav>
            </Navbar.Collapse>
            
            
        </Container>
    </Navbar>
  );}
}
export default NavBar;