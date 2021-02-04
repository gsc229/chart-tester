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

          <NavDropdown active={isActivePath('dropdown')} title='React Charts' aria-labelledby="navbarDropdown">
            <NavDropdown.Item active={isActivePath('/react-charts-line')} as={Link} to='/react-charts-line'>React Charts - Line</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown active={isActivePath('dropdown')} title='React Charts 2' aria-labelledby="navbarDropdown">
            <NavDropdown.Item active={isActivePath('/manage-routines')} as={Link} to="/manage-routines">Saved Routines</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown active={isActivePath('dropdown')} title='Nivo' aria-labelledby="navbarDropdown">
            <NavDropdown.Item active={isActivePath('/manage-routines')} as={Link} to="/manage-routines">Saved Routines</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown active={isActivePath('dropdown')} title='Biz Charts (Alibaba)' aria-labelledby="navbarDropdown">
            <NavDropdown.Item active={isActivePath('/manage-routines')} as={Link} to="/manage-routines">Saved Routines</NavDropdown.Item>
          </NavDropdown>

          {/* <NavDropdown active={isActivePath('dropdown')} title='Recharts' aria-labelledby="navbarDropdown">
            <NavDropdown.Item active={isActivePath('/manage-routines')} as={Link} to="/manage-routines">Saved Routines</NavDropdown.Item>
          </NavDropdown> */}

        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}


export default Menu
