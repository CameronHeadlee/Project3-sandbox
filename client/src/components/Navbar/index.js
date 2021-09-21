import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../../pages/Signup';
import LoginForm from '../../pages/Login';

import Auth from '../../utils/auth';

const styles = {
  headingStyle: {
    fontSize: 30,
  },
  titleStyle: {
    color: '#ffdd00'
  }
}
const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            <div style={styles.headingStyle}>
            <div style={styles.titleStyle}>
            TheL.P.U.
            </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>
              <div style={styles.headingStyle}>
                Home
              </div>
              </Nav.Link>
              
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/Closets'>
                  <div style={styles.headingStyle}>
                    Closets
                  </div>
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>
                  <div style={styles.headingStyle}>
                    Logout
                  </div>
                    </Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>
                  <div style={styles.headingStyle}>
                  Login/Sign Up
                  </div>
                  </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='Login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='Signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='Login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='Signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;