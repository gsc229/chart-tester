import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {Link, useLocation} from 'react-router-dom'

const Menu = ({logout, clearCurrentRoutine}) => {
  
  const pathname = useLocation().pathname
  
  function isActivePath(path){
   return path === pathname || (path === 'dropdown' && (pathname === '/my-routines' || pathname === '/create-routine' || pathname === '/find-routine'))
  }

  return (
    <div className="menu main-menu" style={{marginBottom: '56px'}}>
      <Navbar fixed='top' expand="lg"  variant='dark' bg='dark'/* bg="dark" variant="dark" */>
        <Navbar.Brand as={Link} to="/">
          Routines
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
        <Nav>
          <Nav.Link active={isActivePath('/line-chart')} as={Link} to='/line-chart'>Line Chart</Nav.Link>
          <NavDropdown active={isActivePath('dropdown')} title='Manage' aria-labelledby="navbarDropdown">
            <NavDropdown.Item active={isActivePath('/manage-routines')} as={Link} to="/manage-routines">Saved Routines</NavDropdown.Item>
            <NavDropdown.Item active={isActivePath('/create-routine')} as={Link} to="/create-routine">New Routine</NavDropdown.Item>
            {/* <NavDropdown.Item active={isActivePath('/find-routine')} as={Link} to="/find-routine">Find Routines</NavDropdown.Item> */}
            <NavDropdown.Item><hr className="dropdown-divider" /></NavDropdown.Item>
            <NavDropdown.Item active={isActivePath('/manage-exercises')} as={Link} to="/manage-exercises">My Exercises</NavDropdown.Item>
            <NavDropdown.Item active={isActivePath('/browse-exercises')} as={Link} to="/browse-exercises">Browse Exercises</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} className="nav-Nav.link" to="/">Log Out</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}


export default Menu
